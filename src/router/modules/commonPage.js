import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)


export default {
  path: '/common',
  name: 'demo-plugins',
  redirect: { path: '/index' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'details/:id',
      name: 'details',
      meta: {
        title: '树木详情',
        auth: true
      },
      component: _import('common/details')
    }
  ]
}
