<template lang="pug">
.main-container
  .books-filter.main-body
    input.books-search-input(type='text'
      placeholder='Buscar...'
      v-model='filter')
  .book-items.main-body
    book-item(
      v-for='book in booksFiltered'
      :key='book.id'
      :book='book')
    p(v-if='!booksFiltered.length')
      | No se encontraron techs
</template>
<script>
import { getBooks } from './../../services/books.service'
import BookItem from './../../components/books/BookItem'

export default {
  data() {
    return {
      books: [],
      filters: [],
      filterField: null,
      filteredBooks: [],
      filter: ''
    }
  },
  computed: {
    booksFiltered: function booksFiltered() {
      return this.filter ? this.books.filter(book =>
        `${book.title} ${book.author}`
          .toLowerCase()
          .indexOf(this.filter.toLowerCase()) >= 0) : this.books
    }
  },
  created() {
    getBooks().then(response => {
      if (!response.problem) {
        this.books = response.data
      }
    })
  },
  components: {
    BookItem
  }
}
</script>
<style lang="scss" scoped>
@import './../../scss/variables/colors';

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

.books-filter {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.books-search-input {
  width: 220px;
  padding: 10px;
  border-bottom: solid 1px $wolox-green;
}
</style>
