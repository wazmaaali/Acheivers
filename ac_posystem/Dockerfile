# pull official base image
#FROM node:12.18.1

# set working directory
#WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#COPY package.json ./
#COPY package-lock.json ./

#RUN npm install

# add app
#COPY . ./

# start app
#CMD [ "node", "server.js" ]   

FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node app
EXPOSE 3000