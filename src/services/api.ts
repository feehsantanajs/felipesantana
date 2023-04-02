import axios from 'axios'

export const api = axios.create({
  baseURL: "/api/services/",
  headers: {
    key: "Access-Control-Allow-Origin", value: "*" 
  }
})