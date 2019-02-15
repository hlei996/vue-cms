import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newListComponent from '../pages/newList'
import newInfoComponent from '../pages/newInfo'
import photoListComponent from '../pages/photoList'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent },
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    { path: '/home/newList', component: newListComponent},
    { path: '/home/newInfo/:id', component: newInfoComponent},
    { path: '/home/photoList', component: photoListComponent}

  ],
  linkActiveClass: 'mui-active'
})
