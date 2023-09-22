'use strict'
import {CountTime} from "./TimerCounter.js";

let PopUp = document.getElementById("PopUp-background-Shadowing");
// let WrongAnswer = document.getElementById("wrong-Answer");
// let CharakterContainer = document.getElementById("Charakter-Container");
// let inputsContainer = document.getElementById("inputs-Container");
let StartButton = document.getElementById("Start-Button");
let ClosePopUpIcon = document.getElementById("Close-PopUp-Icon");

// const alphabet = ["ABCDEFGHIJKLMNOPQRSTUVW"];

// let btns;


export function ShowPopUp(boolean) {
    if (boolean == true) {
        PopUp.classList.remove("hide");

        StartButton.addEventListener("click", () => {
            PopUp.classList.add("hide");
            CountTime(); 
        });

        ClosePopUpIcon.addEventListener("click", () => {
            PopUp.classList.add("hide");
            window.location.href = '../ProjectWebsite.html';
        });
    }
}
    
    
    // try{
    //    console.log("1")
    //   if(boolean==false ) throw "Problem to load popUp(error:01) ";
    //   if(boolean==null) throw "Game couldnt load, click on Start or close this page (error:02)";

    // }catch(err){
    //     console.log("2")
    //   alert("Problem occured: " + err +  "\n Click on OK to start over");
    //   ShowPopUp(true);
    // }





    



// Wenn try catch ungewollt länger wird, eine externe funktion erstellen

