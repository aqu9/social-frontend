import React, { useState } from 'react';
import data from '../../data/post.json';
import { Buffer } from 'buffer';
import {
  Avatar,
  Box,
  Card,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

const AllPost = () => {
  return (
    <>
      <Box
        sx={{
          pt: 2,

        }}>
        {data.map((post, index) => {
          let base64String;
          if (post.postImage) {
            base64String = Buffer.from(post.postImage).toString('base64');
          }
          return (
            <Card
              sx={{
                p: 2,
                px: 5,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'inherit',
                borderRadius: '5%',
                boxShadow: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                margin: 'auto',
                marginBottom: '20px',
                
              }}
              key={post._id}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: 1,
                }}>
                <Avatar src={`data:image/jpeg;base64,${base64String}`}>
                  A
                </Avatar>
                <Typography sx={{ textAlign: 'left' }}>
                  {post.user.name}
                </Typography>
              </Box>
              <Divider sx={{ width: '100%', my: 2 }} />
              <Box sx={{ width: '100%', py: 1 }}>
                <Typography sx={{ textAlign: 'left' }}>
                  {post.description}
                </Typography>
                {post.postImage && (
                  <Box
                    component={'img'}
                    sx={{ width: '100%', height: '450px', objectFit: 'fill' }}
                    src={`data:image/jpeg;base64,${base64String}`}
                    alt={'image'}
                  />
                )}
              </Box>
              <Box sx={{ width: '100%' }}>
                <TextField
                  placeholder='comment'
                  size='small'
                  variant='standard'
                  fullWidth
                />
              </Box>
            </Card>
          );
        })}
      </Box>
      {/* <div>AllPost</div> */}
      {/* <img src={imageUrl} alt="Post Image" /> */}
    </>
  );
};

export default AllPost;
