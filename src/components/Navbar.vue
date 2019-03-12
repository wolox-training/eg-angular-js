<template lang="pug">
.navbar-container.mar-b-3
  a(href='#')
    img.navbar-logo(src='assets/wbooks_logo.png' alt='wbooks logo')
  ul.navbar-icons
    li.navbar-icon-item
      | Developer Tools
</template>
<script>
export default {}
</script>
<style lang="scss">
@import './../scss/variables/colors';

.navbar-container {
  box-shadow: 0 0 15px $dusty-gray;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 23px 34px;
}

.navbar-logo {
  height: 50px;
}

.navbar-icons {
  align-items: center;
  display: flex;
}

.navbar-icon {
  cursor: pointer;
  height: 30px;
  margin: 0 20px;
}
</style>
