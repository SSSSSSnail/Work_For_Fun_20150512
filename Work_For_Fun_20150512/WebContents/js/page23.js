$(document).ready(function() {
	$("#page23_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page23_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>19.Makarov DV，et al．J Urol.2008，179（1）：156-62．")
	})
})