import { createSlice } from '@reduxjs/toolkit';  

const initialState = {  
  contacts: {  
    items: [  
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },  
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },  
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },  
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },  
    ],  
  },  
};  

const contactsSlice = createSlice({  
  name: 'contacts',  
  initialState,  
  reducers: {  
    addContact(state, action) {  
      state.contacts.items.push(action.payload); // Додає новий контакт  
    },  
    deleteContact(state, action) {  
      state.contacts.items = state.contacts.items.filter(  
        (contact) => contact.id !== action.payload // Видалення контакту за id  
      );  
    },  
    changeContact(state, action) {  
      // Реалізуйте логіку зміни контакту, якщо потрібно  
    },  
  },  
});  

// Вибірка контактів зі стану  
export const selectContact = (state) => state.contacts.contacts.items;  

// Експорт дій  
export const { addContact, deleteContact, changeContact } = contactsSlice.actions;  

// Експорт редюсера  
export default contactsSlice.reducer;