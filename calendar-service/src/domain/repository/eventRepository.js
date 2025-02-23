
// This class is used like class abstract to use in the implementation
export class EventRepository {
  async save(event) {
    throw new Error('Not implemented');
  }

  async findAll() {
    throw new Error('Not implemented');
  }

  async findById(id) {
    throw new Error('Not implemented');
  }

  async update(event) {
    throw new Error('Not implemented');
  }

  async delete(id) {
    throw new Error('Not implemented');
  }

  async findAllByUserId(userId) {
    throw new Error('Not implemented');
  }
}
