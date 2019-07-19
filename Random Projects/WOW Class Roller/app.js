let factionButtons = document.getElementsByClassName("factionButton"),
    allianceRaceSection = document.querySelector(".allianceRaceSection"),
    hordeRaceSection = document.querySelector(".hordeRaceSection"),
    allianceRace = document.getElementsByClassName("allianceRace"),
    hordeRace = document.getElementsByClassName("hordeRace")

for (var i = 0; i < factionButtons.length; i++) {
    factionButtons[i].addEventListener("click", chooseFaction)
}

function chooseFaction() {
    if (this.classList.contains("alliance")) {
        hordeRaceSection.style.display = "none"
        allianceRaceSection.style.display = "block"
    }
    else if (this.classList.contains("horde")) {
        allianceRaceSection.style.display = "none"
        hordeRaceSection.style.display = "block"
    }
}

function chooseRace() {

}

function chooseClass() {
    randomNumber = Math.floor(Math.random() * 9) +1

}