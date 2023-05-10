import { AccountCircle } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
// import { useRouter } from 'next/router';
import { useState } from 'react';
const initialstate = {
  signUpDetails: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
};

const SignUp = () => {
  //   const router = useRouter();
  const [state, setState] = useState(initialstate);
  const {
    signUpDetails: { email, password, name, phone },
  } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello', state);
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
              Already have a account ? Sign in
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
export default SignUp;
