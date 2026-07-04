
const textInput = document.getElementById('text-input');
const textPreview = document.getElementById('text-preview');


textInput.addEventListener('input', () => {
    
    const inputValue = textInput.value.trim();

    
    if (inputValue === "") {
        textPreview.textContent = "Type Something...";
        textPreview.classList.add('placeholder-style'); 
    } else {
        
        textPreview.textContent = textInput.value; 
        textPreview.classList.remove('placeholder-style');
    }
});





























