$(document).ready(function() {
	$("#page27_bg").after("<div id=\"page27_button_a\"><div id=\"page27_click_a\" class=\"page27_click\"></div></div><div id=\"page27_button_b\"><div id=\"page27_click_b\" class=\"page27_click\"></div></div>")
	$("#page27_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page27_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page27_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page27_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page27_button_a").css({
		"position": "absolute",
		"top": "68px",
		"left": "251px",
		"width": "259px",
		"height": "191px",
		"background": "url(\'images/page27_button_a_0.png\') no-repeat",
		"background-size": "259px 191px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page27_button_a.png\') no-repeat",
			"background-size": "259px 191px"
		})
		$("#page27_bg").css({
			"background": "url(\'images/page27_a.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page27_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page27_click").css({
		"margin-left": "195px",
		"margin-top": "68px"
	})

	$("#page27_button_b").css({
		"position": "absolute",
		"top": "68px",
		"left": "515px",
		"width": "259px",
		"height": "191px",
		"background": "url(\'images/page27_button_b_0.png\') no-repeat",
		"background-size": "259px 191px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page27_button_b.png\') no-repeat",
			"background-size": "259px 191px"
		})
		$("#page27_bg").css({
			"background": "url(\'images/page27_b.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page27_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page27_click").css({
		"margin-left": "195px",
		"margin-top": "68px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>22. Zachary ZS,et al.Int J Radiat Oncol Biol Phys.2013,85(4):1012-17.")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page27_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).dequeue().hide()
		} else {
			$(this).show()
		}
	})
}

function resetButton() {
	$("#page27_button_a").css({
		"background": "url(\'images/page27_button_a_0.png\') no-repeat",
		"background-size": "259px 191px"
	})

	$("#page27_button_b").css({
		"background": "url(\'images/page27_button_b_0.png\') no-repeat",
		"background-size": "259px 191px"
	})
}