import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";  
import React from 'react';  
import ContactList from '../ContactList/ContactList';  
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