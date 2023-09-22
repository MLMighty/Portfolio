'use strict'
let TimeCounter = document.getElementById("time");
let date = new Date;
let Time = 0;
let pause = false;
console.log("tartTime")


export function CountTime() {
   

    if (!pause) {
        Time = new Date().getTime() - date.getTime();
        ShowRightTime();

    } else if (pause) {
        Time = 0;
        TimeCounter.innerText = TimeCounter - innerText;

    }

    requestAnimationFrame(CountTime);
}

function ShowRightTime() {

    let seconds = Math.floor(Time / 1000) % 60;
    let minuts = Math.floor(Time / 60000) % 60;

    seconds = (seconds < 10) ? "0" + seconds : "" + seconds;
    minuts = (minuts < 10) ? "  0" + minuts : "" + minuts;


    TimeCounter.innerHTML = minuts + ":" + seconds;


}