(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1164:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。")]),s._v(" "),t("p",[s._v("举个例子，我们来计算阶乘 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v("!")]),t("mo",[s._v("=")]),t("mn",[s._v("1")]),t("mo",[s._v("×")]),t("mn",[s._v("2")]),t("mo",[s._v("×")]),t("mn",[s._v("3")]),t("mo",[s._v("×")]),t("mo",[s._v("⋯")]),t("mo",[s._v("×")]),t("mi",[s._v("n")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("n! = 1 \\times 2 \\times 3 \\times \\cdots \\times n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v("!")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"minner"},[s._v("⋯")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")])])])]),s._v(" ，用函数 "),t("code",[s._v("fact(n)")]),s._v(" 表示，可以看出:")]),s._v(" "),t("p",{staticClass:"katex-block"},[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("f")]),t("mi",[s._v("a")]),t("mi",[s._v("c")]),t("mi",[s._v("t")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v("!")]),t("mo",[s._v("=")]),t("mn",[s._v("1")]),t("mo",[s._v("×")]),t("mn",[s._v("2")]),t("mo",[s._v("×")]),t("mn",[s._v("3")]),t("mo",[s._v("×")]),t("mo",[s._v("⋯")]),t("mo",[s._v("×")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("×")]),t("mi",[s._v("n")]),t("mspace",{attrs:{linebreak:"newline"}}),t("mo",[s._v("=")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",{attrs:{stretchy:"false"}},[s._v("!")]),t("mo",[s._v("×")]),t("mi",[s._v("n")]),t("mo",[s._v("=")]),t("mi",[s._v("f")]),t("mi",[s._v("a")]),t("mi",[s._v("c")]),t("mi",[s._v("t")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("×")]),t("mi",[s._v("n")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("fact(n)= n! =1 \\times 2 \\times 3 \\times \\cdots \\times (n -1 ) \\times n \\\\\n= (n - 1)! \\times n = fact(n - 1) \\times n\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),t("span",{staticClass:"mord mathnormal"},[s._v("a")]),t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v("!")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"minner"},[s._v("⋯")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")])]),t("span",{staticClass:"mspace newline"}),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mclose"},[s._v("!")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),t("span",{staticClass:"mord mathnormal"},[s._v("a")]),t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")])])])])])]),s._v(" "),t("p",[s._v("所以，"),t("code",[s._v("fact(n)")]),s._v(" 可以表示为 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mo",[s._v("×")]),t("mi",[s._v("f")]),t("mi",[s._v("a")]),t("mi",[s._v("c")]),t("mi",[s._v("t")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("n \\times fact(n-1)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),t("span",{staticClass:"mord mathnormal"},[s._v("a")]),t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("，只有 n=1 时需要特殊处理。")]),s._v(" "),t("p",[s._v("于是，"),t("code",[s._v("fact(n)")]),s._v(" 用递归的方式写出来就是:")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("上面就是一个递归函数。可以试试:")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("如果我们计算 "),t("code",[s._v("fact(5)")]),s._v("，可以根据函数定义看到计算过程如下:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("===> fact(5)\n===> 5 *fact(4)\n===> 5* (4 *fact(3))\n===> 5* (4 *(3* fact(2)))\n===> 5 *(4* (3 *(2* fact(1))))\n===> 5 *(4* (3 *(2* 1)))\n===> 5 *(4* (3 *2))\n===> 5* (4 *6)\n===> 5* 24\n===> 120\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。")]),s._v(" "),t("p",[s._v("使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈(stack)这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试 "),t("code",[s._v("fact(1000)")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTraceback "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<stdin>"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<stdin>"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" fact\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<stdin>"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" fact\nRuntimeError: maximum recursion depth exceeded "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" comparison\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("解决递归调用栈溢出的方法是通过尾递归优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。")]),s._v(" "),t("p",[s._v("尾递归是指，在函数返回的时候，调用自身本身，并且，return 语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。")]),s._v(" "),t("p",[s._v("上面的 "),t("code",[s._v("fact(n)")]),s._v(" 函数由于 "),t("code",[s._v("return n * fact(n - 1)")]),s._v(" 引入了乘法表达式，所以就不是尾递归了。要改成尾递归方式，需要多一点代码，主要是要把每一步的乘积传入到递归函数中:")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fact")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fact_iter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fact_iter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" product\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fact_iter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("可以看到，"),t("code",[s._v("return fact_iter(num - 1, num* product)")]),s._v(" 仅返回递归函数本身，"),t("code",[s._v("num - 1")]),s._v(" 和 "),t("code",[s._v("num * product")]),s._v(" 在函数调用前就会被计算，不影响函数调用。")]),s._v(" "),t("p",[t("code",[s._v("fact(5)")]),s._v(" 对应的 "),t("code",[s._v("fact_iter(5, 1)")]),s._v(" 的调用如下:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("===> fact_iter(5, 1)\n===> fact_iter(4, 5)\n===> fact_iter(3, 20)\n===> fact_iter(2, 60)\n===> fact_iter(1, 120)\n===> 120\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("尾递归调用时，如果做了优化，栈不会增长，因此，无论多少次调用也不会导致栈溢出。")]),s._v(" "),t("p",[s._v("遗憾的是，大多数编程语言没有针对尾递归做优化，Python 解释器也没有做优化，所以，即使把上面的 "),t("code",[s._v("fact(n)")]),s._v(" 函数改成尾递归方式，也会导致栈溢出。")]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("使用递归函数的优点是逻辑简单清晰，缺点是过深的调用会导致栈溢出。")]),s._v(" "),t("p",[s._v("针对尾递归优化的语言可以通过尾递归防止栈溢出。尾递归事实上和循环是等价的，没有循环语句的编程语言只能通过尾递归实现循环。")]),s._v(" "),t("p",[s._v("Python 标准的解释器没有针对尾递归做优化，任何递归函数都存在栈溢出的问题。")])])}),[],!1,null,null,null);a.default=e.exports}}]);