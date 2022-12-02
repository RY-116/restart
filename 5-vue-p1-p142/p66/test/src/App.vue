<template>
  <div id="app">
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
  data () {
    return {}
  },
  components: {
    Tabbar
  }
}
</script>

<style>
body {
  font-size: 16px;
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
section {
  padding-bottom: 49px;
}
</style>
