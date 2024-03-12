//variables  to store hours, minutes, and seconds
let hr = 0;
let min = 0;
let sec = 0;
//Variable to track whether the stopwatch is running
let running = false;
// Variable to store the interval ID for the setInterval function
let interval;

//Function to start the stopwatch
function start() {
        // If the stopwatch is not already running
  if (!running) {
      // Set the running variable to true
        running = true;
       // Call the updateTime function every second (1000 milliseconds)
        interval = setInterval(updateTime, 1000);
    }
}

//Function to pause the stopwatch
function pause() {
    // Clear the interval that calls the updateTime function
    clearInterval(interval);
     // Set the running variable to false
    running = false;
}
// Function to reset the stopwatch

function reset() {
    // Clear the interval that calls the updateTime function
    clearInterval(interval);
    running = false;
    hr = 0;
    min = 0;
    sec = 0;
    // Update the display of the hours, minutes, and seconds
    document.getElementById("hr").innerText = formatTime(hr);
    document.getElementById("min").innerText = formatTime(min);
    document.getElementById("sec").innerText = formatTime(sec);
}
//Function to update the time displayed on the stopwatch
function updateTime() {
    sec++;
    // If the seconds are equal to 60
    if (sec === 60) {
        // Reset the seconds to 0
        sec = 0;
        min++;
    }
    // If the minutes are equal to 60
    if (min === 60) {
           // Reset the minutes to 0
        min = 0;
        hr++;
    }
    // Update the display of the hours, minutes, and seconds
    document.getElementById("hr").innerText = formatTime(hr);
    document.getElementById("min").innerText = formatTime(min);
    document.getElementById("sec").innerText = formatTime(sec);
}
/*This function is used to format the time values of hours, minutes, and seconds in the timer.*/
function formatTime(time) {

    // If the time value is less than 10, add a leading zero
    return time < 10 ? "0" + time : time;
}
