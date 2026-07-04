
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let timerId = null;


function runTimer() {
    seconds++;
    
    display.textContent = `${seconds}s`;
}


startBtn.addEventListener('click', () => {
    
    if (timerId !== null) return;
    
    
    timerId = setInterval(runTimer, 1000);
});


stopBtn.addEventListener('click', () => {
    
    clearInterval(timerId);
    timerId = null; 
});


resetBtn.addEventListener('click', () => {
    
    clearInterval(timerId);
    timerId = null;
    seconds = 0;
    display.textContent = '0s';
});




































