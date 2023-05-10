// import axiosInstance from "axiosInstance";
import Cookies from "js-cookie";
import axiosInstance from "../helper/axiosInstance";

const LoginUser = (body) => {
    return async (dispatch, getState) => {
  
      try {
      const {data} = await axiosInstance({
          method: 'POST',
          url: `/login`,
          data: body
        });
        Cookies.set('access_token', data.accessToken, { expires: 7 });
        return true;
      } catch (error) {
        console.log(error);
        return false
      }
    };
  };
const signUpUser = (body) => {
    return async (dispatch, getState) => {
      try {
       await axiosInstance({
          method: 'POST',
          url: `/users`,
          data: body
        });
  
        return true;
      } catch (error) {
        console.log(error);
        return false
      }
    };
  };


  export {
    LoginUser,
    signUpUser
  }