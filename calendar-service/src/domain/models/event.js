
export class Event {
  constructor(uuid, title, notes, startDate, endDate, userId) {
    this.uuid = uuid;
    this.title = title;
    this.notes = notes;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
  }
}
