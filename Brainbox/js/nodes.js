// JavaScript Node editor
// Author Joseph Miller
// http://brainbox.com

/*
 * Copyright 2020 Joseph Buskmiller
  Under the fuck off and die license.
  You can't use my code at all, no modifications or distribution.

 * 
 * 
 * 
 * 
 */


var canvas;
var ctx;


var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;


const DELAY = 40;
const C_HEIGHT = 300;
const C_WIDTH = 300;

const LEFT_KEY = 65;
const RIGHT_KEY = 68;
const UP_KEY = 87;
const DOWN_KEY = 83;

mousedown = 0;
mousedownx = 0;
mousedowny = 0;

document.addEventListener("mousedown", function () {
    mousedown = 1;
    mousedownx = mouseEvent.screenX;    
    mousedowny = mouseEvent.screenY;
    alert(mousedownx);
    for (i = 0; i < nodes.length; i++) {
        //check if mouse position is over any of the nodes, and if so, update their dragged property
        if (mousedownx >= nodes[i].posx && mousedownx <= nodes[i].posx + 250) {
            if (mousedowny >= nodes[i].posy && mousedowny <= nodes[i].posy + 100) {
                //nodes[i].dragged = 1
            } else {
                //nodes[i].dragged = 0
            }
        } else {
            nodes[i].dragged = 0
        }
    } 
}); 

document.addEventListener("mouseup", function () {
    mousedown = 0;
    var diff;
    diff = mousedownx + 5;
    //alert(diff);
}); 

let nodes = [
    { posx: 50, posy: 52, type: 0, dragged: 1}
    , { posx: 520, posy: 108, type: 1, dragged: 0 }
    , { posx: 23, posy: 460, type: 2, dragged: 0 }
]


function init() {

    canvas = document.getElementById('nodes_canvas');
    ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    loadImages();
    setTimeout("main()", DELAY);
}



function loadImages() {


}



function draw() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var i;
    for (i = 0; i < nodes.length; i++) {
        drawnode(nodes[i].posx, nodes[i].posy, nodes[i].type)    
    } 
    
}

function drawnode(posx, posy, type) {
    
    ctx.beginPath();
    ctx.rect(posx, posy, 250, 100);
    switch (type) {
        case 0:
            ctx.fillStyle = "#99c6b9";
            break;
        
        default:
            ctx.fillStyle = "#a8b7ab";
            break;
        
    }
    
    ctx.fill(); 
    ctx.fillStyle = "#680e47";
    ctx.font = "30px Major Mono Display";

    switch (type) {
        case 0:
            ctx.fillText("input", posx, posy);
            break;
        case 1:
            ctx.fillText("addtion", posx, posy);
            break;
        case 2:
            ctx.fillText("subtraction", posx, posy);
            break;
        case 3:
            ctx.fillText("multiplication", posx, posy);
            break;
        case 4:
            ctx.fillText("divison", posx, posy);
            break;
    }
}

function drag() {
    if (mousedown) {
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].dragged == 1) {
                nodes[i].posx += mouseEvent.screenX - mousedownx;
                nodes[i].posy += mouseEvent.screenY - mousedowny;
                nodes[i].posx += 2;
            }
        } 
    }
    
    
}

function click() {
    alert("asdf");
}

function main() {




    draw();
    drag();
    setTimeout("main()", DELAY);
    
}

onkeydown = function (e) {

    var key = e.keyCode;

    if ((key == LEFT_KEY) && (!rightDirection)) {

        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {

        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {

        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {

        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }
};    