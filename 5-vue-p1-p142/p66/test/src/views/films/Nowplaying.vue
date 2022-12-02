<template>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
    <van-cell v-for="item in datalist" :key="item.filmId" @click="handleChangePage(item.filmId)">
      <img :src="item.poster" alt="">
      <div class="introduce">
        <div class="title">{{item.name}}</div>
        <div class="content">
          <div :class="item.grade?'':'hidden'">观众评分 <span style="color: #ffb26d">{{item.grade}}</span></div>
          <div class="actors">主演：{{getActorsList(item.actors)}}</div>
          <div>{{item.nation}} | {{item.runtime}} 分钟</div>
        </div>
      </div>
      <div class="button">购票</div>
    </van-cell>
  </van-list>
</template>

<script>
import http from '@/util/http'

export default {
  name: 'Nowplaying',
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1
    }
  },
  methods: {
    getActorsList (actorsList) {
      if (!actorsList) return '暂无主演'
      return actorsList.reduce((prev, item) => (prev.name ? prev.name : prev) + ' ' + item.name)
    },
    handleChangePage (id) {
      this.$router.push(`/detail/${id}`)
    },
    onLoad () {
      this.current++
      http({
        url: `/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=1741460`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        },
        method: 'GET'
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        console.log(this.datalist)
        this.loading = false
        if (res.data.data.total !== 0 && this.datalist.length === res.data.data.total) this.finished = true
      })
    }
  },
  created () {
    http({
      url: `/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=1741460`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'GET'
    }).then(res => {
      this.datalist = res.data.data.films
      console.log(this.datalist)
    })
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  visibility: hidden;
}
.van-list {
  .van-cell {
    padding-top: 15px;
    padding-bottom: 15px;
    .van-cell__value--alone {
      display: flex;
      img {
        width: 66px;
      }
      .introduce {
        width: 210px;
        padding: 6px 10px;
        .title {
          font-size: 16px;
        }
        .content {
          font-size: 13px;
          color: #797d82;
          .actors {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .button {
        width: 50px;
        height: 25px;
        color: #ff5f16;
        line-height: 25px;
        text-align: center;
        font-size: 13px;
        border-radius: 4px;
        border: 1px solid #ff5f16;
        margin-top: 33px;
      }
    }
  }
}
</style>
