(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{459:function(e,t,v){"use strict";v.r(t);var _=v(12),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("一个框架的源码的代码量是非常惊人的，刚开始看肯定都是一头雾水的。所以，这个时候就需要讲究一些阅读源码的方法，接下来我将分享下我自己阅读Vue3源码的一些方法。当然，不一定适合你，你可以对照着进行调整。")]),e._v(" "),v("h3",{attrs:{id:"熟悉官方api的基本使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#熟悉官方api的基本使用"}},[e._v("#")]),e._v(" 熟悉官方API的基本使用")]),e._v(" "),v("p",[e._v("比如你想了解Vue3响应式原理部分的源码实现，你不应该是上来就一头扎入Vue3的源码中，而是需要先去熟悉Vue3提供的响应式相关的官方API的使用，比如 "),v("code",[e._v("ref")]),e._v("、"),v("code",[e._v("reactive")]),e._v("等。需要仔细阅读官网对响应式API的解释和描述。注意，需要仔细。因为Vue的官方文档为了适应不同技术水平的开发者，有的用法写得比较隐晦，你需要自己去尝试后才能明白。")]),e._v(" "),v("h3",{attrs:{id:"先去看解读文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先去看解读文章"}},[e._v("#")]),e._v(" 先去看解读文章")]),e._v(" "),v("p",[e._v("当你熟悉了API的使用，这个时候你就可以进行源码的阅读了。不过，仍然不建议你直接打开源码进行阅读。而是去搜索网上的源码的解读文章。虽然文章的质量参差不齐，但是通过阅读解析文章，你基本能了解源码的重要的模块和主线的过程，可以避免陷入死胡同，少走弯路。")]),e._v(" "),v("h3",{attrs:{id:"带着问题去看"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#带着问题去看"}},[e._v("#")]),e._v(" 带着问题去看")]),e._v(" "),v("p",[e._v("阅读源码最重要的其实不是 "),v("code",[e._v("读")]),e._v("，而是 "),v("code",[e._v("问")]),e._v("。也就是说，你需要带着问题去看。最终的目标是通过阅读源码，你的问题得到了解答。同时，不要过多纠结细节，主要关注主线逻辑。比如 "),v("code",[e._v("Ref")]),e._v(" 这个API的实现，你可能只需要关注的是 "),v("code",[e._v("Ref")]),e._v("是如何将你传递的值转换成响应式的。对于一些边界情况的分支判断，不需要过多关注。")]),e._v(" "),v("h3",{attrs:{id:"单元测试入手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单元测试入手"}},[e._v("#")]),e._v(" 单元测试入手")]),e._v(" "),v("p",[e._v("当你前面的步骤都准备好之后，就可以真正打开源码阅读了，直接从Github将vue3源码"),v("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-next"),v("OutboundLink")],1),e._v("下下来")]),e._v(" "),v("ul",[v("li",[e._v("用"),v("code",[e._v("git clone git@github.com:vuejs/vue-next.git")])]),e._v(" "),v("li",[e._v("或者zip下载")])]),e._v(" "),v("p",[e._v("建议你使用第一种方法，因为不管是vscode还是webStorm，都可以通过安装插件的方式，看到每一行代码提交的作者和提交信息，特别是提交代码的信息对我们阅读源码非常重要。接着，我们可以先看单元测试文件。")]),e._v(" "),v("ul",[v("li",[e._v("每一个用例都有详细的注释，这对你熟悉Vue3有很大的帮助")]),e._v(" "),v("li",[e._v("源码中很多分支的判断都会在单元测试中有所体现")]),e._v(" "),v("li",[e._v("现成的例子，方便debug")])]),e._v(" "),v("h3",{attrs:{id:"学会debug"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学会debug"}},[e._v("#")]),e._v(" 学会debug")]),e._v(" "),v("p",[e._v("最后一点是最重要的，学会debug。Vue3单元测试框架是jest，vscode和webStorm都有jest的插件支持。具体如何在webStorm 和 vscode 中打断点。网上的教程一大堆，这里就不赘述了。debug 的过程也是一样，关注主线逻辑，一些边界分支的判断可以直接跳过。同时，debug 过程中需要学会观察，程序出现的结果是否是自己预料之中的结果。如果不是，需要自查是自己的理解错误还是debug过程中略过了不该略过的部分，就需要打多个断点进行观察。")])])}),[],!1,null,null,null);t.default=a.exports}}]);