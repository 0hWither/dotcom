console.log("Running rick roll")

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===70||key===27){
         if(!document.fullscreenElement){
              requestFullScreen(document.getElementById("rickroll_wrapper"));
              let vid = document.getElementById("rickroll");
              vid.volume = 1.0;
              vid.play;
          }else{
              
          }
      }
};


function requestFullScreen(elt) {
    console.log("Requesting fullscreen for", elt);
    if (elt.requestFullscreen) {
        elt.requestFullscreen();
    } else if (elt.msRequestFullscreen) {
        elt.msRequestFullscreen();
    } else if (elt.mozRequestFullScreen) {
        elt.mozRequestFullScreen();
    } else if (elt.webkitRequestFullscreen) {
        elt.webkitRequestFullscreen();
    } else {
        console.error("Fullscreen not available");
    }
}

