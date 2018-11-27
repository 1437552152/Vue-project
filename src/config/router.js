import Main from '../page/main/main.vue'
export default [{
    path: '/',
    component: Main,
    redirect: '/index',
    children: [{
      name: 'Index',
      path: '/index',
      component: resolve => {
        require(['../page/test/index'], resolve)
      }
    }]
  },
  {
    path: '/shouye',
    component: resolve => {
      require(['../page/test/index'], resolve)
    }
  }
]
