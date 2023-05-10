import { createSlice } from '@reduxjs/toolkit';

const userReducers = createSlice({
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  name: 'leads_Reducers',
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const { user } = userReducers.actions;

export default userReducers.reducer;
