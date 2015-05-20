$(document).ready(function() {
	$("#page37_bg").after("<div id=\"page37_click_a\" class=\"page37_click\"></div><div id=\"page37_click_b\" class=\"page37_click\"></div>")
	$("#page37_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page37_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	}).click(function() {
		$(this).css({
			"background": "url(\'images/page37_content.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		$(".page37_click").hide()
	})

	var interval = setInterval(function() {
		$(".page37_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$("#page37_click_a").css({
		"position": "absolute",
		"top": "411px",
		"left": "441px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page37_click_b").css({
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