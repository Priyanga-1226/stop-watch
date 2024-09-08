let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 1000);
    document.getElementById("start").disabled = true; // Disable the start button
    document.getElementById("stop").disabled = false; // Enable the stop button
    document.getElementById("reset").disabled = false; // Enable the reset button
}

function pauseStopwatch() {
    clearInterval(timer);
    document.getElementById("start").disabled = false; // Enable the start button
    document.getElementById("stop").disabled = true; // Disable the stop button
}

function resetStopwatch() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("time").textContent = "00:00:00";
    document.getElementById("start").disabled = false; // Enable the start button
    document.getElementById("stop").disabled = true; // Disable the stop button
    document.getElementById("reset").disabled = true; // Disable the reset button
}

function updateStopwatch() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    let formattedTime = (hours < 10 ? "0" : "") + hours + ":" +
                        (minutes < 10 ? "0" : "") + minutes + ":" +
                        (seconds < 10 ? "0" : "") + seconds;
    document.getElementById("time").textContent = formattedTime;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", pauseStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);

// Initialize button states
document.getElementById("stop").disabled = true; // Stop button should be disabled initially
document.getElementById("reset").disabled = true; // Reset button should be disabled initially
