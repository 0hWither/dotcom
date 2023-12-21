document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===13){
        check();
    }
}


var button = document.getElementById("submit")
var input = document.getElementById("pswd_input")

function check() {
    if (input.value=="apple"||input.value=="APPLE") {
        correct()
    } else {
        wrong()
    }
}

function wrong() {
    console.log("Incorrect PSWD")
    input.value=""
    button.className="bt-shake"
    setTimeout(function(){
        console.log("stop")
        button.className="submit_btn"
    },700)
}

var main = document.getElementById("main")
var menu = document.getElementById("menu")

var popup = document.getElementById("popup")

function correct() {
    /* window.location="games/" */
    main.className="hide main center"
    setTimeout(function(){
        menu.className="main center menu"
        popup.className="popup_notification"
    },600)
}