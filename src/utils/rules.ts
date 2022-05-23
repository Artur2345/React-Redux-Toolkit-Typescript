import moment, { Moment } from 'moment';
import { Rule } from 'antd/lib/form';

export const rules = {
  required: (message = "Field is required!") => ({
    required: true,
    message,
  }),
  isDateAfter: (message = 'Can`t to create event in past!') => () => ({
    validator(_: Rule, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    }
  })
}
