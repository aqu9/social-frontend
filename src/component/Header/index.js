import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { fade, makeStyles } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Header() {
  
    return (
      <Box sx={{
          flexGrow: 1,
      }}>
        <AppBar position="static" sx={{background:"#ccc"}}>
          <Toolbar>
            <Typography sx={{
        flexGrow: 1,
        display: 'none',
        '@media (min-width: 600px)': {
          display: 'block',
        },
      }} variant="h6" noWrap>
              Social
            </Typography>
            <Box sx={{
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        marginLeft: 0,
        width: '100%',
        '@media (min-width: 600px)': {
          marginLeft: '24px',
          width: 'auto',
        },
      }}>
              <Box sx={ {
        padding: '0px 16px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                sx={{
        padding: '12px 12px 12px calc(1em + 48px)',
        transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        width: '100%',
        '@media (min-width: 600px)': {
          width: '400px',
        }}}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
            <Button variant="contained" color="primary" sx={{ml:"16px"}}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}