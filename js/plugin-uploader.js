/**
 * @name     Wp-Player Admin JS
 * @desc     MetaBox JavaScript
 * @depend   jQuery
 * @author   M.J
 * @date     2014-12-19
 * @update   2014-12-24
 * @URL      http://webjyh.com
 * @version  2.0.1
 * 
 */
jQuery(document).ready(function(){var a=window.send_to_editor;jQuery(".WP-Player-File").on("click",function(){formField=jQuery(this).prev().attr("id");tb_show("","media-upload.php?media-upload.php?type=image&amp;TB_iframe=true");window.send_to_editor=function(b){fileUrl=jQuery(b).attr("href");jQuery("#"+formField).val(fileUrl);tb_remove();window.send_to_editor=a};return false});jQuery("#wp-player-tabs > li").on("click",function(){var b=jQuery(this).index();jQuery(this).addClass("current").siblings().removeClass("current");jQuery("#wp-player-row > div").hide().eq(b).fadeIn()});jQuery("#wp_player_get_xiami_id").on("click",function(){var d=jQuery("#mp3_xiami"),e=jQuery("#mp3_xiami_type"),c=d.val(),f=/^http[s]?:\/\/\w*[\.]?xiami.com+\/(\w+)\/+(\d+).*$/,g={};if(typeof c==="undefined"||c==""){d.focus()}var b=c.match(f);if(jQuery.isArray(b)){g.type=b[1];g.id=b[2]}else{if(!jQuery.isNumeric(c)){alert("获取虾米音乐ID失败！")}}if(jQuery.isArray(b)&&g.type&&g.id){d.val(g.id);e.children("option").prop("selected",false);jQuery("#mp3_xiami_type").find("option[value="+g.type+"]").prop("selected",true)}})});