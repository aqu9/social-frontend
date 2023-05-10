import React, { useState } from 'react';
import AllPost from '../component/post/AllPost';
import Header from '../component/Header/index';
import { Box, TextField } from '@mui/material';
import ProfileCard from '../component/profile/profileCard';
import BenchModal from '../component/post/AddPost';

const Post = () => {
  const [postModal , SetPostModal] = useState(true)

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
          <AllPost />
        </Box>
        <Box sx={{ flex: '2 0 0', p: 5 }}>
          <ProfileCard />
        </Box>
      </Box>
      <BenchModal postModal={postModal} SetPostModal={SetPostModal}/>
    </>
  );
};

export default Post;
