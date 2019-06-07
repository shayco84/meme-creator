'use strict'

let gCanvas = document.querySelector(".meme-canvas");
let gCtx = gCanvas.getContext("2d");

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

function renderMemeTexts() {
    let elMemes = document.querySelector("#gallery-memes")
    let elCurImg = elMemes.querySelector(`#${gMeme.selectedImgId}`)
    renderBaseImg(elCurImg)
    let lines = ["top", "middle", "bottom"]
    for (let line of lines) {
        gCtx.font         = gMeme[line].font
        gCtx.textAlign    = gMeme[line].align
        gCtx.fillStyle    = gMeme[line].color
        gCtx.textBaseline = "bottom"
        let y
        if (line === 'top'   ) y = 60
        if (line === 'middle') y = +gCanvas.height / 2 + 40
        if (line === 'bottom') y = +gCanvas.height
        gCtx.fillText(gMeme[line].txt, +gCanvas.width / 2, y);
    }
}

function uploadUserImage() {
    // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
    // http://jsfiddle.net/z3JtC/4
}
