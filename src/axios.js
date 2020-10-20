import axios from 'axios';

// base url to make requests to the movie database

const instance = axios.create({
    baseURL : 'http://api.themoviedb.org/3',
})

export default instance;

// if its default we can change the var instance as axios in row component