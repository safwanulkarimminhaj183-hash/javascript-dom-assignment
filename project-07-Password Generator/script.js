
const passwordOutput = document.getElementById('password-output');
const generateBtn = document.getElementById('generate-btn');

function generatePassword(length = 12) { 
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~}{[]:;?><';
    let password = '';
    

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;
}

generateBtn.addEventListener('click', () => {
    const newPassword = generatePassword(); 
    passwordOutput.value = newPassword; 
});


















