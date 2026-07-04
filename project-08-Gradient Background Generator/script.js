
const generateBtn = document.getElementById('generate-gradient-btn');
const cssOutput = document.getElementById('css-output');


function getRandomColor() {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener('click', () => {

    const color1 = getRandomColor();
    const color2 = getRandomColor();
    
    const gradientString = `linear-gradient(to right, ${color1}, ${color2})`;
    
    
    document.body.style.background = gradientString;
    
    
    cssOutput.textContent = `background: ${gradientString};`;
});























