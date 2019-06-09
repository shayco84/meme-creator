'use strict'

function onInit() {
    gCanvas = document.querySelector(".meme-canvas");
    gCtx = gCanvas.getContext("2d");
}

function onSearch(){
    search()
}

function downloadMemeClicked(elLink) {
    // console.log("elLink = ", elLink)
    downloadMeme(elLink)
}

function uploadUserImage() {
    // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
    // http://jsfiddle.net/z3JtC/4
}

function onKeyUpMemeText(elTextRow, event, line) {
    // TODO - validate user input is not Esc or some other weird key with event.keyCode
    gMeme[line].txt = elTextRow.value
    renderMemeTexts()
}

function navBarItemClicked(elNavBarItem, page) {
    renderActiveNavBarItem(elNavBarItem)
    if (page === 'editor') {
        let elCurImg = document.querySelector(`#gallery-memes #${gMeme.selectedImgId}`)
        renderMemeEditor(elCurImg)
    } else {
        toggleGalleryAndMemeEditor()
    }
}

function galleryImgClicked(elImg) {
    renderMemeEditor(elImg)
}
