import express from 'express'
import cors from "cors";

import {sequelize} from "../sequelize/sequelize.js";
import {EventSequelizeRepository} from "../sequelize/repository.js";
import {EventApp} from "../../application/eventApp.js";
import {eventHandler} from "./handler/eventHandler.js";
import {serverHandler} from "./handler/serverHandler.js";

export const createApp = async () => {

  try {
    await sequelize.authenticate()
    console.log('connection has been established successfully')
  } catch (e) {
    console.error('error of connection', e)
    throw e
  }

  const repository = new EventSequelizeRepository();
  const eventApplication = new EventApp(repository);

  const app = express();
  app.use( cors() );
  app.use( express.json() );

  const eHandler = eventHandler(eventApplication)
  const sHandler = serverHandler()

  app.get('/events', eHandler.listEvents);
  app.get('/events/:id', eHandler.getEvent);
  app.post('/events', eHandler.createEvent);
  app.put('/events/:id', eHandler.updateEvent);
  app.delete('/events/:id', eHandler.deleteEvent);
  app.get('/events/users/:userId', eHandler.listEventsByUserId);

  app.use(sHandler.notFound)
  app.use(sHandler.err)

  return app
}
