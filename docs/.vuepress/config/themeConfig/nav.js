// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端乱炖',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '原生能力',
        items: [
          { text: 'JavaScript', link: '/pages/98424b/' },
          { text: 'Node', link: '/pages/04a264/' }
        ],
      },
      {
        text: '框架能力',
        items: [
          { text: 'Vue', link: '/pages/235d3a/' },
          { text: 'React', link: '/pages/58cdc3/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《TypeScript》学习笔记', link: '/note/typescript/' }
        ],
      }
    ],
  },
  {
    text: '页面杂谈',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/1403bc/' },
      { text: 'CSS', link: '/pages/6d9467/' },
    ],
  },
  {
    text: '书房百味',
    link: '/read/',
    items: [
      { text: '最近在读', link: '/pages/511ed7/' },
      { text: '奇思妙想', link: '/pages/44e592/' },
      { text: '读书收获', link: '/pages/b79286/' },
    ],
  },
  { text: '飞鸽传书', link: '/about/' }
]
