<template lang="pug">
.main-container
  .book-items.main-body
    book-item(v-for='book in books' v-bind:key='book.id' v-bind:book='book')
    p(v-if='!books.length')
      | No hay datos
</template>
<script>
import TechsService from './../../services/books.service'
const BookItem = () => import(/* webpackChunkName: "book-item" */ './../../components/books/BookItem')

export default {
  components: {
    BookItem
  },
  data() {
    TechsService.get().then(response => {
      if (!response.problem) {
        this.books = response.data
      }
    })
    return {
      books: [],
      filters: [],
      filterField: null,
      filteredBooks: []
    }
  }
}
</script>
<style lang="scss" scoped>
.book-items,
.book-items-inline {
  display: flex;
  flex-wrap: wrap;
}

.book-items {
  justify-content: space-between;
}

.book-items-inline {
  justify-content: flex-start;
}
</style>
