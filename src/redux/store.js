import { configureStore } from '@reduxjs/toolkit';  
import contactsReducer from './contactsSlice';  
import filterReducer from './filtersSlice';  

const store = configureStore({  
    reducer: {  
        contacts: contactsReducer, // используя `contacts` как ключ  
        filter: filterReducer,       // используя `filter` как ключ  
    },  
});  

export default store;