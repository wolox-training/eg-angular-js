<template lang="pug">
.navbar-container
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
@import './../scss/variables/sizes';

.navbar-container {
  align-items: center;
  background: $white;
  box-shadow: 0 8px 10px $dusty-gray;
  display: flex;
  height: $navbar-height;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100%;
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
