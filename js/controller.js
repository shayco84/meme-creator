'use strict'

function onInit() {

}

function onSearch(){
    // search()
}

function downloadMemeClicked() {

}

function onKeyUpMemeText(elTextRow, event, line) {
    // TODO - validate user input is not Esc or some other weird key with event.keyCode
    gMeme[line].txt = elTextRow.value
    renderMemeTexts()
}

