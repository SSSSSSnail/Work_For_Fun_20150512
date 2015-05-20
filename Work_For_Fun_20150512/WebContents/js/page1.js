$(document).ready(function() {
	$("#page1_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page1_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})
	
	$.getScript("js/common.js", function() {
		addComment("")
	})
})