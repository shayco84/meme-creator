'use strict'

const MAX_IMG_DISPLAY_WIDTH    = 800
const IMG_PADDING              = 10
const FONT_TO_IMG_HEIGHT_RATIO = 0.10

let gKeywords = { 'politics': 4, 'animal': 4, 'movie': 9, 'celebs': 4, 'child': 5, 'sport': 1 }

let gImgs = [
    { id: 1, url: "img/memes/003.jpg", keyword: ['politics'] },
    { id: 2, url: "img/memes/004.jpg", keyword: ['animal'] },
    { id: 3, url: "img/memes/005.jpg", keyword: ['animal', 'child'] },
    { id: 4, url: "img/memes/006.jpg", keyword: ['animal'] },
    { id: 5, url: "img/memes/12.jpg", keyword: ['celebs'] },
    { id: 6, url: "img/memes/19.jpg", keyword: ['celebs'] },
    { id: 7, url: "img/memes/2.jpg", keyword: ['movie'] },
    { id: 8, url: "img/memes/5.jpg", keyword: ['child'] },
    { id: 9, url: "img/memes/8.jpg", keyword: ['movie'] },
    { id: 10, url: "img/memes/9.jpg", keyword: ['child'] },
    { id: 11, url: "img/memes/Ancient-Aliens.jpg", keyword: ['movie'] },
    { id: 12, url: "img/memes/One-Does-Not-Simply.jpg", keyword: ['movie'] },
    { id: 13, url: "img/memes/Oprah-You-Get-A.jpg", keyword: ['celebs'] },
    { id: 14, url: "img/memes/X-Everywhere.jpg", keyword: ['movie'] },
    { id: 15, url: "img/memes/drevil.jpg", keyword: ['movie'] },
    { id: 16, url: "img/memes/img11.jpg", keyword: ['politics'] },
    { id: 17, url: "img/memes/img12.jpg", keyword: ['sport'] },
    { id: 18, url: "img/memes/img2.jpg", keyword: ['child'] },
    { id: 19, url: "img/memes/img4.jpg", keyword: ['politics'] },
    { id: 20, url: "img/memes/img5.jpg", keyword: ['child'] },
    { id: 21, url: "img/memes/img6.jpg", keyword: ['animal'] },
    { id: 22, url: "img/memes/leo.jpg", keyword: ['movie', 'celebs'] },
    { id: 23, url: "img/memes/meme1.jpg", keyword: ['movie'] },
    { id: 24, url: "img/memes/patrick.jpg", keyword: ['movie'] },
    { id: 25, url: "img/memes/putin.jpg", keyword: ['politics'] },
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
    var value = document.querySelector('.search-input').value;
    var result = gImgs.filter(function (img) {
        return img.keyword.findIndex(element => element === value) !== -1
    })
    renderFilteredGallery(result)
}

function downloadMeme(elLink){
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
