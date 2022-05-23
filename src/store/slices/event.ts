import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEventState } from '../models/IEventState';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import UserService from '../../api/UserService';
import EventService from '../../api/EventService';

const initialState: IEventState = {
  guests: [],
  events: [],
  isLoading: false,
  error: '',
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setGuests: (state, { payload }: PayloadAction<Array<IUser>>) => {
      state.guests = payload;
    },
    setEvents: (state, { payload }: PayloadAction<Array<IEvent>>) => {
      state.events = payload;
    },
    createEvent: (state, { payload }: PayloadAction<IEvent>) => {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as Array<IEvent>;
      json.push(payload);
      localStorage.setItem('events', JSON.stringify(json));
      state.events = json;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGuests.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchGuests.fulfilled, (state, { payload }) => {
      state.guests = payload.data;
      state.isLoading = false;
    })
    builder.addCase(fetchGuests.rejected, (state) => {
      state.guests = [];
      state.isLoading = false;
    })
    builder.addCase(fetchEvents.fulfilled, (state, { payload = [] }) => {
      state.events = payload;
    })
  }
});

const fetchGuests = createAsyncThunk('events/getGuests', async () => await UserService.getUsers());

const fetchEvents = createAsyncThunk('events/getEvents', async (
  { username }: { username: string },
) => await EventService.getEvents(username));

export const eventActions = { ...eventSlice.actions, fetchGuests, fetchEvents };
export const eventReducer =  eventSlice.reducer;
