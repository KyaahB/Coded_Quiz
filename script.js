var countdownEl = $("#countdown")
var currentTime = 59;

function countNumbers() {
    if(currentTime > 0) {
        // console.log(currentTime)
        countdownEl.text(currentTime)
        currentTime--;
    }
}

setInterval(countNumbers, 1000)