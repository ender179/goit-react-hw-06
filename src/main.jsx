import React, { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';  
import App from './components/App'; // Убедитесь, что путь к App.jsx правильный  
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  
import store, { persistor } from './redux/store'; // Исправлено: импорты store и persistor  

const root = createRoot(document.getElementById("root"));  

root.render(  
  <StrictMode>  
    <Provider store={store}>  
      <PersistGate loading={null} persistor={persistor}>  
        <App />  
      </PersistGate>  
    </Provider>  
  </StrictMode>  
);