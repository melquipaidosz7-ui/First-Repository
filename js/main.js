// Função para mudar a cor do título ao clicar
function initializeColorChange() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', () => {
            heading.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        });
    }
}

// Função para lidar com o login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    console.log('Tentativa de login:', { username, password });
    
    // Por enquanto, apenas simula um login bem-sucedido
    alert('Login realizado com sucesso!');
}

// Inicializa os eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    initializeColorChange();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});