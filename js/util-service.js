'use strict'

function loadImage() {
    let input, file, fr, img;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.querySelector('.input-file');
    if (!input) {
        alert("Sorry, image could not be loaded.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = createImage;
        fr.readAsDataURL(file);
    }

    function createImage() {
        img = new Image();
        img.onload = imageLoaded;
        img.src = fr.result;
    }

    function imageLoaded() {
        let elImgDummy = document.getElementById("img-dummy")
        elImgDummy.src = img
        // img.id = 'img-dummy'
        // console.log('elImgDummy = ', elImgDummy)
        // img.id='img-dummy'
        galleryImgClicked(elImgDummy)
    }
}
