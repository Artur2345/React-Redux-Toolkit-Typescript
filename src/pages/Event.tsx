import { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import { EventCalendar } from '../components';
import EventForm from '../components/EventForm';
import { useActions, useTypedSelector } from '../hooks';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents({ username: user.username });
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(!modalVisible)}
        >Add Event</Button>
      </Row>
      <Modal
        title="Add Event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(!modalVisible)}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
          isClosed={modalVisible}
        />
      </Modal>
    </Layout>
  );
}

export default Event;
