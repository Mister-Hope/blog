(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1663:function(v,_,t){"use strict";t.r(_);var l=t(1),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。")]),v._v(" "),t("p",[v._v("本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。")]),v._v(" "),t("h2",{attrs:{id:"更改视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改视图"}},[v._v("#")]),v._v(" 更改视图")]),v._v(" "),t("p",[v._v("“图形” 窗口显示了几何的图形视图、网格以及结果。")]),v._v(" "),t("ul",[t("li",[v._v("单击鼠标左键并四处拖动即可进行旋转。")]),v._v(" "),t("li",[v._v("单击鼠标右键并拖动，就可以将模型几何移到窗口的任意位置。")]),v._v(" "),t("li",[v._v("按住鼠标滚轮按钮向上拖动可以放大，向下拖动即可缩小。")]),v._v(" "),t("li",[v._v("您也可以使用 “图形” 窗口工具栏来更改几何视图。")])]),v._v(" "),t("p",[v._v("工具栏会根据组件的空间维度及模型树中当前选定的节点进行动态变化。")]),v._v(" "),t("ul",[t("li",[v._v("使用 “切换到默认视图” 可以返回默认的等轴测视图。")]),v._v(" "),t("li",[v._v("除了使用鼠标滚轮进行缩放，也可以使用 “放大” 和 “缩小” 按钮完成这一操作。")]),v._v(" "),t("li",[v._v("使用 “缩放框” 来放大模型几何的特定区域。")]),v._v(" "),t("li",[v._v("使用 “缩放到窗口大小” 按钮来缩小几何，使其填满整个 “图形” 窗口。")])]),v._v(" "),t("p",[v._v("COMSOL 还提供多个平面视图按钮方便您从任意平面方向查看几何。我们可以在 xy 平面中查看几何，再次单击同一按钮就能查看几何的另一端。然后在 yz 平面和 zx 平面执行相同的操作。还可以更改图形渲染，改进几何的可视化效果。在选择几何时这项功能特别有用。可以打开或关闭 “布景灯”、使用 “透明”、或者对模型进行线框渲染。")]),v._v(" "),t("h2",{attrs:{id:"选择几何实体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择几何实体"}},[v._v("#")]),v._v(" 选择几何实体")]),v._v(" "),t("p",[v._v("保持 “透明” 在选择几何实体时会更容易一些。要在 “图形” 窗口中选择几何实体。只需将鼠标悬停在要选择的几何元素的上方。您会看到，此时几何以红色突出显示。继续单击即可完成选中。")]),v._v(" "),t("p",[v._v("要在重叠的几何实体中进行选择，可以使用鼠标滚轮按钮来选择几何。当您试图选择难以选中的几何实体或内部边界时，这种方法非常好用。")]),v._v(" "),t("ul",[t("li",[v._v("向上滚动滚轮会选中更靠里层的几何")]),v._v(" "),t("li",[v._v("向下滚动滚轮会选中更靠外层的几何")])]),v._v(" "),t("p",[v._v("通过这种方式，可以选择部分几何元素。")]),v._v(" "),t("h2",{attrs:{id:"隐藏或显示几何实体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐藏或显示几何实体"}},[v._v("#")]),v._v(" 隐藏或显示几何实体")]),v._v(" "),t("p",[v._v("要在模型中隐藏或显示几何实体。需要选择 “单击和隐藏” 按钮，将鼠标悬停在要隐藏的几何元素的上方并单击选中将其隐藏。通过切换“域、边界、边、点”，您可以隐藏不同级别的几何。选择完要隐藏的几何后。请确保取消选择 “单击和隐藏” 按钮。")]),v._v(" "),t("p",[v._v("通过此功能，您可以查看原本难以看到的几何内部的其他部分，而无需实际更改或影响任何几何元素。")]),v._v(" "),t("ul",[t("li",[v._v("使用 “查看未隐藏的对象” 按钮，可以查看所有未隐藏的实体。")]),v._v(" "),t("li",[v._v("使用 “仅查看隐藏的对象” 按钮，可以只查看隐藏的实体。")]),v._v(" "),t("li",[v._v("使用 “全部查看” 按钮，显示所有隐藏和未隐藏的几何。")])]),v._v(" "),t("p",[v._v("此外，当您隐藏部分几何元素时。COMSOL Multiphysics 会自动为这些实体创建显式选择的列表。您可以在 “定义” 节点下的 “视图” 节点中找到该列表。随后，可以重命名该显式选择。并修改隐藏实体的列表。如果希望重新开始，您始终可以通过 “重置隐藏” 按钮来重置所有隐藏的实体。您可以利用 “图形” 窗口和工具栏按钮。根据需要来完成定制模型视图，从而得到多种不同的分析透视图。")]),v._v(" "),t("h2",{attrs:{id:"更多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[v._v("#")]),v._v(" 更多")]),v._v(" "),t("p",[v._v("您除了可以")]),v._v(" "),t("ul",[t("li",[v._v("在图形窗口中使用鼠标选择简单几何元素或单个实体")]),v._v(" "),t("li",[v._v("使用滚轮按钮选择内部几何实体")])]),v._v(" "),t("p",[v._v("您还可以")]),v._v(" "),t("ul",[t("li",[v._v("使用图形窗口工具栏快速选择多个实体")]),v._v(" "),t("li",[v._v("使用选择列表窗口处理复杂的几何结构")]),v._v(" "),t("li",[v._v("使用设置窗口工具栏将几何实体列表从一个节点设置复制粘贴到另一个节点设置中")]),v._v(" "),t("li",[v._v("使用“预选”功能从功能区中添加物理场节点")])])])}),[],!1,null,null,null);_.default=i.exports}}]);