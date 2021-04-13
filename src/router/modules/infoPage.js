import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)


export default {
  path: '/info',
  name: 'demo-plugins',
  redirect: { name: 'search' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'search',
      name: 'search',
      meta: {
        title: '检索树木',
        auth: true
      },
      component: _import('info/search')
    },
    {
      path: 'add',
      name: 'add',
      meta: {
        title: '录入树木',
        auth: true
      },
      component: _import('info/add')
    },
    {
      path: 'conserve',
      name: 'conserve',
      meta: {
        title: '养护树木',
        auth: true
      },
      component: _import('info/conserve')
    }
  ]
}
