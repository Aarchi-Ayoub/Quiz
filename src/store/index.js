import {configureStore} from '@reduxjs/toolkit';
import counterReducer from 'features/counterSlice';
import userReducer from 'features/userSlice';
import questionReducer from 'features/questionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    question: questionReducer,
  },
});
