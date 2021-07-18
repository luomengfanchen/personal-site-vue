import axios from 'axios'

const instance = axios.create({
    baseURL: '/api/user',
    headers: { Authorization: sessionStorage.getItem('token') }
})

export default instance
