import React from 'react';  
import ContactList from './ContactList/ContactList';  
import ContactsForm from './ContactsForm/ContactsForm';  
import SearchBox from './SearchBox/SearchBox';  
import styles from './App.module.css';  

const App = () => (  
  <div className={styles.container}>  
    <h1>Phonebook</h1>  
    <h2>Contacts</h2>  
    <ContactsForm />  
    <SearchBox />  
    <ContactList />  
  </div>  
);  

export default App;