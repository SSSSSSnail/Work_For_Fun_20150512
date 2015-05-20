$(document).ready(function() {
	$("#page20_bg").after("<div id=\"page20_line\"></div><div id=\"page20_text\"></div>")
	$("#page20_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page20_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page20_line").css({
		"position": "absolute",
		"top": "224px",
		"left": "250px",
		"width": "1px",
		"height": "252px",
		"background": "url(\'images/page20_line.png\') no-repeat",
		"background-size": "523px 252px"
	}).delay(1000).animate({
		"width": "523px"
	}, "slow")

	$("#page20_text").hide().css({
		"position": "absolute",
		"top": "504px",
		"left": "247px",
		"width": "530px",
		"height": "50px",
		"background": "url(\'images/page20_text.png\') no-repeat",
		"background-size": "530px 50px"
	}).delay(1300).fadeIn()

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>9. Morte J, et al.,J Urol. 2007, 178(4 Pt 1) ：1290-95.")
	})
})