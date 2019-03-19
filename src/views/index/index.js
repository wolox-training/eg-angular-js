import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'
import Books from '../../components/books/Books'
import Navbar from '../../components/navbar'
import './index.pug'
import './index.scss'

// eslint-disable-next-line
const vm = new Vue({
  el: '#app',
  components: {
    Books,
    Navbar
  },
  data: {
    title: 'Welcome to Frontend Bootstrap!'
  }
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
