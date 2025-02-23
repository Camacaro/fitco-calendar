# Usar una imagen de Node.js para construir la aplicación
FROM node:22 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Ejecutar el script de build
RUN npm run build

# Usar una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar los archivos de build al directorio que Nginx usa para los archivos estáticos
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx está sirviendo
EXPOSE 3000

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
