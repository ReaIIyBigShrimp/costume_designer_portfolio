$(document).ready(function(){var s=!1,t=!1,n=!1,i=!1,a=!1;$(".main-nav").on("mousedown touchstart",function(){s?($(this).find(".test1").css({transform:"none"}),$(this).find(".nav-link").css({opacity:"0"})):($(this).find(".test1").css({transform:"translate(100px,0px)"}),$(this).find(".nav-link").css({opacity:"0.5"})),t?$(this).find(".test2").css({transform:"none"}):$(this).find(".test2").css({transform:"translate(200px,0px)"}),n?$(this).find(".test3").css({transform:"none"}):$(this).find(".test3").css({transform:"translate(300px,0px)"}),i?$(this).find(".test4").css({transform:"none"}):$(this).find(".test4").css({transform:"translate(400px,0px)"}),a?$(this).find(".test5").css({transform:"none"}):$(this).find(".test5").css({transform:"translate(500px,0px)"}),console.log("Reverting menu state..."),s=!s,t=!t,n=!n,i=!i,a=!a})});