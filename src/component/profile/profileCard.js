import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { getAllPosts, getPostByUserId } from '../../store/posts/postActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProfileCard = ({ SetPostModal }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClick = (elem) => {
    if (elem === 'Add Post') {
      SetPostModal(true)
      
    }
    if (elem === 'My Post') {
      dispatch(getPostByUserId())
      navigate('/posts');
    };
    if (elem === 'All Posts') {
      dispatch(getAllPosts())
      navigate('/posts');
    };
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'inherit',
        borderRadius: '5%',
        boxShadow: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        p: 2,
        width: '90%',
        margin: 'auto',
        marginBottom: '20px',
      }}>
      {['All Posts', 'Add Post', 'My Post'].map((elem) => {
        return (
          <Box
            sx={{
              p: 1,
              cursor: 'pointer',
              '&:hover': {
                background: '#CCCCCC',
                borderRadius: 20,
              },
            }}
            key={elem}
            onClick={() => {
              handleClick(elem);
            }}>
            <Typography>{elem}</Typography>
          </Box>
        );
      })}
    </Card>
  );
};

export default ProfileCard;
