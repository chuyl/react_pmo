#!/bin/bash
# init
# scp -r ./build root@aliyun:/var/www/html/erp_app
scp -r ./build/static/js/* root@aliyun:/var/www/html/erp_app/build/static/js/
scp -r ./build/static/css/* root@aliyun:/var/www/html/erp_app/build/static/css/
scp ./build/index.html root@aliyun:/var/www/html/erp_app/build/