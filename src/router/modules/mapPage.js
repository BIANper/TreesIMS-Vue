import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)


export default {
  path: '/map',
  name: 'demo-plugins',
  redirect: { name: 'page1' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'page1',
      name: 'page1',
      meta: {
        title: '页面 1',
        auth: true
      },
      component: _import('map/page1')
    },
    {
      path: 'page2',
      name: 'page2',
      meta: {
        title: '页面 2',
        auth: true
      },
      component: _import('map/page2')
    },
  ]
}
