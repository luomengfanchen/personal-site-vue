import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    headers: {'Authorization': 'etq3rgbartw45y34at'}
});

export default instance