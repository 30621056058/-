import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import newpizza from '@/components/newpizza'
import menu from '@/components/menu'
import home from '@/components/home'
// import one from '@/components/about/one'
// import two from '@/components/about/two'
// import three from '@/components/about/three'
import about from '@/components/about/about'
import admin from '@/components/admin'
import register from '@/components/register'

import contact from '../components/about/contact'
import delivery from '../components/about/delivery'
import history from '../components/about/history'
import orderingguide from '../components/about/orderingguide'
import phone from '../components/contact/phone'
import personname from '../components/contact/personname'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/newpizza',
      name: 'newpizza',
      component: newpizza
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: home,
        'contact': contact,
        'delivery': delivery,
        'history': history
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      children: [{
          path: '/about/contact',
          name: 'contact',
          component: contact,
          children: [{
              path: 'about/contact/phone',
              name: 'phone',
              component: phone
            },
            {
              path: 'about/contact/personname',
              name: 'personname',
              component: personname
            },
          ]
        },
        {
          path: '/delivery',
          name: 'delivery',
          component: delivery
        },
        {
          path: '/history',
          name: 'history',
          component: history
        },
        {
          path: '/orderingguide',
          name: 'orderingguide',
          component: orderingguide
        },

      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      // beforeEnter: (to, from, next) => {
      //  if(to.path =='/login' || to.path == '/register'){

      //  }else{
      //    alert("请先登录")
      //    next('/login')
      //  }
      // }

    },
    // {
    //   path: '/one',
    //   name: 'one',
    //   component: one
    // },
    // {
    //   path: '/two',
    //   name: 'two',
    //   component: two
    // },
    // {
    //   path: '/three',
    //   name: 'three',
    //   component: three
    // },




  ],

})
