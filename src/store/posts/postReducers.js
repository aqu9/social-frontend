import { createSlice } from '@reduxjs/toolkit';

const postReducers = createSlice({
  initialState: {
    posts: [],
    comments:[],
    openAddPost:false
  },
  name: 'post_reducers',
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    setOpenAddPost: (state, { payload }) => {
      state.openAddPost = payload;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
});

export const {setPosts, setOpenAddPost, setComments} = postReducers.actions;

export default postReducers.reducer;
