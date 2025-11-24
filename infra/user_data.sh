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
# We add a simple retry mechanism and a fallback script
MAX_ATTEMPTS=5
for i in $(seq 1 $MAX_ATTEMPTS); do
    if certbot --nginx --non-interactive --agree-tos -m $EMAIL -d $DOMAIN; then
        echo "Certificate obtained successfully."
        break
    fi
    echo "Certbot attempt $i failed. Waiting 30 seconds..."
    sleep 30
done

# If certbot still failed (e.g. DNS not propagated), create a manual setup script
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    echo "Certbot failed after $MAX_ATTEMPTS attempts. Creating manual setup script."
    cat > /home/ubuntu/setup_ssl.sh <<EOF
#!/bin/bash
echo "Attempting to request SSL certificate for $DOMAIN..."
sudo certbot --nginx --non-interactive --agree-tos -m $EMAIL -d $DOMAIN
EOF
    chmod +x /home/ubuntu/setup_ssl.sh
    chown ubuntu:ubuntu /home/ubuntu/setup_ssl.sh
fi

# 4. Setup Auto-Renewal
# Certbot installs a systemd timer automatically, so we are good there.

