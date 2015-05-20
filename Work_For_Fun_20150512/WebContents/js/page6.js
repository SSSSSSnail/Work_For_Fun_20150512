$(document).ready(function() {
	$("#page6_bg").after("<div id=\"page6_button_a\"><div id=\"page6_click_a\" class=\"page6_click\"></div></div><div id=\"page6_button_b\"><div id=\"page6_click_b\" class=\"page6_click\"></div></div><div id=\"page6_button_c\"><div id=\"page6_click_c\" class=\"page6_click\"></div></div><div id=\"page6_button_d\"><div id=\"page6_click_d\" class=\"page6_click\"></div></div>")

	$("#page6_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page6_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page6_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page6_click").css({
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page6_button_a").css({
		"position": "absolute",
		"top": "206px",
		"left": "76px",
		"width": "345px",
		"height": "132px",
		"background": "url(\'images/page6_button_a_0.png\') no-repeat",
		"background-size": "345px 132px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page6_button_a.png\') no-repeat",
			"background-size": "345px 132px"
		})
		$("#page6_bg").css({
			"background": "url(\'images/page6_a.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page6_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page6_click").css({
		"margin-left": "271px",
		"margin-top": "68px"
	})

	$("#page6_button_b").css({
		"position": "absolute",
		"top": "343px",
		"left": "76px",
		"width": "113px",
		"height": "165px",
		"background": "url(\'images/page6_button_b_0.png\') no-repeat",
		"background-size": "113px 165px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page6_button_b.png\') no-repeat",
			"background-size": "113px 165px"
		})
		$("#page6_bg").css({
			"background": "url(\'images/page6_b.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page6_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page6_click").css({
		"margin-left": "59px",
		"margin-top": "57px",
	})

	$("#page6_button_c").css({
		"position": "absolute",
		"top": "343px",
		"left": "192px",
		"width": "113px",
		"height": "165px",
		"background": "url(\'images/page6_button_c_0.png\') no-repeat",
		"background-size": "113px 165px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page6_button_c.png\') no-repeat",
			"background-size": "113px 165px"
		})
		$("#page6_bg").css({
			"background": "url(\'images/page6_c.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page6_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page6_click").css({
		"margin-left": "59px",
		"margin-top": "57px",
	})

	$("#page6_button_d").css({
		"position": "absolute",
		"top": "343px",
		"left": "308px",
		"width": "113px",
		"height": "165px",
		"background": "url(\'images/page6_button_d_0.png\') no-repeat",
		"background-size": "113px 165px"
	}).click(function() {
		resetButton()
		$(this).css({
			"background": "url(\'images/page6_button_d.png\') no-repeat",
			"background-size": "113px 165px"
		})
		$("#page6_bg").css({
			"background": "url(\'images/page6_d.png\') no-repeat",
			"background-size": "1024px 748px"
		})
		var childrenID = $(this).children(".page6_click").attr('id')
		showOrHidClick(childrenID)
	}).children(".page6_click").css({
		"margin-left": "59px",
		"margin-top": "57px",
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>6.Ploussard G, Mongiat-Artus P. Future Oncol. 2013, 9(1):93-102.<br/>13.Parmar H, et al. Br J Urol. 1987, 59(3): 248-54.<br/>14.European Association of Urology. Guidelines on prostate cancer. 2014.<br/>15.那彦群，叶章群，孙光等. 2014版中国泌尿外科疾病诊断治疗指南.<br/>16.Louda M，et al．Neuro Endocrinol Lett. 2012,33(8):761-764．")
	})
})

function showOrHidClick(selectedElementID) {
	$(".page6_click").each(function(index) {
		if (selectedElementID == $(this).attr("id")) {
			$(this).dequeue().hide()
		} else {
			$(this).show()
		}
	})
}

function resetButton() {
	$("#page6_button_a").css({
		"background": "url(\'images/page6_button_a_0.png\') no-repeat",
		"background-size": "345px 132px"
	})
	$("#page6_button_b").css({
		"background": "url(\'images/page6_button_b_0.png\') no-repeat",
		"background-size": "113px 165px"
	})
	$("#page6_button_c").css({
		"background": "url(\'images/page6_button_c_0.png\') no-repeat",
		"background-size": "113px 165px"
	})
	$("#page6_button_d").css({
		"background": "url(\'images/page6_button_d_0.png\') no-repeat",
		"background-size": "113px 165px"
	})
}