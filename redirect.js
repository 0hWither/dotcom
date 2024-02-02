window.onload = function relocate() {

    console.log("Relocating Webpage");
    var myWindow = window.open();
    myWindow.document.write('<html><head><link type="image/png" rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" /><title>‎ </title></head><body style="margin:0;">');
    myWindow.document.write('<iframe src="https://media.exid.me/main" width=100% height=100% style="margin:0;padding:0;border:none;"></iframe>');
    myWindow.document.write('</body></html>');

    window.close('','_parent','');
}
