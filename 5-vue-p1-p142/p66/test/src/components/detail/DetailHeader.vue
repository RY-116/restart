<template>
  <div class="header">
    <div><span class="iconfont" @click="handleBack">&#xe65d;</span></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: white;
  text-align: center;
}
.iconfont {
  position: absolute;
  height: 30px;
  left: 10px
}
</style>
