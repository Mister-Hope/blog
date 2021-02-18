(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1469:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"进程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[s._v("#")]),s._v(" 进程管理")]),s._v(" "),t("h2",{attrs:{id:"ps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[s._v("#")]),s._v(" ps")]),s._v(" "),t("p",[t("code",[s._v("ps")]),s._v(" 命令用来列出进程信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nPID TTY           TIME CMD\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5198")]),s._v(" pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10129")]),s._v(" pts/1   00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("不带任何参数时，"),t("code",[s._v("ps")]),s._v(" 只列出与当前 Session 相关的进程。输出结果中，"),t("code",[s._v("PID")]),s._v(" 是进程 ID、"),t("code",[s._v("TTY")]),s._v(" 是进程的终端号(如果显示"),t("code",[s._v("?")]),s._v("，则表示进程没有终端)，"),t("code",[s._v("TIME")]),s._v(" 是消耗的 CPU 时间，"),t("code",[s._v("CMD")]),s._v(" 是触发进程的命令。")]),s._v(" "),t("p",[t("code",[s._v("x")]),s._v(" 参数列出所有进程的详细信息，包括不在当前 Session 的信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" x\nPID TTY   STAT   TIME COMMAND\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2799")]),s._v(" ?    Ssl    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 /usr/libexec/bonobo-activation-server –ac\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2820")]),s._v(" ?    Sl     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":01 /usr/libexec/evolution-data-server-1.10 --\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这时的输出结果，会多出 "),t("code",[s._v("STAT")]),s._v(" 一栏，表示状态。它的各种值如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("R")]),s._v(" 正在运行或准备运行")]),s._v(" "),t("li",[t("code",[s._v("S")]),s._v(" 正在睡眠，即没有运行，正在等待一个事件唤醒")]),s._v(" "),t("li",[t("code",[s._v("D")]),s._v(" 不可中断睡眠。进程正在等待 I/O，比如磁盘驱动器的 I/O")]),s._v(" "),t("li",[t("code",[s._v("T")]),s._v(" 已停止，即进程停止运行")]),s._v(" "),t("li",[t("code",[s._v("Z")]),s._v(" “僵尸”进程。即这是一个已经终止的子进程，但父进程还没有清空它(没有把子进程从进程表中删除)")]),s._v(" "),t("li",[t("code",[s._v("<")]),s._v(" 高优先级进程。这可能会授予一个进程更多重要的资源，给它更多的 CPU 时间。")]),s._v(" "),t("li",[t("code",[s._v("N")]),s._v(" 低优先级进程。一个低优先级进程(一个“好”进程)只有当其它高优先级进程执行之后，才会得到处理器时间。")])]),s._v(" "),t("p",[t("code",[s._v("aux")]),s._v(" 参数可以显示更多信息。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   PID  %CPU  %MEM     VSZ    RSS  TTY   STAT   START   TIME  COMMAND\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2136")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v("  ?     Ss     Mar05   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":31  init\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  ?     S"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("lt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     Mar05   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("输出结果包含的列的含义如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("USER")]),s._v(" 用户 ID，表示进程的所有者")]),s._v(" "),t("li",[t("code",[s._v("%CPU")]),s._v(" 百分比表示的 CPU 使用率")]),s._v(" "),t("li",[t("code",[s._v("%MEM")]),s._v(" 百分比表示的内存使用率")]),s._v(" "),t("li",[t("code",[s._v("VSZ")]),s._v(" 虚拟内存大小")]),s._v(" "),t("li",[t("code",[s._v("RSS")]),s._v(" 进程占用的物理内存的大小，以千字节为单位。")]),s._v(" "),t("li",[t("code",[s._v("START")]),s._v(" 进程运行的起始时间。若超过 24 小时，则用天表示。")])]),s._v(" "),t("h2",{attrs:{id:"top"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[s._v("#")]),s._v(" top")]),s._v(" "),t("p",[t("code",[s._v("top")]),s._v(" 命令可以查看机器的当前状态。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它的输出结果分为两部分，最上面是系统概要，下面是进程列表，以 CPU 的使用率排序。")]),s._v(" "),t("p",[s._v("输出结果是动态更新的，默认每三分钟更新一次。")]),s._v(" "),t("h2",{attrs:{id:"jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[s._v("#")]),s._v(" jobs")]),s._v(" "),t("p",[t("code",[s._v("jobs")]),s._v(" 命令用来查看后台任务。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ Running            xlogo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("输出结果之中，每个后台任务会有一个编号。上面结果中，"),t("code",[s._v("xlogo")]),s._v(" 的编号是 "),t("code",[s._v("1")]),s._v("，"),t("code",[s._v("+")]),s._v(" 表示正在运行。")]),s._v(" "),t("h2",{attrs:{id:"fg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fg"}},[s._v("#")]),s._v(" fg")]),s._v(" "),t("p",[t("code",[s._v("fg")]),s._v(" 命令用于将后台任务切换到前台。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fg")]),s._v(" %1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("fg")]),s._v(" 命令之后，跟随着一个百分号和工作序号，用来指定切换哪一个后台任务。如果只有一个后台任务，那么 "),t("code",[s._v("fg")]),s._v(" 命令可以不带参数。")]),s._v(" "),t("h2",{attrs:{id:"bg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg"}},[s._v("#")]),s._v(" bg")]),s._v(" "),t("p",[t("code",[s._v("bg")]),s._v(" 命令用于将一个暂停的前台任务，转移到后台。只有暂停的任务，才能使用 "),t("code",[s._v("bg")]),s._v(" 命令，因为正在运行的任务，命令行是无法输入的。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bg")]),s._v(" %1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Ctrl + z")]),s._v(" 可以暂停正在运行的前台任务。")]),s._v(" "),t("h2",{attrs:{id:"kill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill"}},[s._v("#")]),s._v(" kill")]),s._v(" "),t("p",[t("code",[s._v("kill")]),s._v(" 命令用于杀死进程。它的参数是进程 ID。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28401")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("kill")]),s._v(" 命令的实质是操作系统向进程发送信号。在使用 Ctrl-c 的情况下，会发送一个叫做 INT(中断)的信号；当使用 Ctrl-z 时，则发送一个叫做 TSTP(终端停止)的信号。")]),s._v(" "),t("p",[t("code",[s._v("kill")]),s._v(" 命令可以用来向进程发送指定信号。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-signal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" PID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下面是常见信号。")]),s._v(" "),t("ul",[t("li",[s._v("HUP: 编号 1，表示挂起。发送这个信号到前台程序，程序会终止。许多守护进程也使用这个信号，来重新初始化。这意味着，当发送这个信号到一个守护进程后， 这个进程会重新启动，并且重新读取它的配置文件。Apache 网络服务器守护进程就是一个例子。")]),s._v(" "),t("li",[s._v("INT: 编号 2，中断。实现和 "),t("code",[s._v("Ctrl-c")]),s._v(" 一样的功能，由终端发送。通常，它会终止一个程序。")]),s._v(" "),t("li",[s._v("KILL: 编号 9，杀死。进程可能选择忽略这个信号。所以，操作系统不发送该信号到目标进程，而是内核立即终止这个进程。当一个进程以这种方式终止的时候，它没有机会去做些“清理”工作，或者是保存劳动成果。因为这个原因，把 KILL 信号看作杀手锏，当其它终止信号失败后，再使用它。")]),s._v(" "),t("li",[s._v("TERM: 编号 15，终止。这是 kill 命令发送的默认信号。如果程序仍然“活着”，可以接受信号，那么这个信号终止。")]),s._v(" "),t("li",[s._v("CONT: 编号 18，继续。在停止一段时间后，进程恢复运行。")]),s._v(" "),t("li",[s._v("STOP: 编号 19，停止。这个信号导致进程停止运行，而没有终止。像 KILL 信号，它不被 发送到目标进程，因此它不能被忽略。")]),s._v(" "),t("li",[s._v("QUIT: 编号 3，退出")]),s._v(" "),t("li",[s._v("SEGV: 编号 11，段错误。如果一个程序非法使用内存，就会发送这个信号。也就是说，程序试图写入内存，而这个内存空间是不允许此程序写入的。")]),s._v(" "),t("li",[s._v("TSTP: 编号 20，终端停止。当按下 Ctrl-z 组合键后，终端发送这个信号。不像 STOP 信号， TSTP 信号由目标进程接收，且可能被忽略。")]),s._v(" "),t("li",[s._v("WINCH: 编号 28，改变窗口大小。当改变窗口大小时，系统会发送这个信号。一些程序，像 top 和 less 程序会响应这个信号，按照新窗口的尺寸，刷新显示的内容。")])]),s._v(" "),t("p",[t("code",[s._v("-l")]),s._v(" 参数可以列出所有信号。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -l\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"killall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#killall"}},[s._v("#")]),s._v(" killall")]),s._v(" "),t("p",[t("code",[s._v("killall")]),s._v(" 命令用于向指定的程序或用户发送信号。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-signal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"其他进程相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他进程相关命令"}},[s._v("#")]),s._v(" 其他进程相关命令")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("pstree")]),s._v(" 输出树型结构的进程列表，这个列表展示了进程间父/子关系。")]),s._v(" "),t("li",[t("code",[s._v("vmstat")]),s._v(" 输出一个系统资源使用快照，包括内存，交换分区和磁盘 I/O。为了看到连续的显示结果，则在命令名后加上延时的时间(以秒为单位)。例如，“vmstat 5”。终止输出，按下 Ctrl-c 组合键。")]),s._v(" "),t("li",[t("code",[s._v("xload")]),s._v(" 一个图形界面程序，可以画出系统负载的图形。")]),s._v(" "),t("li",[t("code",[s._v("tload")]),s._v(" 与 "),t("code",[s._v("xload")]),s._v(" 程序相似，但是在终端中画出图形。使用 Ctrl-c，来终止输出。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);