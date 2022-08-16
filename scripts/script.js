const loginForm = document.getElementById("form");
const botonLogin = document.getElementById("login-form-submit");


form.addEventListener("submit", login)

function login(e){
    e.preventDefault();
    const matriculaGuardada = localStorage.getItem("matricula");
    const usuarioGuardado = localStorage.getItem("usuario");
    const passwordGuardado = localStorage.getItem("password");
    const matricula = document.getElementById("matricula");
    const usuario = document.getElementById("usuario");
    const password = document.getElementById("password");


    if(matricula.value == matriculaGuardada && usuario.value == usuarioGuardado && password.value == passwordGuardado){
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inicio de sesión correcto, espere...',
      showConfirmButton: false,
      timer: 3500})
      .then(function(){window.location.href= "plataforma.html"})
    }
      else {
        Swal.fire({
        icon: 'error',
        title: 'Datos no válidos',
        text: 'Revise sus datos e intente de nuevo',
      })}
  }
