
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';


const API_KEY = '39403201-abd58df21a454f128cd9be12a';

export const perPage = 12;

export const getImages = async (searchText, page = 1) => {
  const response = await axios.get(
    `?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal`
    );
  return response.data;
};

const api = {
  getImages,
};

export default api;
  