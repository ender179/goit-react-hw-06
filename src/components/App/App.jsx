import React from 'react';  
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';  
import { store, persistor } from '../redux/store';  
import ContactsForm from './ContactsForm/ContactsForm'; // Исправленный импорт  
import ContactList from './ContactList/ContactList';  
import SearchBox from './SearchBox/SearchBox';  
import styles from './App.module.css';  

const App = () => (  
  <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>  
      <div className={styles.container}>  
        <h1>Phonebook</h1>  
        <h2>Contacts</h2>  
        <ContactsForm />  
        <SearchBox />  
        <ContactList />  
      </div>  
    </PersistGate>  
  </Provider>  
);  

export default App;