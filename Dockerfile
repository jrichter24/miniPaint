FROM node:24-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
# production bundle (per wiki)
RUN npm run build

# ---- run stage ----
FROM nginx:alpine
# copy the entry HTML and built assets
COPY --from=build /usr/src/app/index.html /usr/share/nginx/html/index.html
COPY --from=build /usr/src/app/dist       /usr/share/nginx/html/dist
COPY --from=build /usr/src/app/images       /usr/share/nginx/html/images

EXPOSE 80
#EXPOSE 8080
CMD ["nginx","-g","daemon off;"]