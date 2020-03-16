# base image
FROM node:12.4.0-alpine
MAINTAINER vladov3000@gmail.com

RUN echo "0.1" > /version

# set working directory
WORKDIR /engl320-tests

# add `/engl320-tests/node_modules/.bin` to $PATH
ENV PATH /engl320-tests/node_modules/.bin:$PATH

# install and cache app dependencies
COPY /package.json /engl320-tests/package.json
COPY /src /engl320-tests/src
COPY /public /engl320-tests/public
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm install serve -g --silent
RUN npm run-script build --silent

#website works on port 3000 inside the container
EXPOSE 3000

#code runs when we start container
ENTRYPOINT ["serve" , "-s", "build" ,"-l" ,"3000"]
