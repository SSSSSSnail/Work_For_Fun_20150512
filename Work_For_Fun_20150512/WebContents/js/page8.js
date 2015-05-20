$(document).ready(function() {
	$("#page8_bg").after("<div id=\"page8_click_a\" class=\"page8_click\"></div><div id=\"page8_click_b\" class=\"page8_click\"></div><div id=\"page8_click_c\" class=\"page8_click\"></div><div id=\"page8_click_d\" class=\"page8_click\"></div><div id=\"page8_content\"></div>")

	$("#page8_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page8_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page8_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page8_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page8_click_a").css({
		"position": "absolute",
		"top": "223px",
		"left": "225px"
	}).click(function() {
		$("#page8_content").css({
			"background": "url(\'images/page8_a.png\') no-repeat",
			"background-size": "485px 335px"
		}).hide().effect("slide")
		showOrHidClick($(this).attr("id"))
	})

	$("#page8_click_b").css({
		"position": "absolute",
		"top": "302px",
		"left": "372px"
	}).click(function() {
		$("#page8_content").css({
			"background": "url(\'images/page8_b.png\') no-repeat",
			"background-size": "484px 341px"
		}).hide().effect("slide")
		showOrHidClick($(this).attr("id"))
	})

	$("#page8_click_c").css({
		"position": "absolute",
		"top": "462px",
		"left": "317px"
	}).click(function() {
		$("#page8_content").css({
			"background": "url(\'images/page8_c.png\') no-repeat",
			"background-size": "485px 334px"
		}).hide().effect("slide")
		showOrHidClick($(this).attr("id"))
	})

	$("#page8_click_d").css({
		"position": "absolute",
		"top": "469px",
		"left": "210px"
	}).click(function() {
		$("#page8_content").css({
			"background": "url(\'images/page8_d.png\') no-repeat",
			"background-size": "485px 334px"
		}).hide().effect("slide")
		showOrHidClick($(this).attr("id"))
	})

	$("#page8_content").css({
		"position": "absolute",
		"top": "194px",
		"left": "487px",
		"width": "485px",
		"height": "341px",
		"background": "url(\'images/page8_bg_1.png\') no-repeat",
		"background-size": "423px 180px"
	})

	$.getScript("js/common.js", function() {
		addComment("")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page8_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).hide()
		} else {
			$(this).show()
		}
	})
}