# Builder
FROM node:16.15.1-alpine3.15 as builder

WORKDIR /app
COPY . /app

RUN npm ci
RUN npm run build
RUN rm -rf node_modules/
RUN npm install --production

# Distribution
FROM node:16.15.1-alpine3.15

WORKDIR /app

COPY --from=builder --chown=root:root /app/package.json /app/package.json
COPY --from=builder --chown=root:root /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
