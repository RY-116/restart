<template>
  <div>
    <ul>
      <router-link to="/films/nowplaying" custom v-slot="{navigate, isActive}">
        <li @click="navigate"  :class="isActive? 'rractive' : ''">
          <div>正在热映</div>
        </li>
      </router-link>
      <router-link to="/films/commingsoon" custom v-slot="{navigate, isActive}">
        <li @click="navigate"  :class="isActive? 'rractive' : ''">
          <span>即将上映</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilmHeader'
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    height: 49px;
    line-height: 49px;
    text-align: center;
  }
}
.rractive {
  color: #ff5f16;
  border-bottom: 2px solid #ff5f16;
}
</style>
