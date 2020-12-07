import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/proViews/index'
import register from '@/views/proViews/register'
import login from '@/views/proViews/login'
import procedure from '@/views/proViews/procedure/procedure'
import histroy from '@/views/proViews/procedure/histroy-articles'
import topic from '@/views/proViews/procedure/topic-articles'
import articlDetail from '@/views/proViews/procedure/article-detail'
import topicDetail from '@/views/proViews/procedure/topic-detail'
import center from '@/views/proViews/learn-center/learn-center'
import knowledgeDetail from '@/views/proViews/learn-center/knowledge-detail'
import help from '@/views/proViews/help/help'
import helpDetail from '@/views/proViews/help/help-detail'
import perCenter from '@/views/proViews/per-center/per-center'
import perCenterIndex from '@/views/proViews/per-center/index'
import centerP from '@/views/proViews/per-center/center'
import concact from '@/views/proViews/per-center/concact'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/procedure',
    name: 'procedure',
    component: procedure,
    children: [
      {
        path: '/selected',
        name: 'selected',
        component: histroy
      },
      {
        path: '/histroy',
        name: 'histroy',
        component: histroy
      },
      {
        path: '/topic',
        name: 'topic',
        component: topic
      },
      {
        path: '/articlDetail/:id',
        name: 'articlDetail',
        component: articlDetail
      },
      {
        path: '/topicDetail/:id',
        name: 'topicDetail',
        component: topicDetail
      },
    ]
  },
  {
    path: '/center',
    name: 'center',
    component: center,
  },
  {
    path: '/knowledgeDetail/:id',
    name: 'knowledgeDetail',
    component: knowledgeDetail,
  },
  {
    path: '/help',
    name: 'help',
    component: help,
  },
  {
    path: '/helpDetail/:id',
    name: 'helpDetail',
    component: helpDetail,
  },
  {
    path: '/perCenter',
    name: 'perCenter',
    component: perCenter,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [
      {
        path: '/index',
        component: perCenterIndex,
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/centerP',
        component: centerP,
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/concact',
        component: concact,
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
      },
    ]
  },
]


const router = new Router({
  routes
})

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断是否需要登录权限
    if (!sessionStorage.getItem("userName")) {
      return next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

//去除控制台无用的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router