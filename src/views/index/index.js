import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'
import Books from '../../components/books/Books'
import Navbar from '../../components/navbar'
import './index.pug'
import './index.scss'
import VueI18n from 'vue-i18n'
import { messages } from '../../i18n/messages'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages
})

// eslint-disable-next-line
const vm = new Vue({
  el: '#app',
  components: {
    Books,
    Navbar
  },
  data: {
    title: 'Welcome to Frontend Bootstrap!'
  },
  i18n
})

if (process.env.NODE_ENV === 'production') {
  installServiceWorker()
}
