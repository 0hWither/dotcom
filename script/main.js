function openWindow() {
    var Input = document.getElementById('input')
        if (Input.value=='movies'||Input.value=='3.14159') {
        Input.value='';
        var x=window.open("https://codeprojects.org/projects/weblab/Y6sJje41UWAgoAqKm7O-dyEzctOZMGuqJNeFVvAN-Ps ");
        } else if (Input.value=='mario64') {
        Input.value='';
        var x=window.open("https://0hwither.com/games/super.mario.64/index.html");
        } else if (Input.value=='minecraft') {
            Input.value='';
            var x=window.open("https://0hwither.com/games/minecraft/index.html");
        } else if (Input.value=='surfer') {
            Input.value='';
            var x=window.open("https://0hwither.com/games/subway.surfers/index.html");
        }
}