import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/new-markdown-page',
    component: ComponentCreator('/new-markdown-page', '0d0'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '6a5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '77b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '6b9'),
            routes: [
              {
                path: '/category/search',
                component: ComponentCreator('/category/search', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/wallets--stores',
                component: ComponentCreator('/category/wallets--stores', '9f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/balance',
                component: ComponentCreator('/search/balance', 'dad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/history',
                component: ComponentCreator('/search/history', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/limit',
                component: ComponentCreator('/search/limit', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/markdown-features',
                component: ComponentCreator('/search/markdown-features', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/transaction-detail',
                component: ComponentCreator('/search/transaction-detail', '300'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search/transaction-receipt',
                component: ComponentCreator('/search/transaction-receipt', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallets-and-stores/congratulations',
                component: ComponentCreator('/wallets-and-stores/congratulations', '621'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallets-and-stores/create-a-blog-post',
                component: ComponentCreator('/wallets-and-stores/create-a-blog-post', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
