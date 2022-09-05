import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
    headers: {
        Authorization: `Apikey ${import.meta.env.VITE_API_KEY}`
    }
})

export default axiosClient;