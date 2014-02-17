 
$(document).ready(function(){
 
});
var count=0;
 function initiateLoader (){
	console.log("called"+count);
	count++;
	$("#loader-top").css({"left":"0"});
						$("#loader-top").css({"right":""});
	$("#loader-top").animate({width:'100%'}, 5000, function(){
						$("#loader-top").css({"right":"0"});
						$("#loader-top").css({"left":""});
	});
	$("#loader-top").animate({width:'0%'}, 5000, initiateLoader  );
 }
 
 function killLoader(){
	$("#loader-top").clearQueue().stop(); 
	 $("#loader-top").removeAttr("style");
	 $("#loader-top").css({"height":"4px",   "width":"0px" ,"position":"fixed", "top":"0px", "background": "rgb(2, 150, 2)" , "z-index": "1000"});
 }