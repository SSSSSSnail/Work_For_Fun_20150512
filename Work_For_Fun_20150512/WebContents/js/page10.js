$(document).ready(function() {
	$("#page10_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page10_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>13.Parmar H, et al. Br J Urol. 1987, 59(3): 248-54.")
	})
})