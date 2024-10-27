#!/bin/bash

# Navigate to the directory where the repository is located
cd /var/www/html/PortfolioWebsite || exit

# Pull the latest changes from GitHub
sudo git pull

# Restart Apache to apply changes
sudo systemctl restart apache2
