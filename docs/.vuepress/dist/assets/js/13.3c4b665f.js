(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{437:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("底层语言中往往需要开发者手动管理内存空间，比如C语言就需要开发者在程序中显示分配程序占用的内存。而在高级语言中，则是自动分配内存的，这一机制称为"),s("code",[t._v("垃圾回收机制")]),t._v("。")]),t._v(" "),s("p",[t._v("首先得理解三个基础的概念：可达性，标记清除法(mark-and-sweep)、引用计数")]),t._v(" "),s("h3",{attrs:{id:"可达性原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可达性原则"}},[t._v("#")]),t._v(" 可达性原则")]),t._v(" "),s("blockquote",[s("p",[t._v("“可达”值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的")])]),t._v(" "),s("p",[t._v('那么如何判断某个变量是可达的，或者说是一个"可达值"呢？')]),t._v(" "),s("p",[t._v('首先得有个"根"的概念，一般下面这几种情况的变量可以当作"根"')]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("函数的局部变量，包括定义时的函数的局部变量和参数、函数调用时的当前调用链上的所有变量和参数")]),t._v(" "),s("li",[t._v("全局变量")])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小新'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" anotherObj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("此时是这样一个引用关系：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("global variable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" anotherObj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这里全局变量作为根，所有引用都是可达的，所以垃圾回收器不会回收这里的变量。")]),t._v(" "),s("h3",{attrs:{id:"mark-and-sweep算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mark-and-sweep算法"}},[t._v("#")]),t._v(" mark-and-sweep算法")]),t._v(" "),s("p",[t._v("基本步骤是这样的：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("垃圾收集器找到所有的根，并“标记”（记住）它们。")]),t._v(" "),s("li",[t._v("然后它遍历并“标记”来自它们的所有引用。")]),t._v(" "),s("li",[t._v("然后它遍历标记的对象并标记 "),s("strong",[t._v("他们的")]),t._v(" 引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。")]),t._v(" "),s("li",[t._v("……如此操作，直到所有可达的（从根部）引用都被访问到。")]),t._v(" "),s("li",[t._v("没有被标记的对象都会被删除。")])])]),t._v(" "),s("h3",{attrs:{id:"引用计数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数"}},[t._v("#")]),t._v(" 引用计数")]),t._v(" "),s("blockquote",[s("p",[t._v("引用计数就是跟踪记录每个值被引用的次数，如定义了一个变量，并且赋值给了它一个引用对象，此时这个变量的引用计数加1，如果此时将这个变量置于null,这个变量的引用计数就会减1，当回收器发现某个变量的引用计数是0，这个变量就会被回收器回收。")])]),t._v(" "),s("p",[t._v("以上是基本的解释，各大浏览器的垃圾回收机制并不是统一的实现方式，我们来浅析一下V8引擎的垃圾回收机制。")]),t._v(" "),s("h3",{attrs:{id:"v8引擎的垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎的垃圾回收机制"}},[t._v("#")]),t._v(" V8引擎的垃圾回收机制")]),t._v(" "),s("h4",{attrs:{id:"分代垃圾回收机制算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分代垃圾回收机制算法"}},[t._v("#")]),t._v(" 分代垃圾回收机制算法")]),t._v(" "),s("blockquote",[s("p",[t._v("JS对象都是存放在内存中一个叫做堆的结构中，根据对象的存活时间将内存的垃圾回收进行不同的分代，然后分别对不同的分代的内存释以更高效的算法。")])]),t._v(" "),s("p",[t._v("V8中主要将内存分为"),s("strong",[t._v("新生代")]),t._v("和"),s("strong",[t._v("老生代")]),t._v("，新生代存储存活时间较短的对象，老生代存储存活时间较长或者是常驻内存的对象。V8堆的整体大小就是新生代所用内存空间加上老生代的内存空间。可以看到，新生代的内存空间是小于老生代的，因为新生代存储的都是存活时间比较短的对象，垃圾回收的操作更频繁，若是新生代内存很大会严重影响V8的性能。")]),t._v(" "),s("h4",{attrs:{id:"scavenge算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scavenge算法"}},[t._v("#")]),t._v(" Scavenge算法")]),t._v(" "),s("p",[t._v("在分代基础上，新生代中的对象主要通过Scavenge算法进行垃圾回收。在Scavenge的具体实现中，主要采用了Cheney算法")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Cheney算法")]),t._v("是一种采用复制的方式实现的垃圾回收算法。它将堆内存一分为二，每一部分空间称为"),s("code",[t._v("semispace")]),t._v("。在这两个"),s("code",[t._v("semispace空间")]),t._v("中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的"),s("code",[t._v("semispace空间")]),t._v("称为"),s("code",[t._v("From空间")]),t._v("，处于闲置状态的空间称为"),s("code",[t._v("To空间")]),t._v("。当我们分配对象时，先是在"),s("code",[t._v("From空间")]),t._v("中进行分配。当开始进行垃圾回收时，会检查"),s("code",[t._v("From空间")]),t._v("中的存活对象，这些存活对象将被复制到"),s("code",[t._v("To空间")]),t._v("中，而非存活对象占用的空间将会被释放。完成复制后，"),s("code",[t._v("From空间")]),t._v("和"),s("code",[t._v("To空间")]),t._v("的角色发生兑换。简而言之，在垃圾回收过程中，就是通过将存活对象在两个"),s("code",[t._v("semispace空间")]),t._v("之间进行复制。")])]),t._v(" "),s("p",[t._v("实际上，生命周期短的场景其实是少部分，并且"),s("code",[t._v("Scavenge算法")]),t._v("只复制存活的对象，所以"),s("code",[t._v("Scavenge算法")]),t._v("在新生代中时间效率很高。可以看出，"),s("code",[t._v("Scavenge算法")]),t._v("是典型的空间换时间的做法，因此也不适合大规模的用作垃圾回收场景中。")]),t._v(" "),s("p",[t._v("V8堆内存中的组成，由两个"),s("code",[t._v("semispace")]),t._v("和老生代内存空间组成，但是由于分代处理机制，"),s("code",[t._v("Scavenge算法")]),t._v('也做了优化，将多次复制，仍然存活的对象视为生命周期较长的对象，这种对象将被移入老生代，采用新的算法管理，这种行为称作"晋升"。')]),t._v(" "),s("p",[t._v("晋升的条件主要是两个：")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("一个是对象是否经历过Scavenge回收")]),t._v(" "),s("li",[t._v("一个是To空间的内存占用比超过限制。")])])]),t._v(" "),s("p",[t._v("一般情况下，v8的对象分配主要集中在"),s("code",[t._v("From空间")]),t._v("，当从"),s("code",[t._v("From空间")]),t._v("向"),s("code",[t._v("To空间")]),t._v("复制对象时，会根据对象的内存地址判断对象是否经过一次"),s("code",[t._v("Scavenge回收")]),t._v("，如果已经经历过了，则将该对象移动到老生代中。另外一种情况，会先判断"),s("code",[t._v("To空间")]),t._v("的内存使用已经超过了25%，那么同样的，该对象也会被移入老生代中。")]),t._v(" "),s("p",[t._v("进入老生代的对象，由于老生代占据了更大的内存空间，并且存储的都是生命周期比较长的对象，Scavenge已经不适合用在老生代中。")]),t._v(" "),s("h4",{attrs:{id:"mark-sweep-mark-compact算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mark-sweep-mark-compact算法"}},[t._v("#")]),t._v(" Mark-Sweep & Mark-Compact算法")]),t._v(" "),s("blockquote",[s("p",[t._v("与"),s("code",[t._v("Scavenge")]),t._v("相比，"),s("code",[t._v("Mark-Sweep")]),t._v("并不将内存空间划分为两半，所以不存在浪费一半空间的行为。与"),s("code",[t._v("Scavenge")]),t._v("复制活着的对象不同，"),s("code",[t._v("Mark-Sweep")]),t._v("在标记阶段遍历堆中所有对象，并标记活着的对象，在随后的清除阶段中，只清除没有被标记的对象。可以看出，"),s("code",[t._v("Scavenge")]),t._v("中只复制活着的对象，而"),s("code",[t._v("Mark-Sweep")]),t._v("只清理死亡对象。活对象在新生代中只占较小部分，死对象在老生代中只占较小部分，这是两种回收方式能高效处理的原因。")])]),t._v(" "),s("p",[s("code",[t._v("Mark-Sweep算法")]),t._v("的一个最大的问题是内存碎片化，在经历了一次标记清除后，内存空间会出现不连续的状态。这种状态会造成后面的内存分配问题，加入此时需要存储一个大对象，此时内存时无法存储的，只能提前出发一次垃圾回收，但是这是没有必要的。")]),t._v(" "),s("p",[t._v("为了解决"),s("code",[t._v("Mark-Sweep")]),t._v("的内存碎片问题，提出了"),s("code",[t._v("Mark-Compact")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Mark-Compact")]),t._v("是标记整理的意思，是在"),s("code",[t._v("Mark-Sweep")]),t._v("的基础上演变而来的。它们的差别在于对象在标记为死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存")])]),t._v(" "),s("p",[t._v("可以对比以下三个垃圾回收算法的简单对比：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("回收算法")]),t._v(" "),s("th",[t._v("Mark-Sweep")]),t._v(" "),s("th",[t._v("Mark-Compact")]),t._v(" "),s("th",[t._v("Scavenge")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("速度")]),t._v(" "),s("td",[t._v("中等")]),t._v(" "),s("td",[t._v("最慢")]),t._v(" "),s("td",[t._v("最快")])]),t._v(" "),s("tr",[s("td",[t._v("空间开销")]),t._v(" "),s("td",[t._v("少（有碎片）")]),t._v(" "),s("td",[t._v("少（无碎片）")]),t._v(" "),s("td",[t._v("双倍空间（无碎片）")])]),t._v(" "),s("tr",[s("td",[t._v("是否移动对象")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("是")])])])]),t._v(" "),s("p",[t._v("从表格上看，"),s("code",[t._v("Mark-Sweep")]),t._v("和"),s("code",[t._v("Mark-Compact")]),t._v("之间，由于"),s("code",[t._v("Mark-Compact")]),t._v("需要移动对象，所以它的执行速度不可能很快，所以在取舍上，V8主要使用"),s("code",[t._v("Mark-Sweep")]),t._v("，在空间不足以对从新生代中晋升过来的对象进行分配时才使用"),s("code",[t._v("Mark-Compact")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"incremental-marking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#incremental-marking"}},[t._v("#")]),t._v(" Incremental Marking")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("为了避免出现js应用逻辑与垃圾回收器看到的不一致的情况，垃圾回收的3种基本算法都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行应用逻辑，这种行为被称为“全停顿”（stop-the-world）。在V8的分代式垃圾回收中，一次小垃圾回收只收集新生代，由于新生代默认配置得较小，且其中存活对象通常较少，所以即便它是全停顿的影响也不大。但V8的老生代通常配置得较大，且存活对象较多，全堆垃圾回收（full垃圾回收）的标记、清理、整理等动作造成的停顿就会比较可怕，需要设法改善。")]),t._v(" "),s("li",[t._v("为了降低全堆垃圾回收带来的停顿时间，V8先从标记阶段入手，将原本要一口气停顿完成的动作改为增量标记（incremental marking），也就是拆分为许多小“步进”，每做完一“步进”就让js应用逻辑执行一小会，垃圾回收与应用逻辑交替执行直到标记阶")]),t._v(" "),s("li",[t._v("V8在经过增量标记的改进后，垃圾回收的最大停顿时间可以减少到原本的1/6左右。")]),t._v(" "),s("li",[t._v("V8后续还引入了延迟清理（lazy sweeping）与增量式整理（incremental compaction），让清理与整理动作也变成增量式的。同时还计划引入并行标记与并行清理，进一步利用多核性能降低每次停顿的时间。段完成。")])])]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("blockquote",[s("p",[t._v("从V8的自动垃圾回收机制的设计角度可以看到，V8对内存使用进行限制的缘由。新生代设计为一个较小的内存空间是合理的，而老生代空间过大对于垃圾回收并无特别意义。V8对内存限制的设置对于Chrome浏览器这种每个选项卡页面使用一个V8实例而言，内存的使用是绰绰有余，对于Node编写的服务器端来说，内存限制也并不影响正常场景下的使用。但是对于V8的垃圾回收特点和js在单线程上的执行情况，垃圾回收是影响性能的因素之一。想要高性能执行效率，需要注意让垃圾回收尽量少地进行，尤其是全堆垃圾回收。")])]),t._v(" "),s("h3",{attrs:{id:"内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),s("blockquote",[s("p",[t._v("所谓的内存泄漏是指程序中已分配的堆内存由于某种原因未释放或无法得到释放，导致程序运行速率变慢和程序崩溃的情况。")])]),t._v(" "),s("p",[t._v("常见的内存泄漏有")]),t._v(" "),s("h4",{attrs:{id:"_1-缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存"}},[t._v("#")]),t._v(" 1.缓存")]),t._v(" "),s("p",[t._v("实际开发中我们经常使用对象中的键值对来缓存一些东西，但是实际上这是不明智的，因为随着对象中键值对的增加，缓存的对象常驻老生代，在垃圾回收的扫描和处理中，这些对象得不到回收。其次，使用对象作为缓存东西，这和严格意义上的缓存是有区别的，因为传统的缓存的策略有完善的过期机制，而普通对象是没有的。")]),t._v(" "),s("h4",{attrs:{id:"_2-作用域未释放-闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-作用域未释放-闭包"}},[t._v("#")]),t._v(" 2.作用域未释放(闭包)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" unreleasedArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("leak")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  unreleaseArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是未被释放的内容"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("当我们每次调用leak函数的时候，由于模块的缓存策略，每次都会往unreleasedArray里面添加内容，导致unreleasedArray一直得不到垃圾回收。"),s("strong",[t._v("闭包可以维持函数内部变量驻留内存，使其得不到释放")])]),t._v(" "),s("h4",{attrs:{id:"_3-没有必要的全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-没有必要的全局变量"}},[t._v("#")]),t._v(" 3.没有必要的全局变量")]),t._v(" "),s("p",[t._v("这一点，不言而喻，因为申明过多的全局变量，会导致变量常驻老生代，被分配的内存得不到释放")]),t._v(" "),s("h4",{attrs:{id:"_4-无效的dom引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-无效的dom引用"}},[t._v("#")]),t._v(" 4.无效的dom引用")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里定义的button变量实则是全局变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里对好定义一个remove函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h4",{attrs:{id:"_5-定时器未清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-定时器未清除"}},[t._v("#")]),t._v(" 5.定时器未清除")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue 的 mounted 或 react 的 componentDidMount")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...do something")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("code",[t._v("vue")]),t._v("或 "),s("code",[t._v("react")]),t._v(" 的页面生命周期初始化时，定义了定时器，但是在离开页面后，未清除定时器，就会导致内存泄漏。")]),t._v(" "),s("h4",{attrs:{id:"_6-事件监听未清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-事件监听未清除"}},[t._v("#")]),t._v(" 6.事件监听未清除")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("在页面生命周期初始化时，绑定了事件监听器，但在离开页面后，未清除事件监听器，同样也会导致内存泄漏。")]),t._v(" "),s("p",[t._v("防止内存泄漏可以关注以下几个方面：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("在业务不需要的用到的内部函数，可以重构到函数外，实现解除闭包。")]),t._v(" "),s("li",[t._v("避免创建过多的生命周期较长的对象，或者将对象分解成多个子对象。")]),t._v(" "),s("li",[t._v("避免过多使用闭包。注意清除定时器和事件监听器。")]),t._v(" "),s("li",[t._v("nodejs中使用stream或buffer来操作大文件，不会受nodejs内存限制。")]),t._v(" "),s("li",[t._v("使用redis等外部工具来缓存数据。")])])]),t._v(" "),s("p",[t._v("想更多了解V8中的垃圾回收机制，可以看这两篇文章"),s("a",{attrs:{href:"https://www.cnblogs.com/chengxs/p/10919311.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8的垃圾回收机制"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://github.com/zqjflash/nodejs-memory",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8的垃圾回收机制与内存限制"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);