<template>
  <div>
    <div>
      <van-nav-bar title="影院" @click-left="handleLeft">
        <template #left>
          上海<van-icon name="arrow-down" color="black"></van-icon>
        </template>
        <template #right>
          <van-icon name="search" size="18" color="black"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="box">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema_name">{{data.name}}</div>
            <div class="cinema_text">{{data.address}}</div>
          </div>
          <div class="right">
            <div style="color: #ff5f16" class="cinema_name">￥{{data.lowPrice/100}}起</div>
            <div class="cinema_text">距离未知</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'

export default {
  name: 'Cinemas',
  data () {
    return {
      cinemaList: []
    }
  },
  methods: {
    handleLeft () {
      this.$router.push('/city')
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=310100&ticketFlag=1&k=5629488',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      },
      method: 'GET'
    }).then(res => {
      this.cinemaList = res.data.data.cinemas
      console.log(this.cinemaList)

      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
li {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 212px;
  }
  .cinema_name {
    font-size: 15px;
  }
  .cinema_text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.box {
  height: 572px;
  overflow: hidden;
  position: relative;
}
</style>
