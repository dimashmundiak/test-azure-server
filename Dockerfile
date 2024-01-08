FROM node:20-alpine
WORKDIR /app

ENV PORT=8080

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i pnpm -g
RUN pnpm install

COPY . .
RUN pnpm build

EXPOSE 8080

CMD ["node", "./build/index.js"]