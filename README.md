# fitco-calendar

## Servicios 
### auth-service
* Se encarga de los usuarios y autenticación de esta forma 
éste servicio le puede proporcionar autenticación a cualquier otro. 
* Se usó una arquitectura hexagonal modular con el patron Domain-Driven Design (DDD).
* Se implementó typescript
### calendar-service
* Este servicio ocupa un CRUD para almacenar los eventos de un calendario usando el ORM sequelize con el motor mysql
* Se aplicó también una arquitectura hexagonal "monolítica".
### calendar-bff-service
* Backend for Frontend (BFF), servicio que se comunicará con directamente con la UI para manejar sus solicitudes
* Hace uso de los dos servicios anteriores (auth-service, calendar-service) para garantizar seguridad de comunicación
* También se puede ver como una especie de proxy para trabajar las solicitudes y refinarla hacia los servicios específicos
### calendar-ui
* Es una aplicación que cuenta con login y registro y manejar sus eventos en un calendario.
* Se usa el Redux para manejar el estado global de la app. 

Escogí este diseño de aplicación para demostrar destreza en arquitectura, diseño de patrones y comunicación de microservicios.

### Deuda técnica
* A lo largo del proyecto hay TODO's apropósitos de desarrollos pequeños que no se agregaron por tiempo y avanzar con funcionalidades más grande.
* Pruebas unitarias y de integración.
* Comunicación segura entre el servicio calendar-bff-service y calendar-service/auth-service, a pesar de contar con el jwt que se manda debemos agregar un token con llave pública/privada entre esos servicios de esa forma garantizamos que ningún otro servicio externo al bff pueda consumirlos.
* Se agregó configuración de Docker, pero aún no levanta la orquestación. 

### Librerías usadas 
* bcryptjs 
* cors 
* dotenv 
* express 
* install 
* jsonwebtoken 
* mysql 
* mysql2 
* nodemon 
* npm 
* redis 
* ts 
* uuid
* axios
* sequelize
* @fullcalendar/core 
* @fullcalendar/daygrid 
* @fullcalendar/interaction 
* @fullcalendar/react 
* @fullcalendar/timegrid 
* @reduxjs/toolkit
* react
* sweetalert2
* react-dom 
* react-redux 
* react-router
