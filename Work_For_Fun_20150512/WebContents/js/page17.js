$(document).ready(function() {
	$("#page17_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page17_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献:<br/>15.那彦群，叶章群，孙光等. 2014版中国泌尿外科疾病诊断治疗指南.<br/>17.那彦群，叶章群，孙光等. 2011版中国泌尿外科疾病诊断治疗指南.")
	})
})