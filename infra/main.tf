terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t3.micro"
}

variable "domain_name" {
  description = "The domain name for the website"
  type        = string
  default     = "example.com"
}

# Key Pair
resource "tls_private_key" "pk" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "kp" {
  key_name   = "vindium-key"
  public_key = tls_private_key.pk.public_key_openssh
}

# Security Group
resource "aws_security_group" "web_sg" {
  name        = "vindium-web-sg"
  description = "Allow SSH and HTTP/HTTPS traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# AMI (Ubuntu 22.04)
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

# EC2 Instance
resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  key_name      = aws_key_pair.kp.key_name

  vpc_security_group_ids = [aws_security_group.web_sg.id]

  user_data = templatefile("${path.module}/user_data.sh", {
    domain_name = var.domain_name
  })

  tags = {
    Name = "VindiumSite"
  }
}

# Elastic IP
resource "aws_eip" "lb" {
  instance = aws_instance.web.id
  domain   = "vpc"
}

# Output
output "instance_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_eip.lb.public_ip
}

output "private_key" {
  description = "Private key for SSH access"
  value       = tls_private_key.pk.private_key_pem
  sensitive   = true
}

