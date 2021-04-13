import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)


export default {
  path: '/map',
  name: 'demo-plugins',
  redirect: { name: 'mtop' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'mtop',
      name: 'mtop',
      meta: {
        title: '图查属性',
        auth: true
      },
      component: _import('map/mtop')
    },
    {
      path: 'ptom',
      name: 'ptom',
      meta: {
        title: '属性查图',
        auth: true
      },
      component: _import('map/ptom')
    },
  ]
}
