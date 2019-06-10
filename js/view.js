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

    // fit img to screen if available display width is < MAX_IMG_DISPLAY_WIDTH, else set img width to MAX_IMG_DISPLAY_WIDTH
    let displayWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (displayWidth > MAX_IMG_DISPLAY_WIDTH) displayWidth = MAX_IMG_DISPLAY_WIDTH

    // Give some space between the img and the screen edges:
    gCanvas.width = displayWidth - IMG_PADDING

    // Set height to keep original img ratio:
    gCanvas.height = elImg.height * (displayWidth / elImg.width);

    // Draw img on canvas, and fit .row-editor to canvas' width:
    gCtx.drawImage(elImg, 0, 0, elImg.width, elImg.height, 0, 0, gCanvas.width, gCanvas.height);
    document.querySelector(".row-editor").style.width = gCanvas.width + 'px'
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
        gCtx.lineWidth    = 5
        gCtx.textBaseline = "bottom"
        let lineFontSize = gMeme[line].fontSize.slice(0,-2) // drop the 'px'
        let y
        if (line === 'top'   ) y = +lineFontSize + 5
        if (line === 'middle') y = +lineFontSize - 5 + (+gCanvas.height / 2)
        if (line === 'bottom') y = +gCanvas.height
        let x = +gCanvas.width / 2
        gCtx.strokeText(gMeme[line].txt, x, y)
        gCtx.fillText  (gMeme[line].txt, x, y)
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

function toggleNavBarMenu(){
    document.querySelector('.nav-bar-menu').classList.toggle('show-nav-bar-menu');
}

function renderChooseLineBtn(line) {
    let elLineSelectImg = document.querySelector(".dropdown-select-line-btn img")
    elLineSelectImg.src = `img/app/icon-editor-line-${line}.png`
    let elEditorTxtLine = document.querySelector("#editor-txt-input")
    elEditorTxtLine.placeholder = `Enter ${line} row text here...`
    elEditorTxtLine.value = gMeme[line].txt
    elEditorTxtLine.focus()
    // let elChooseLineDropdown = document.querySelector('.dropdown-select-line-content')
    // let elsChooseLineBtns = elChooseLineDropdown.querySelectorAll('button, img')
    // for(let elChooseLineBtn of elsChooseLineBtns){
    //     elChooseLineBtn.classList.add('display-none')
    // }
    // elChooseLineDropdown.classList.add('display-none')
}
