FROM  node:22-alpine

COPY public/ /courseApi/public/
COPY src/  /courseApi/src/
COPY package.json /courseApi/

WORKDIR /courseApi

RUN npm install 

ENTRYPOINT [ "npm" ,"start"]
