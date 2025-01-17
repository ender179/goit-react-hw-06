import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  </Provider>
);

export default App;