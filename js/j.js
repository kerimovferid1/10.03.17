function slider(val) {
    var attr = val.getElementsByTagName("img")[0].getAttribute("src");
    document.getElementsByClassName("slider")[0].setAttribute("style", "background-image:url(" + attr + ")");
    for (var i = 0; i < document.getElementsByClassName("js").length; i++) {
        var element = document.getElementsByClassName("js")[i];
        element.className = element.className.replace("otherclass", "");

    }
    if (!val.classList.contains('otherclass')) {
        val.className += " otherclass";
    }
    var elements = document.getElementsByClassName('js');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('otherclass')) {
            console.log(i);
            var el = document.getElementsByClassName('rM')[i]
            sli(el)
            break;
        }

    }

}

function clickNext() {
    var elements = document.getElementsByClassName('js');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('otherclass')) {
            if (i == (elements.length - 1)) {
                slider(elements[0])


            } else {
                slider(elements[i + 1])

            }
            break;
        }
    }
}

function clickPrev() {
    var elements = document.getElementsByClassName('js');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('otherclass')) {
            console.log(elements[i].children);
            if (i == 0) {
                slider(elements[elements.length - 1])

            } else {
                slider(elements[i - 1])


            }
            break;
        }
    }
}

function kh() {
    document.getElementsByClassName('b')[0].style.display = "none";
}

function sli(element) {
    for (var i = 0; i < document.getElementsByClassName("rM").length; i++) {
        var elementss = document.getElementsByClassName("rM")[i];
        elementss.className = elementss.className.replace("activated", "");

    }
    element.className += " activated";

}


function menu(m){
	  for (var i = 0; i < document.getElementsByClassName("hR").length; i++) {
        var element = document.getElementsByClassName("hR")[i];
        element.className = element.className.replace("other", "");

    }
    if (!m.classList.contains('other')) {
        m.className += " other";
    }
}