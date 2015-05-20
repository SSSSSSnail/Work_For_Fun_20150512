$(document).ready(function() {
	$("#page16_bg").after("<div id=\"page16_line\"></div><div id=\"page16_point\"></div><div id=\"slider\"></div>")
	$("#page16_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page16_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page16_line").css({
		"position": "absolute",
		"top": "192px",
		"left": "270px",
		"width": "1px", //520
		"height": "231px",
		"background": "url(\'images/page16_line.png\') no-repeat",
		"background-size": "520px 231px"
	}).delay(1000).animate({
		"width": "520px"
	}, "slow")

	$("#page16_point").hide().css({
		"position": "absolute",
		"top": "333px",
		"left": "488px",
		"width": "188px",
		"height": "58px",
		"background": "url(\'images/page16_point.png\') no-repeat",
		"background-size": "188px 58px"
	}).delay(1200).effect("pulsate")

	$.getScript("js/common.js", function() {
		addComment("文献:<br/>5.Bouchot O, et al. Hormone Research. 1998,50:89-93.")
	})
})