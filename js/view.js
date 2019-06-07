'use strict'

let gCanvas = document.querySelector(".meme-canvas");
let gCtx = gCanvas.getContext("2d");
gCtx.font = "30px Arial";  // TODO - change to impact font

function renderMemeEditor(elImg) {
    gMeme.selectedImgId = elImg.id
    toggleGalleryAndMemeEditor()
    renderBaseImg(elImg)
}

function toggleGalleryAndMemeEditor() {
    let elGalleryPageContainer = document.querySelector('.gallery-page-container')
    let elEditorPageContainer  = document.querySelector('.editor-page-container')
    elGalleryPageContainer.classList.toggle('display-none')
    elEditorPageContainer.classList.toggle('display-none')
}

function renderBaseImg(elImg) {
    gCanvas.width  = elImg.width;
    gCanvas.height = elImg.height;
    gCtx.drawImage(elImg, 0, 0);
}

function renderMemeText(elTextRow, line) {
    let elMemes = document.querySelector("#gallery-memes")
    let elCurImg = elMemes.querySelector(`#${gMeme.selectedImgId}`)
    renderBaseImg(elCurImg)
    // let y
    // if (line === 'top') y = 60
    // if (line === 'middle') y = gCanvas.height / 2
    // if (line === 'bottom') y = -60
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
