
import express from 'express';
import cors from 'cors';

import routes from './routes.js';
import AuthService from "../../application/authSercive.js";
import EventService from "../../application/eventService.js";
import httpClient from "../httpClient.js";
import config from "../../../config.js";

function createApp() {
  const app = express();

  app.use( cors() )
  app.use(express.json());

  const authService = new AuthService(httpClient(config.servicesConfig.auth.baseUrl))
  const eventService = new EventService(httpClient(config.servicesConfig.event.baseUrl))

  routes(app, authService, eventService);

  return app;
}

export default createApp;
