import React from 'react';  
import { jsx as _jsx } from "react/jsx-runtime"; // необходимо для работы React  
import ContactList from '../ContactList/ContactList'; // Исправленный путь  
import ContactsForm from '../ContactsForm/ContactsForm';  
import SearchBox from '../SearchBox/SearchBox';  

const App = () => {  
    return (  
        <div>  
            <h1>Contacts</h1>  
            <SearchBox />  
            <ContactsForm />  
            <ContactList />  
        </div>  
    );  
};  

export default App;