$(document).ready(function() {
	$("#page9_bg").after("<div id=\"page9_button\"><div id=\"page9_click_a\" class=\"page9_click\"></div><div id=\"page9_click_b\" class=\"page9_click\"></div></div>")

	$("#page9_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page9_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page9_click").each(function(index) {
			$(this).fadeOut(function() {
				$(this).fadeIn()
			})
		})
	}, 3000)

	$(".page9_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page9_click_a").css({
		"float": "left",
		"margin-left": "165px",
		"margin-top": "250px"
	})

	$("#page9_click_b").css({
		"float": "left",
		"margin-left": "570px",
		"margin-top": "-45px"
	})

	$("#page9_button").css({
		"position": "absolute",
		"top": "253px",
		"left": "186px",
		"width": "653px",
		"height": "305px",
		"background": "url(\'images/page9_a.png\') no-repeat",
		"background-size": "653px 305px"
	}).click(function() {
		$(this).css({
			"background": "url(\'images/page9_b.png\') no-repeat",
			"background-size": "653px 305px"
		}).hide().effect("slide", {
			"direction": "up"
		}).unbind("click")
		$(".page9_click").hide()
		window.clearInterval(interval)
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>2.李宁忱，宋毅，姜昊文等. 中华外科杂志. 2008, 46(21):1653-7.")
	})
})