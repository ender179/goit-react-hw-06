import { configureStore } from "@reduxjs/toolkit";  
import {  
  persistStore,  
  persistReducer,  
  FLUSH,  
  REHYDRATE,  
  PAUSE,  
  PERSIST,  
  PURGE,  
  REGISTER,  
} from "redux-persist";  
import storage from "redux-persist/lib/storage";  
import contactsReducer from "./contactsSlice";  
import filtersReducer from "./filtersSlice";  

// Конфигурация для хранения  
const persistConfig = {  
  key: "root", // основной ключ для хранения  
  storage, // используем localStorage  
};  

// Создаем корневой редьюсер  
const rootReducer = {  
  contacts: contactsReducer,  
  filters: filtersReducer,  
};  

// Создаем персистированный редьюсер  
const persistedReducer = persistReducer(persistConfig, rootReducer);  

// Настройка хранилища Redux с учетом персистенции  
export const store = configureStore({  
  reducer: persistedReducer,  
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({  
      serializableCheck: {  
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],  
      },  
    }),  
});  

// Создаем и экспортируем персистор  
export const persistor = persistStore(store);