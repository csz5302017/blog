(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{444:function(v,_,e){"use strict";e.r(_);var o=e(11),n=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("忍无可忍，长期更新。")]),v._v(" "),e("p",[v._v("（其实我很想自己重新做一个 blog，但是太麻烦，也没什么实践价值了，无非 CRUD，而且维护起来很容易忽略 blog 本身的目的所在）")]),v._v(" "),e("h2",{attrs:{id:"关于代码高亮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于代码高亮"}},[v._v("#")]),v._v(" 关于代码高亮")]),v._v(" "),e("p",[v._v("本站目前（截至 09/20/2016）使用的是 Crayon 插件，这个插件配合 TinyMCE Advanced 简直神了，用户的数据对它们来说都不是什么东西，反正就随着各自的意愿来搞。其实这样还好，关键是，他俩意愿不一致。这 TM 就很尴尬了。以至于我很多文章，编辑再保存以后，格式出现各式各样的问题。")]),v._v(" "),e("p",[v._v("最终解决方案：")]),v._v(" "),e("ol",[e("li",[v._v("禁用 TinyMCE Advanced 的 keep "),e("code",[v._v("p")]),v._v(" & "),e("code",[v._v("br")]),v._v(" 功能；")]),v._v(" "),e("li",[v._v("禁用 Crayon 的所有其它扫描功能，只保留 "),e("code",[v._v("pre")]),v._v(" 扫描，即只保留块级代码高亮，同时禁用移除 "),e("code",[v._v("code")]),v._v(" 标签的相关功能；")]),v._v(" "),e("li",[v._v("关于行内代码的解决继续看下面。")])]),v._v(" "),e("p",[v._v("那么行内代码怎么办呢。这个 Crayon 太奇葩，如果用它自带的工具插入行内标签（原始是 "),e("code",[v._v("span")]),v._v("），会被它自己扫描出来认为是过时标签，然后强行转为 "),e("code",[v._v("pre")]),v._v("，关键是这一转它自己认得倒还好，然而 TinyMCE 不认为它仍然是行内元素，强行给它换行，套 "),e("code",[v._v("p")]),v._v(" 元素。")]),v._v(" "),e("p",[v._v("然后文章的格式就完了，而且是全完。")]),v._v(" "),e("p",[v._v("所以，解决办法是，不要使用 Crayon 的行内模式，也不要让它扫描行内代码，直接使用 "),e("code",[v._v("code")]),v._v(" 标签，然后去改 style，改得跟块级代码差不多就行了。")]),v._v(" "),e("p",[v._v("注：写完这些我就把 Crayon 这插件给删了。一个乱搞用户数据库，而且不用标准标签的东西，不要也罢。就直接用 "),e("code",[v._v("code")]),v._v(" 和 "),e("code",[v._v("pre")]),v._v("，还方便以后向其它平台转移。")])])}),[],!1,null,null,null);_.default=n.exports}}]);