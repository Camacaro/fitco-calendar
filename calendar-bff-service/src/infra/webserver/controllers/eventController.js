
const listEvents = async (eventService, req, res) => {
  try {
    const events = await eventService.getEvents();
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

const eventController = (eventService) => ({
  listEvents: async (req, res) => listEvents(eventService, req, res),
  createEvent: async (req, res) => createEvent(eventService, req, res),
});


export default eventController;
