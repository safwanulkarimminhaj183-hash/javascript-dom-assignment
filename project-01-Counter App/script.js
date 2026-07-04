const counterValue=document.getElementById("counter-value");
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

let count=0;

incrementBtn.addEventListener('click',() =>{
    count++;
    counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--; // count এর মান ১ কমাবে
    counterValue.textContent = count; // নতুন মানটি স্ক্রিনে দেখাবে
});

resetBtn.addEventListener('click', () =>{
    count=0;
    counterValue.textContent = count;
});












