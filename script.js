// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    scoreCounter
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 3){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

// QUESTION BANK

let questionBank =[
    [
        ["BigSky Homepage", false],
        ["Student Information System Homepage", true],
        ["The Pulse App", false],
        ["Course Assessment Page", false],
        "ITEMS/1.png"
    ],
    [
        ["Student Information System SER", false],
        ["Course Content Page", false],
        ["BigSky Account Settings", true],
        ["Course Learning Resources", false],
        "ITEMS/2.png"
    ],
    [
        ["Student Information System Current Enrollment Page", false],
        ["BigSky Notifications", false],
        ["Course Class List Page", false],
        ["Course Homepage", true],
        "ITEMS/3.png"
    ],
    [
        ["Bigsky Homepage", true],
        ["BigSky Account Settings", false],
        ["Student Information System Flowcharts", false],
        ["Benilde Mail", false],
        "ITEMS/4.png"
    ],
    [
        ["BigSky Homepage", false],
        ["Benilde Online Payment Portal", true],
        ["The Pulse App", false],
        ["Parents Portal", false],
        "ITEMS/5.png"
    ]
]

// VARIABLES HERE

const choiceButtonA = document.getElementById("answer-btn-1")
const choiceButtonB = document.getElementById("answer-btn-2")
const choiceButtonC = document.getElementById("answer-btn-3")
const choiceButtonD = document.getElementById("answer-btn-4")

let questionPrompt = document.getElementById("main-frame")

let scoreDisplay = document.getElementById("score")

let scoreCounter = 0
let roundIndex = 0

// GAME FUNCTIONS PROPER

function startGame(){
    hideStartScreen()
}

function changeDisplay(){
    choiceButtonA.innerHTML = questionBank[roundIndex][0][0]
    choiceButtonB.innerHTML = questionBank[roundIndex][1][0]
    choiceButtonC.innerHTML = questionBank[roundIndex][2][0]
    choiceButtonD.innerHTML = questionBank[roundIndex][3][0]
    questionPrompt.setAttribute("src", questionBank[roundIndex][4])

    scoreDisplay.innerHTML = "SCORE: " + scoreCounter
}


function selectChoiceA(){
    if (roundIndex <= 3 && questionBank[roundIndex][0][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 4){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB(){
    if (roundIndex <= 3 && questionBank[roundIndex][1][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 4){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceC(){
    if (roundIndex <= 3 && questionBank[roundIndex][2][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 4){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceD(){
    if (roundIndex <= 3 && questionBank[roundIndex][3][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 4){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

document.getElementById("answer-btn-1").addEventListener("click", selectChoiceA)
document.getElementById("answer-btn-2").addEventListener("click", selectChoiceB)
document.getElementById("answer-btn-3").addEventListener("click", selectChoiceC)
document.getElementById("answer-btn-4").addEventListener("click", selectChoiceD)