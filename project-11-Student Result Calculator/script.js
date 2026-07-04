
const banglaInput = document.getElementById('bangla');
const englishInput = document.getElementById('english');
const mathInput = document.getElementById('math');
const calculateBtn = document.getElementById('calculate-btn');
const outputResult = document.getElementById('output-result');


function calculateGrade(average) {
    if (average >= 80) return "A+";
    if (average >= 70) return "A";
    if (average >= 60) return "A-";
    if (average >= 50) return "B";
    if (average >= 40) return "C";
    if (average >= 33) return "D";
    return "F";
}


calculateBtn.addEventListener('click', () => {
    
    const bangla = parseFloat(banglaInput.value);
    const english = parseFloat(englishInput.value);
    const math = parseFloat(mathInput.value);

    
    if (isNaN(bangla) || isNaN(english) || isNaN(math) || 
        bangla < 0 || bangla > 100 || 
        english < 0 || english > 100 || 
        math < 0 || math > 100) {
        
        outputResult.textContent = "Please enter valid marks between 0 and 100 for all subjects!";
        outputResult.style.borderLeftColor = "#ef4444"; 
        outputResult.classList.remove('hidden');
        return;
    }

    
    const totalMarks = bangla + english + math;

    
    const averageMarks = (totalMarks / 3).toFixed(2);

    
    
    let finalGrade;
    if (bangla < 33 || english < 33 || math < 33) {
        finalGrade = "F (Failed in individual subject)";
    } else {
        finalGrade = calculateGrade(parseFloat(averageMarks));
    }

    
    outputResult.textContent = `Total: ${totalMarks}, Average: ${averageMarks}, Grade: ${finalGrade}`;
    outputResult.style.borderLeftColor = "#10b981"; 
    outputResult.classList.remove('hidden');
});



































