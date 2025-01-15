import { createSlice } from '@reduxjs/toolkit';  

const filtersSlice = createSlice({  
    name: 'filter',  
    initialState: '',  
    reducers: {  
        setFilter(state, action) {  
            return action.payload;  
        },  
    },  
});  

export const { setFilter } = filtersSlice.actions; // экспортируем действие  
export default filtersSlice.reducer; // экспортируем редюсер