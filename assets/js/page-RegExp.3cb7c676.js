(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1265:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取 "),a("code",[s._v("@")]),s._v(" 前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。")]),s._v(" "),a("h2",{attrs:{id:"正则表达式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式介绍"}},[s._v("#")]),s._v(" 正则表达式介绍")]),s._v(" "),a("p",[s._v("正则表达式是一种用来匹配字符串的强有力的武器。它的设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的。")]),s._v(" "),a("p",[s._v("所以我们判断一个字符串是否是合法的 Email 的方法是:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建一个匹配 Email 的正则表达式；")])]),s._v(" "),a("li",[a("p",[s._v("用该正则表达式去匹配用户的输入来判断是否合法。")])])]),s._v(" "),a("p",[s._v("因为正则表达式也是用字符串表示的，所以，我们要首先了解如何用字符来描述字符。")]),s._v(" "),a("h3",{attrs:{id:"数字与字母"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字与字母"}},[s._v("#")]),s._v(" 数字与字母")]),s._v(" "),a("p",[s._v("在正则表达式中，如果直接给出字符，就是精确匹配。用 "),a("code",[s._v("\\d")]),s._v(" 可以匹配一个数字，"),a("code",[s._v("\\w")]),s._v(" 可以匹配一个字母或数字，所以:")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("'00\\d'")]),s._v(" 可以匹配 "),a("code",[s._v("'007'")]),s._v("，但无法匹配 "),a("code",[s._v("'00A'")]),s._v("；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("'\\d\\d\\d'")]),s._v(" 可以匹配 "),a("code",[s._v("'010'")]),s._v("；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("'\\w\\w'")]),s._v(" 可以匹配 "),a("code",[s._v("'js'")]),s._v("；")])])]),s._v(" "),a("h3",{attrs:{id:"任意字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任意字符"}},[s._v("#")]),s._v(" 任意字符")]),s._v(" "),a("p",[a("code",[s._v(".")]),s._v(" 可以匹配任意字符，所以:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("'js.'")]),s._v(" 可以匹配 "),a("code",[s._v("'jsp'")]),s._v("、"),a("code",[s._v("'jss'")]),s._v("、"),a("code",[s._v("'js!'")]),s._v(" 等等。")])]),s._v(" "),a("h3",{attrs:{id:"多个字符匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个字符匹配"}},[s._v("#")]),s._v(" 多个字符匹配")]),s._v(" "),a("p",[s._v("要匹配变长的字符，在正则表达式中，用 "),a("code",[s._v("*")]),s._v(" 表示任意个字符(包括 0 个)，用 "),a("code",[s._v("+")]),s._v(" 表示至少一个字符，用 "),a("code",[s._v("?")]),s._v(" 表示 0 个或 1 个字符，用 "),a("code",[s._v("{n}")]),s._v(" 表示 n 个字符，用 "),a("code",[s._v("{n,m}")]),s._v(" 表示 "),a("code",[s._v("n-m")]),s._v(" 个字符:")]),s._v(" "),a("p",[s._v("来看一个复杂的例子: "),a("code",[s._v("\\d{3}\\s+\\d{3,8}")]),s._v("。")]),s._v(" "),a("p",[s._v("我们来从左到右解读一下:")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("\\d{3}")]),s._v(" 表示匹配 3 个数字，例如 "),a("code",[s._v("'010'")]),s._v("；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("\\s")]),s._v(" 可以匹配一个空格(也包括 Tab 等空白符)，所以 "),a("code",[s._v("\\s+")]),s._v(" 表示至少有一个空格，例如匹配 "),a("code",[s._v("' '")]),s._v("，"),a("code",[s._v("'\\t\\t'")]),s._v(" 等；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("\\d{3,8}")]),s._v(" 表示 3-8 个数字，例如 "),a("code",[s._v("'1234567'")]),s._v("。")])])]),s._v(" "),a("p",[s._v("综合起来，上面的正则表达式可以匹配以任意个空格隔开的带区号的电话号码。")]),s._v(" "),a("p",[s._v("如果要匹配 "),a("code",[s._v("'010-12345'")]),s._v(" 这样的号码呢? 由于 "),a("code",[s._v("'-'")]),s._v(" 是特殊字符，在正则表达式中，要用 "),a("code",[s._v("'\\'")]),s._v(" 转义，所以，上面的正则是 "),a("code",[s._v("\\d{3}\\-\\d{3,8}")]),s._v("。")]),s._v(" "),a("p",[s._v("但是，仍然无法匹配 "),a("code",[s._v("'010 - 12345'")]),s._v("，因为带有空格。所以我们需要更复杂的匹配方式。")]),s._v(" "),a("h2",{attrs:{id:"进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[s._v("#")]),s._v(" 进阶")]),s._v(" "),a("h3",{attrs:{id:"指定匹配范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定匹配范围"}},[s._v("#")]),s._v(" 指定匹配范围")]),s._v(" "),a("p",[s._v("要做更精确地匹配，可以用 "),a("code",[s._v("[]")]),s._v(" 表示范围，比如:")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("[0-9a-zA-Z\\_]")]),s._v(" 可以匹配一个数字、字母或者下划线；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("[0-9a-zA-Z\\_]+")]),s._v(" 可以匹配至少由一个数字、字母或者下划线组成的字符串，比如 "),a("code",[s._v("'a100'")]),s._v("，"),a("code",[s._v("'0_Z'")]),s._v("，"),a("code",[s._v("'js2015'")]),s._v(" 等等；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("[a-zA-Z\\_\\$][0-9a-zA-Z\\_\\$]*")]),s._v(" 可以匹配由字母或下划线、"),a("code",[s._v("$")]),s._v(" 开头，后接任意个由一个数字、字母或者下划线、"),a("code",[s._v("$")]),s._v(" 组成的字符串，也就是 JavaScript 允许的变量名；")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("[a-zA-Z\\_\\$][0-9a-zA-Z\\_\\$]{0, 19}")]),s._v(" 更精确地限制了变量的长度是 1-20 个字符(前面 1 个字符+后面最多 19 个字符)。")])])]),s._v(" "),a("hr"),s._v(" "),a("p",[a("code",[s._v("A|B")]),s._v(" 可以匹配 "),a("code",[s._v("A")]),s._v(" 或 "),a("code",[s._v("B")]),s._v("，所以 "),a("code",[s._v("(J|j)ava(S|s)cript")]),s._v(" 可以匹配 "),a("code",[s._v("'JavaScript'")]),s._v("、"),a("code",[s._v("'Javascript'")]),s._v("、"),a("code",[s._v("'javaScript'")]),s._v(" 或者 "),a("code",[s._v("'javascript'")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"头尾匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头尾匹配"}},[s._v("#")]),s._v(" 头尾匹配")]),s._v(" "),a("p",[a("code",[s._v("^")]),s._v(" 表示行的开头，"),a("code",[s._v("^\\d")]),s._v(" 表示必须以数字开头。")]),s._v(" "),a("p",[a("code",[s._v("$")]),s._v(" 表示行的结束，"),a("code",[s._v("\\d$")]),s._v(" 表示必须以数字结束。")]),s._v(" "),a("p",[s._v("您可能注意到了，"),a("code",[s._v("js")]),s._v(" 也可以匹配 "),a("code",[s._v("'jsp'")]),s._v("，但是加上 "),a("code",[s._v("^js$")]),s._v(" 就变成了整行匹配，就只能匹配 "),a("code",[s._v("'js'")]),s._v(" 了。")]),s._v(" "),a("h2",{attrs:{id:"正则的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则的使用"}},[s._v("#")]),s._v(" 正则的使用")]),s._v(" "),a("p",[s._v("有了准备知识，我们就可以在 JavaScript 中使用正则表达式了。")]),s._v(" "),a("p",[s._v("JavaScript 有两种方式创建一个正则表达式:")]),s._v(" "),a("ul",[a("li",[s._v("第一种方式是直接通过/正则表达式/写出来")]),s._v(" "),a("li",[s._v("第二种方式是通过 "),a("code",[s._v("new RegExp('正则表达式')")]),s._v(" 创建一个 regular expression 对象。")])]),s._v(" "),a("p",[s._v("两种写法是一样的:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("ABC\\-001")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABC\\\\-001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /ABC\\-001/")]),s._v("\nre2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /ABC\\-001/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果使用第二种写法，因为字符串的转义问题，字符串的两个 "),a("code",[s._v("\\\\")]),s._v(" 实际上是一个 "),a("code",[s._v("\\")]),s._v("。")])]),s._v(" "),a("p",[s._v("先看看如何判断正则表达式是否匹配:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\d{3}\\-\\d{3,8}$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"010-12345"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"010-1234x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"010 12345"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Regular expression 对象的 "),a("code",[s._v("test()")]),s._v(" 方法用于测试给定的字符串是否符合条件。")]),s._v(" "),a("h3",{attrs:{id:"切分字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切分字符串"}},[s._v("#")]),s._v(" 切分字符串")]),s._v(" "),a("p",[s._v("用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a b   c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a', 'b', '', '', 'c']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("嗯，无法识别连续的空格，用正则表达式试试:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a b   c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\s+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a', 'b', 'c']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("无论多少个空格都可以正常分割。加入"),a("code",[s._v(",")]),s._v("试试:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a,b, c  d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\s\\,]+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a', 'b', 'c', 'd']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再加入 "),a("code",[s._v(";")]),s._v(" 试试:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a,b;; c  d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\s\\,\\;]+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['a', 'b', 'c', 'd']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果用户输入了一组标签，下次记得用正则表达式来把不规范的输入转化成正确的数组。")]),s._v(" "),a("h3",{attrs:{id:"分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组"}},[s._v("#")]),s._v(" 分组")]),s._v(" "),a("p",[s._v("除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。用 "),a("code",[s._v("()")]),s._v(" 表示的就是要提取的分组 (Group)。比如:")]),s._v(" "),a("p",[a("code",[s._v("^(\\d{3})-(\\d{3,8})$")]),s._v(" 分别定义了两个组，可以直接从匹配的字符串中提取出区号和本地号码:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(\\d{3})-(\\d{3,8})$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"010-12345"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['010-12345', '010', '12345']")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"010 12345"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果正则表达式中定义了组，就可以在 regular expression 对象上用 "),a("code",[s._v("exec()")]),s._v(" 方法提取出子串来。")]),s._v(" "),a("p",[a("code",[s._v("exec()")]),s._v(" 方法在匹配成功后，会返回一个 "),a("code",[s._v("Array")]),s._v("，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。")]),s._v(" "),a("p",[a("code",[s._v("exec()")]),s._v(" 方法在匹配失败时返回 "),a("code",[s._v("null")]),s._v("。")]),s._v(" "),a("p",[s._v("提取子串非常有用。来看一个更凶残的例子:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(0[0-9]|1[0-9]|2[0-3]|[0-9])\\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"19:05:30"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['19:05:30', '19', '05', '30']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个正则表达式可以直接识别合法的时间。但是有些时候，用正则表达式也无法做到完全验证，比如识别日期:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于 "),a("code",[s._v("'2-30'")]),s._v("，"),a("code",[s._v("'4-31'")]),s._v(" 这样的非法日期，用正则还是识别不了，或者说写出来非常困难，这时就需要程序配合识别了。")]),s._v(" "),a("h2",{attrs:{id:"贪婪匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪匹配"}},[s._v("#")]),s._v(" 贪婪匹配")]),s._v(" "),a("p",[s._v("需要特别指出的是，正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的 0:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(\\d+)(0*)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"102300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['102300', '102300', '']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由于 "),a("code",[s._v("\\d+")]),s._v(" 采用贪婪匹配，直接把后面的 "),a("code",[s._v("0")]),s._v(" 全部匹配了，结果 "),a("code",[s._v("0*")]),s._v(" 只能匹配空字符串了。")]),s._v(" "),a("p",[s._v("必须让 "),a("code",[s._v("\\d+")]),s._v(" 采用非贪婪匹配(也就是尽可能少匹配)，才能把后面的 "),a("code",[s._v("0")]),s._v(" 匹配出来，加个 "),a("code",[s._v("?")]),s._v(" 就可以让 "),a("code",[s._v("\\d+")]),s._v(" 采用非贪婪匹配:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(\\d+?)(0*)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"102300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['102300', '1023', '00']")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"全局搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局搜索"}},[s._v("#")]),s._v(" 全局搜索")]),s._v(" "),a("p",[s._v("JavaScript 的正则表达式还有几个特殊的标志，最常用的是 "),a("code",[s._v("g")]),s._v("，表示全局匹配:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" r1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" r2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("全局匹配可以多次执行 "),a("code",[s._v("exec()")]),s._v(" 方法来搜索一个匹配的字符串。当我们指定 "),a("code",[s._v("g")]),s._v(" 标志后，每次运行 "),a("code",[s._v("exec()")]),s._v("，正则表达式本身会更新 "),a("code",[s._v("lastIndex")]),s._v(" 属性，表示上次匹配到的最后索引:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JavaScript, VBScript, JScript and ECMAScript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" re "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[a-zA-Z]+Script")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用全局匹配:")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['JavaScript']")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['VBScript']")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 20")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['JScript']")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 29")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ['ECMAScript']")]),s._v("\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 44")]),s._v("\n\nre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null，直到结束仍没有匹配到")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("全局匹配类似搜索，因此不能使用 "),a("code",[s._v("/^...$/")]),s._v("，那样只会最多匹配一次。")]),s._v(" "),a("p",[s._v("正则表达式还可以指定 "),a("code",[s._v("i")]),s._v(" 标志，表示忽略大小写，"),a("code",[s._v("m")]),s._v(" 标志，表示执行多行匹配。")]),s._v(" "),a("h2",{attrs:{id:"正则小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则小结"}},[s._v("#")]),s._v(" 正则小结")]),s._v(" "),a("p",[s._v("正则表达式非常强大，要在短短的一节里讲完是不可能的。要讲清楚正则的所有内容，可以写一本厚厚的书了。如果您经常遇到正则表达式的问题，您可能需要一本正则表达式的参考书。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("有兴趣的同学可以查看"),a("a",{attrs:{href:"https://www.runoob.com/regexp/regexp-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程上关于正则表达式的介绍"),a("OutboundLink")],1),s._v("。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);