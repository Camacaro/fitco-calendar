import {EventApplication} from "../domain/application/eventApplication.js";
import {Event} from "../domain/models/event.js";

export class EventApp extends EventApplication {

  constructor(eventRepository) {
    super();
    this.eventRepository = eventRepository
  }

  async createEvent(event) {
    return this.eventRepository.save(event);
  }

  async listEvents() {
    return this.eventRepository.findAll();
  }

  async getEvent(id) {
    return this.eventRepository.findById(id);
  }

  async updateEvent(id, data) {
    const event = await this.eventRepository.findById(id);
    if (!event) {
      throw new Error('Event not found');
    }
    const e = new Event(event.uuid, data.title, data.notes, new Date(data.startDate), new Date(data.endDate), event.userId)
    await this.eventRepository.update(e);
    return Promise.resolve(e)
  }

  async deleteEvent(id) {
    return this.eventRepository.delete(id);
  }

  async listEventsByUserId(userId){
    return this.eventRepository.findAllByUserId(userId);
  }
}
