let gameTile = document.getElementsByClassName("game-card"),
    tileOne,
    tileTwo

for (var i = 0; i < gameTile.length; i++) {
    gameTile[i].addEventListener("click", function() {
        if (tileOne == undefined) {
            this.classList.toggle("flip")
        tileOne = this.src
        console.log(tileOne)
    } else {
        tileTwo = this.src
        console.log(tileTwo)
        if (tileOne == tileTwo) {
            alert("success")
            tileOne = undefined
            tileTwo = undefined
        } else {
            alert("Uh oh")
            tileOne = undefined
            tileTwo = undefined
            console.log(tileOne, tileTwo)
        }
    }
    })
}
