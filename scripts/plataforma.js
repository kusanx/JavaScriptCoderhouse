const form = document.getElementById("form");
const nombreAlumno = document.getElementById("nombreAlumno");
const botonFinal = document.getElementById("botonFinal");
const promedio = document.getElementById("calificacionFinal");
const botonGuardar = document.getElementById("botonGuardar");
const tabla = document.getElementById("tab");
const fact = document.getElementById("fact");

botonFinal.addEventListener("click", promediar);

function promediar(e){
    e.preventDefault(); 
    const calificacion1 = parseInt(form.calificacion1.value);
    const calificacion2 = parseInt(form.calificacion2.value);
    const calificacion3 = parseInt(form.calificacion3.value);
    const calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
    if(calificacion1 >= 0 && calificacion2 >= 0 && calificacion3 >= 0){
    document.getElementById("calificacionFin").innerHTML = "Calificacion final: " + calificacionFinal.toFixed(1)
    }
      else{
          alert("Ingrese datos correctos")}
}

botonGuardar.addEventListener("click", guardar);


function guardar(e){
  e.preventDefault();
  const calificacion1 = parseInt(form.calificacion1.value);
  const calificacion2 = parseInt(form.calificacion2.value);
  const calificacion3 = parseInt(form.calificacion3.value);
  const calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
  
  if(calificacionFinal > 0){
    var filas = ""
    filas += "<td>" + nombreAlumno.value + "</td><td>" + calificacionFinal.toFixed(1) + "</td>";
        var tbody = document.querySelector("tbody");
        var tr = document.createElement("tr");

        tr.innerHTML = filas;
        tbody.appendChild(tr);
  Swal.fire({
    icon: 'success',
    title: 'Calificacion guardada',
  });
  }
  else {Swal.fire({
    icon: 'error',
    title: 'Datos no válidos',
    text: 'Revise sus datos e intente de nuevo',
  })}
  }

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f39547780dmshbc297dc3528d781p1eb221jsn35bf3d200319',
      'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
    }
  };
  
  fetch('https://random-facts2.p.rapidapi.com/getfact', options)
    .then(response => response.json())
    .then(response => document.getElementById("fact").innerHTML = JSON.stringify(response.Fact))
    .catch(err => console.error(err));