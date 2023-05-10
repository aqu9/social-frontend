import React, { useState } from 'react';
import AllPost from '../component/post/AllPost';
import Header from '../component/Header/index';
import { Box } from '@mui/material';
import ProfileCard from '../component/profile/profileCard';
import AddpostModal from '../component/post/AddPost';
import {useDispatch, useSelector} from "react-redux"
import { setOpenAddPost } from '../store/posts/postReducers';
import PostDetails from '../component/post/PostDetails';

const PostById = () => {
  const dispatch = useDispatch()
  const { openAddPost } = useSelector(
    (state) => state.postReducers
  )


  const toggleAddPost = (data) => {
    dispatch(setOpenAddPost(data))
  }

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flex: '7 0 0',
            padding: '10px',
            mr: 5,
          }}>
          <PostDetails  />
        </Box>
        <Box sx={{ flex: '2 0 0', p: 5 }}>
          <ProfileCard SetPostModal={toggleAddPost}/>
        </Box>
      </Box>
      <AddpostModal postModal={openAddPost} SetPostModal={toggleAddPost}/>
    </>
  );
};

export default PostById;
