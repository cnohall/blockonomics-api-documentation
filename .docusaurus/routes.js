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
    component: ComponentCreator('/', 'd50'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '47a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '2a2'),
            routes: [
              {
                path: '/api-documentation/congratulations',
                component: ComponentCreator('/api-documentation/congratulations', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-documentation/create-a-blog-post',
                component: ComponentCreator('/api-documentation/create-a-blog-post', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-documentation/create-a-document',
                component: ComponentCreator('/api-documentation/create-a-document', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-documentation/create-a-page',
                component: ComponentCreator('/api-documentation/create-a-page', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-documentation/deploy-your-site',
                component: ComponentCreator('/api-documentation/deploy-your-site', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api-documentation/markdown-features',
                component: ComponentCreator('/api-documentation/markdown-features', 'd07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'd94'),
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
