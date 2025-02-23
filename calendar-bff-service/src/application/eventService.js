
class EventService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async getEventsByUserId(userId) {
    const response = await this.httpClient.get(`/events/users/${userId}`);
    return response.data;
  }

  async createEvent(eventData) {
    const response = await this.httpClient.post('/events', eventData);
    return response.data;
  }

  async getEventById(eventId) {
    const response = await this.httpClient.get(`/events/${eventId}`);
    return response.data;
  }
}

export default EventService
