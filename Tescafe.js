import { Selector } from 'testcafe';

fixture`Login Test`
    .page`./iniciarsesion.html`; // Ruta relativa al archivo HTML que contiene el formulario de inicio de sesión

test('Login with valid credentials', async t => {
    // Introduce los nombres de usuario y contraseña para la prueba
    const username = 'hola';
    const password = '123';

    // Selecciona los elementos de entrada (inputs) y el botón de inicio de sesión
    const usernameInput = Selector('#validationDefault01');
    const passwordInput = Selector('#validationDefault02');
    const loginButton = Selector('#loginButton');

    // Introduce el nombre de usuario y la contraseña y haz clic en el botón de inicio de sesión
    await t
        .typeText(usernameInput, username)
        .typeText(passwordInput, password)
        .click(loginButton);

    // Verifica que se haya iniciado sesión correctamente redireccionando a una página esperada
    // Puedes agregar aquí la lógica de verificación de la redirección después del inicio de sesión
});