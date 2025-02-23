
import express from 'express';
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";

function routes(app, authService, eventService) {
  const router = express.Router();

  // Rutas de autenticación
  router.post('/login', authController(authService).login);

  // Rutas de eventos
  router.get('/events', eventController(eventService).listEvents);
  router.post('/events', eventController(eventService).createEvent);

  app.use('/api', router);
}

export default routes;
