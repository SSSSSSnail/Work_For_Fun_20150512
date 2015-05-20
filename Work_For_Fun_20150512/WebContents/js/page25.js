$(document).ready(function() {
	$("#page25_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page25_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>20.Siddiqui SA,et al.J Urol.2008,179(5)：1830-37.")
	})
})