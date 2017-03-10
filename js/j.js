function slider(val) {
	var attr=val.getElementsByTagName("img")[0].getAttribute("src");
	document.getElementsByClassName("slider")[0].setAttribute("style","background-image:url("+attr+")");
	    // document.getElementsByTagName("img")[1].style.boxSizing="borderBox";
	    // document.getElementsByTagName("img")[1].style.border="7px solid white"
	      
	    //   document.getElementsByTagName("img")[2].style.boxSizing="borderBox";
	    // document.getElementsByTagName("img")[2].style.border="7px solid white"
}























function openNav() {
    document.getElementsByClassName("hR").style.height = "400px";
}


function closeNav() {
	var mq = window.matchMedia("(max-width: 760px)");


if (mq.matches) {
    document.getElementsByClassName("hR")[0].style.display = "none";
}
 else {

    document.getElementsByClassName("hR")[0].style.display.backgroundColor = "green";
}
}
function k(){
	document.getElementsByClassName("hR")
}