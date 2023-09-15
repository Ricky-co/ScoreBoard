let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function increaseHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}