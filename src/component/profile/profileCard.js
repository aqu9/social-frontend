import React from 'react'
import { Avatar, Box, Card,  Divider, TextField, Typography } from '@mui/material';


const ProfileCard = () => {
  return (
    <Card sx={{
          display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            overflow: 'inherit',
            borderRadius: '5%',
            boxShadow: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            p:2,
            width: '90%', margin: 'auto', marginBottom: '20px'

    }}>
        {
            ["Add Post", "Profile", "My Post"].map((elem)=>{
                return (
                <Box sx={{ p:1, 
                cursor:"pointer",
                "&:hover":{
                    background:"#CCCCCC",
                    borderRadius:20
                }}}>
                    <Typography>{elem}</Typography>
                </Box>
                )
            })
        }
    </Card>
  )
}

export default ProfileCard