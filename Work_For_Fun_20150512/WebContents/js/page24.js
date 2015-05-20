$(document).ready(function() {
	$("#page24_bg").after("<div id=\"page24_button\"><div id=\"page24_click\"></div></div><div id=\"page24_content\"></div>")
	$("#page24_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page24_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$("#page24_click").fadeOut(function() {
					$(this).fadeIn()
				})
	}, 3000)

	$("#page24_button").css({
		"position": "absolute",
		"top": "228px",
		"left": "366px",
		"width": "298px",
		"height": "291px",
		"background": "url(\'images/page24_button.png\') no-repeat",
		"background-size": "298px 291px"
	}).click(function() {
		$(this).fadeOut()
		$("#page24_content").fadeIn()
	})
	$("#page24_content").css({
		"position": "absolute",
		"top": "217px",
		"left": "75px",
		"width": "889px",
		"height": "391px",
		"background": "url(\'images/page24_content.png\') no-repeat",
		"background-size": "889px 391px"
	}).hide()

	$("#page24_click").css({
		"margin-left": "194px",
		"margin-top": "187px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$.getScript("js/common.js", function() {
		addComment("")
	})
})