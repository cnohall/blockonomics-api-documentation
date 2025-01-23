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
    path: '/',
    component: ComponentCreator('/', '290'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c15'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '469'),
            routes: [
              {
                path: '/category/payments',
                component: ComponentCreator('/category/payments', '96a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/category/search',
                component: ComponentCreator('/category/search', '600'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/category/wallets--stores',
                component: ComponentCreator('/category/wallets--stores', '073'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dev-library',
                component: ComponentCreator('/dev-library', '76b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/basic-info',
                component: ComponentCreator('/payments/basic-info', '7b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/btc-price',
                component: ComponentCreator('/payments/btc-price', '612'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/checkouts',
                component: ComponentCreator('/payments/checkouts', '834'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/http-callback',
                component: ComponentCreator('/payments/http-callback', '906'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/new-addresses',
                component: ComponentCreator('/payments/new-addresses', '603'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/payment-buttons',
                component: ComponentCreator('/payments/payment-buttons', 'eae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/payment-notification',
                component: ComponentCreator('/payments/payment-notification', '9e7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/sending-bitcoin',
                component: ComponentCreator('/payments/sending-bitcoin', '711'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/test-payments',
                component: ComponentCreator('/payments/test-payments', '1c8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/payments/usdt-payments',
                component: ComponentCreator('/payments/usdt-payments', 'b1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/playground',
                component: ComponentCreator('/playground', 'cbd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/search/balance',
                component: ComponentCreator('/search/balance', 'fe5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/search/history',
                component: ComponentCreator('/search/history', '829'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/search/limits',
                component: ComponentCreator('/search/limits', 'bfa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/search/transaction-detail',
                component: ComponentCreator('/search/transaction-detail', 'be6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/search/transaction-receipt',
                component: ComponentCreator('/search/transaction-receipt', 'f64'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/wallets-and-stores/store',
                component: ComponentCreator('/wallets-and-stores/store', 'abc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/wallets-and-stores/wallets',
                component: ComponentCreator('/wallets-and-stores/wallets', '129'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', '80b'),
                exact: true,
                sidebar: "docs"
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
