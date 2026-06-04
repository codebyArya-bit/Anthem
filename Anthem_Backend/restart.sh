sudo systemctl restart gunicorn
sudo systemctl daemon-reload
sudo systemctl restart gunicorn.socket gunicorn.service
sudo systemctl restart gunicorn-anthemgt.com.socket gunicorn-anthemgt.com.service
sudo nginx -t && sudo systemctl restart nginx
sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo systemctl restart redis.service
sudo systemctl start daphne.service

