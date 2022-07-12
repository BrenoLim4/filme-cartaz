import axios from 'axios';
/*
* Base Url: https://api.themoviedb.org/3/
* Key-code-api: 9cc78eada6d57a9a412ba7d3ab03a98c
*/

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
