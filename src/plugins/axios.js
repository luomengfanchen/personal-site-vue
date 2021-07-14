import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    headers: { Authorization: sessionStorage.getItem('token') }
})

export default instance
