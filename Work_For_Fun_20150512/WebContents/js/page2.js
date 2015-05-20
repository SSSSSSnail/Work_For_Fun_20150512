$(document).ready(function() {
	$("#page2_bg").after("<div id=\"page2_b\"></div><div id=\"page2_c\"></div><div id=\"page2_c_bar\"><div id=\"page2_c_bar_1\"></div><div id=\"page2_c_bar_2\"></div><div id=\"page2_c_bar_3\"></div></div><div id=\"page2_button\"></div>")

	$("#page2_bg").hide().css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page2_a.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page2_b").hide().css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page2_b.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page2_c").hide().css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page2_c.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page2_c_bar").hide().css({
		"position": "absolute",
		"top": "274px",
		"left": "346px",
		"width": "454px",
		"height": "50px"
	})

	$("#page2_c_bar_1").css({
		"width": "1px",
		"height": "50px",
		"float": "left",
		"background": "url(\'images/page2_c_bar_1px.png\')",
		"background-size": "1px 50px"
	})

	$("#page2_c_bar_2").css({
		"width": "9px",
		"height": "50px",
		"float": "left",
		"background": "url(\'images/page2_c_bar_header.png\') no-repeat",
		"background-size": "9px 50px"
	})

	$("#page2_c_bar_3").hide().css({
		"width": "83px",
		"height": "50px",
		"margin-left": "9px",
		"float": "left",
		"background": "url(\'images/page2_c_bar_no.png\') no-repeat",
		"background-size": "83px 50px"
	})

	var toLeft = true;

	$("#page2_button").css({
		"position": "absolute",
		"top": "571px",
		"left": "465px",
		"width": "94px",
		"height": "39px",
	}).click(function() {
		toLeft = !toLeft
		buttonClick(toLeft)
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>1.Schally AV, et al. Prog Clin Biol Res. 1987, 243A: 173-97.")
	})

	buttonClick(toLeft)
})

function buttonClick(toLeft) {
	if (toLeft) { //left
		$("#page2_button").css({
			"background": "url(\'images/page2_button_left.png\') no-repeat",
			"background-size": "94px 39px"
		})

		$("#page2_bg").show()
		$("#page2_b").delay(3000).fadeIn()

		$("#page2_c").hide()
		$("#page2_c_bar").hide()
		$("#page2_c_bar_3").hide()
		$("#page2_c_bar_1").css({
			"width": "1px"
		})
	} else { //right
		$("#page2_button").css({
			"background": "url(\'images/page2_button_right.png\') no-repeat",
			"background-size": "94px 39px"
		})

		$("#page2_bg").hide()
		$("#page2_b").hide()

		$("#page2_c").show()
		$("#page2_c_bar").show()

		$("#page2_c_bar_1").delay(1000).animate({
			width: "353px"
		}, "slow", function() {
			$("#page2_c_bar_3").show()
		})

	}
}