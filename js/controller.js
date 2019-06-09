'use strict'

function onInit() {

}

function onSearch(){
    search()
}

function downloadMemeClicked(elLink) {
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
    // TODO - add support to About and Contact tabs
    if (page === 'about' || page === 'contact') return
    renderActiveNavBarItem(elNavBarItem)
    if (page === 'editor') {
        let elCurImg = document.querySelector(`#gallery-memes #${gMeme.selectedImgId}`)
        renderMemeEditor(elCurImg)
    } else if (page === 'gallery') {
        renderGallery()
    }
}

function galleryImgClicked(elImg) {
    let elNavBarEditorItem = document.querySelector('.nav-bar-menu .menu-item-editor')
    renderActiveNavBarItem(elNavBarEditorItem)
    gMeme.selectedImgId = elImg.id
    renderMemeEditor(elImg)
}
