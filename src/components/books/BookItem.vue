<template lang="pug">
a(href='#')
  .book-item(:class='{ "book-item-small": small }')
    img.book-item-image(alt='book image' src='' v-bind:src='book.image_url || "assets/book_logo.png"')
    p.book-item-title(v-if='!small')
      | {{book.title}}
    p.book-item-author(v-if='!small')
      | {{book.author}}
</template>
<script>
export default {
  props: {
    book: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      small: null
    }
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
