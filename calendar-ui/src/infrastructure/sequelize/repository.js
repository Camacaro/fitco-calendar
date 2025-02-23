

import {EventRepository} from "../../domain/repository/eventRepository";
import {Event} from "./event";

// TODO: add custom repository errors
// EventRepository actúa como una clase abstracta que define los métodos que deben implementar los repositorios concretos.
export class EventSequelizeRepository extends EventRepository {

  async save(eventData) {
    return await Event.create(eventData);
  }

  async findAll() {
    return await Event.findAll();
  }

  async findById(id) {
    return await Event.findOne({ where: { uuid: id } })
  }

  async update(eventData) {
    return await Event.update(eventData, { where: { uuid: eventData.uuid } })
  }

  async delete(id) {
    return await Event.destroy({ where: { uuid: id } })
  }
}
