import { FC } from 'react';
import { Button, Form, Input, Row, Select } from 'antd';
import { rules } from '../../utils/rules';
import { DatePicker } from 'antd/es';
import { EventFormProps, EventFormValues } from './types';
import { formatDate } from '../../utils/date';
import { useTypedSelector } from '../../hooks';

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const { user } = useTypedSelector(state => state.auth);

  const submitForm = (values: EventFormValues) => {
    submit({ ...values, date: formatDate(values.date.toDate()), author: user.username });
  }

  return (
    <Form
      onFinish={(values) => submitForm(values)}
    >
      <Form.Item
        label="Event Description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Event Date"
        name="date"
        rules={[rules.required(), rules.isDateAfter()]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Select Guest"
        name="guest"
        rules={[rules.required()]}
      >
        <Select>
          {guests.map((guest) => (
            <Select.Option
              value={guest.username}
              key={guest.username}
            >
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

export default EventForm;
