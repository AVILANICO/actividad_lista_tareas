// Función para agregar una nueva tarea
function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim(); //almacena el "value" de lo que se ingresa por texto
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li"); // si el value es distinto de vacío se crea un objeto "li"
    nuevaTarea.textContent = nuevaTareaTexto; //se almacena el nuevo texto ingresado en una de las opciones del "li"
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    console.log(nuevaTareaTexto)
    console.log(nuevaTarea);
  }
}
// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click",
  function (event) {
    if (event.target.tagName === "LI") {
      marcarCompletada(event.target);
      console.log(marcarCompletada);
    }
  });

// Agregar evento de clic al botón "Agregar"
document.getElementById("Agregar").addEventListener("click",
  agregarTarea);

// Función para mostrar tareas completadas
function mostrarCompletadas() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
// Función para mostrar tareas pendientes
function mostrarPendientes() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
// Agregar evento de clic al botón "Mostrar Completadas"
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
// Agregar evento de clic al botón "Mostrar Pendientes"
document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);


//función Borrar Tareas
function borrarTareas() {
  const tareas = document.getElementById("listaTareas")
  tareas.remove()
}

const borrar = document.getElementById("borrar")
borrar.addEventListener("click", borrarTareas)