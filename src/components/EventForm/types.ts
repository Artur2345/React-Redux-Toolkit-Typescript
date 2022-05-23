import { Moment } from 'moment';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';

export interface EventFormProps {
  guests: Array<IUser>;
  submit: (event: IEvent) => void;
  isClosed: boolean;
}

export type EventFormValues = Omit<IEvent, 'date'> & {
  date: Moment;
}
