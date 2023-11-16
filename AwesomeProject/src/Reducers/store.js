import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './TasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});


