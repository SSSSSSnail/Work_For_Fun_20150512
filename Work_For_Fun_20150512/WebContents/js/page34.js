$(document).ready(function() {
	$("#page34_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page34_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>24.NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines®)：Prostate Cancer.2014.Version 1")
	})
})