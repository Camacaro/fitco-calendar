import {v4 as uuidv4} from "uuid";

import {Event} from "../../../domain/models/event.js";
// TODO: standardize response to snake case
export const eventHandler = (eventApplication) => ({
  async createEvent(req, res) {
    try {
      // TODO: Validate request body
      const event = new Event(uuidv4(), req.body.title, req.body.notes, req.body.start_date, req.body.end_date, req.body.user_id)
      await eventApplication.createEvent(event);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async listEvents(req, res) {
    try {
      const events = await eventApplication.listEvents();

      res.json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getEvent(req, res) {
    try {
      const event = await eventApplication.getEvent(req.params.id);
      if (!event) {
        res.status(404).json({ error: 'Event not found' });
      } else {
        res.json(event);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async updateEvent(req, res) {
    try {
      // TODO: Validate request body
      const eventDTO = new Event('', req.body.title, req.body.notes, req.body.start_date, req.body.end_date, '')
      const event = await eventApplication.updateEvent(req.params.id, eventDTO);
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteEvent(req, res) {
    try {
      await eventApplication.deleteEvent(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
})
