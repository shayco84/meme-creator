'use strict'

let gCanvas = document.querySelector(".meme-canvas");
let gCtx = gCanvas.getContext("2d");
gCtx.font = "30px Arial";  // TODO - change to impact font


function renderMemeEditor(elImg) {
    toggleGalleryAndMemeEditor()
    renderBaseImg(elImg)
}

function toggleGalleryAndMemeEditor() {
    let elGalleryContainer = document.querySelector('.gallery-container')
    let elEditorContainer = document.querySelector('.editor-wrapper')
    if (elGalleryContainer.style.display === 'none' ) elGalleryContainer.style.display = 'block'
    if (elGalleryContainer.style.display === 'block') elGalleryContainer.style.display = 'none'
    if (elEditorContainer.style.display  === 'none' ) elEditorContainer.style.display  = 'block'
    if (elEditorContainer.style.display  === 'block') elEditorContainer.style.display  = 'none'
}

function renderBaseImg(elImg) {
    gCanvas.width  = elImg.width;
    gCanvas.height = elImg.height;
    gCtx.drawImage(elImg, 0, 0);
}

function renderMemeText(elTextRow, line) {
    renderBaseImg(gElImg)
    // let y
    // if (line === 'top') y = 60
    // if (line === 'top') y = gElImg.height / 2
    // if (line === 'top') y = -60
    gCtx.font = "60px Arial";
    gCtx.textAlign = "center";
    gCtx.textBaseline = "bottom";
    gCtx.fillStyle = "black";  //<======= here
    gCtx.fillText(elTextRow.value, (gCanvas.width / 2), 60);

}

function uploadUserImage() {
    // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
    // http://jsfiddle.net/z3JtC/4
}
