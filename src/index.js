import { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';  
import App from './App';  
import './index.css';  
import { Provider } from 'react-redux';  
import store from './redux/store'; // Исправлено  

const root = createRoot(document.getElementById("root"));  

root.render(  
  <StrictMode>  
    <Provider store={store}> {/* Исправлено */}  
      <App />  
    </Provider>  
  </StrictMode>  
);