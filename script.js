let timer = 60
let score = 0
let hitRn = 0

function makeBubble(){
    let clutter = ""

    for(let i=0; i<105; i++){
        let randomNumber =  Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${randomNumber}</div>`
    }

    document.querySelector("#panel-bottom").innerHTML = clutter
}

function getNewHit(){
    hitRn = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = hitRn
}

function runTimer(){
    let timerInterval = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#timerValue").textContent = timer
        }
        else{
            clearInterval(timer)
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}

function increaseScore(){
    score += 10
    document.querySelector("#scoreVal").textContent = score
}

document.querySelector("#panel-bottom").addEventListener("click", function(dets){
    let clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitRn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})

runTimer()
getNewHit()
makeBubble()


