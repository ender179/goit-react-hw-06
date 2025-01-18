import React from "react";  
import ReactDOM from "react-dom/client";  
import "./index.css";  
import App from "./App.jsx";  
import { Provider } from "react-redux";  
import { PersistGate } from "redux-persist/integration/react";  
import { store, persistor } from "./redux/store.js"; // Переконайтеся, що шлях правильний  
import Loading from "./components/Loading"; // Додайте компонент завантаження  

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>  
    <Provider store={store}>  
      <PersistGate loading={<Loading />} persistor={persistor}>  
        <App />  
      </PersistGate>  
    </Provider>  
  </React.StrictMode>  
);