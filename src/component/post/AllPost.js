import React, { useEffect, useState } from 'react';

import {useDispatch, useSelector} from "react-redux"
import {
  Avatar,
  Box,
  Card,
  Divider,
  Typography,
  Button
} from '@mui/material';
import { getAllPosts } from '../../store/posts/postActions';
import { useNavigate} from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';


const AllPost = () => {
  const navigate = useNavigate()

  const { posts } = useSelector(
    (state) => state.postReducers
  )
  const [comment, setComment]= useState()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
  const handleCommentClick = (comment, id) =>{
    alert(comment, id)
    console.log("post._id",id)
  }
  return (
    <>
      <Box
        sx={{
          pt: 2,

        }}>
        {posts.length > 0 && posts.map((post, index) => {
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
                width:"700px"
                
              }}
              key={post?._id}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: 1,
                }}>
                <Avatar src={post?.user?.profilePic}>
                {post?.user?.name[0]  }
                </Avatar>
                <Typography sx={{ textAlign: 'left' }}>
                  {post?.user?.name}
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
                    src={post.postImage}
                    alt={'image'}
                  />
                )}
              </Box>
              <Button sx={{color:"black", fontWeight:"bold"}} onClick={()=>navigate(`/posts/${post?._id}`)}>Comments</Button>
        
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
