import axios from 'axios'

export const api = axios.create({
  baseURL: "https://felipesantana.vercel.app/api",
})