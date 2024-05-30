let timer = 60

function makeBubble(){
    let clutter = ""

    for(let i=0; i<105; i++){
        let randomNumber =  Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${randomNumber}</div>`
    }

    document.querySelector("#panel-bottom").innerHTML = clutter
}

function getNewHit(){
    let randomNumber = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = randomNumber
}

function runTimer(){
    let timerInterval = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#timerValue").textContent = timer
        }
        else{
            clearInterval(timer)
        }
    },1000)
}

runTimer()
getNewHit()
makeBubble()





