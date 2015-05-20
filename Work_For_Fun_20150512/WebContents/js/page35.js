$(document).ready(function() {
	$("#page35_bg").after("<div id=\"page35_button_a\"><div id=\"page35_click_a\" class=\"page35_click\"></div></div><div id=\"page35_button_b\"><div id=\"page35_click_b\" class=\"page35_click\"></div></div><div id=\"page35_button_c\"><div id=\"page35_click_c\" class=\"page35_click\"></div></div>")
	$("#page35_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page35_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	var interval = setInterval(function() {
		$(".page35_click").each(function(index) {
			if ($(this).is(":visible")) {
				$(this).fadeOut(function() {
					$(this).fadeIn()
				})
			}
		})
	}, 3000)

	$(".page35_click").css({
		"margin-left": "170px",
		"margin-top": "170px",
		"width": "44px",
		"height": "44px",
		"background": "url(\'images/click.png\') no-repeat",
		"background-size": "44px 44px"
	})

	$("#page35_button_a").css({
		"position": "absolute",
		"top": "262px",
		"left": "142px",
		"width": "234px",
		"height": "233px",
		"background": "url(\'images/page35_button_a.png\') no-repeat",
		"background-size": "234px 233px"
	}).click(function() {
		$(this).hide().css({
			"background": "url(\'images/page35_a.png\') no-repeat",
			"background-size": "234px 233px"
		}).show("explode").unbind("click")

		$(this).children(".page35_click").hide()
	})

	$("#page35_button_b").css({
		"position": "absolute",
		"top": "262px",
		"left": "396px",
		"width": "234px",
		"height": "233px",
		"background": "url(\'images/page35_button_b.png\') no-repeat",
		"background-size": "234px 233px"
	}).click(function() {	
		$(this).hide().css({
			"background": "url(\'images/page35_b.png\') no-repeat",
			"background-size": "234px 233px"
		}).show("explode").unbind("click")

		$(this).children(".page35_click").hide()
	})

	$("#page35_button_c").css({
		"position": "absolute",
		"top": "262px",
		"left": "650px",
		"width": "234px",
		"height": "233px",
		"background": "url(\'images/page35_button_c.png\') no-repeat",
		"background-size": "234px 233px"
	}).click(function() {
		$(this).hide().css({
			"background": "url(\'images/page35_c.png\') no-repeat",
			"background-size": "234px 233px"
		}).show("explode").unbind("click")
		
		$(this).children(".page35_click").hide()
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>15.那彦群.叶章群.孙光等.2014版中国泌尿外科疾病诊断治疗指南.<br/>21. NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines®)：Prostate Cancer.2015.Version 1.<br/>26. Heidenreich A,et al.Eur Urol.2014,65(2):467-79.<br/>")
	})
})