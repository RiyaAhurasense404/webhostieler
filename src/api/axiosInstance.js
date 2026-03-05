import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://booking-com.p.rapidapi.com',
    headers:{
        "x-rapidapi-host": import.meta.env.VITE_RAPID_HOST,
        "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY
    }
})