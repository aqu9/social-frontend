import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { addNewPost, getUserPost } from "../store/user-action";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import CloseIcon from '@mui/icons-material/Close';
import { addNewPost, uploadFile } from '../../store/user/userAction';
import { getAllPosts } from '../../store/posts/postActions';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '300px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 3,
};

const initialstate = {
  postDetail: {
    description: '',
    postImage: '',
  },
};

export default function AddpostModal({ postModal = false, SetPostModal }) {
  const [state, setState] = useState(initialstate);
  const [imageName, setImageName] = useState('');
  const {
    postDetail: { description },
  } = state;

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleDetails = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      postDetail: {
        ...prevState.postDetail,
        [name]: value,
      },
    }));
  };

  const onCloseHandle = () => {
    SetPostModal(false);
  };

  const addPostDetails = (event) => {
    event.preventDefault();
    dispatch(addNewPost(state.postDetail)).then((res) => {
      if (res) {
        setState(initialstate);
        dispatch(getAllPosts());
        SetPostModal(false);
      navigate('/posts');

      }
    });
  };

  const fileInputRef = useRef(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file.name);
    const formData = new FormData();
    formData.append('image', file);
    dispatch(uploadFile(formData)).then((res) => {
      setState((prevState) => ({
        ...prevState,
        postDetail: {
          ...prevState.postDetail,
          ['postImage']: res.url,
        },
      }));
    });

    // console.log(file);
    // do something with the selected file
  };
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={postModal}
        closeAfterTransition>
        <Fade in={postModal}>
          <Box sx={style}>
            <CloseIcon
              variant='contained'
              onClick={onCloseHandle}
              style={{
                color: 'black',
                cursor: 'pointer',
                position: 'absolute',
                right: '5px',
                top: '5px',
              }}
            />
            <form onSubmit={addPostDetails}>
              <TextField
                fullWidth
                size='small'
                disabled={true}
                placeholder='Upload Picture'
                margin='normal'
                name='picture'
                variant='outlined'
                value={imageName}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <CloudUploadIcon
                        onClick={() => fileInputRef.current.click()}
                        sx={{
                          color: 'blue',
                          cursor: 'pointer',
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '7px',
                  cursor: 'grab',
                }}
              />
              <input
                type='file'
                onChange={handleFileUpload}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />

              <TextField
                fullWidth
                size='small'
                placeholder='Add Description'
                name='description'
                margin='normal'
                rows={4}
                value={description}
                onChange={handleDetails}
                multiple
                required
                sx={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '7px',
                  cursor: 'grab',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 5,
                }}>
                <Button type='submit' variant='contained' color='primary'>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
