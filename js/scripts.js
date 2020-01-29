document.querySelector('#company').innerText = "Guessing Game"

document.querySelector('#slogan').innerText = "Loops"

// pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1// totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        feedback.innerText = "YOU WIN!"
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again.'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low, try again.'
    } else {
        feedback.innerText = "Please choose a number between 1 and 15"
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    console.log('grats')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blueRibbon.jpg'
            break
        case 4:
        case 5:
        case 6:
            imagePath = 'images/redRibbon.jpg'
            break
        default:
            imagePath = 'images/yellowRibbon.jpg'
    }

    const awardImage = document.createElement('img') //creates a <img> element
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    if (ribbon.hasChildNodes()) {
        return 0
    }
    //only appendchild if the ribbon element doesn't have any child nodes yet
    
    ribbon.appendChild(awardImage)
    
}