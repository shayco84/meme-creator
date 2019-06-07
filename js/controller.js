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

