import { createSlice } from '@reduxjs/toolkit';  

const contactsSlice = createSlice({  
  name: 'contacts',  
  initialState: [],  
  reducers: {  
    addContact(state, action) {  
      state.push(action.payload); // добавляем контакт в состояние  
    },  
    removeContact(state, action) {  
      return state.filter(contact => contact.id !== action.payload.id); // удаляем контакт по ID  
    },  
    updateContact(state, action) {  
      const index = state.findIndex(contact => contact.id === action.payload.id);  
      if (index !== -1) {  
        state[index] = action.payload; // обновляем контакт  
      }  
    },  
  },  
});  

// экспортируем действия  
export const { addContact, removeContact, updateContact } = contactsSlice.actions;  

// экспортируем редюсер  
export default contactsSlice.reducer;