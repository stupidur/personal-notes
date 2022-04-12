import { defineConfig } from 'dumi';

export default defineConfig({
  title: '王狗狗笔记分享',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    excludes: ['src'],
  },
  menus: {},
  navs: [
    {
      title: '工具软件',
      path: '/tool',
      children: [{ title: 'VSCode', path: '/tool/VSCode' }],
    },
    {
      title: '兴趣爱好',
      path: '/hobby',
      children: [
        { title: '咖啡', path: '/hobby/coffee' },
        { title: '机车', path: '/hobby/motorcycle' },
        { title: '滑雪', path: '/hobby/ski' },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/StupidUr',
    },
  ],
});