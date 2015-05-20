$(document).ready(function() {
	$("#page3_bg").after("<div id=\"page3_a\"></div><div id=\"page3_b\"></div><div id=\"page3_click\"></div>")

    $("#page3_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page3_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page3_a").css({
		"position": "absolute",
		"top": "162px",
		"left": "112px",
		"width": "711px",
		"height": "332px",
		"background": "url(\'images/page3_a.png\') no-repeat",
		"background-size": "711px 332px"
	})

	$("#page3_b").hide().css({
		"position": "absolute",
		"top": "97px",
		"left": "130px",
		"width": "765px",
		"height": "511px",
		"background": "url(\'images/page3_b.png\') no-repeat",
		"background-size": "765px 511px"
	})

	var interval = setInterval(function() {
		$("#page3_click").fadeOut(function() {
					$(this).fadeIn()
				})
	}, 3000)

	$("#page3_click").css({    
		"position": "absolute",
		"top": "500px",
		"left": "590px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	}).click(function() {
		$("#page3_a").effect("drop")
		$("#page3_b").effect("slide")
		$(this).hide()
		window.clearInterval(interval)
	})      
                  
	$.getScript("js/common.js", function() {
		addComment("")
	})
})