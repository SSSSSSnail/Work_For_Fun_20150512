$(document).ready(function() {
	$("#page18_bg").after("<div id=\"page18_click_a\" class=\"page18_click\"></div><div id=\"page18_click_b\" class=\"page18_click\"></div>")
	$("#page18_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page18_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	}).click(function() {
		$(this).css({
			"background": "url(\'images/page18_content.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		$(".page18_click").hide()
	})

	var interval = setInterval(function() {
		$(".page18_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$("#page18_click_a").css({
		"position": "absolute",
		"top": "411px",
		"left": "441px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page18_click_b").css({
		"position": "absolute",
		"top": "411px",
		"left": "785px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>10.Mounedji N, et al. J Clin Oncol .2011, 29(7 Suppl): 162（Poster）.")
	})
})