<template>
  <footer>
    <ul>
      <router-link to="/films" custom v-slot="{navigate, isActive}">
        <li @click="navigate" :class="isActive? 'rractive' : ''">
          <i class="iconfont icon-dianyingpiaoiocn"></i>
          <span>电影</span>
        </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{navigate, isActive}">
        <li @click="navigate" :class="isActive? 'rractive' : ''">
          <i class="iconfont icon-yingyuan"></i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{navigate, isActive}">
        <li @click="navigate" :class="isActive? 'rractive' : ''">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script>
import '../assets/iconfont/iconfont.css'

export default {
  name: 'Tabbar'
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: white;
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 24.5px;
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        font-size: 26px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
.rractive {
  color: #ff5f16;
}
</style>
