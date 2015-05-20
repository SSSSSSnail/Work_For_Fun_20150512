$(document).ready(function() {
	$("#page38_bg").after("<div id=\"page38_button_a\"><div id=\"page38_click_a\" class=\"page38_click\"></div></div><div id=\"page38_button_b\"><div id=\"page38_click_b\" class=\"page38_click\"></div></div><div id=\"page38_content\">")
	$("#page38_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page38_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	}).after("<div id=\"page38_click_0\"></div>").click(function() {
		$("#page38_click_0").hide()
		$(this).css({
			"background": "url(\'images/page38_bg_b.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		$("#page38_button_a").show()
		$("#page38_button_b").show()
		$("#page38_content").css({
			"position": "absolute",
			"top": "232px",
			"left": "352px",
			"width": "465px",
			"height": "322px",
			"background": "url(\'images/page38_a.png\') no-repeat",
			"background-size": "465px 322px"
		}).show()
	})

	$("#page38_click_0").css({
		"position": "absolute",
		"top": "412px",
		"left": "954px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})
	$("#page38_content").hide()

	var interval = setInterval(function() {
		$(".page38_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page38_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page38_button_a").hide().css({
		"position": "absolute",
		"top": "45px",
		"left": "479px",
		"width": "133px",
		"height": "139px",
		"background": "url(\'images/page38_button_a.png\') no-repeat",
		"background-size": "133px 139px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page38_button_a.png\') no-repeat",
			"background-size": "133px 139px"
		})
		$("#page38_content").css({
			"position": "absolute",
			"top": "232px",
			"left": "352px",
			"width": "465px",
			"height": "322px",
			"background": "url(\'images/page38_a.png\') no-repeat",
			"background-size": "465px 322px"
		})
		var childrenID = $(this).children(".page38_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page38_click").css({
		"margin-left": "68px",
		"margin-top": "68px"
	}).hide()

	$("#page38_button_b").hide().css({
		"position": "absolute",
		"top": "45px",
		"left": "642px",
		"width": "133px",
		"height": "139px",
		"background": "url(\'images/page38_button_b_0.png\') no-repeat",
		"background-size": "133px 139px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page38_button_b.png\') no-repeat",
			"background-size": "133px 139px"
		})
		$("#page38_content").css({
			"position": "absolute",
			"top": "199px",
			"left": "354px",
			"width": "556px",
			"height": "364px",
			"background": "url(\'images/page38_b.png\') no-repeat",
			"background-size": "556px 364px"
		})

		var childrenID = $(this).children(".page38_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page38_click").css({
		"margin-left": "68px",
		"margin-top": "68px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>9. Morte J, et al.J Urol. 2007, 178(4 Pt 1) ：1290-95.")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page38_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).dequeue().hide()
		} else {
			$(this).show()
		}
	})
}

function resetButton() {
	$("#page38_button_a").css({
		"background": "url(\'images/page38_button_a_0.png\') no-repeat",
		"background-size": "133px 139px"
	})

	$("#page38_button_b").css({
		"background": "url(\'images/page38_button_b_0.png\') no-repeat",
		"background-size": "133px 139px"
	})
}