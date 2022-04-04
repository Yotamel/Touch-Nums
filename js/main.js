'use strict'
var gNumbers
var elRadioBtns = document.querySelectorAll('input[name="difficulty"]')
var gCurrNum = 0


function initGame() {
    var difficulty = getRadioValue()
    gNumbers = []
    gCurrNum = 0
    createNumbers(difficulty)
    shuffle(gNumbers)
    renderTable(gNumbers)
}

function createNumbers(length) {
    for (var i = 1; i <= length; i++) {
        gNumbers.push(i)
    }
}

function renderTable(table) {
    var htmlStr = ""
    var length = Math.sqrt(table.length)
    for(var i = 0; i < table.length; i = i+length){
         htmlStr += "<tr>"
         for(var j = 0; j < length;j++){
             htmlStr +=`<td onclick = "numClicked(this)" class = "buttonText cell">${table[j + i]}</td>`
         }
         htmlStr += "</tr>"
    }
    var elTable = document.querySelector(".gameTable")
    elTable.innerHTML = htmlStr
}

function numClicked(num){
    console.log(+num.innerHTML + 1)
    if (+num.innerHTML === (gCurrNum + 1)){
       gCurrNum++
       num.classList.add('pressed')
   }
}


function getRadioValue() {
    for (var button of elRadioBtns) {
        if (button.checked) {
            return button.value
        }
    }
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

