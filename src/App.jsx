import React from "react";  
import { Provider } from "react-redux";  
import { PersistGate } from "redux-persist/integration/react";  
import { persistStore } from "redux-persist";  
import { store } from './redux/store'; 
import ContactList from "./components/ContactList/ContactList";  
import SearchBox from "./components/SearchBox/SearchBox";  
import ContactForm from "./components/ContactForm/ContactForm";  

const persistor = persistStore(store);  

function App() {  
    return (  
        <Provider store={store}>  
            <PersistGate loading={<Loading />} persistor={persistor}>  
                <div>  
                    <h1>Phonebook</h1>  
                    <ContactForm />  
                    <h2>Contacts</h2>  
                    <SearchBox />  
                    <ContactList />  
                </div>  
            </PersistGate>  
        </Provider>  
    );  
}  

export default App;
