'use strict'

export class Timer {

    constructor() {
        this.TimeCounter = document.getElementById("time");
        this.date = new Date;
        this.Time = 0;
        this.pause = false;
        this.CountTime = this.CountTime.bind(this);
        this.CountTime()
    }



    CountTime() {


        if (!this.pause) {
            this.Time = new Date().getTime() - this.date.getTime();
            this.ShowRightTime();

        } else if (this.pause) {
            this.Time = 0;
            this.TimeCounter.innerText = this.Time;

        }

        requestAnimationFrame(this.CountTime);
    }

    ShowRightTime() {

        let seconds = Math.floor(this.Time / 1000) % 60;
        let minuts = Math.floor(this.Time / 60000) % 60;

        seconds = (seconds < 10) ? "0" + seconds : "" + seconds;
        minuts = (minuts < 10) ? "  0" + minuts : "" + minuts;


        this.TimeCounter.innerHTML = minuts + ":" + seconds;


    }
}
   



// constructor(onTimeout) {
//     this.TimeCounter = document.getElementById("time");
//     this.startTime = null;
//     this.endTime = 10 * 60 * 1000; // 10 minutes in milliseconds
//     this.onTimeout = onTimeout;
//     this.requestID = null;

    
// }

// start() {
//     this.startTime = new Date().getTime();
//     this.requestID = requestAnimationFrame(this.tick.bind(this));
// }

// tick() {
//     const currentTime = new Date().getTime();
//     const elapsedTime = currentTime - this.startTime;
//     const remainingTime = Math.max(0, this.endTime - elapsedTime);
//     this.TimeCounter.innerText = Math.ceil(remainingTime / 1000); // Display remaining time in seconds

//     if (remainingTime <= 0) {
//         // Timer has reached 0, stop the game or perform any other action
//         this.onTimeout();
//     } else {
//         // Continue the countdown
//         this.requestID = requestAnimationFrame(this.tick.bind(this));
//     }
// }

// stop() {
//     // Stop the timer and cancel the animation frame
//     cancelAnimationFrame(this.requestID);
// }