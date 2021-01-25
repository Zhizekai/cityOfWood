export default  [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [

      {
        path: '/home',
        component: './Home'
      },
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/userRegister',
        component: './User/userRegister'
      },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [

          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            path: '/user/login',
            name: 'login',
            component: './User/login',
          },

          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: './user/register-result',
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/admin',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/admin',
            redirect: '/admin/dashboard/analysis',
          },
          {
            path: '/admin/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                path: '/admin',
                redirect: '/dashboard/analysis',
              },
              {
                name: 'analysis',
                icon: 'smile',
                path: '/admin/dashboard/analysis',
                component: './dashboard/analysis',
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/admin/dashboard/monitor',
                component: './dashboard/monitor',
              },
              {
                name: 'workplace',
                icon: 'smile',
                path: '/admin/dashboard/workplace',
                component: './dashboard/workplace',
              },
            ],
          },
          {
            path: '/admin/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                path: '/admin/form',
                redirect: '/admin/form/basic-form',
              },
              {
                name: 'basic-form',
                icon: 'smile',
                path: '/admin/form/basic-form',
                component: './form/basic-form',
              },
              {
                name: 'step-form',
                icon: 'smile',
                path: '/admin/form/step-form',
                component: './form/step-form',
              },
              {
                name: 'advanced-form',
                icon: 'smile',
                path: '/admin/form/advanced-form',
                component: './form/advanced-form',
              },
            ],
          },
          {
            path: '/admin/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/admin/list/search',
                name: 'search-list',
                component: './list/search',
                routes: [
                  {
                    path: '/admin/list/search',
                    redirect: '/admin/list/search/articles',
                  },
                  {
                    name: 'articles',
                    icon: 'smile',
                    path: '/admin/list/search/articles',
                    component: './list/search/articles',
                  },
                  {
                    name: 'projects',
                    icon: 'smile',
                    path: '/admin/list/search/projects',
                    component: './list/search/projects',
                  },
                  {
                    name: 'applications',
                    icon: 'smile',
                    path: '/admin/list/search/applications',
                    component: './list/search/applications',
                  },
                ],
              },
              {
                path: '/admin/list',
                redirect: '/admin/list/table-list',
              },
              {
                name: 'table-list',
                icon: 'smile',
                path: '/admin/list/table-list',
                component: './list/table-list',
              },
              {
                name: 'basic-list',
                icon: 'smile',
                path: '/admin/list/basic-list',
                component: './list/basic-list',
              },
              {
                name: 'card-list',
                icon: 'smile',
                path: '/admin/list/card-list',
                component: './list/card-list',
              },
            ],
          },
          {
            path: '/admin/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              {
                path: '/admin/profile',
                redirect: '/admin/profile/basic',
              },
              {
                name: 'basic',
                icon: 'smile',
                path: '/admin/profile/basic',
                component: './profile/basic',
              },
              {
                name: 'advanced',
                icon: 'smile',
                path: '/admin/profile/advanced',
                component: './profile/advanced',
              },
            ],
          },
          {
            name: 'result',
            icon: 'CheckCircleOutlined',
            path: '/admin/result',
            routes: [
              {
                path: '/admin/result',
                redirect: '/admin/result/success',
              },
              {
                name: 'success',
                icon: 'smile',
                path: '/admin/result/success',
                component: './result/success',
              },
              {
                name: 'fail',
                icon: 'smile',
                path: '/admin/result/fail',
                component: './result/fail',
              },
            ],
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/admin/exception',
            routes: [
              {
                path: '/admin/exception',
                redirect: '/admin/exception/403',
              },
              {
                name: '403',
                icon: 'smile',
                path: '/admin/exception/403',
                component: './exception/403',
              },
              {
                name: '404',
                icon: 'smile',
                path: '/admin/exception/404',
                component: './exception/404',
              },
              {
                name: '500',
                icon: 'smile',
                path: '/admin/exception/500',
                component: './exception/500',
              },
            ],
          },
          {
            name: 'account',
            icon: 'user',
            path: '/admin/account',
            routes: [
              {
                path: '/',
                redirect: '/admin/account/center',
              },
              {
                name: 'center',
                icon: 'smile',
                path: '/admin/account/center',
                component: './account/center',
              },
              {
                name: 'settings',
                icon: 'smile',
                path: '/admin/account/settings',
                component: './account/settings',
              },
            ],
          },
          {
            name: 'editor',
            icon: 'highlight',
            path: '/admin/editor',
            routes: [
              {
                path: '/',
                redirect: '/admin/editor/flow',
              },
              {
                name: 'flow',
                icon: 'smile',
                path: '/admin/editor/flow',
                component: './editor/flow',
              },
              {
                name: 'mind',
                icon: 'smile',
                path: '/admin/editor/mind',
                component: './editor/mind',
              },
              {
                name: 'koni',
                icon: 'smile',
                path: '/admin/editor/koni',
                component: './editor/koni',
              },
            ],
          },
          {
            component: '404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]
