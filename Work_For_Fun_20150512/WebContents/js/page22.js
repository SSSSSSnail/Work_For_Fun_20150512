$(document).ready(function() {
	$("#page22_bg").after("<div id=\"page22_button_a\"><div id=\"page22_click_a\" class=\"page22_click\"></div></div><div id=\"page22_button_b\"><div id=\"page22_click_b\" class=\"page22_click\"></div></div><div id=\"page22_button_c\"><div id=\"page22_click_c\" class=\"page22_click\"></div></div><div id=\"page22_content\"></div><div id=\"page22_c_next\"></div><div id=\"page22_c_prev\"></div>")
	$("#page22_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page22_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page22_c_next").css({
		"position": "absolute",
		"top": "560px",
		"left": "807px",
		"width": "36px",
		"height": "40px",
		"background": "url(\'images/page22_c_next.png\') no-repeat",
		"background-size": "36px 40px"
	}).hide().click(function() {
		$("#page22_content").css({
			"position": "absolute",
			"top": "304px",
			"left": "259px",
			"width": "507px",
			"height": "295px",
			"background": "url(\'images/page22_c_2.png\') no-repeat",
			"background-size": "507px 295px"
		})
		$(this).hide()
		$("#page22_c_prev").show()
	})
	$("#page22_c_prev").css({
		"position": "absolute",
		"top": "560px",
		"left": "184px",
		"width": "36px",
		"height": "40px",
		"background": "url(\'images/page22_c_prev.png\') no-repeat",
		"background-size": "36px 40px"
	}).hide().click(function() {
		$("#page22_content").css({
			"position": "absolute",
			"top": "299px",
			"left": "215px",
			"width": "620px",
			"height": "300px",
			"background": "url(\'images/page22_c_1.png\') no-repeat",
			"background-size": "620px 300px"
		})
		$(this).hide()
		$("#page22_c_next").show()
	})

	var interval = setInterval(function() {
		$(".page22_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page22_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page22_button_a").css({
		"position": "absolute",
		"top": "81px",
		"left": "119px",
		"width": "259px",
		"height": "167px",
		"background": "url(\'images/page22_button_a_0.png\') no-repeat",
		"background-size": "259px 167px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page22_button_a.png\') no-repeat",
			"background-size": "259px 167px"
		})

		$("#page22_content").css({
			"position": "absolute",
			"top": "300px",
			"left": "171px",
			"width": "682px",
			"height": "309px",
			"background": "url(\'images/page22_a.png\') no-repeat",
			"background-size": "682px 309px"
		})

		var childrenID = $(this).children(".page22_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page22_click").css({
		"margin-left": "195px",
		"margin-top": "68px"
	})

	$("#page22_button_b").css({
		"position": "absolute",
		"top": "81px",
		"left": "383px",
		"width": "259px",
		"height": "167px",
		"background": "url(\'images/page22_button_b_0.png\') no-repeat",
		"background-size": "259px 167px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page22_button_b.png\') no-repeat",
			"background-size": "259px 167px"
		})
		$("#page22_content").css({
			"position": "absolute",
			"top": "299px",
			"left": "171px",
			"width": "678px",
			"height": "307px",
			"background": "url(\'images/page22_b.png\') no-repeat",
			"background-size": "678px 307px"
		})
		var childrenID = $(this).children(".page22_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page22_click").css({
		"margin-left": "195px",
		"margin-top": "68px"
	})

	$("#page22_button_c").css({
		"position": "absolute",
		"top": "81px",
		"left": "647px",
		"width": "259px",
		"height": "167px",
		"background": "url(\'images/page22_button_c_0.png\') no-repeat",
		"background-size": "259px 167px"
	}).click(function() {
		resetButton()
		$("#page22_c_next").show()
		$(this).css({
			"background": "url(\'images/page22_button_c.png\') no-repeat",
			"background-size": "259px 167px"
		})
		$("#page22_content").css({
			"position": "absolute",
			"top": "299px",
			"left": "215px",
			"width": "620px",
			"height": "300px",
			"background": "url(\'images/page22_c_1.png\') no-repeat",
			"background-size": "620px 300px"
		})
		var childrenID = $(this).children(".page22_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page22_click").css({
		"margin-left": "195px",
		"margin-top": "68px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>18. Eisenberg MS,et al.J Urol. 2013,190(5)：1735-41.<br/>19.Makarov DV，et al．J Urol.2008，179（1）：156-62．")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page22_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).dequeue().hide()
		} else {
			$(this).show()
		}
	})
}

function resetButton() {
	$("#page22_bg").css({
		"background": "url(\'images/page22_bg_b.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$("#page22_button_a").css({
		"background": "url(\'images/page22_button_a_0.png\') no-repeat",
		"background-size": "259px 167px"
	})

	$("#page22_button_b").css({
		"background": "url(\'images/page22_button_b_0.png\') no-repeat",
		"background-size": "259px 167px"
	})

	$("#page22_button_c").css({
		"background": "url(\'images/page22_button_c_0.png\') no-repeat",
		"background-size": "259px 167px"
	})

	$("#page22_c_prev").hide()
	$("#page22_c_next").hide()
}