import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})
request.interceptors.request.use()
