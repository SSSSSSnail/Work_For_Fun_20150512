$(document).ready(function() {
	$("#page12_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page12_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>11.Bolla M, et al. N Engl J Med. 2009, 360(24): 2516-7.")
	})
})