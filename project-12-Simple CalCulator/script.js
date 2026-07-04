
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultValue = document.getElementById('result-value');

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');


function getInputs() {
    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);

    if (isNaN(val1) || isNaN(val2)) {
        resultValue.textContent = "Please enter both numbers!";
        resultValue.style.color = "#ef4444"; 
        return null;
    }
    
    resultValue.style.color = "#2563eb"; 
    return { val1, val2 };
}


addBtn.addEventListener('click', () => {
    const inputs = getInputs();
    if (inputs === null) return;
    
    const sum = inputs.val1 + inputs.val2;
    resultValue.textContent = sum;
});


subtractBtn.addEventListener('click', () => {
    const inputs = getInputs();
    if (inputs === null) return;
    
    const diff = inputs.val1 - inputs.val2;
    resultValue.textContent = diff;
});


multiplyBtn.addEventListener('click', () => {
    const inputs = getInputs();
    if (inputs === null) return;
    
    const product = inputs.val1 * inputs.val2;
    resultValue.textContent = product;
});


divideBtn.addEventListener('click', () => {
    const inputs = getInputs();
    if (inputs === null) return;
    
    
    if (inputs.val2 === 0) {
        resultValue.textContent = "Cannot divide by zero!";
        resultValue.style.color = "#ef4444";
        return;
    }
    
    const quotient = inputs.val1 / inputs.val2;

    resultValue.textContent = Number.isInteger(quotient) ? quotient : quotient.toFixed(2);
});














































