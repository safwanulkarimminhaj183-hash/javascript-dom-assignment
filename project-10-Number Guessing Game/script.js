
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const restartBtn = document.getElementById('restart-btn');
const outputMessage = document.getElementById('output-message');


let randomNumber = Math.floor(Math.random() * 100) + 1;


guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        outputMessage.textContent = "Please enter a number between 1 and 100!";
        outputMessage.style.color = "#dc2626"; 
        return;
    }

    
    if (userGuess > randomNumber) {
        outputMessage.textContent = "Too High";
        outputMessage.style.color = "#ef4444"; 
    } else if (userGuess < randomNumber) {
        outputMessage.textContent = "Too Low";
        outputMessage.style.color = "#eab308"; 
    } else {
        outputMessage.textContent = "Correct Answer";
        outputMessage.style.color = "#10b981"; 
        
    
        guessInput.disabled = true;
        guessBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    }
    
    
    guessInput.value = '';
    guessInput.focus();
});


restartBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    outputMessage.textContent = '';
    guessInput.disabled = false;
    guessInput.value = '';
    guessBtn.classList.remove('hidden');
    restartBtn.classList.add('hidden');
    guessInput.focus();
});







































