//DOM objects
let days = document.querySelector("#days"),
    hours = document.querySelector("#hours"),
    minutes = document.querySelector("#minutes"),
    seconds = document.querySelector("#seconds"),

//Outputs
    daysOutput,
    hoursOutput,
    minutesOutput,
    secondsOutput

//Release date
    const releaseDate = new Date ("aug 27, 2019 10:00:00").getTime()

countdown() 

//Calls countdown fucntion ever 1 second
var updateClock = setInterval(countdown, 1000)

function countdown() {
    //Sets current time
    let currentTime = new Date().getTime()
    let timer = releaseDate - currentTime

    //Calculations
    daysOutput = Math.floor(timer / (1000 * 60 * 60 * 24))
    hoursOutput = Math.floor(( timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutesOutput = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
    secondsOutput = Math.floor((timer % (1000 * 60)) / 1000)

    //Updates DOM objects with calculated times
    days.textContent = daysOutput
    hours.textContent = hoursOutput
    minutes.textContent = minutesOutput
    seconds.textContent = secondsOutput 
}

