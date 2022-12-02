<template>
  <div v-if="filmInfo">
    <detail-header v-scroll="50">
      {{filmInfo.name}}
    </detail-header>
    <div class="poster" :style="{
      backgroundImage: 'url('+filmInfo.poster+')'
    }"></div>
    <div class="content">
      <div>{{filmInfo.name}}</div>
      <div>
        <div class="detail-text">{{filmInfo.category}}</div>
        <div class="detail-text">{{date}}上映</div>
        <div class="detail-text">{{filmInfo.nation}} | {{filmInfo.runtime}} 分钟</div>
        <div class="detail-text synopsis" :class="isHidden?'hidden':''">{{filmInfo.synopsis}}</div>
        <div style="text-align: center"><span class="iconfont" @click="isHidden = !isHidden" v-if="isHidden">&#xe6cc;</span></div>
        <div style="text-align: center"><span class="iconfont" @click="isHidden = !isHidden" v-if="!isHidden">&#xe65d;</span></div>
      </div>
    </div>
    <div style="text-align: center; height: 900px">下面是轮播懒得整了</div>
  </div>
</template>

<script>
import http from '@/util/http'
import moment from 'moment'
import DetailHeader from '@/components/detail/DetailHeader'
import Vue from 'vue'

Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.display = 'none'

    window.onscroll = () => {
      if (document.documentElement.scrollTop > binding.value ||
      document.body.scrollTop > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  name: 'Detail',
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  components: {
    DetailHeader
  },
  computed: {
    date () {
      const time = this.filmInfo.premiereAt * 1000
      return moment(time).format('YYYY-MM-DD')
    }
  },
  created () {
    const id = this.$route.params.id
    http({
      url: `/gateway?filmId=${id}&k=5280610`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      },
      method: 'GET'
    }).then(res => {
      this.filmInfo = res.data.data.film
      console.log(this.filmInfo)
    })
  }
}
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 210px;
  background-position: center;
  background-size: cover;
}
.hidden {
  overflow: hidden;
  height: 26px;
}
.iconfont {
  color: #797d82;
  font-size: 12px;
}
.content {
  padding: 15px;
  .detail-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .synopsis {
    line-height: 13px;
    margin-top: 12px;
    overflow: hidden;
  }
}
</style>
