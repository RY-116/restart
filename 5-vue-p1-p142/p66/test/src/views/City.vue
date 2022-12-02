<template>
  <div>
    <van-index-bar>
      <div  v-for="cities in cityList" :key="cities.type">
        <van-index-anchor :index="cities.type" />
        <van-cell v-for="city in cities.list" :key="city.cityId" :title="city.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  name: 'City',
  data () {
    return {
      cityList: []
    }
  },
  methods: {
    renderCity (cities) {
      const letterList = []
      for (let i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i))
      }
      letterList.forEach(letter => {
        const tmp = {
          type: letter,
          list: cities.filter(city => {
            return city.pinyin.charAt(0) === letter.toLowerCase()
          })
        }
        this.cityList.push(tmp)
      })
      console.log(this.cityList)
    }
  },
  created () {
    http({
      url: '/gateway?k=7134322',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      },
      method: 'GET'
    }).then(res => {
      this.renderCity(res.data.data.cities)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
