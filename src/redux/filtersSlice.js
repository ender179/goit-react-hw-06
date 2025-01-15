import { createSlice } from '@reduxjs/toolkit';  

const filtersSlice = createSlice({  
  name: 'filter',  
  initialState: '',  
  reducers: {  
    filterContacts(state, { payload }) {  
      return payload;  
    },  
  },  
});  

export const { filterContacts } = filtersSlice.actions;  
export const filterReducer = filtersSlice.reducer;