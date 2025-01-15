import { createSlice } from '@reduxjs/toolkit';  

const contactSlice = createSlice({  
    name: 'contacts',  
    initialState: [],  
    reducers: {  
        addContact(state, action) {  
            state.push(action.payload); // Добавляем контакт в состояние  
        },  
        removeContact(state, action) {  
            return state.filter(contact => contact.id !== action.payload.id); // Удаляем контакт по ID  
        },  
        updateContact(state, action) {  
            const index = state.findIndex(contact => contact.id === action.payload.id);  
            if (index !== -1) {  
                state[index] = action.payload; // Обновляем контакт  
            }  
        },  
    },  
});  

// Экспортируем действия  
export const { addContact, removeContact, updateContact } = contactSlice.actions;  

// Экспортируем редюсер  
export default contactSlice.reducer;