import { setComments, setPosts } from './postReducers';
import axiosInstance from '../../helper/axiosInstance';

const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: 'get',
        url: `/post`,
      });
      dispatch(setPosts(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};
const getPostByUserId = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: 'get',
        url: `/post/postbyUserId?id=userId`,
      });
      dispatch(setPosts(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};
const getPostByPostId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: 'get',
        url: `/post/postbyId?id=${id}`,
      });
      dispatch(setPosts(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};
const addComment = (body) => {
  return async (dispatch) => {
    try {
       await axiosInstance({
        method: 'POST',
        url: `/comment`,
        data:body
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

const getCommentsById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: 'get',
        url: `/comment/${id}`,
      });
      dispatch(setComments(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};
const SearchPostByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: 'get',
        url: `/post/search?name=${name}`,
      });
      dispatch(setPosts(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

export { getAllPosts, getPostByUserId , getPostByPostId, addComment, getCommentsById, SearchPostByName};
