FROM node
COPY . /
CMD node_modules/.bin/ng serve --host 0.0.0.0 --port 4200