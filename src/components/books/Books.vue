<template lang="pug">
.main-container
  .book-items.main-body
    book-item(v-for='book in books',
      :key='book.id',
      :book='book')
    p(v-if='!books.length')
      | No hay datos
</template>
<script>
import TechsService from './../../services/books.service'
import BookItem from './../../components/books/BookItem'

export default {
  data() {
    return {
      books: [],
      filters: [],
      filterField: null,
      filteredBooks: []
    }
  },
  created() {
    TechsService.get().then(response => {
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
