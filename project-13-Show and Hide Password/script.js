
const passwordInput = document.getElementById('password-input');
const toggleBtn = document.getElementById('toggle-btn');


toggleBtn.addEventListener('click', () => {
    
    if (passwordInput.type === 'password') {
    
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
        toggleBtn.classList.add('active');
    } else {
    
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
        toggleBtn.classList.remove('active');
    }
});



























