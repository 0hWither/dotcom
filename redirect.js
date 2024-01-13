window.onload = function relocate() {
    console.log("Relocating Webpage");
    var myWindow = window.open();
    myWindow.document.write('<html><head><title>Empty Page</title></head><body style="margin:0;">');
    myWindow.document.write('<iframe src="https://takeaim.store/main.html" width=100% height=100% style="margin:0;padding:0;border:none;"></iframe>');
    myWindow.document.write('</body></html>');

    window.open('about:blank','_self').close()
}