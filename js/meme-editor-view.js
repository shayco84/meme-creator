'use strict'

let gCanvas = document.querySelector(".meme-canvas");
let gCtx = gCanvas.getContext("2d");

function drawImageOnCanvas(imgPath) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let img = document.querySelector(".dummy-img");
    canvas.width  = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}

function uploadUserImage() {
    // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
    // http://jsfiddle.net/z3JtC/4
}
