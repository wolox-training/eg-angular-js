import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const Books = () => import(/* webpackChunkName: "tech-list" */ '../../components/books/Books')
const Navbar = () => import(/* webpackChunkName: "navbar" */ '../../components/navbar')
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
