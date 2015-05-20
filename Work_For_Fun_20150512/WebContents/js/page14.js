$(document).ready(function() {
	$("#page14_bg").after("<div id=\"page14_bar_a\"><div id=\"page14_bar_number_a\"></div><div id=\"page14_bar_content_a\"></div></div><div id=\"page14_bar_b\"><div id=\"page14_bar_number_b\"></div><div id=\"page14_bar_content_b\"></div></div><div id=\"page14_bar_c\"><div id=\"page14_bar_number_c\"></div><div id=\"page14_bar_content_c\"></div></div><div id=\"page14_bar_d\"><div id=\"page14_bar_number_d\"></div><div id=\"page14_bar_content_d\"></div></div>")
	$("#page14_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page14_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	}).after("<div id=\"page14_number_a\"></div><div id=\"page14_number_b\"></div><div id=\"page14_number_c\"></div><div id=\"page14_number_d\"></div>")

	$("#page14_bar_a").css({
		"position": "absolute",
		"top": "189px",
		"left": "330px",
		"width": "61px",
		"height": "250px"
	})

	$("#page14_bar_b").css({
		"position": "absolute",
		"top": "189px",
		"left": "392px",
		"width": "61px",
		"height": "250px"
	})

	$("#page14_bar_c").css({
		"position": "absolute",
		"top": "189px",
		"left": "572px",
		"width": "61px",
		"height": "250px"
	})

	$("#page14_bar_d").css({
		"position": "absolute",
		"top": "189px",
		"left": "634px",
		"width": "61px",
		"height": "250px"
	})

	$("#page14_bar_content_a").css({
		"width": "61px",
		"height": "1px",
		"background": "url(\'images/page14_bar_1.png\')",
		"background-size": "61px 1px"
	}).delay(1000).animate({
		"height": "203px"
	})

	$("#page14_bar_number_a").css({
		"width": "61px",
		"height": "249px"
	}).delay(1000).animate({
		"height": "47px"
	}, function() {
		$("#page14_number_a").fadeIn()
	})

	$("#page14_bar_content_b").css({
		"width": "61px",
		"height": "1px",
		"background": "url(\'images/page14_bar_2.png\')",
		"background-size": "61px 1px"
	}).delay(1500).animate({
		"height": "5px"
	})

	$("#page14_bar_number_b").css({
		"width": "61px",
		"height": "249px"
	}).delay(1500).animate({
		"height": "245px"
	}, function() {
		$("#page14_number_b").fadeIn()
	})

	$("#page14_bar_content_c").css({
		"width": "61px",
		"height": "1px",
		"background": "url(\'images/page14_bar_1.png\')",
		"background-size": "61px 1px"
	}).delay(2000).animate({
		"height": "124px"
	})

	$("#page14_bar_number_c").css({
		"width": "61px",
		"height": "249px"
	}).delay(2000).animate({
		"height": "126px"
	}, function() {
		$("#page14_number_c").fadeIn()
	})

	$("#page14_bar_content_d").css({
		"width": "61px",
		"height": "1px",
		"background": "url(\'images/page14_bar_2.png\')",
		"background-size": "61px 1px"
	}).delay(2500).animate({
		"height": "3px"
	})

	$("#page14_bar_number_d").css({
		"width": "61px",
		"height": "249px"
	}).delay(2500).animate({
		"height": "247px"
	}, function() {
		$("#page14_number_d").fadeIn()
	})

	$("#page14_number_a").css({
		"position": "absolute",
		"top": "196px",
		"left": "329px",
		"width": "102px",
		"height": "37px",
		"background": "url(\'images/page14_number_a.png\')",
		"background-size": "102px 37px"
	}).hide()

	$("#page14_number_b").css({
		"position": "absolute",
		"top": "415px",
		"left": "403px",
		"width": "38px",
		"height": "15px",
		"background": "url(\'images/page14_number_b.png\')",
		"background-size": "38px 15px"
	}).hide()

	$("#page14_number_c").css({
		"position": "absolute",
		"top": "272px",
		"left": "573px",
		"width": "97px",
		"height": "39px",
		"background": "url(\'images/page14_number_c.png\')",
		"background-size": "97px 39px"
	}).hide()

	$("#page14_number_d").css({
		"position": "absolute",
		"top": "418px",
		"left": "645px",
		"width": "38px",
		"height": "15px",
		"background": "url(\'images/page14_number_d.png\')",
		"background-size": "38px 15px"
	}).hide()

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>2.李宁忱，宋毅，姜昊文等. 中华外科杂志. 2008, 46(21):1653-7.")
	})
})