
import express from 'express';
import authController from "./controllers/authController.js";
import eventController from "./controllers/eventController.js";
import authMiddleware from "./middlewares/authMiddleware.js";

function routes(app, authService, eventService) {
  const router = express.Router();
  const eventCont = eventController(eventService)
  const authCont = authController(authService)
  const authMidd = authMiddleware(authService)

  // Rutas de autenticación
  router.post('/login', authCont.login);
  router.post('/register', authCont.register);
  router.get('/refresh-token', authCont.refreshToken);

  // Rutas de eventos
  router.get('/events/users/:userId', authMidd.verifyToken, eventCont.listEventsByUser);
  router.get('/events/:id', authMidd.verifyToken, eventCont.getEventById);
  router.post('/events', authMidd.verifyToken, eventCont.createEvent);

  app.use('/api', router);
}

export default routes;
