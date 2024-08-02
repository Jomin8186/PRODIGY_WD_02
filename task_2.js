let [millisec, sec, min, hrs] = [0, 0, 0, 0];
let timerRef = document.querySelector(".display");
let int = null;

document.getElementById("startBtn").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTime, 10);
});

function displayTime() {
    millisec += 10;

    if (millisec == 1000) {
        millisec = 0;
        sec += 1;
    }

    if (sec == 60) {
        sec = 0;
        min += 1;
    }

    if (min == 60) {
        min = 0;
        hrs += 1;
    }

    let h = String(hrs).padStart(2, "0");
    let m = String(min).padStart(2, "0");
    let s = String(sec).padStart(2, "0");
    let ms = String(millisec).padStart(3, "0");

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}

document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(int);
    [millisec, sec, min, hrs] = [0, 0, 0, 0];
    timerRef.innerHTML = "00:00:00:000";
    lapsList.innerHTML = "";
});
