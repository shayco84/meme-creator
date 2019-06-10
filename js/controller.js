'use strict'

function onInit() {
    gCanvas = document.querySelector(".meme-canvas");
    gCtx = gCanvas.getContext("2d");
    searchByEnterKey()
    
}

function onSearch(){
    search()
}

function downloadMemeClicked(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = "my-meme.jpg"
}

// TODO - add support to upload file
// function uploadUserImage() {
//     // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
//     // http://jsfiddle.net/z3JtC/4
// }

function onKeyUpMemeText(elTextRow, event) {
    // TODO - validate user input is not Esc or some other weird key with event.keyCode
    gMeme[gMeme.curLine].txt = elTextRow.value
    renderMemeTexts()
}

function navBarItemClicked(elNavBarItem, page) {
    // TODO - add support to About and Contact tabs
    if (page === 'about' || page === 'contact') return

    // Editor view, and gMeme model - back to default:
    gMemeBackToDefault()
    document.getElementById('editor-txt-input').value = ''
    renderChooseLineBtn('top')

    renderActiveNavBarItem(elNavBarItem)
    toggleNavBarMenu()
    if (page === 'editor') {
        let elCurImg = document.querySelector(`.gallery-memes #${gMeme.selectedImgId}`)
        renderMemeEditor(elCurImg)
        updateDefaultFontSizeToFitCanvas(gCanvas.height)
    } else if (page === 'gallery') {
        backToGalClicked()
    }
}

function galleryImgClicked(elImg) {
    let elNavBarEditorItem = document.querySelector('.nav-bar-menu .menu-item-editor')
    renderActiveNavBarItem(elNavBarEditorItem)
    gMeme.selectedImgId = elImg.id
    renderMemeEditor(elImg) // Sets gCanvas.height
    updateDefaultFontSizeToFitCanvas(gCanvas.height)

}

function chooseLineClicked(line) {
    gMeme.curLine = line
    renderChooseLineBtn(line)
}

function clearInput(){
    document.querySelector('.search-input').value = '';
    renderFilteredGallery(gImgs)
  
  }

function backToGalClicked() {
    gMemeBackToDefault()
    document.getElementById('editor-txt-input').value = ''
    renderChooseLineBtn('top')
    let elNavBarGalleryItem = document.querySelector('.menu-item-gallery')
    renderActiveNavBarItem(elNavBarGalleryItem)
    renderGallery()
}
