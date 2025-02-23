
import express from 'express';
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";

function routes(app, authService, eventService) {
  const router = express.Router();

  // Rutas de autenticación
  router.post('/login', authController(authService).login);
  router.post('/register', authController(authService).register);
  router.get('/refresh-token', authController(authService).refreshToken);

  // Rutas de eventos
  router.get('/events/users/:userId', eventController(eventService).listEventsByUser);
  router.get('/events/:id', eventController(eventService).getEventById);
  router.post('/events', eventController(eventService).createEvent);

  app.use('/api', router);
}

export default routes;
