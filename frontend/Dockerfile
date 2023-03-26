FROM node:16-alpine

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN mkdir -p /app/frontend/node_modules
RUN chown node:node /app/frontend/node_modules
RUN npm install
#FROM python:3
#RUN pip install drf-writable-nested
COPY . /app/frontend/

CMD ["npm", "start"]
