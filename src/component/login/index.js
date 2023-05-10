import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate} from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {useDispatch} from "react-redux"
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LoginUser } from '../../store/authAction';
import Cookies from 'js-cookie';
const initialstate = {
  loginDetails: {
    userId: '',
    password: '',
  },
};

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = useState(initialstate);
  const {
    loginDetails: { userId, password },
  } = state;

  useEffect(()=>{
    if(Cookies.get("access_token")){
      navigate('/posts');

    }
  },[])

  const LoginDetails = (event) => {
    event.preventDefault();
    dispatch(LoginUser(state.loginDetails)).then((res)=>{
      if(res){
        navigate("/posts")
        setState(initialstate)
      }
    })
  };
  const handleDetails = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      loginDetails: {
        ...prevState.loginDetails,
        [name]: value,
      },
    }));
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
          <PersonIcon
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
          />
          <Box component='form' onSubmit={LoginDetails} sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              size='small'
              id='userId'
              name='userId'
              label='user Id'
              variant='standard'
              placeholder='User Id'
              value={userId}
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
              Didn't have a account ? {<Button onClick={()=>navigate("/signup")}>Sign up</Button>}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
export default Login;
