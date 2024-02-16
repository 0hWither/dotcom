console.log("Loading Fullscreen Module");
document.fullscreenEnabled=true;

var fs = document.getElementById("fs-element");
const fsBTN = document.getElementById("fs-btn");



function rqfs() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fs.requestFullscreen().catch((err) => {
      console.err(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
    );
  });
  }
}

if (fsBTN) {
  fsBTN.className="fs-btn fs-disabled";
  fs.appendChild(fsBTN);
  fsBTN.onclick = rqfs;
}

document.addEventListener("fullscreenchange",()=> {
  if (fsBTN==null) return;
  if (document.fullscreenElement) {
    fsBTN.className="fs-btn fs-enabled";
  } else {
    fsBTN.className="fs-btn fs-disabled";
  }
});

document.addEventListener("keypress",(a)=>{
  if (a.key=="f") {
    rqfs()
  }
})



