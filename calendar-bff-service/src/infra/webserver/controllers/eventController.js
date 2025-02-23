
const listEventsByUser = async (eventService, req, res) => {
  try {
    const events = await eventService.getEventsByUserId(req.params.userId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createEvent = async (eventService, req, res) =>  {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getEventById = async (eventService, req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const eventController = (eventService) => ({
  listEventsByUser: async (req, res) => listEventsByUser(eventService, req, res),
  createEvent: async (req, res) => createEvent(eventService, req, res),
  getEventById: async (req, res) => getEventById(eventService, req, res),
});


export default eventController;
