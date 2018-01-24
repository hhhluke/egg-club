import Vue from 'vue'
import Router from 'vue-router'
import topic from '../components/topic'
import about from '../components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: topic
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
