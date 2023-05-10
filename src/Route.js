
import PostById from './pages/PostDetailsById';
import SignIn from './pages/SignIn';
import Post from './pages/post';
import ProfilePage from './pages/profile';
import Sign_up from './pages/signup';
// import AllPost from '';

const Routes = () => {
  const routes = [
    {
      path: '/',
      component: SignIn,
    },

    {
      path: '/login',
      title: 'Login',
      component: SignIn,
    },
    {
      path: '/signup',
      title: 'SignUp',
      component: Sign_up,
    },
    {
      path: '/posts',
      title: 'posts',
      component: Post,
    },
    {
      path: '/posts/:id',
      title: 'posts',
      component: PostById,
    },
    {
      path: '/profile',
      title: 'profile',
      component: ProfilePage,
    },
  ];

  return { routes };
};

export default Routes;
