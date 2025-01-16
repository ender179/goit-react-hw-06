import { configureStore } from '@reduxjs/toolkit';  
import contactsSlice from './contactsSlice';  
import filterReducer from './filtersSlice';  

const store = configureStore({  
  reducer: {  
    contacts: contactsReducer, // используем `contacts` как ключ  
    filter: filterReducer, // используем `filter` как ключ  
  },  
});  

export default store;