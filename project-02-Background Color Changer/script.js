
const changeColorBtn = document.getElementById('change-color-btn');
const colorCodeText = document.getElementById('color-code');

function getRandomColor() {
    const letters = '0123456789ABCDEF'; 
    let color = '#';
    

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    
    return color;
}


changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor(); 
    
    document.body.style.backgroundColor = randomColor; 
    
    colorCodeText.textContent = randomColor; 
});




























