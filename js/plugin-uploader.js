/**
 * @name     Wp-Player Admin JS
 * @desc     MetaBox JavaScript
 * @depend   jQuery
 * @author   M.J
 * @date     2014-12-19
 * @update   2014-12-19
 * @URL      http://webjyh.com
 * @version  2.0.0
 * 
 */
jQuery(document).ready(function(){var b=window.send_to_editor;jQuery(".WP-Player-File").on("click",function(){formField=jQuery(this).prev().attr("id");tb_show("","media-upload.php?media-upload.php?type=image&amp;TB_iframe=true");window.send_to_editor=function(a){fileUrl=jQuery(a).attr("href");jQuery("#"+formField).val(fileUrl);tb_remove();window.send_to_editor=b};return false});jQuery("#wp-player-tabs > li").on("click",function(){var a=jQuery(this).index();jQuery(this).addClass("current").siblings().removeClass("current");jQuery("#wp-player-row > div").hide().eq(a).fadeIn()});jQuery("#wp_player_get_xiami_id").on("click",function(){var k=jQuery("#mp3_xiami"),j=jQuery("#mp3_xiami_type"),l=k.val(),i=/^http[s]?:\/\/\w*[\.]?xiami.com+\/(\w+)\/+(\d+).*$/,h={};if(typeof l==="undefined"||l==""){k.focus()}var a=l.match(i);if(jQuery.isArray(a)){h.type=a[1];h.id=a[2]}else{if(!jQuery.isNumeric(l)){alert("获取虾米音乐ID失败！")}}if(jQuery.isArray(a)&&h.type&&h.id){k.val(h.id);j.children("option").prop("selected",false);jQuery("#mp3_xiami_type").find("option[value="+h.type+"]").prop("selected",true)}})});