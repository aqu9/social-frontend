// import SignIn from '../pages/loginPage/login';
import AllPost from './component/post/AllPost';
import SignIn from './pages/SignIn';
import Post from './pages/post';
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
  ];

  return { routes };
};

export default Routes;
