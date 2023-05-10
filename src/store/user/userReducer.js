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
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setIsLoggedIn , user} = userReducers.actions;

export default userReducers.reducer;
