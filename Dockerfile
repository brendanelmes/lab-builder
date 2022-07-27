FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/lab-builder /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]