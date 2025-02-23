
class EventService {

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async getEvents() {
    const response = await this.httpClient.get('/events');
    return response.data;
  }

  async createEvent(eventData) {
    const response = await this.httpClient.post('/events', eventData);
    return response.data;
  }
}

export default EventService
