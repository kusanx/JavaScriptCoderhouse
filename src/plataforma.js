const form = document.getElementById("form");
const botonFinal = document.getElementById("botonFinal");
const promedio = document.getElementById("calificacionFinal");
const botonGuardar = document.getElementById("botonGuardar");
const alumnos = [];

function promediar(){
    const calificacion1 = parseInt(form.calificacion1.value);
    const calificacion2 = parseInt(form.calificacion2.value);
    const calificacion3 = parseInt(form.calificacion3.value);
    
    if (calificacion1 >= 0 && calificacion2 >= 0 && calificacion3 >= 0){
    let calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
    alert("La calificacion final es de: " + calificacionFinal)
    alumnos.push(nombreAlumno.value);
    alumnos.push(calificacionFinal.value);
    console.log(alumnos);
    } else {
        alert("Ingrese datos correctos");
    }
}





