var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();

var d = today.toLocaleDateString("en-US")
var m = "current: "
d = m.concat(d)
document.getElementById("cur").innerHTML = d;



setInterval(function upDate() {
    var d = today.toLocaleDateString("en-US")
    var m = "current: "
    d = m.concat(d)
    document.getElementById("cur").innerHTML = d;
}, 3000);