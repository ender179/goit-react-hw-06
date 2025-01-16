import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload; // устанавливаем состояние фильтра
    },
  },
});
// экспортируем действия
export const { setFilter } = filtersSlice.actions;
// экспортируем редюсер
export default filtersSlice.reducer;