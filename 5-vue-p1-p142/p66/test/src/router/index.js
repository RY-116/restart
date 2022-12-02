import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films'
import Cinemas from '@/views/Cinemas'
import Center from '@/views/Center'
import Nowplaying from '@/views/films/Nowplaying'
import Commingsoon from '@/views/films/Commingsoon'
import Detail from '@/views/Detail'
import City from '@/views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/commingsoon',
        component: Commingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
