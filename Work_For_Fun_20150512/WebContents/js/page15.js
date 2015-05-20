$(document).ready(function() {
	$("#page15_bg").after("<div id=\"page15_bar_a\"><div id=\"page15_bar_number_a\"></div><div id=\"page15_bar_content_a\"></div></div><div id=\"page15_bar_b\"><div id=\"page15_bar_number_b\"></div><div id=\"page15_bar_content_b\"></div></div><div id=\"page15_bar_c\"><div id=\"page15_bar_number_c\"></div><div id=\"page15_bar_content_c\"></div></div><div id=\"page15_bar_d\"><div id=\"page15_bar_number_d\"></div><div id=\"page15_bar_content_d\"></div></div><div id=\"page15_bar_e\"><div id=\"page15_bar_number_e\"></div><div id=\"page15_bar_content_e\"></div></div>")
	$("#page15_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page15_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	}).after("<div id=\"page15_number_a\"></div><div id=\"page15_number_b\"></div><div id=\"page15_number_c\"></div><div id=\"page15_number_d\"></div><div id=\"page15_number_e\"></div>")

	$("#page15_bar_a").css({
		"position": "absolute",
		"top": "189px",
		"left": "337px",
		"width": "34px",
		"height": "250px"
	})

	$("#page15_bar_b").css({
		"position": "absolute",
		"top": "189px",
		"left": "437px",
		"width": "34px",
		"height": "250px"
	})

	$("#page15_bar_c").css({
		"position": "absolute",
		"top": "189px",
		"left": "538px",
		"width": "34px",
		"height": "250px"
	})

	$("#page15_bar_d").css({
		"position": "absolute",
		"top": "189px",
		"left": "639px",
		"width": "34px",
		"height": "250px"
	})

	$("#page15_bar_e").css({
		"position": "absolute",
		"top": "189px",
		"left": "740px",
		"width": "34px",
		"height": "250px"
	})

	$("#page15_bar_content_a").css({
		"width": "34px",
		"height": "1px",
		"background": "url(\'images/page15_bar.png\')",
		"background-size": "61px 1px"
	}).delay(1000).animate({
		"height": "176px"
	})

	$("#page15_bar_number_a").css({
		"width": "34px",
		"height": "249px"
	}).delay(1000).animate({
		"height": "74px"
	}, function() {
		$("#page15_number_a").fadeIn()
	})

	$("#page15_bar_content_b").css({
		"width": "34px",
		"height": "1px",
		"background": "url(\'images/page15_bar.png\')",
		"background-size": "61px 1px"
	}).delay(1500).animate({
		"height": "52px"
	})

	$("#page15_bar_number_b").css({
		"width": "34px",
		"height": "249px"
	}).delay(1500).animate({
		"height": "198px"
	}, function() {
		$("#page15_number_b").fadeIn()
	})

	$("#page15_bar_content_c").css({
		"width": "34px",
		"height": "1px",
		"background": "url(\'images/page15_bar.png\')",
		"background-size": "61px 1px"
	}).delay(2000).animate({
		"height": "15px"
	})

	$("#page15_bar_number_c").css({
		"width": "34px",
		"height": "249px"
	}).delay(2000).animate({
		"height": "235px"
	}, function() {
		$("#page15_number_c").fadeIn()
	})

	$("#page15_bar_content_d").css({
		"width": "34px",
		"height": "1px",
		"background": "url(\'images/page15_bar.png\')",
		"background-size": "61px 1px"
	}).delay(2500).animate({
		"height": "30px"
	})

	$("#page15_bar_number_d").css({
		"width": "34px",
		"height": "249px"
	}).delay(2500).animate({
		"height": "220px"
	}, function() {
		$("#page15_number_d").fadeIn()
	})

	$("#page15_bar_content_e").css({
		"width": "34px",
		"height": "1px",
		"background": "url(\'images/page15_bar.png\')",
		"background-size": "61px 1px"
	}).delay(3000).animate({
		"height": "3px"
	})

	$("#page15_bar_number_e").css({
		"width": "34px",
		"height": "249px"
	}).delay(3000).animate({
		"height": "247px"
	}, function() {
		$("#page15_number_e").fadeIn()
	})

	$("#page15_number_a").css({
		"position": "absolute",
		"top": "241px",
		"left": "342px",
		"width": "24px",
		"height": "16px",
		"background": "url(\'images/page15_number_a.png\')",
		"background-size": "24px 16px"
	}).hide()

	$("#page15_number_b").css({
		"position": "absolute",
		"top": "366px",
		"left": "442px",
		"width": "23px",
		"height": "16px",
		"background": "url(\'images/page15_number_b.png\')",
		"background-size": "23px 16px"
	}).hide()

	$("#page15_number_c").css({
		"position": "absolute",
		"top": "403px",
		"left": "550px",
		"width": "12px",
		"height": "16px",
		"background": "url(\'images/page15_number_c.png\')",
		"background-size": "12px 16px"
	}).hide()

	$("#page15_number_d").css({
		"position": "absolute",
		"top": "388px",
		"left": "645px",
		"width": "20px",
		"height": "16px",
		"background": "url(\'images/page15_number_d.png\')",
		"background-size": "20px 16px"
	}).hide()

	$("#page15_number_e").css({
		"position": "absolute",
		"top": "415px",
		"left": "751px",
		"width": "8px",
		"height": "16px",
		"background": "url(\'images/page15_number_e.png\')",
		"background-size": "8px 16px"
	}).hide()

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>3.Teillac P, et al. Hormone Research. 2004, 62:252–8.")
	})
})