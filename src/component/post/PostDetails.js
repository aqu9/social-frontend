import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  Divider,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import {
  addComment,
  getCommentsById,
  getPostByPostId,
} from '../../store/posts/postActions';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  let { id } = useParams();
  const { posts, comments } = useSelector((state) => state.postReducers);
  console.log(comments);
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByPostId(id));
    dispatch(getCommentsById(id));
  }, [id]);
  const handleCommentClick = (comment) => {
    const body = {
      comment: comment,
      post: id,
    };
    dispatch(addComment(body)).then((res) => {
      if (res) {
        dispatch(getCommentsById(id));
        setComment('');
      }
    });

    console.log('post._id', id);
  };
  return (
    <>
      <Box
        sx={{
          pt: 2,
        }}>
        {posts.length > 0 &&
          posts.map((post, index) => {
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
                  width: '700px',
                }}
                key={post._id}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: 1,
                  }}>
                  <Avatar src={post.user.profilePic}>
                    {post.user.name[0]}
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
                      src={post.postImage}
                      alt={'image'}
                    />
                  )}
                </Box>
                <Box sx={{ width: '100%' }}>
                  <TextField
                    placeholder='comment'
                    size='small'
                    variant='standard'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          sx={{ cursor: 'pointer' }}>
                          <SendIcon
                            onClick={() => {
                              handleCommentClick(comment);
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Divider sx={{ width: '100%', my: 2 }} />
                {comments.length > 0 &&
                  comments.map((elem, index) => {
                    return (
                      <>
                        <Box
                          sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 1,
                          }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: 1,
                            }}>
                            <Avatar src={elem.user.profilePic}>
                              {elem.user.name[0]}
                            </Avatar>
                          </Box>
                          <Box sx={{ display: 'flex', flexDirection:"column" }}>
                            <Typography sx={{ textAlign: 'left', fontWeight:"bold" }}>
                              {elem.user.name}
                            </Typography>
                            <Typography sx={{ textAlign: 'left,', fontSize:"12px" }}>
                              {elem.comment}
                            </Typography>
                          </Box>
                        </Box>
                        <Divider sx={{ width: '100%', my: 2 }} />
                      </>
                    );
                  })}
              </Card>
            );
          })}
      </Box>
      {/* <div>AllPost</div> */}
      {/* <img src={imageUrl} alt="Post Image" /> */}
    </>
  );
};

export default PostDetails;
