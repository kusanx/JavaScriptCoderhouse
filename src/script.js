const loginForm = document.getElementById("form");
const botonLogin = document.getElementById("login-form-submit");

botonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const matricula = form.matricula.value;
    const usuario = form.usuario.value;
    const password = form.password.value;
    
    const matriculasRegistradas = ["202201", "202202", "202203"];
    const usuariosRegistrados = ["profesor1", "profesor2", "profesor3"];
    const passwordRegistrados = ["12345", "67890", "coderhouse"];
    
    for (var i = 0; i < matriculasRegistradas.length; i++) {
        if (matricula == matriculasRegistradas[i] && usuario == usuariosRegistrados[i] && password == passwordRegistrados[i]) {
          alert('Inicio de sesion correcto!')
          window.location.href= "plataforma.html";
          break;
        } else {
          alert('Error en el inicio de sesion, revisa tus datos e intenta nuevamente!')
        }
      }
    })