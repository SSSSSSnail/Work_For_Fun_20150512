$(document).ready(function() {
	$("#page13_bg").after("<div id=\"page13_a\"><div id=\"page13_click_a\" class=\"page13_click\"></div></div><div id=\"page13_b\"><div id=\"page13_click_b\" class=\"page13_click\"></div></div>")
	$("#page13_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page13_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page13_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page13_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page13_a").css({
		"position": "absolute",
		"top": "264px",
		"left": "147px",
		"width": "412px",
		"height": "260px",
		"background": "url(\'images/page13_button_a.png\') no-repeat",
		"background-size": "412px 260px"
	}).click(function() {
		$(this).hide().css({
			"background": "url(\'images/page13_a.png\') no-repeat",
			"background-size": "412px 260px"
		}).show("explode").unbind("click")
		// $("#page13_b").css({
		// 	"background": "url(\'images/page13_button_b.png\') no-repeat",
		// 	"background-size": "232px 260px"
		// })
		var childrenID = $(this).children(".page13_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page13_click").css({
		"margin-left": "358px",
		"margin-top": "206px"
	})

	$("#page13_b").css({
		"position": "absolute",
		"top": "264px",
		"left": "657px",
		"width": "232px",
		"height": "260px",
		"background": "url(\'images/page13_button_b.png\') no-repeat",
		"background-size": "232px 260px"
	}).click(function() {
		$(this).hide().css({
			"background": "url(\'images/page13_b.png\') no-repeat",
			"background-size": "232px 260px"
		}).show("explode").unbind("click")
		// $("#page13_a").css({
		// 	"background": "url(\'images/page13_button_a.png\') no-repeat",
		// 	"background-size": "412px 260px"
		// })
		var childrenID = $(this).children(".page13_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page13_click").css({
		"margin-left": "178px",
		"margin-top": "206px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>3.Teillac P, et al. Hormone Research. 2004, 62:252–8.")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page13_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).hide()
		} 
	})
}