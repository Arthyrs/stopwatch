let seconds = 0;
let miliseconds = 0;
let minutes = 0;
let Interval;
let appendMiliseconds = document.getElementById("miliseconds");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
}

buttonReset.onclick = function() {
    clearInterval(Interval);
    appendMiliseconds.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
    seconds = 0;
    miliseconds = 0;
    minutes = 0;
}

function startTime () {
    miliseconds++;
    if (miliseconds == 9) {
        appendMiliseconds.innerHTML = "0" + miliseconds;
    }

    if (miliseconds > 9) {
        appendMiliseconds.innerHTML = miliseconds;
    }

    if (miliseconds > 99) {
        seconds++;
        miliseconds = 0;
        appendMiliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds - "0";
    }

    if (seconds == 60) {
        minutes++;
        seconds = 0;
        miliseconds = 0;
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
        appendMinutes.innerHTML = minutes - "0";
    }

    if (minutes == 60) {
        clearInterval(Interval);
    }
}
