import { IEvent } from '../models/IEvent';

export default class EventService {
  static async getEvents(username = ''): Promise<Array<IEvent>> {
    try {
      const events = JSON.parse(localStorage.getItem('events') || '[]') as Array<IEvent>;
      return events.filter((event) => event.author === username || event.guest === username);
    } catch (err) {
      return [];
    }
  }
}
