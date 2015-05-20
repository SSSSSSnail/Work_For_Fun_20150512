$(document).ready(function() {
	$("#page11_bg").append("<div id=\"page11_number\"></div>")
	$("#page11_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page11_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page11_number").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page11_number.png\') no-repeat",
		"background-size": "1024px 748px"
	}).hide().delay(1000).fadeIn()

	$.getScript("js/common.js", function() {
		addComment("")
	})
})