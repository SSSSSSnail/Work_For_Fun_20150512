$(document).ready(function() {
	$("#page5_bg").after("<div id=\"page5_button_a\"></div><div id=\"page5_button_b\"></div><div id=\"page5_a_curve\"></div><div id=\"page5_b_curve\"></div>")

	$("#page5_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page5_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$("#page5_click_a").fadeOut(function() {
			$(this).fadeIn()
		})
		$("#page5_click_b").fadeOut(function() {
			$(this).fadeIn()
		})
	}, 3000)

	$("#page5_button_a").css({
		"position": "absolute",
		"top": "194px",
		"left": "152px",
		"width": "133px",
		"height": "167px",
		"background": "url(\'images/page5_button_a_0.png\') no-repeat",
		"background-size": "133px 167px"
	}).append("<div id=\"page5_click_a\"></div>").click(function() {
		$(this).css({
			"background": "url(\'images/page5_button_a.png\') no-repeat",
			"background-size": "133px 167px"
		})

		$("#page5_button_b").css({
			"background": "url(\'images/page5_button_b_0.png\') no-repeat",
			"background-size": "133px 167px"
		})

		$("#page5_bg").css({
			"background": "url(\'images/page5_a_bg.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		window.clearInterval(interval)
		$("#page5_click_a").hide()
		$("#page5_click_b").show()
		interval = setInterval(function() {
			$("#page5_click_b").fadeOut().delay(500).fadeIn()
		}, 3000)

		$("#page5_b_curve").hide()
		$("#page5_a_curve").delay(500).effect("blind", {
			mode: "show",
			direction: "horizontal"
		})
	})

	$("#page5_button_b").css({
		"position": "absolute",
		"top": "385px",
		"left": "152px",
		"width": "133px",
		"height": "167px",
		"background": "url(\'images/page5_button_b_0.png\') no-repeat",
		"background-size": "133px 167px"
	}).append("<div id=\"page5_click_b\"></div>").click(function() {
		$(this).css({
			"background": "url(\'images/page5_button_b.png\') no-repeat",
			"background-size": "133px 167px"
		})

		$("#page5_button_a").css({
			"background": "url(\'images/page5_button_a_0.png\') no-repeat",
			"background-size": "133px 167px"
		})

		$("#page5_bg").css({
			"background": "url(\'images/page5_b_bg.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		window.clearInterval(interval)
		$("#page5_click_b").hide()
		$("#page5_click_a").show()
		interval = setInterval(function() {
			$("#page5_click_a").effect("bounce")
		}, 2000)

		$("#page5_a_curve").hide()
		$("#page5_b_curve").delay(500).effect("blind", {
			mode: "show",
			direction: "horizontal"
		})
	})

	$("#page5_click_a").css({
		"margin-left": "79px",
		"margin-top": "83px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page5_click_b").css({
		"margin-left": "79px",
		"margin-top": "83px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page5_a_curve").hide().css({
		"position": "absolute",
		"top": "294px",
		"left": "410px",
		"width": "469px",
		"height": "174px",
		"background": "url(\'images/page5_a_curve.png\') no-repeat",
		"background-size": "469px 174px"
	})

	$("#page5_b_curve").hide().css({
		"position": "absolute",
		"top": "261px",
		"left": "448px",
		"width": "405px",
		"height": "230px",
		"background": "url(\'images/page5_b_curve.png\') no-repeat",
		"background-size": "405px 230px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>4.Botto H, Roupret M, Mathieu F, et al. Prog Urol. 2007, 17(2): 235-9.")
	})
})