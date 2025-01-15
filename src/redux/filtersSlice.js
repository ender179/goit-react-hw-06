import { createSlice } from '@reduxjs/toolkit';  

const filtersSlice = createSlice({  
    name: 'filter',  
    initialState: '',  
    reducers: {  
        setFilter(state, action) {  
            return action.payload; // Устанавливаем состояние фильтра  
        },  
    },  
});  

// Экспортируем действие  
export const { setFilter } = filtersSlice.actions;  

// Экспортируем редюсер  
export default filtersSlice.reducer;