'use strict'

const MAX_IMG_DISPLAY_WIDTH    = 800
const IMG_PADDING              = 10
const FONT_TO_IMG_HEIGHT_RATIO = 0.10

let gKeywords = { 'Politics': 4, 'Animal': 4, 'Movie': 9, 'Celebs': 4, 'Child': 5, 'Sport': 1 }

let gImgs = [
    { id: 1, url: "img/memes/003.jpg", keyword: ['All','Politics'] },
    { id: 2, url: "img/memes/004.jpg", keyword: ['All','Animal'] },
    { id: 3, url: "img/memes/005.jpg", keyword: ['All','Animal', 'Child'] },
    { id: 4, url: "img/memes/006.jpg", keyword: ['All','Animal'] },
    { id: 5, url: "img/memes/12.jpg",  keyword: ['All','Celebs'] },
    { id: 6, url: "img/memes/19.jpg",  keyword: ['All','Celebs'] },
    { id: 7, url: "img/memes/2.jpg",   keyword: ['All','Movie'] },
    { id: 8, url: "img/memes/5.jpg",   keyword: ['All','Child'] },
    { id: 9, url: "img/memes/8.jpg",   keyword: ['All','Movie'] },
    { id: 10, url: "img/memes/9.jpg",  keyword: ['All','Child'] },
    { id: 11, url: "img/memes/Ancient-Aliens.jpg", keyword: ['All','Movie'] },
    { id: 12, url: "img/memes/One-Does-Not-Simply.jpg", keyword: ['All','Movie'] },
    { id: 13, url: "img/memes/Oprah-You-Get-A.jpg", keyword: ['All','Celebs'] },
    { id: 14, url: "img/memes/X-Everywhere.jpg", keyword: ['All','Movie'] },
    { id: 15, url: "img/memes/drevil.jpg", keyword: ['All','Movie'] },
    { id: 16, url: "img/memes/img11.jpg",  keyword: ['All','Politics'] },
    { id: 17, url: "img/memes/img12.jpg",  keyword: ['All','Sport'] },
    { id: 18, url: "img/memes/img2.jpg",   keyword: ['All','Child'] },
    { id: 19, url: "img/memes/img4.jpg",   keyword: ['All','Politics'] },
    { id: 20, url: "img/memes/img5.jpg",   keyword: ['All','Child'] },
    { id: 21, url: "img/memes/img6.jpg",   keyword: ['All','Animal'] },
    { id: 22, url: "img/memes/leo.jpg",    keyword: ['All','Movie', 'Celebs'] },
    { id: 23, url: "img/memes/meme1.jpg",  keyword: ['All','Movie'] },
    { id: 24, url: "img/memes/patrick.jpg", keyword: ['All','Movie'] },
    { id: 25, url: "img/memes/putin.jpg",   keyword: ['ALL','Politics'] },
]

let gMeme = {
    selectedImgId: 'img-4', // default image if user moves to Editor tab without selecting an img.

    curLine: 'top',

    top: {
        txt: '',
        fontSize: '60px',
        fontFamily: 'Impact',
        align: 'center',
        color: 'white',
    },

    bottom: {
        txt: '',
        fontSize: '60px',
        fontFamily: 'Impact',
        align: 'center',
        color: 'white',
    },

    middle: {
        txt: '',
        fontSize: '60px',
        fontFamily: 'Impact',
        align: 'center',
        color: 'white',
    }
}

function search() {
    let value = document.querySelector('.search-input').value;
    if (value === '') return
    let result = gImgs.filter(function (img) {
        return img.keyword.findIndex(element => element === value) !== -1
    })
renderFilteredGallery(result)
}

function onKeyUpSearchInput() {
    let value = document.querySelector('.search-input').value;
    console.log(value)
    if (value === '') {
        renderFilteredGallery(gImgs)
    }
}

function downloadMeme(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = "my-meme.jpg"
}

function updateDefaultFontSizeToFitCanvas(canvasHeight) {
    console.log('canvasHeight = ', canvasHeight)
    let defaultFontSize = Math.floor(canvasHeight * FONT_TO_IMG_HEIGHT_RATIO)
    let lines = ["top", "middle", "bottom"]
    for (let line of lines) {
        gMeme[line].fontSize = defaultFontSize + 'px'
    }
}

// function handleImageFromInput(ev, onImageReady) {
//     document.querySelector('.share-container').innerHTML = ''
//     var reader = new FileReader();

//     reader.onload = function (event) {
//         var img = new Image();
//         img.onload = onImageReady.bind(null, img)
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(ev.target.files[0]);
// }