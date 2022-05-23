import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';

export interface IEventState {
  guests: Array<IUser>;
  events: Array<IEvent>;
  isLoading: boolean;
  error: string;
}
