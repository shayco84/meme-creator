'use strict'

let gCanvas;
let gCtx;

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
    elImg.crossOrigin = "anonymous";
    let displayWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log('displayWidth = ', displayWidth)
    if (displayWidth < elImg.width) {
        gCanvas.width = displayWidth - 20
        gCanvas.height = elImg.height * (displayWidth / elImg.width);
    } else {
        gCanvas.width = elImg.width
        gCanvas.height = elImg.height
    }
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height, 0, 0, gCanvas.width, gCanvas.height);
    document.querySelector(".row-editor").style.width = gCanvas.width + 'px'
    // console.log('document.querySelector(".editor-container").width = ', document.querySelector(".editor-container").width)
    // console.log('gCanvas.width = ', gCanvas.width)

}

function renderMemeTexts() {
    let elMemes = document.querySelector(".gallery-memes")
    let elCurImg = elMemes.querySelector(`#${gMeme.selectedImgId}`)
    renderBaseImg(elCurImg)
    let lines = ["top", "middle", "bottom"]
    for (let line of lines) {
        gCtx.font         = `${gMeme[line].fontSize} ${gMeme[line].fontFamily}`
        gCtx.textAlign    = gMeme[line].align
        gCtx.fillStyle    = gMeme[line].color
        gCtx.strokeStyle  = 'black'
        gCtx.lineWidth    = 10
        gCtx.textBaseline = "bottom"
        let y
        if (line === 'top'   ) y = 60
        if (line === 'middle') y = +gCanvas.height / 2 + 40
        if (line === 'bottom') y = +gCanvas.height
        gCtx.strokeText(gMeme[line].txt, +gCanvas.width / 2, y)
        gCtx.fillText  (gMeme[line].txt, +gCanvas.width / 2, y)
    }
}

function renderFilteredGallery(filtered) {
    let strHtml = `<ul class="gallery-memes">\n`
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

function openMenu(){
    document.querySelector('.nav-bar-menu').classList.toggle('show');
}

function renderChooseLineBtn(line) {
    let elLineSelectImg = document.querySelector(".dropdown-select-line-btn img")
    elLineSelectImg.src = `img/app/icon-editor-line-${line}.png`
    let elEditorTxtLine = document.querySelector("#editor-txt-input")
    elEditorTxtLine.placeholder = `Enter ${line} row text here...`
    elEditorTxtLine.value = gMeme[line].txt
    elEditorTxtLine.focus()
}