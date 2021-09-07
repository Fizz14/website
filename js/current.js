var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();

var d = today.toLocaleDateString("en-US")
var m = "current: "
d = m.concat(d)
document.getElementById("cur").innerHTML = d;

const themeSwitch = document.querySelector('input');

setInterval(function upDate() {
    var d = today.toLocaleDateString("en-US")
    var m = "current: "
    d = m.concat(d)
    document.getElementById("cur").innerHTML = d;
}, 3000);

function init() {
    var mode = window.localStorage.getItem("mode");
    if(mode == "light") {
        themeSwitch.checked = true;
        document.body.classList.remove('darkmode');
    } else {
        themeSwitch.checked = false;
        document.body.classList.add('darkmode');
    }
}

themeSwitch.addEventListener('change', () => {
    
    
    var mode = window.localStorage.getItem("mode");
    if(mode == "dark") {
        localStorage.setItem("mode", "light");
        document.body.classList.remove('darkmode');
    } else {
        localStorage.setItem("mode", "dark");
        document.body.classList.add('darkmode');
    }
    
});