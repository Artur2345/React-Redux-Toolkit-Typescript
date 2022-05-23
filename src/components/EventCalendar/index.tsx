import { FC } from 'react';
import { Calendar } from 'antd';
import { EventCalendarProps } from './types';
import { Moment } from 'moment';
import { formatDate } from '../../utils/date';

const Index: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (date: Moment) => {
    const formattedDate = formatDate(date.toDate());
    // console.log(formattedDate);
    const currentDateEvents = events.filter((event) => event.date === formattedDate)
    return (
      <div>
        {currentDateEvents.map((event) => (
          <div key={event.description}>
            {event.description}
          </div>
        ))}
      </div>
    );
  }
  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
};

export default Index;
