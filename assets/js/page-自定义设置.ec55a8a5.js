(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1700:function(s,t,a){"use strict";a.r(t);var r=a(1),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("p",[s._v("配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。")]),s._v(" "),r("p",[s._v("可以使用快捷键 "),r("code",[s._v("Ctrl + Shift + *")]),s._v(" 来打开对应的配置文件，可使用 "),r("code",[s._v("Ctrl + ,")]),s._v(" 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。")]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("默认设置")]),s._v(" "),r("p",[s._v("您可以通过按住 Alt 键并点击下拉菜单中的 Settings 按钮打开 defaults.json。该文件由 Terminal 自动生成，展示了 Windows Terminal 所有默认设置及其值。更改此文件是无效的。")])]),s._v(" "),r("p",[s._v("settings.json 文件分为四个主要部分:")]),s._v(" "),r("ol",[r("li",[s._v("全局设置对象，它位于 JSON 文件的顶部。全局设置将影响整个应用程序。")]),s._v(" "),r("li",[s._v("配置文件设置，由 "),r("code",[s._v("profiles")]),s._v(" 对象控制。负责控制每个配置文件。")]),s._v(" "),r("li",[s._v("配色方案，由 "),r("code",[s._v("schemes")]),s._v(" 数组控制。")]),s._v(" "),r("li",[s._v("自定义操作，由 "),r("code",[s._v("actions")]),s._v(" 数组控制")])]),s._v(" "),r("h2",{attrs:{id:"全局设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局设置"}},[s._v("#")]),s._v(" 全局设置")]),s._v(" "),r("p",[s._v("全局设置会将影响整个终端窗口。")]),s._v(" "),r("p",[s._v("关于详细的配置项，请见 "),r("a",{attrs:{href:"https://aka.ms/terminal-global-settings",target:"_blank",rel:"noopener noreferrer"}},[s._v("全局设置"),r("OutboundLink")],1),s._v("。")]),s._v(" "),r("p",[r("img",{attrs:{src:a(948),alt:"全局设置"}})]),s._v(" "),r("h3",{attrs:{id:"默认配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#默认配置文件"}},[s._v("#")]),s._v(" 默认配置文件")]),s._v(" "),r("p",[s._v("默认配置文件为 Windows PowerShell。您可以通过在 settings.json 文件中将 "),r("code",[s._v("defaultProfile")]),s._v(" 设置为首选配置文件的名称或 GUID 来更改默认配置文件。")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"defaultProfile"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PowerShell"')]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h2",{attrs:{id:"配置文件设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件设置"}},[s._v("#")]),s._v(" 配置文件设置")]),s._v(" "),r("p",[r("code",[s._v("profiles")]),s._v(" 对象描述配置文件。它分为两个部分: "),r("code",[s._v("defaults")]),s._v(" 和 "),r("code",[s._v("list")]),s._v("。")]),s._v(" "),r("ul",[r("li",[r("p",[r("code",[s._v("defaults")]),s._v(" 对象中的配置文件会应用于列表中的所有项目。")])]),s._v(" "),r("li",[r("p",[r("code",[s._v("list")]),s._v(" 包含代表配置文件的每个配置文件对象，这些是出现在 Windows Terminal 下拉菜单中的项目。应用于 "),r("code",[s._v("list")]),s._v(" 中各个配置文件的设置会覆盖 "),r("code",[s._v("defaults")]),s._v(" 部分中应用的设置。")])])]),s._v(" "),r("p",[s._v("关于详细的配置项，请见 "),r("a",{attrs:{href:"https://aka.ms/terminal-profile-settings",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置文件设置"),r("OutboundLink")],1),s._v("。")]),s._v(" "),r("p",[r("img",{attrs:{src:a(949),alt:"配置文件设置"}})]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("您可以在 "),r("code",[s._v("defaults")]),s._v(" 中设置 "),r("code",[s._v("fontFace")]),s._v(" 控制终端的字体。")])]),s._v(" "),r("li",[r("p",[s._v("您可以在 Powershell 配置文件中添加 "),r("code",[s._v("commandline")]),s._v(" 为 "),r("code",[s._v("<PowerShell 地址> -nologo")]),s._v(" 来去除 powershell 启动时的 logo 显示。(默认地址为: "),r("code",[s._v("C:/Program Files/PowerShell/7/pwsh.exe")]),s._v(")")])]),s._v(" "),r("li",[r("p",[s._v("您可以通过设置 "),r("code",[s._v("backgroundImage")]),s._v(" 自定义背景图片，通过 "),r("code",[s._v("backgroundImageOpacity")]),s._v(" 自定义背景透明度，通过 "),r("code",[s._v("useAcrylic")]),s._v(" 开启或关闭毛玻璃效果。")])])])]),s._v(" "),r("h3",{attrs:{id:"新增配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新增配置文件"}},[s._v("#")]),s._v(" 新增配置文件")]),s._v(" "),r("p",[s._v("Windows Terminal 会自动为 PowerShell 和 WSL 分发版创建配置文件。")]),s._v(" "),r("p",[s._v("您也可以手动添加新的配置文件: 只需生成一个新的 "),r("code",[s._v("guid")]),s._v("，提供一个 "),r("code",[s._v("name")]),s._v("，并为 "),r("code",[s._v("commandline")]),s._v(" 属性提供可执行程序。")]),s._v(" "),r("div",{staticClass:"custom-block info"},[r("p",{staticClass:"custom-block-title"},[s._v("WSL")]),s._v(" "),r("p",[s._v("您可以通过 "),r("a",{attrs:{href:"https://www.microsoft.com/zh-cn/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microsoft 应用商店"),r("OutboundLink")],1),s._v(" 安装 Ubuntu。之后便可以在 terminal 上运行 Ubuntu WSL 环境。")])]),s._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),r("p",[s._v("您不能从动态生成的配置文件中复制 "),r("code",[s._v("source")]),s._v(" 属性，否则 Windows Terminal 会忽略此配置文件。您必须使用 "),r("code",[s._v("commandline")]),s._v(" 替换 "),r("code",[s._v("source")]),s._v(" 并提供可执行程序，以便复制一个动态生成的配置文件。")])]),s._v(" "),r("h2",{attrs:{id:"配色方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配色方案"}},[s._v("#")]),s._v(" 配色方案")]),s._v(" "),r("p",[s._v("您可以在 "),r("code",[s._v("schemes")]),s._v(" 数组中配置自定义配色方案。它们是使用以下格式写入的:")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Campbell"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cursorColor"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#FFFFFF"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"selectionBackground"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#FFFFFF"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"background"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0C0C0C"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"foreground"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#CCCCCC"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"black"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0C0C0C"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blue"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#0037DA"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cyan"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#3A96DD"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"green"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#13A10E"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"purple"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#881798"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"red"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#C50F1F"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"white"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#CCCCCC"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"yellow"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#C19C00"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightBlack"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#767676"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightBlue"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#3B78FF"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightCyan"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#61D6D6"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightGreen"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#16C60C"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightPurple"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#B4009E"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightRed"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#E74856"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightWhite"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#F2F2F2"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"brightYellow"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#F9F1A5"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br")])]),r("p",[s._v("关于详细的配置项，请见 "),r("a",{attrs:{href:"https://aka.ms/terminal-color-schemes",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置文件设置"),r("OutboundLink")],1),s._v("。")]),s._v(" "),r("h3",{attrs:{id:"自带的配色方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自带的配色方案"}},[s._v("#")]),s._v(" 自带的配色方案")]),s._v(" "),r("p",[s._v("Windows Terminal 在 defaults.json 文件中包含了一些配色方案。如果要在一个命令行配置文件中设置配色方案，请添加 "),r("code",[s._v("colorScheme")]),s._v(" 属性，并将配色方案的 "),r("code",[s._v("name")]),s._v(" 作为值。")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"colorScheme"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"COLOR SCHEME NAME"')]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("查看各配色方案效果，请见 "),r("a",{attrs:{href:"https://aka.ms/terminal-color-schemes#included-color-schemes",target:"_blank",rel:"noopener noreferrer"}},[s._v("包含的配色方案"),r("OutboundLink")],1),s._v("。")]),s._v(" "),r("h3",{attrs:{id:"自定义配色方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义配色方案"}},[s._v("#")]),s._v(" 自定义配色方案")]),s._v(" "),r("p",[s._v("下面提供几个主题色工具:")]),s._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://terminal.sexy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("terminal.sexy"),r("OutboundLink")],1)]),s._v(" "),r("li",[r("a",{attrs:{href:"https://windowsterminalthemes.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows Terminal Themes"),r("OutboundLink")],1)]),s._v(" "),r("li",[r("a",{attrs:{href:"https://terminalsplash.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("TerminalSplash"),r("OutboundLink")],1),s._v("，")])]),s._v(" "),r("h2",{attrs:{id:"自定义操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义操作"}},[s._v("#")]),s._v(" 自定义操作")]),s._v(" "),r("p",[s._v("您可以在 Windows 终端中创建自定义操作，以控制与终端的交互方式。这些操作将自动添加到命令面板。")]),s._v(" "),r("p",[s._v("关于详细的配置项，请见 "),r("a",{attrs:{href:"https://aka.ms/terminal-keybindings",target:"_blank",rel:"noopener noreferrer"}},[s._v("自定义操作设置"),r("OutboundLink")],1),s._v("。")]),s._v(" "),r("p",[r("img",{attrs:{src:a(950),alt:"自定义操作"}})]),s._v(" "),r("p",[s._v("自定义操作可以设置为以下格式:")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("无参数命令")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"命令名称"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keys"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"快捷键"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("details",{staticClass:"custom-block details"},[r("summary",[s._v("例子")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"closeWindow"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keys"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alt+f4"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])])]),s._v(" "),r("li",[r("p",[s._v("有参数命令")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commandName"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"argument"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keys"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"modifiers+key"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("details",{staticClass:"custom-block details"},[r("summary",[s._v("例子")]),s._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newTab"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keys"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ctrl+shift+1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])])])])])}),[],!1,null,null,null);t.default=e.exports},948:function(s,t,a){s.exports=a.p+"assets/img/terminal-global-settings.b335bd80.png"},949:function(s,t,a){s.exports=a.p+"assets/img/terminal-profiles.e514eee0.png"},950:function(s,t,a){s.exports=a.p+"assets/img/terminal-actions.f77f5a69.png"}}]);