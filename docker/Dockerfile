# base image
FROM node:12.2.0-alpine
MAINTAINER vladov3000@gmail.com

RUN echo "0.1" > /version

# set working directory
WORKDIR /engl320-tests

# add `/engl320-tests/node_modules/.bin` to $PATH
ENV PATH /engl320-tests/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /engl320-tests/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

#website works on port 3000 inside the container
EXPOSE 3000

#code runs when we start container
ENTRYPOINT ["npm", "run", "build"]
ENTRYPOINT ["serve", "-s", "build", "-l", "4000"]
