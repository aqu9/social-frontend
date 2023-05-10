import { Box, Card, ImageList, ImageListItem, Typography, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByUserId } from '../../store/posts/postActions';


const image = [
    'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg',
    'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg',
    'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg',
    'https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg',
];
const Profile = ({SetPostModal}) => {
    const { posts } = useSelector(
        (state) => state.postReducers
      )

      console.log(posts)
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPostByUserId())
    },[])
    return (
        <>
            <Card style={{ margin: '20px', display: 'flex' }}>
                <Box sx={{ margin: '20px' }}>
                    <Avatar
                        sx={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                        
                        src={posts[0]?.user?.profilePic}
                        alt='profile pic'
                    />
                </Box>
                <Box sx={{ margin: '50px 50px', width: '100%' }}>
                    <Typography variant='h5'>{posts[0]?.user?.name}</Typography>
                    <Box sx={{ display: 'flex', mt: 2 }}>
                        <Typography>Posts:{posts?.length}</Typography>
                        <Typography style={{ marginLeft: '20%' }}>Add Post</Typography>
                        <Box sx={{ margin: '0px 10px' }} style={{ cursor: 'pointer' }} onClick={() => SetPostModal(true)}>
                            <AddCircleIcon />
                        </Box>
                    </Box>
                </Box>
            </Card>
            <Box sx={{ margin: '20px' }}>
                <ImageList cols={4}>
                    {posts.map((currImage, index) => (
                        <ImageListItem key={index} style={{ cursor: 'pointer' }}>
                            <Box
                                component={'img'}
                                src={currImage.postImage}
                                alt={'image here'}
                                loading='lazy'
                                height='250px'
                                width='300px'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    );
};

export default Profile;