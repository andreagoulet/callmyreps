FROM node:6.9
WORKDIR /app
COPY package.json package.json
COPY config/ config/
COPY public/ public/
COPY src/ src/
ENV PORT '3030'
RUN npm install
CMD ["node", "start"]