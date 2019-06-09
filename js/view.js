'use strict'

let gCanvas = document.querySelector(".meme-canvas");
let gCtx = gCanvas.getContext("2d");

function renderMemeEditor(elImg) {
    document.querySelector('.gallery-page-container').classList.add('display-none')
    document.querySelector('.editor-page-container').classList.remove('display-none')
    renderBaseImg(elImg)
}

function renderGallery() {
    document.querySelector('.gallery-page-container').classList.remove('display-none')
    document.querySelector('.editor-page-container').classList.add('display-none')
}

function renderBaseImg(elImg) {
    gCanvas.width = elImg.width;
    gCanvas.height = elImg.height;
    gCtx.drawImage(elImg, 0, 0);
}

function renderMemeTexts() {
    let elMemes = document.querySelector("#gallery-memes")
    let elCurImg = elMemes.querySelector(`#${gMeme.selectedImgId}`)
    renderBaseImg(elCurImg)
    let lines = ["top", "middle", "bottom"]
    for (let line of lines) {
        gCtx.font         = `${gMeme[line].fontSize} ${gMeme[line].fontFamily}`
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

function renderFilteredGallery(filtered) {
    let strHtml = `<ul id="gallery-memes">\n`
    for (let img of filtered) {
        strHtml += `<li class="gallery-meme"><img id="img-${img.id}" onclick="galleryImgClicked(this)" src="${img.url}" alt=""></li>\n`
    }
    strHtml += `</ul>`
    document.querySelector('.gallery-container').innerHTML = strHtml
}

function uploadUserImage() {
    // https://stackoverflow.com/questions/13938686/can-i-load-a-local-file-into-an-html-canvas-element
    // http://jsfiddle.net/z3JtC/4
}

function renderActiveNavBarItem(elNavBarSelectedItem) {
    let elsNavBarItems = document.querySelectorAll('.nav-bar-menu .menu-item')
    for (let elNavBarItem of elsNavBarItems) {
        elNavBarItem.classList.remove('active')
    }
    elNavBarSelectedItem.classList.add('active')
}

function renderChooseLineBtn(line) {
    let elLineSelectImg = document.querySelector(".dropdown-select-line-btn img")
    elLineSelectImg.src = `img/app/icon-editor-line-${line}.png`
    let elEditorTxtLine = document.querySelector("#editor-txt-input")
    elEditorTxtLine.placeholder = `Enter ${line} row text here`
    elEditorTxtLine.value = gMeme[line].txt

}