$(document).ready(function() {
	$("#page26_bg").css({
		"width": "1024px",
		"height": "748px",
		"background": "url(\'images/page26_bg.png\') no-repeat",
		"background-size": "1024px 748px"
	})

	$.getScript("js/common.js", function() {
		addComment("文献：<br/>15.那彦群.叶章群.孙光等.2014版中国泌尿外科疾病诊断治疗指南<br/>21. NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines®)：Prostate Cancer.2015.Version 1.")
	})
})