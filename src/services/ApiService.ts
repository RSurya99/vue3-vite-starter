import axios from 'axios'
import NProgress from 'nprogress'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

instance.interceptors.request.use((config) => {
  NProgress.start()
  return config
})

instance.interceptors.response.use((response) => {
  NProgress.done()
  return response
})

export default {
  apiGetAllUsers() {
    return instance.get('/users')
  },
}
