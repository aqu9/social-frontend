import axiosInstance from '../../helper/axiosInstance';
const uploadFile = (body) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axiosInstance({
        method: 'POST',
        url: `/uploadImage`,
        data: body,
      });

      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};
const addNewPost = (body) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axiosInstance({
        method: 'POST',
        url: `/post`,
        data: body,
      });

      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

export { uploadFile, addNewPost };
