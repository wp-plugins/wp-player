=== WP-Player ===
Contributors: M.J
Donate link: https://me.alipay.com/jiangyahai
Tags: 虾米音乐,MP3,WP-Player,Mp3-Player,Player
Requires at least: 3.0
Tested up to: 3.8.1
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WP-Player是一个迷你歌曲播放器插件，有着美好的界面。

== Description ==

WordPress 插件 WP-Player 是一个迷你歌曲播放器，可以自己上传MP3，也可以使用虾米歌曲ID，理论支持格式mp3,m4a。

插件介绍：
	1.填写虾米歌曲ID
	2.自定义上传mp3文件，支持外链音乐文件
	3.自定义上传歌曲缩略图
	4.自定义歌曲名，歌手名
	5.自定义循环播放 loop="1" 和 自动播放 autoplay="1"
	6.在同时填写虾米ID和歌曲地址时，优先采用虾米歌曲地址
	7.自动播放只有在具体文章页面和Page页面才有用

PS：一篇文章只能插入一个播放器，因为用了MetaBox获取参数，只能一篇文章使用一个。多使用Over了，不要怪我。插件使用时，在插件设置页面，有个载入自带 jQuery 文件，此功能是有些主题以自带jQuery库，如果没有jQuery库的，可以勾选上这个勾，默认插件已勾选，如不需要请各位设置取消。

详细介绍： http://webjyh.com/wp-player/

== Installation ==
1. 上传 `wp-player`目录 到 `/wp-content/plugins/` 目录
2. 在后台插件菜单激活该插件
3. 后台设置虾米音乐解析的API地址，皮肤，和是否加载jQuery
4. 短代码调用插件：

	[player]
	[player loop="1" autoplay="1"]

== Screenshots ==

1. 播放器界面
2. 插件参数填写
3. 插件后台设置

== Changelog ==

= v1.3.2 =
1.修正 后台 jQuery 选项选择无用的Bug。

= v1.3.1 =
1.因提交到官方所以删除一些无用文件
2.由原来自带的jQuery库 修改调用WordPress自带jQuery库

= v1.3.0 =
1.增加百度云API，使解析虾米音乐地址更稳定
2.细节调整
3.修复Bug
4.代码重构
5.初次使用请到插件设置页面，设置虾米解析API。

= v1.2.0 =
1.增加皮肤选择
2.新增扁平化皮肤 具体效果查看本页面播放器
3.增加插件设定按钮
4.扁平化皮肤 只支持 Chrome 和 FireFox 游览器

= v1.1.0 =
1.因虾米API变动，解决获取歌曲地址问题！
2.添加根据虾米ID自动获取歌曲信息
3.MeatBox 更加简洁化

= v1.0.0 =
1.插件初始版本