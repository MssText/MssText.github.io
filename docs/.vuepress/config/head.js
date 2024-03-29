// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/logo.png' }], //favicons，资源放在public文件夹
  ['link', { rel: 'stylesheet', href: 'https://unpkg.com/mssui@0.1.13/lib/theme-chalk/index.css' }],
  [
    'meta',
    {
      name: 'keywords',
      content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: 'code-TgLyWpl7hG' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['script', { src: 'https://lib.baomitu.com/vue/2.6.12/vue.min.js' }],
  ['script', { src: 'https://unpkg.com/mssui@0.1.17/lib/index.js' }]
]
