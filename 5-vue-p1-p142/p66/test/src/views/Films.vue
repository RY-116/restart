<template>
  <div>
    <film-header class="sticky" style="z-index: 100"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import FilmHeader from '@/components/films/FilmHeader'

export default {
  name: 'Films',
  components: {
    FilmHeader
  }
}
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  background-color: white;
}
</style>
