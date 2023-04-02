import axios from 'axios'

export const api = axios.create({
  baseURL: "https://felipesantana-7i9adokph-feelipesantana.vercel.app/api/services/",
  headers: {
    key: "Access-Control-Allow-Origin", value: "*" 
  }
})