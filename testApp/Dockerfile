# Stage 1 : Compile and Build angular codebase

## Use official node image as the base image
FROM node:16.13.0 as build

## Set the working directory
WORKDIR /usr/local/app

## Add the source code to app
COPY ./ /usr/local/app/

## Install all the dependencies
RUN npm install

## Genereate the build of the application
RUN npm run build


# Stage 2 : Serve app with nginx server

## Use official nginx image as the base image
FROM nginx:1.17.1-alpine

## Copy the build output to replace the default nginx contents
COPY --from=build /usr/local/app/dist/testApp /usr/share/nginx/html

## Expose port 80
EXPOSE 80
#COPY /dist/testApp usr/share/nginx/html
