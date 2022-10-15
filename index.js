// add event listeners for all buttons
//variables for home and away score
// add functions for each button
// add scores
// display score to dom 


let homeScore = 0
let guestScore = 0 
// have both scores diplay 0 on page load
document.getElementById("home-points-text").textContent = homeScore
document.getElementById("guest-points-text").textContent = guestScore

// add event listeners for all buttons
document.getElementById('home-one').addEventListener('click', oneHome)
document.getElementById('home-two').addEventListener('click', twoHome)
document.getElementById('home-three').addEventListener('click', threeHome)
document.getElementById('guest-one').addEventListener('click', oneGuest)
document.getElementById('guest-two').addEventListener('click', twoGuest)
document.getElementById('guest-three').addEventListener('click', threeGuest)

// event listener for new game button
document.getElementById('new-game-butt').addEventListener('click', newGame)


// functions for all buttons
function oneHome (){
    homeScore += 1
    document.getElementById("home-points-text").textContent = homeScore
}
function twoHome (){
      homeScore += 2
    document.getElementById("home-points-text").textContent = homeScore
}
function threeHome (){
      homeScore += 3
    document.getElementById("home-points-text").textContent = homeScore
}

function oneGuest (){
    guestScore += 1
    document.getElementById("guest-points-text").textContent = guestScore
}
function twoGuest (){
     guestScore += 2
    document.getElementById("guest-points-text").textContent = guestScore
}
function threeGuest (){
     guestScore += 3
    document.getElementById("guest-points-text").textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-points-text").textContent = homeScore
    document.getElementById("guest-points-text").textContent = guestScore
}