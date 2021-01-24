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
        title: '树木检索',
        auth: true
      },
      component: _import('info/search')
    },
    {
      path: 'page2',
      name: 'page2',
      meta: {
        title: '页面 2',
        auth: true
      },
      component: _import('info/page2')
    },
    {
      path: 'page3',
      name: 'page3',
      meta: {
        title: '页面 3',
        auth: true
      },
      component: _import('info/page3')
    },
  ]
}
