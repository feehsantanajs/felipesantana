import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_ROUTE_LOCAL,
  headers:{
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked'
  },
})