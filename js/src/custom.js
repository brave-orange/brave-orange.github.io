// build time:Wed Dec 08 2021 23:05:33 GMT+0800 (GMT+08:00)
$(function(){$.backstretch(["/images/background/saber1.jpg","/images/background/saber2.jpg","/images/background/bg1.jpg"],{duration:6e4,fade:1500})});$(function(){$(".saber1").backstretch(["/images/background/saber1.jpg"]);$(".saber2").backstretch(["/images/background/saber2.jpg"])});var a_click=1;var avatar_plug=0;jQuery(document).ready(function(t){var i=3;var e=44;t(".site-author-image-bilibili").click(function(o){if(a_click%i===0){avatar_plug++;t(".site-avatar-plug-bilibili").attr("src","/images/avatar-plug/bilibili_"+avatar_plug+".png")}if(avatar_plug===e){avatar_plug=0}t(".site-author-image-bilibili").attr("alt","再点击"+(i-a_click%i)+"次头像试试看~~");a_click++})});function createCopyBtns(){var t=$("figure table");if(t.length>0){function i(t){$imgOK=$("#copyBtn").find("#imgSuccess");if($imgOK.css("display")=="none"){$imgOK.css({opacity:0,display:"block"});$imgOK.animate({opacity:1},1e3);setTimeout(function(){$imgOK.animate({opacity:0},2e3)},2e3);setTimeout(function(){$imgOK.css("display","none")},4e3)}}$(".post-body").before('<div id="copyBtn" style="opacity: 0;position: absolute;top: 0;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;color: #6fb76f;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');var e=new ClipboardJS("#copyBtn",{target:function(){return document.querySelector("[copyFlag]")},isSupported:function(){return document.querySelector("[copyFlag]")}});e.on("success",function(t){t.clearSelection();i(t)});e.on("error",function(t){console.error("Action:",t.action);console.error("Trigger:",t.trigger)});$("#copyBtn").hover(function(){$(this).stop();$(this).css("opacity",1)},function(){$(this).animate({opacity:0},2e3)})}}$("figure").hover(function(){$("[copyFlag]").removeAttr("copyFlag");$(this).find(".code").attr("copyFlag",1);$currentFigure=$(this);$copyBtn=$("#copyBtn");if($copyBtn.lenght!=0){$copyBtn.stop();$copyBtn.css("opacity",1);$copyBtn.css("display","block");$figureTop=$currentFigure.offset().top;$figureLeft=$currentFigure.offset().left;$figureHeight=$currentFigure.outerHeight(true);$btnWidth=$copyBtn.width();$3btnHeight=$copyBtn.outerHeight(true)*3;$copyBtn.css("left",$figureLeft-$btnWidth-3);$copyBtn.css("top",Math.max($figureTop,Math.min($figureTop+$figureHeight-$3btnHeight,$(window).scrollTop()))+6);$(window).scroll(function(){$copyBtn.css("top",Math.max($figureTop,Math.min($figureTop+$figureHeight-$3btnHeight,$(window).scrollTop()))+6)})}},function(){$("#copyBtn").animate({opacity:0},2e3)});$(document).ready(function(){createCopyBtns()});
//rebuild by neat 