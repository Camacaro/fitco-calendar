// This class is used like class abstract to use in the implementation
export class EventApplication {
  constructor(eventRepository) {
    this.eventRepository = eventRepository;
  }

  async createEvent(data) {
    throw new Error('Not implemented');
  }

  async listEvents() {
    throw new Error('Not implemented');
  }

  async getEvent(id) {
    throw new Error('Not implemented');
  }

  async updateEvent(id, data) {
    throw new Error('Not implemented');
  }

  async deleteEvent(id) {
    throw new Error('Not implemented');
  }
}
