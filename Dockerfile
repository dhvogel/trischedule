# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# cp app source code
COPY public/ /app/public
COPY src/    /app/src

# install dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]