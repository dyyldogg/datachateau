#!/bin/bash
DOMAIN="${domain_name}"
EMAIL="admin@${domain_name}" # You can change this if you want a specific email

# 1. Install Docker & Nginx & Certbot
apt-get update
apt-get install -y docker.io nginx certbot python3-certbot-nginx
systemctl start docker
systemctl enable docker
usermod -aG docker ubuntu

# 2. Setup Nginx Reverse Proxy (HTTP only first)
cat > /etc/nginx/sites-available/default <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Reload Nginx to apply changes
systemctl restart nginx

# 3. Request SSL Certificate (This will auto-update Nginx config)
# We use --non-interactive and --agree-tos for automation
# Note: This might fail if DNS hasn't propagated yet. 
# You might need to run 'certbot --nginx' manually via SSH if it fails here.
certbot --nginx --non-interactive --agree-tos -m $EMAIL -d $DOMAIN

# 4. Setup Auto-Renewal
# Certbot installs a systemd timer automatically, so we are good there.

