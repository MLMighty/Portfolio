import { Timer } from "./TimerCounter.js";

const instanz = new Timer();

export class Hangman {

    constructor() {
        this.CharakterContainer = document.getElementById("Charakter-Container");
        this.inputContainer = document.getElementById("inputs-Container");
        this.directUserInput = document.getElementById("direct-user-input");
        this.missesCounter = document.getElementById("wrong-Answer");
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.words = ["computer", "job", "ointment", "water", "apple", "desinfection", "javascript", "flower", "brother", "cat","game"];
        this.alreadyCreated = false;
        this.userInput;
        this.randomWord;
        this.saveBtnArray = [];
        this.string = "";
        this.next = 0;
        this.functionCalled = 0;
        this.misses = 0;
    }

    createInput() {
        this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        console.log(this.randomWord);
        for (let i = 0; i < this.randomWord.length; i++) {
            let input = document.createElement("input");
            input.maxLength = 1;
            input.required = true;
            input.classList.add("input");
            this.inputContainer.append(input);
            this.saveBtnArray.push(input);
        }
        this.checkInputValue(this.randomWord);
    }

    showAlphabet() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let char = this.alphabet.charAt(i);
            let spanDom = document.createElement("span");
            spanDom.classList.add("alphabet-chars");
            spanDom.textContent = char + "  ";
            spanDom.id = `char-${char}`;
            this.CharakterContainer.append(spanDom);
        }
    }

    usedAlphabet(userInputValue, spanElement) {
        let usedAlphabet;
        for (let j = 0; j < this.alphabet.length; j++) {
            usedAlphabet = this.alphabet.charAt(j);
            if (usedAlphabet === userInputValue.toUpperCase()) {
                spanElement.style.textDecoration = "line-through";
                spanElement.style.textDecorationColor = "red";
                spanElement.style.textDecorationThickness = "4px";
                break;
            }
        }
    }

    checkInputValue(userInputValue) {
        for (let i = 0; i < this.randomWord.length; i++) {
            if (userInputValue == this.randomWord.charAt(i)) {
                this.saveBtnArray[i].value = userInputValue;
                this.saveBtnArray[i].readOnly = true;
                this.saveBtnArray.splice(i, 1, this.saveBtnArray[i].value);
                this.controllGuessedWord(this.saveBtnArray);
              
            }
          

        }
        this.createUserInput();
    }


    createUserInput() {
        if (!this.alreadyCreated) {
            this.alreadyCreated = true;
            this.userInput = document.createElement("input");
            this.userInput.maxLength = 1;
            this.userInput.required = true;
            this.userInput.id = "Charakter-Input";
            this.userInput.classList.add("input");
            this.directUserInput.append(this.userInput);

            this.userInput.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    event.stopPropagation();
                    event.preventDefault();
                    let userInputValue = this.userInput.value;
                    try {
                        if (userInputValue === "") throw "Please write just one character of the alphabet";
                        let spanId = `char-${userInputValue.toUpperCase()}`;
                        let spanElement = document.getElementById(spanId);
                        this.usedAlphabet(userInputValue, spanElement);
                        this.checkInputValue(userInputValue);
                    } catch (err) {
                        alert(err);
                    }
                }
            });
        }
    }


    controllGuessedWord() {
        this.functionCalled++;
        if (this.saveBtnArray.length === this.functionCalled) {
            this.sortArrayValue();
            for (let index = 0; index < this.words.length; index++) {
                if (this.string === this.words[index]) {
                    alert("you guessed the word: " + this.string);
                    break;
                }
            }
            this.next++;
        }
    }


    handleUserMisses(){
        const max_Misses = 12;

        if(this.misses == max_Misses || instanz.pause == true){
            document.getElementById("main").style.display="none";
            alert("you lost");
        }
  
        this.missesCounter.innerHTML=this.misses;
        // requestAnimationFrame(this.handleUserMisses);
        // Probleme mit dem misses
    }

    sortArrayValue() {
        for (let index = 0; index < this.saveBtnArray.length; index++) {
            this.string += this.saveBtnArray[index];
        }
    }


}



// Misses funktion
// Timer ausbessern, 
// tipp button
// die unteren eingabefelder brauchen die funktion wenn man reinschreibt dass es auch richtig ist oder nicht.
// also das man direkt das ganze wort reinschreiben kann.
