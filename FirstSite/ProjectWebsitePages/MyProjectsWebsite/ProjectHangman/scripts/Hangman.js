// import { Timer } from "./TimerCounter.js";

// const instanz = new Timer();


export class Hangman {

    constructor() {
        this.CharakterContainer = document.getElementById("Charakter-Container");
        this.inputContainer = document.getElementById("inputs-Container");
        this.directUserInput = document.getElementById("direct-user-input");
        this.missesCounter = document.getElementById("wrong-Answer");
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        this.categorys = [
            {category:"things in the kitchen",
             words:["knife","glass","oven"]},
            
            {category:"food",
             words:["burger","fries","cheese","pizza","cornflakes"]},
        ]

       
        this.word;
        this.alreadyCreated = false;
        this.userInput;
       
        this.saveBtnArray = [];
        this.string = "";
        this.next = 0;
        this.functionCalled = 0;
        this.misses = 0;
    }

    createInput() {
        let randomcategory=this.categorys[Math.floor(Math.random()* this.categorys.length)]
        console.log(randomcategory)
        let randomWord = randomcategory.words
        console.log(randomWord)
        this.word = randomWord[Math.floor(Math.random() * randomWord.length)];
        console.log(this.word);
        for (let i = 0; i < this.word.length; i++) {
            let input = document.createElement("input");
            input.maxLength = 1;
            input.required = true;
            input.classList.add("input");
            this.inputContainer.append(input);
            this.saveBtnArray.push(input);
        }
        this.checkInputValue(this.word);
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
        for (let i = 0; i < this.word.length; i++) {
            if (userInputValue == this.word.charAt(i)) {
                this.saveBtnArray[i].value = userInputValue;
                this.saveBtnArray[i].readOnly = true;
                this.saveBtnArray.splice(i, 1, this.saveBtnArray[i].value);
                this.controllGuessedWord(this.saveBtnArray);
              
            }else{
                this.misses--;
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
            for (let index = 0; index < this.word.length; index++) {
                if (this.string === this.word[index]) {
                    alert("you guessed the word: " + this.string);
                    break;
                }
            }
            this.next++;
        }
    }

    handleUserMisses(pause){


        // if(this.misses == max_Misses || pause === true){
        //     document.getElementById("main").style.display="none";
        //     alert("you lost");
        // }
  
        // this.missesCounter.innerHTML=this.misses;
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
