
import express from 'express';
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";

function routes(app, authService, eventService) {
  const router = express.Router();

  // Rutas de autenticación
  router.post('/login', authController.login(authService));

  // Rutas de eventos
  router.get('/events', eventController.listEvents(eventService));
  router.post('/events', eventController.createEvent(eventService));

  app.use('/api', router);
}

export default routes;
