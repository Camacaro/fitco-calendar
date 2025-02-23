
// This class is used like class abstract to use in the implementation
export class EventRepository {
  async save(event) {
    throw new Error('Not implemented');
  }

  async findAll() {
    throw new Error('Not implemented');
  }
}
