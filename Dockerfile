FROM node:lts-alpine3.15 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
ADD ./nginx-http/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/agexample .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
