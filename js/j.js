function slider(val) {
	var attr=val.getElementsByTagName("img")[0].getAttribute("src");
	document.getElementById("slider")[1].setAttribute("style","background-image:url("+attr+")");
}