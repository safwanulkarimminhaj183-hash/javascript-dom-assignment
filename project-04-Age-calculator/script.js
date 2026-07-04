
const dobInput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result-display');


calculateBtn.addEventListener('click', () => {
    const dobValue = dobInput.value;

    if (!dobValue) {
        resultDisplay.textContent = "Please select a valid date!";
        resultDisplay.style.color = "#dc2626"; 
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }


    if (age < 0) {
        resultDisplay.textContent = "Invalid Birth Date!";
        resultDisplay.style.color = "#dc2626";
    } else {
    
        resultDisplay.textContent = `Your Age: ${age} Years`;
        resultDisplay.style.color = "#1e40af";
    }
});



















