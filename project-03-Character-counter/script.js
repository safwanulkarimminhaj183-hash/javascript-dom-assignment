
const textInput = document.getElementById('text-input');
const charCountText = document.getElementById('char-count');
const wordCountText = document.getElementById('word-count');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    
    charCountText.textContent = text.length;


    const cleanedText = text.trim();
    
    if (cleanedText === "") {
        wordCountText.textContent = 0;
    } else {
    
        const wordsArray = cleanedText.split(/\s+/);
        wordCountText.textContent = wordsArray.length;
    }
});



























