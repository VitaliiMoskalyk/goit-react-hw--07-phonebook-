import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducer';
import {contactsApi} from '../fetchData/mockApi/mockApi'

const store = configureStore({
  
  reducer: {
    filter:contactsReducer,
      [contactsApi.reducerPath]:contactsApi.reducer,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(contactsApi.middleware)
    // preloadedState:{contacts:[],filter:''}
});

// store.subscribe(() => {
  
//   saveState(
//     store.getState()
//   );
// });


export default store