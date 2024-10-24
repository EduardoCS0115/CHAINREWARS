// Asegúrate de que MetaMask esté instalado y disponible
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask está instalado!');
}

const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

// Función para manejar el inicio de sesión
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí podrías agregar la lógica para autenticar al usuario
    // Por ejemplo, verificando el usuario y la contraseña en una base de datos
    // Para este ejemplo, simplemente validaremos que no estén vacíos
    if (username && password) {
        // Conectar a la blockchain
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Aquí puedes interactuar con un smart contract para gestionar encuestas y contratos
        // Por ejemplo, llamar a una función del contrato para verificar el usuario

        messageDiv.innerHTML = `Bienvenido, ${username}!`;
    } else {
        messageDiv.innerHTML = 'Por favor, completa todos los campos.';
    }
});