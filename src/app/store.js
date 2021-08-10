import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '../features/locations/locationsSlice';

export default configureStore({
  reducer: {
    locations: locationsReducer
  },
});