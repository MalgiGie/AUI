# use a node image as the base image and name it 'build' for
# later reference
FROM node:18.18-alpine3.18 as build

# set the working directory to /app
WORKDIR /app
# copy the current directory contents into the container at /app
COPY . .
# install dependencies, matching package-lock.json
RUN npm ci
# build the app
RUN npm run build
FROM nginx:1.23.3

ENV API_URL http://localhost:8084/api

EXPOSE 80

COPY --from=build /app/dist/angular-project/browser /usr/share/nginx/html
COPY docker/etc/nginx/templates/ /etc/nginx/templates/
