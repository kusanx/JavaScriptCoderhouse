let form = document.getElementById("form");
let crearCuenta = document.getElementById("crearCuenta");
const matricula = document.getElementById("matricula");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

form.addEventListener("submit", cuentaNueva)

function cuentaNueva(e){
    e.preventDefault();
    if(isNaN(matricula.value) || matricula.value == "" || usuario.value == "" || password.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Datos no válidos',
            text: 'Coloque los datos solicitados',
          })
    } else {
        localStorage.setItem("matricula", matricula.value);
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("password", password.value)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cuenta creda con éxito, redirigiendo...',
            showConfirmButton: false,
            timer: 3500})
            .then(function(){window.location.href= "index.html"})
    }      
}