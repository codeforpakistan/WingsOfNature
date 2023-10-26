FROM node:18-alpine AS builder

RUN corepack enable

WORKDIR /gallery

COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm run build 

FROM node:18-alpine

COPY --from=builder /gallery/.output /gallery/.output

WORKDIR /gallery

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]