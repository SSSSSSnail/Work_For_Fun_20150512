function addComment(comment) {
	if (comment == "") {
		return
	}
	var _body = $("body")
	_body.append("<div id=\"showComment\"></div>")
	_body.append("<div id=\"comment\"><div id=\"commentIcon\"></div><div id=\"commentContent\"></div></div>")
	$("#showComment").css({
		"position": "absolute",
		"top": "691px",
		"left": "67px",
		"width": "50px",
		"height": "50px",
		"background": "url(\'images/commentIn.png\') no-repeat",
		"background-size": "25px 25px"
	}).click(function() {
		$(this).fadeOut()
		$("#comment").fadeIn().animate({top: commentTop}, "fast")
	})

	$("#commentIcon").css({
		"width": "25px",
		"height": "25px",
		"float": "left",
		"background": "url(\'images/commentOut.png\') no-repeat",
		"background-size": "25px 25px"
	})

	$("#commentContent").css({
		"width": "450px",
		"float": "left",
		"margin-left": "10px",
		"word-wrap": "break-word"
	}).append(comment)

	var commentTopInt = 748 - $("#commentContent").height() - 20 - 20
	var commentTop = commentTopInt + "px"

	$("#comment").css({
		"position": "absolute",
		"padding": "10px",
		"top": "750px",
		"left": "62px",
		"width": "485px",
		"background-color": "white",
		"border": "1px solid #90c63d"
	}).hide().click(function() {
		$(this).animate({top: "750px"}, "fast").fadeOut()
		$("#showComment").fadeIn()
	})
}

var TempCache = {
	cache: function(value) {
		localStorage.setItem("EasyWayTempCache", value);
	},
	getCache: function() {
		return localStorage.getItem("EasyWayTempCache");
	},
	setItem: function(key, value) {
		localStorage.setItem(key, value);
	},
	getItem: function(key) {
		return localStorage.getItem(key);
	},
	removeItem: function(key) {
		return localStorage.removeItem(key);
	}
}