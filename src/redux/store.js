import { configureStore } from '@reduxjs/toolkit';  
import { persistStore, persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage';  
import contactsReducer from './contactsSlice'; // Исправлено  
import filtersReducer from './filtersSlice';   // Исправлено  

const persistConfig = {  
  key: 'contacts',  
  storage,  
};  

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);  

const store = configureStore({  
  reducer: {  
    contacts: persistedContactsReducer,  
    filters: filtersReducer, // Исправлено  
  },  
});  

export default store; // экспорт по умолчанию  
export const persistor = persistStore(store);