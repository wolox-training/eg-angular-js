import { create } from 'apisauce'

const api = create({
  baseURL: 'http://demo2269650.mockable.io',
  headers: { Accept: 'application/json' }
})

export default {
  get() {
    return api.get('/books')
  }
}
