const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;
let done = false;
let win = false;
const ROUNDS = 6;
console.log(letters)


async function init(){

    let currentGuess = '';
    let currentRow = 0;
    let isLoading = true;
    setLoading(true);
    const res = await fetch('https://words.dev-apis.com/word-of-the-day');
    const resObj = await res.json();
    const word = resObj.word.toUpperCase();
    const wordParts = word.split('');
    setLoading(false);
    isLoading = false;

    function addLetter(letter) {
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter;
        } else { // remove last letter and replace with new letter
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }
        // letters represents each cell on scoreboard 
        letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
    }

    function backspace() {
        if (currentGuess.length > 0) {
            currentGuess = currentGuess.substring(0, currentGuess.length - 1);
            letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
        }
    }

    function markInvalidWord() {
        for (let i = 0; i < currentGuess.length; i++) {
            letters[ANSWER_LENGTH * currentRow + i].classList.remove('invalid');
            setTimeout( function () {
                letters[ANSWER_LENGTH * currentRow + i].classList.add('invalid');
            }, 10); // remove the class add so it can be added again (flash over and over again)
        }

    }

    async function commit() {
        if (currentGuess.length !== ANSWER_LENGTH) {
            // do nothing 
            return
        } 
        

        // Validate the word
        isLoading = true;
        setLoading(true);
        const res = await fetch(`https://words.dev-apis.com/validate-word`, {
            method: 'POST',
            body: JSON.stringify({word: currentGuess})
        })

        const resObj = await res.json();
        const validWord = resObj.validWord;

        isLoading = false;
        setLoading(false);

        if (!validWord) {
            markInvalidWord();
            return;
        }

        // do all the marking as "correct" "close" or "wrong"
        const guessParts = currentGuess.split('');
        const map = makeMap(guessParts);
        console.log(map);
        console.log(`wordParts: ${wordParts}`);
        console.log(`guessParts: ${guessParts}`);
        for (let i = 0; i < ANSWER_LENGTH; i++) {
            if (guessParts[i] === wordParts[i]) {
                // classList is a property that returns the class name of an element
                // You can add, remove, and toggle CSS classes with the classList property.
                letters[ANSWER_LENGTH * currentRow + i].classList.add('correct');
                map[guessParts[i]]--;
            } 
        }
        
        for (let i = 0; i < ANSWER_LENGTH; i++) {
            if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
                letters[ANSWER_LENGTH * currentRow + i].classList.add('close');
                map[guessParts[i]]--;
            } else if (guessParts[i] !== wordParts[i]){
                letters[ANSWER_LENGTH * currentRow + i].classList.add('wrong');
            }
        }

        // move to next row
        currentRow++;
        
        if (currentGuess === word) {
            setTimeout(() => {
                alert('You win!');
            }, 100); // Delay of 500ms so winning word turns green in DOM
            document.querySelector('.brand').classList.add('winner');
            done = true
            return;
        } else if (currentRow === ROUNDS) {
            alert(`You lose! The word was ${word}`);
            done = true;
        }
        currentGuess = '';
    
    }


    document.addEventListener('keydown', function handleKeyPress (event) {
        if (done || isLoading) {
            // do nothing
            return;
        }

        const action = event.key;
        console.log(action);

        if (action === "Enter") {
            commit();
        } else if (action === "Backspace") {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase());
        } else {
            // do nothing
        }
    })
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading) {
    loadingDiv.classList.toggle('hidden', !isLoading);
}

function makeMap (array) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}

init();