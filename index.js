let usuario = parseInt(prompt("Ingresa un nombre de usuario mayor de 6 caracteres"));

while(usuario.length < 6){
    alert("El nombre de usuario es menor a 6 caracteres");
    prompt("Ingresa un nombre de usuario");
}

alert("Bienvenido!");