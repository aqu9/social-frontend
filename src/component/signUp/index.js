import { AccountCircle, Cookie } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { useEffect, useRef, useState } from 'react';
import { signUpUser } from '../../store/authAction';
import { uploadFile } from '../../store/user/userAction';
import Cookies from 'js-cookie';
const initialstate = {
  signUpDetails: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
};

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  useEffect(()=>{
    if(Cookies.get("access_token")){
      navigate('/posts');

    }
  },[])

  const [state, setState] = useState(initialstate);
  const {
    signUpDetails: { email, password, name, phone },
  } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpUser(state.signUpDetails)).then((res) => {
      if (res) {
        navigate('/login');
        setState(initialstate)
      }
    });
  };
  const handleDetails = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      signUpDetails: {
        ...prevState.signUpDetails,
        [name]: value,
      },
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadFile(formData)).then((res)=>{
      setState((prevState) => ({
        ...prevState,
        signUpDetails: {
          ...prevState.signUpDetails,
          ["profilePic"]: res.url,
        },
      }));
    })
    // console.log(file);
    // do something with the selected file
  };
  return (
    <Box
      sx={{
        height: '100vh',
        background: '#E6FDFD',
      }}>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Card
          sx={{
            maxWidth: '400px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'inherit',
            borderRadius: '5%',
            boxShadow: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}>
          {/* <PersonIcon
            style={{
              backgroundColor: '#e8f0fe',
              borderRadius: '90%',
              padding: '10px',
              fontSize: '50px',
              boxShadow: '0px 0px 5px grey',
              position: 'absolute',
              top: -35,
              zIndex: 99,
            }}
          /> */}
          <Avatar
            sx={{
              width:50,
              height:50,
              backgroundColor: '#e8f0fe',
              borderRadius: '90%',
              padding: '10px',
              fontSize: '50px',
              boxShadow: '0px 0px 5px grey',
              position: 'absolute',
              top: -35,
              zIndex: 99,
              cursor:"pointer"
            }}
            onClick={() => fileInputRef.current.click()}
            src={state?.signUpDetails?.profilePic}
            >
          </Avatar>
            <input
            type='file'
            onChange={handleFileUpload}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              size='small'
              id='name'
              name='name'
              label='Name'
              type='name'
              variant='standard'
              placeholder='Name'
              value={name}
              onChange={handleDetails}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              size='small'
              id='email'
              name='email'
              label='Email'
              type='email'
              variant='standard'
              placeholder='Email'
              value={email}
              onChange={handleDetails}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              size='small'
              id='phone'
              name='phone'
              label='Phone'
              type='phone'
              variant='standard'
              placeholder='Phone'
              value={phone}
              onChange={handleDetails}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              size='small'
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              id='password'
              variant='standard'
              value={password}
              onChange={handleDetails}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              //   onClick={() => router.push('/')}
              type='submit'
              fullWidth
              variant='contained'
              size='small'
              sx={{ mt: 2, mb: 2 }}>
              Log In
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have a account ?{' '}
              {<Button onClick={() => navigate('/login')}>Sign In</Button>}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
export default SignUp;
