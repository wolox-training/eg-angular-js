import { create } from 'apisauce'

const api = create({
  baseURL: process.env.API_URL,
  headers: { Accept: 'application/json' }
})

export const getBooks = () => api.get('/books')
