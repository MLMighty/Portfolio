'use strict'
import {Timer} from "./TimerCounter.js";
import {Hangman} from "./Hangman.js";

let PopUp = document.getElementById("PopUp-background-Shadowing");

let StartButton = document.getElementById("Start-Button");
let ClosePopUpIcon = document.getElementById("Close-PopUp-Icon");

const CountTime = new Timer();
const hangmanGame = new Hangman();



export function ShowPopUp(boolean) {
    if (boolean == true) {
        PopUp.classList.remove("hide");

        StartButton.addEventListener("click", () => {
            PopUp.classList.add("hide");
            
            try {
                hangmanGame.createInput();
                hangmanGame.showAlphabet();
                hangmanGame.createUserInput();
                CountTime.CountTime();
                hangmanGame.handleUserMisses();
            } catch (error) {
                alert(error);
            }
           

            
        });

        ClosePopUpIcon.addEventListener("click", () => {
            PopUp.classList.add("hide");
            window.location.href = '../ProjectWebsite.html';
        });
    }
}
    





    





