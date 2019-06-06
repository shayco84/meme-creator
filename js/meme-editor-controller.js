'use strict'
let gElImg = document.querySelector(".dummy-img");


function onInit() {
    renderMemeEditor(gElImg)
}

function downloadMemeClicked() {

}

function onKeyUpMemeText(elTextRow, event, line) {
    // TODO - validate user input is not Esc or some other weird key with event.keyCode
    // TODO - update text model
    renderMemeText(elTextRow, line)
}

