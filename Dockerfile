FROM node:latest
WORKDIR /app
COPY . .
ENV PAYMENTS_API_TOKEN=pk_live_secret_in_image_layer_12345
RUN npm install
COPY setup-dev.sh /app/setup-dev.sh
EXPOSE 3000
CMD ["npm", "start"]
