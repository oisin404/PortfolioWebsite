#!/bin/bash

cd /var/www/html/PortfolioWebsite || exit

sudo git pull

sudo systemctl restart apache2
