(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1482:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("本章介绍 Bash 的最基本语法。")]),s._v(" "),e("h2",{attrs:{id:"echo-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#echo-命令"}},[s._v("#")]),s._v(" echo 命令")]),s._v(" "),e("p",[s._v("由于后面的例子会大量用到 "),e("code",[s._v("echo")]),s._v(" 命令，这里先介绍这个命令。")]),s._v(" "),e("p",[e("code",[s._v("echo")]),s._v(" 命令的作用是在屏幕输出一行文本，可以将该命令的参数原样输出。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello world\nhello world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面例子中，"),e("code",[s._v("echo")]),s._v(" 的参数是 "),e("code",[s._v("hello world")]),s._v("，可以原样输出。")]),s._v(" "),e("p",[s._v("如果想要输出的是多行文本，即包括换行符。这时需要把多行文本放在引号里面。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<HTML>\n    <HEAD>\n          <TITLE>Page Title</TITLE>\n    </HEAD>\n    <BODY>\n          Page body.\n    </BODY>\n</HTML>"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("上面例子中，"),e("code",[s._v("echo")]),s._v(" 可以原样输出多行文本。")]),s._v(" "),e("h3",{attrs:{id:"n-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#n-参数"}},[s._v("#")]),s._v(" "),e("code",[s._v("-n")]),s._v(" 参数")]),s._v(" "),e("p",[s._v("默认情况下，"),e("code",[s._v("echo")]),s._v(" 输出的文本末尾会有一个回车符。"),e("code",[s._v("-n")]),s._v(" 参数可以取消末尾的回车符，使得下一个提示符紧跟在输出内容的后面。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n hello world\nhello world$\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面例子中，"),e("code",[s._v("world")]),s._v(" 后面直接就是下一行的提示符 "),e("code",[s._v("$")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" b\na\nb\n\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" b\nab\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上面例子中，"),e("code",[s._v("-n")]),s._v(" 参数可以让两个 "),e("code",[s._v("echo")]),s._v(" 命令的输出连在一起，出现在同一行。")]),s._v(" "),e("h3",{attrs:{id:"e-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#e-参数"}},[s._v("#")]),s._v(" "),e("code",[s._v("-e")]),s._v(" 参数")]),s._v(" "),e("p",[e("code",[s._v("-e")]),s._v(" 参数会解释引号(双引号和单引号)里面的特殊字符(比如换行符 "),e("code",[s._v("\\n")]),s._v(")。如果不使用 "),e("code",[s._v("-e")]),s._v(" 参数，即默认情况下，引号会让特殊字符变成普通字符，"),e("code",[s._v("echo")]),s._v(" 不解释它们，原样输出。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('World"')]),s._v("\nHello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nWorld\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 双引号的情况")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('World"')]),s._v("\nHello\nWorld\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单引号的情况")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("World'")]),s._v("\nHello\nWorld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("-e")]),s._v(" 参数使得 "),e("code",[s._v("\\n")]),s._v(" 解释为换行符，导致输出内容里面出现换行。")]),s._v(" "),e("h2",{attrs:{id:"命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令格式"}},[s._v("#")]),s._v(" 命令格式")]),s._v(" "),e("p",[s._v("命令行环境中，主要通过使用 Shell 命令，进行各种操作。Shell 命令基本都是下面的格式。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" arg1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" argN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("command")]),s._v(" 是具体的命令或者一个可执行文件，"),e("code",[s._v("arg1 ... argN")]),s._v(" 是传递给命令的参数，它们是可选的。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这个命令中，"),e("code",[s._v("ls")]),s._v(" 是命令，"),e("code",[s._v("-l")]),s._v(" 是参数。")]),s._v(" "),e("p",[s._v("有些参数是命令的配置项，这些配置项一般都以一个连词线开头，比如上面的 "),e("code",[s._v("-l")]),s._v("。同一个配置项往往有长和短两种形式，比如 "),e("code",[s._v("-l")]),s._v(" 是短形式，"),e("code",[s._v("--list")]),s._v(" 是长形式，它们的作用完全相同。短形式便于手动输入，长形式一般用在脚本之中，可读性更好，利于解释自身的含义。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 短形式")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -r\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长形式")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" --reverse\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("上面命令中，"),e("code",[s._v("-r")]),s._v(" 是短形式，"),e("code",[s._v("--reverse")]),s._v(" 是长形式，作用完全一样。前者便于输入，后者便于理解。")]),s._v(" "),e("p",[s._v("Bash 单个命令一般都是一行，用户按下回车键，就开始执行。有些命令比较长，写成多行会有利于阅读和编辑，这时可以在每一行的结尾加上反斜杠，Bash 就会将下一行跟当前行放在一起解释。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" foo bar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nbar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"空格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空格"}},[s._v("#")]),s._v(" 空格")]),s._v(" "),e("p",[s._v("Bash 使用空格(或 Tab 键)区分不同的参数。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" foo bar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令中，"),e("code",[s._v("foo")]),s._v(" 和 "),e("code",[s._v("bar")]),s._v(" 之间有一个空格，所以 Bash 认为它们是两个参数。")]),s._v(" "),e("p",[s._v("如果参数之间有多个空格，Bash 会自动忽略多余的空格。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" this is a     "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nthis is a "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面命令中，"),e("code",[s._v("a")]),s._v(" 和 "),e("code",[s._v("test")]),s._v(" 之间有多个空格，Bash 会忽略多余的空格。")]),s._v(" "),e("h2",{attrs:{id:"分号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分号"}},[s._v("#")]),s._v(" 分号")]),s._v(" "),e("p",[s._v("分号("),e("code",[s._v(";")]),s._v(")是命令的结束符，使得一行可以放置多个命令，上一个命令执行结束后，再执行第二个命令。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面例子中，Bash 先执行 "),e("code",[s._v("clear")]),s._v(" 命令，执行完成后，再执行 "),e("code",[s._v("ls")]),s._v(" 命令。")]),s._v(" "),e("p",[s._v("注意，使用分号时，第二个命令总是接着第一个命令执行，不管第一个命令执行成功或失败。")]),s._v(" "),e("h2",{attrs:{id:"命令的组合符-和"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令的组合符-和"}},[s._v("#")]),s._v(" 命令的组合符 "),e("code",[s._v("&&")]),s._v(" 和 "),e("code",[s._v("||")])]),s._v(" "),e("p",[s._v("除了分号，Bash 还提供两个命令组合符 "),e("code",[s._v("&&")]),s._v(" 和 "),e("code",[s._v("||")]),s._v("，允许更好地控制多个命令之间的继发关系。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Command1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" Command2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令的意思是，如果 "),e("code",[s._v("Command1")]),s._v(" 命令运行成功，则继续运行 "),e("code",[s._v("Command2")]),s._v(" 命令。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Command1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" Command2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令的意思是，如果 "),e("code",[s._v("Command1")]),s._v(" 命令运行失败，则继续运行 "),e("code",[s._v("Command2")]),s._v(" 命令。")]),s._v(" "),e("p",[s._v("下面是一些例子。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" filelist.txt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l filelist.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面例子中，只要 "),e("code",[s._v("cat")]),s._v(" 命令执行结束，不管成功或失败，都会继续执行 "),e("code",[s._v("ls")]),s._v(" 命令。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" filelist.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l filelist.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面例子中，只有 "),e("code",[s._v("cat")]),s._v(" 命令执行成功，才会继续执行 "),e("code",[s._v("ls")]),s._v(" 命令。如果 "),e("code",[s._v("cat")]),s._v(" 执行失败(比如不存在文件 "),e("code",[s._v("flielist.txt")]),s._v(")，那么 "),e("code",[s._v("ls")]),s._v(" 命令就不会执行。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面例子中，只有 "),e("code",[s._v("mkdir foo")]),s._v(" 命令执行失败(比如 "),e("code",[s._v("foo")]),s._v(" 目录已经存在)，才会继续执行 "),e("code",[s._v("mkdir bar")]),s._v(" 命令。如果 "),e("code",[s._v("mkdir foo")]),s._v(" 命令执行成功，就不会创建 "),e("code",[s._v("bar")]),s._v(" 目录了。")]),s._v(" "),e("h2",{attrs:{id:"type-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-命令"}},[s._v("#")]),s._v(" type 命令")]),s._v(" "),e("p",[s._v("Bash 本身内置了很多命令，同时也可以执行外部程序。怎么知道一个命令是内置命令，还是外部程序呢?")]),s._v(" "),e("p",[e("code",[s._v("type")]),s._v(" 命令用来判断命令的来源。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" is a shell "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("builtin")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" is hashed "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/bin/ls"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("上面代码中，"),e("code",[s._v("type")]),s._v(" 命令告诉我们，"),e("code",[s._v("echo")]),s._v(" 是内部命令，"),e("code",[s._v("ls")]),s._v(" 是外部程序 ("),e("code",[s._v("/bin/ls")]),s._v(")。")]),s._v(" "),e("p",[e("code",[s._v("type")]),s._v(" 命令本身也是内置命令。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" is a shell "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("builtin")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果要查看一个命令的所有定义，可以使用 "),e("code",[s._v("type")]),s._v(" 命令的 "),e("code",[s._v("-a")]),s._v(" 参数。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" -a "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" is shell "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("builtin")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" is /usr/bin/echo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" is /bin/echo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("上面代码表示，"),e("code",[s._v("echo")]),s._v(" 命令即是内置命令，也有对应的外部程序。")]),s._v(" "),e("p",[e("code",[s._v("type")]),s._v(" 命令的 "),e("code",[s._v("-t")]),s._v(" 参数，可以返回一个命令的类型: 别名(alias)，关键词(keyword)，函数(function)，内置命令(builtin)和文件(file)。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" -t "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" -t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("\nkeyword\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("上面例子中，"),e("code",[s._v("bash")]),s._v(" 是文件，"),e("code",[s._v("if")]),s._v(" 是关键词。")]),s._v(" "),e("h2",{attrs:{id:"快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[s._v("#")]),s._v(" 快捷键")]),s._v(" "),e("p",[s._v("Bash 提供很多快捷键，可以大大方便操作。下面是一些最常用的快捷键，完整的介绍参见 "),e("RouterLink",{attrs:{to:"/linux/bash/readline.html"}},[s._v("行操作")]),s._v(" 一章。")],1),s._v(" "),e("ul",[e("li",[e("code",[s._v("Ctrl + L")]),s._v(": 清除屏幕并将当前行移到页面顶部。")]),s._v(" "),e("li",[e("code",[s._v("Ctrl + C")]),s._v(": 中止当前正在执行的命令。")]),s._v(" "),e("li",[e("code",[s._v("Shift + PageUp")]),s._v(": 向上滚动。")]),s._v(" "),e("li",[e("code",[s._v("Shift + PageDown")]),s._v(": 向下滚动。")]),s._v(" "),e("li",[e("code",[s._v("Ctrl + U")]),s._v(": 从光标位置删除到行首。")]),s._v(" "),e("li",[e("code",[s._v("Ctrl + K")]),s._v(": 从光标位置删除到行尾。")]),s._v(" "),e("li",[e("code",[s._v("Ctrl + D")]),s._v(": 关闭 Shell 会话。")]),s._v(" "),e("li",[e("code",[s._v("↑")]),s._v("，"),e("code",[s._v("↓")]),s._v(": 浏览已执行命令的历史记录。")])]),s._v(" "),e("p",[s._v("除了上面的快捷键，Bash 还具有自动补全功能。命令输入到一半的时候，可以按下 Tab 键，Bash 会自动完成剩下的部分。比如，输入 "),e("code",[s._v("pw")]),s._v("，然后按一下 Tab 键，Bash 会自动补上 "),e("code",[s._v("d")]),s._v("。")]),s._v(" "),e("p",[s._v("除了命令的自动补全，Bash 还支持路径的自动补全。有时，需要输入很长的路径，这时只需要输入前面的部分，然后按下 Tab 键，就会自动补全后面的部分。如果有多个可能的选择，按两次 Tab 键，Bash 会显示所有选项，让您选择。")])])}),[],!1,null,null,null);a.default=t.exports}}]);