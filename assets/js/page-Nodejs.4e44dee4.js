(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1286:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("从本章开始，我们就正式开启 JavaScript 的后端开发之旅。")]),e._v(" "),r("p",[e._v("Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。")]),e._v(" "),r("p",[e._v("众所周知，在 Netscape 设计出 JavaScript 后的短短几个月，JavaScript 事实上已经是前端开发的唯一标准。")]),e._v(" "),r("p",[e._v("后来，微软通过 IE 击败了 Netscape 后一统桌面，结果几年时间，浏览器毫无进步。(2001 年推出的古老的 IE 6 到今天仍然有人在使用! )")]),e._v(" "),r("p",[e._v("没有竞争就没有发展。微软认为 IE6 浏览器已经非常完善，几乎没有可改进之处，然后解散了 IE6 开发团队! 而 Google 却认为支持现代 Web 应用的新一代浏览器才刚刚起步，尤其是浏览器负责运行 JavaScript 的引擎性能还可提升 10 倍。")]),e._v(" "),r("p",[e._v("先是 Mozilla 借助已壮烈牺牲的 Netscape 遗产在 2002 年推出了 Firefox 浏览器，紧接着 Apple 于 2003 年在开源的 KHTML 浏览器的基础上推出了 WebKit 内核的 Safari 浏览器，不过仅限于 Mac 平台。")]),e._v(" "),r("p",[e._v("随后，Google 也开始创建自家的浏览器。他们也看中了 WebKit 内核，于是基于 WebKit 内核推出了 Chrome 浏览器。")]),e._v(" "),r("p",[e._v("Chrome 浏览器是跨 Windows 和 Mac 平台的，并且，Google 认为要运行现代 Web 应用，浏览器必须有一个性能非常强劲的 JavaScript 引擎，于是 Google 自己开发了一个高性能 JavaScript 引擎，名字叫 V8，以 BSD 许可证开源。")]),e._v(" "),r("p",[e._v("现代浏览器大战让微软的 IE 浏览器远远地落后了，因为他们解散了最有经验、战斗力最强的浏览器团队! 回过头再追赶却发现，支持 HTML5 的 WebKit 已经成为手机端的标准了，IE 浏览器从此与主流移动端设备绝缘。")]),e._v(" "),r("h2",{attrs:{id:"浏览器大战和-node-js-的关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器大战和-node-js-的关系"}},[e._v("#")]),e._v(" 浏览器大战和 Node.js 的关系")]),e._v(" "),r("p",[e._v("话说有个叫 Ryan Dahl 的歪果仁，他的工作是用 C/C++写高性能 Web 服务。对于高性能，异步 IO、事件驱动是基本原则，但是用 C/C++写就太痛苦了。于是这位仁兄开始设想用高级语言开发 Web 服务。他评估了很多种高级语言，发现很多语言虽然同时提供了同步 IO 和异步 IO，但是开发人员一旦用了同步 IO，他们就再也懒得写异步 IO 了，所以，最终，Ryan 瞄向了 JavaScript。")]),e._v(" "),r("p",[e._v("因为 JavaScript 是单线程执行，根本不能进行同步 IO 操作，所以，JavaScript 的这一“缺陷”导致了它只能使用异步 IO。")]),e._v(" "),r("p",[e._v("选定了开发语言，还要有运行时引擎。这位仁兄曾考虑过自己写一个，不过明智地放弃了，因为 V8 就是开源的 JavaScript 引擎。让 Google 投资去优化 V8，咱只负责改造一下拿来用，还不用付钱，这个买卖很划算。")]),e._v(" "),r("p",[e._v("于是在 2009 年，Ryan 正式推出了基于 JavaScript 语言和 V8 引擎的开源 Web 服务器项目，命名为 Node.js。虽然名字很土，但是，Node.js 第一次把 JavaScript 带入到后端服务器开发，加上世界上已经有无数的 JavaScript 开发人员，所以 Node.js 一下子就火了起来。")]),e._v(" "),r("h2",{attrs:{id:"在-node-js-上运行的-javascript-相比其他后端开发语言的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-node-js-上运行的-javascript-相比其他后端开发语言的优势"}},[e._v("#")]),e._v(" 在 Node.js 上运行的 JavaScript 相比其他后端开发语言的优势")]),e._v(" "),r("p",[e._v("最大的优势是借助 JavaScript 天生的事件驱动机制加 V8 高性能引擎，使编写高性能 Web 服务轻而易举。")]),e._v(" "),r("p",[e._v("其次，JavaScript 语言本身是完善的函数式语言，在前端开发时，开发人员往往写得比较随意，让人感觉 JavaScript 就是个“玩具语言”。但是，在 Node.js 环境下，通过模块化的 JavaScript 代码，加上函数式编程，并且无需考虑浏览器兼容性问题，直接使用最新的 ECMAScript 6 标准，可以完全满足工程上的需求。")]),e._v(" "),r("blockquote",[r("p",[e._v("我还听说过 io.js，这又是什么鬼?")])]),e._v(" "),r("p",[e._v("因为 Node.js 是开源项目，虽然由社区推动，但幕后一直由 Joyent 公司资助。由于一群开发者对 Joyent 公司的策略不满，于 2014 年从 Node.js 项目 fork 出了 io.js 项目，决定单独发展，但两者实际上是兼容的。")]),e._v(" "),r("p",[e._v("然而中国有句古话，叫做“分久必合，合久必分”。分家后没多久，Joyent 公司表示要和解，于是，io.js 项目又决定回归 Node.js。")]),e._v(" "),r("p",[e._v("具体做法是将来 io.js 将首先添加新的特性，如果大家测试用得爽，就把新特性加入 Node.js。Io.js 是“尝鲜版”，而 Node.js 是线上稳定版，相当于 Fedora Linux 和 RHEL 的关系。")]),e._v(" "),r("p",[e._v("本章教程的所有代码都在 Node.js 上调试通过。如果您要尝试 io.js 也是可以的，不过两者如果遇到一些区别请自行查看 io.js 的文档。")]),e._v(" "),r("h2",{attrs:{id:"node-js-相关链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-js-相关链接"}},[e._v("#")]),e._v(" Node.js 相关链接")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官网"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://nodejs.org/en/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 最新文档"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 最新 API 文档"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=o.exports},1291:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Node.js 是一款全球使用广泛的框架，可以用在前端与后端上，拥有大量的模块。Node.js 主要以其丰富并及其容易导入的 Node.js package，以及其方便管理 npm (Node.js Package Manager)闻名。")]),e._v(" "),r("h2",{attrs:{id:"教程目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#教程目录"}},[e._v("#")]),e._v(" 教程目录")]),e._v(" "),r("ul",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/code/node-js/intro.html"}},[e._v("Node.js 介绍")])],1)]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/code/node-js/install.html"}},[e._v("Node.js 与 npm 安装")])],1)]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/code/node-js/environment.html"}},[e._v("Node.js 环境")])],1)]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/code/node-js/program.html"}},[e._v("编程")])],1)]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/code/node-js/module.html"}},[e._v("Node.js 模块")])],1)])]),e._v(" "),r("p",[e._v("以上，就是 Node.js 的简易介绍，系统学习可以查看下方的详细教程。")]),e._v(" "),r("h2",{attrs:{id:"详细教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#详细教程"}},[e._v("#")]),e._v(" 详细教程")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://www.nodebeginner.org/index-zh-cn.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 入门"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.w3cschool.cn/nodejs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3CSchool"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"yarn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[e._v("#")]),e._v(" Yarn")]),e._v(" "),r("p",[e._v("快速、可靠、安全的依赖管理工具。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。")])]),e._v(" "),r("li",[r("p",[e._v("在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。")])]),e._v(" "),r("li",[r("p",[e._v("使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.yarnpkg.com/zh-Hans/docs/install#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.yarnpkg.com/zh-Hans/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),r("OutboundLink")],1)])])]),e._v(" "),r("h3",{attrs:{id:"命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[e._v("#")]),e._v(" 命令")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("yarn install")]),e._v(": 执行安装")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("yarn upgrade")]),e._v(": 执行升级")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("yarn add <package>")]),e._v(": 添加一个包")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("yarn config set cache-folder <path>")]),e._v(": 更改缓存文件夹")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("yarn config set registry <registry>")]),e._v(": 更改源")]),e._v(" "),r("p",[e._v("::: tips")]),e._v(" "),r("p",[e._v("在国内，建议换成 "),r("a",{attrs:{href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("淘宝源"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v(":::")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);