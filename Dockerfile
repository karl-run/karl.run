FROM mhart/alpine-node:10.13.0

RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add python && \
    rm -rf /var/cache/apk/*

WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build && mv public /public
