(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1254:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),a("ul",[a("li",[t._v("将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用")]),t._v(" "),a("li",[t._v("将复杂的页面拆分成多个低耦合的模块，有助于代码维护。")])]),t._v(" "),a("h2",{attrs:{id:"创建自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建自定义组件"}},[t._v("#")]),t._v(" 创建自定义组件")]),t._v(" "),a("p",[t._v("类似于页面，一个自定义组件由 "),a("code",[t._v("json")]),t._v(" "),a("code",[t._v("wxml")]),t._v(" "),a("code",[t._v("wxss")]),t._v(" "),a("code",[t._v("js")]),t._v(" 4 个文件组成。")]),t._v(" "),a("p",[t._v("要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 "),a("code",[t._v("component")]),t._v(" 字段设为 "),a("code",[t._v("true")]),t._v(" 可将这一组文件设为自定义组件):")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"component"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("同时，还要在 "),a("code",[t._v("wxml")]),t._v(" 文件中编写组件模板，在 "),a("code",[t._v("wxss")]),t._v(" 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/style.html"}},[t._v("组件模板和样式")]),t._v(" 。")],1),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("代码示例")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是自定义组件的内部WXML结构 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {{innerText}}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*这里的样式只应用于这个自定义组件*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("在组件 "),a("code",[t._v("wxss")]),t._v(" 中不应使用 ID 选择器、属性选择器和标签名选择器。")])]),t._v(" "),a("p",[t._v("在自定义组件的 js 文件中，需要使用 "),a("code",[t._v("Component()")]),t._v(" 来注册组件，并提供组件的属性定义、内部数据和自定义方法。")]),t._v(" "),a("p",[t._v("组件的属性值和内部数据将被用于组件 "),a("code",[t._v("wxml")]),t._v(" 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 "),a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/component.html"}},[t._v("Component 构造器")]),t._v(" 。")],1),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("代码示例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里定义了innerText属性，属性值可以在组件使用时指定")]),t._v("\n    innerText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是一些组件内部数据")]),t._v("\n    someData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是一个自定义方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("customMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"使用自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义组件"}},[t._v("#")]),t._v(" 使用自定义组件")]),t._v(" "),a("p",[t._v("自定义组件在使用时与基础组件非常相似。")]),t._v(" "),a("p",[t._v("使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"component-tag-name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/the/custom/component"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这样，在页面的 "),a("code",[t._v("wxml")]),t._v(" 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),a("p",[t._v("在 app.json 中也可以声明 "),a("code",[t._v("usingComponents")]),t._v(" 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("代码示例")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/s/OMfVAKmZ6KZT",target:"_blank",rel:"noopener noreferrer"}},[t._v("在开发者工具中预览效果"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 以下是对一个自定义组件的引用 --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component-tag-name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inner-text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Some text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("p",[t._v("自定义组件的 "),a("code",[t._v("wxml")]),t._v(" 节点结构在与数据结合之后，将被插入到引用位置内。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。")]),t._v(" "),a("li",[t._v("自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式(使用 "),a("code",[t._v("usingComponents")]),t._v(" 字段)。")]),t._v(" "),a("li",[t._v("自定义组件和页面所在项目根目录名不能以 "),a("code",[t._v("wx-")]),t._v(" 为前缀，否则会报错。")])])]),t._v(" "),a("p",[t._v("注意，是否在页面文件中使用 "),a("code",[t._v("usingComponents")]),t._v(" 会使得页面的 "),a("code",[t._v("this")]),t._v(" 对象的原型稍有差异，包括:")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("usingComponents")]),t._v(" 页面的原型与不使用时不一致，即 "),a("code",[t._v("Object.getPrototypeOf(this)")]),t._v(" 结果不同。")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("usingComponents")]),t._v(" 时会多一些方法，如 "),a("code",[t._v("selectComponent")]),t._v(" 。")]),t._v(" "),a("li",[t._v("出于性能考虑，使用 "),a("code",[t._v("usingComponents")]),t._v(" 时， "),a("code",[t._v("setData")]),t._v(" 内容不会被直接深复制，即 "),a("code",[t._v("this.setData({ field: obj })")]),t._v(" 后 "),a("code",[t._v("this.data.field === obj")]),t._v("。(深复制会在这个值被组件间传递时发生。)")])]),t._v(" "),a("p",[t._v("如果页面比较复杂，新增或删除 "),a("code",[t._v("usingComponents")]),t._v(" 定义段时建议重新测试一下。")])])}),[],!1,null,null,null);s.default=e.exports},1255:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/intro.html"}},[t._v("自定义组件介绍")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/component.html"}},[t._v("构造器")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/style.html"}},[t._v("组件模板和样式")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/code/mini-app/guide/custom-component/behavior.html"}},[t._v("Behavior")]),t._v(" "),a("MyBadge",{attrs:{type:"grey",text:"高级"}})],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);