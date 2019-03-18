<template lang="pug">
a(href='#')
  .book-item(:class='{ "book-item-small": small }')
    img.book-item-image(
      :alt='book.title'
      :src='book.image_url || defaultImage')
    div(v-if='!small')
      p.book-item-title
        | {{book.title}}
      p.book-item-author
        | {{book.author}}
</template>
<script>
export default {
  props: {
    book: {
      type: Object,
      default: undefined
    },
    small: {
      type: Boolean,
      default: false
    },
    defaultImage: {
      type: String,
      default: './../../assets/book_logo.png'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.book-item {
  display: flex;
  flex-direction: column;
  margin: 0 30px 30px;
  width: 128px;
}

.book-item-small {
  width: 87px;
}

.book-item-image {
  margin-bottom: 15px;
  width: 100%;
}

.book-item-title {
  font-weight: 800;
  margin-bottom: 5px;
}
</style>
