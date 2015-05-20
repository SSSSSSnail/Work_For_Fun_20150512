$(document).ready(function() {
	$("#page7_bg").after("<div id=\"page7_button_a\"><div id=\"page7_click_a\" class=\"page7_click\"></div></div><div id=\"page7_button_b\"><div id=\"page7_click_b\" class=\"page7_click\"></div></div>")

	$("#page7_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page7_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page7_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page7_click").css({
		"margin-left": "73px",
		"margin-top": "73px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page7_button_a").css({
		"position": "absolute",
		"top": "56px",
		"left": "364px",
		"width": "133px",
		"height": "167px",
		"background": "url(\'images/page7_button_a_0.png\') no-repeat",
		"background-size": "133px 167px"
	}).click(function() {
		$(this).css({
			"background": "url(\'images/page7_button_a.png\') no-repeat",
			"background-size": "133px 167px"
		})
		$("#page7_button_b").css({
			"background": "url(\'images/page7_button_b_0.png\') no-repeat",
			"background-size": "133px 167px"
		})
		$("#page7_bg").css({
			"background": "url(\'images/page7_a.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page7_click").attr('id')
		showOrHidClick(childrenID)
	})

	$("#page7_button_b").css({
		"position": "absolute",
		"top": "56px",
		"left": "528px",
		"width": "133px",
		"height": "167px",
		"background": "url(\'images/page7_button_b_0.png\') no-repeat",
		"background-size": "133px 167px"
	}).click(function() {
		$(this).css({
			"background": "url(\'images/page7_button_b.png\') no-repeat",
			"background-size": "133px 167px"
		})
		$("#page7_button_a").css({
			"background": "url(\'images/page7_button_a_0.png\') no-repeat",
			"background-size": "133px 167px"
		})
		$("#page7_bg").css({
			"background": "url(\'images/page7_b.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page7_click").attr('id')
		showOrHidClick(childrenID)
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>2.李宁忱，宋毅，姜昊文等. 中华外科杂志. 2008, 46(21):1653-7.<br/>12.Boccardo F，et al. Prostate. 1987, 11(3): 243-55. ")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page7_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).hide()
		} else {
			$(this).show()
		}
	})
}