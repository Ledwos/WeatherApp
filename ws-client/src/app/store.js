import { configureStore } from '@reduxjs/toolkit';
import wsReducer from '../components/reds/wsSlice';

export default configureStore({
  reducer: {
    ws: wsReducer,
  },
});
