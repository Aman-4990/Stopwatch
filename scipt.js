/*variables */
let hr = 0;
let min = 0;
let sec = 0;
let running = false;
let interval;

/*start funcion of stopwatch*/
function start() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 1000);
    }
}

/*tp pause stopwatch*/
function pause() {
    clearInterval(interval);
    running = false;
}
/*reset function */
function reset() {
    clearInterval(interval);
    running = false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("hr").innerText = formatTime(hr);
    document.getElementById("min").innerText = formatTime(min);
    document.getElementById("sec").innerText = formatTime(sec);
}
/*update stopwatch*/
function updateTime() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hr++;
    }
    document.getElementById("hr").innerText = formatTime(hr);
    document.getElementById("min").innerText = formatTime(min);
    document.getElementById("sec").innerText = formatTime(sec);
}
/*This function is used to format the time values of hours, minutes, and seconds in the timer.*/
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
