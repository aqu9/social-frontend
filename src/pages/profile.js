import React, { useState } from 'react';
import AllPost from '../component/post/AllPost';
import Header from '../component/Header/index';
import { Box } from '@mui/material';
import ProfileCard from '../component/profile/profileCard';
import AddpostModal from '../component/post/AddPost';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAddPost } from '../store/posts/postReducers';
import UserProfile from '../component/profile/profile';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { openAddPost } = useSelector((state) => state.postReducers);

  const toggleAddPost = (data) => {
    dispatch(setOpenAddPost(data));
  };

  return (
    <>
      <Header />
      <Box sx={{height:"100vh"}}>
        <UserProfile SetPostModal={toggleAddPost} />
      </Box>
      <AddpostModal postModal={openAddPost} SetPostModal={toggleAddPost} />
    </>
  );
};

export default ProfilePage;
