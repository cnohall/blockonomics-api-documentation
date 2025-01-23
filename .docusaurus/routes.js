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
    component: ComponentCreator('/', '777'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '77a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '31f'),
            routes: [
              {
                path: '/category/payments',
                component: ComponentCreator('/category/payments', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/payments/basic-info',
                component: ComponentCreator('/payments/basic-info', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/btc-price',
                component: ComponentCreator('/payments/btc-price', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/checkouts',
                component: ComponentCreator('/payments/checkouts', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/http-callback',
                component: ComponentCreator('/payments/http-callback', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/new-addresses',
                component: ComponentCreator('/payments/new-addresses', '72d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/payment-buttons',
                component: ComponentCreator('/payments/payment-buttons', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/payment-notification',
                component: ComponentCreator('/payments/payment-notification', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/sending-bitcoin',
                component: ComponentCreator('/payments/sending-bitcoin', 'b68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/test-payments',
                component: ComponentCreator('/payments/test-payments', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/payments/usdt-payments',
                component: ComponentCreator('/payments/usdt-payments', '52e'),
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
                path: '/search/limits',
                component: ComponentCreator('/search/limits', '20a'),
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
                path: '/wallets-and-stores/store',
                component: ComponentCreator('/wallets-and-stores/store', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wallets-and-stores/wallets',
                component: ComponentCreator('/wallets-and-stores/wallets', '404'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '711'),
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
