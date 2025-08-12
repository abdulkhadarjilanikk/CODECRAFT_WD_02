let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    hours = minutes = seconds = 0;
    display.textContent = "00:00:00";
    lapsList.innerHTML = "";
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        let lapTime = formatTime(hours, minutes, seconds);
        let li = document.createElement('li');
        li.textContent = `Lap: ${lapTime}`;
        lapsList.appendChild(li);
    }
});

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(h, m, s) {
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
