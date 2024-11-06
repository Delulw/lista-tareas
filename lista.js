const botonAgregar = document.getElementById("agregado");
    const inputTarea = document.getElementById("input-tarea");

    let contador = 1;
    botonAgregar.addEventListener("click", () => {
        const tarea = inputTarea.value;
        const listaTareas = document.querySelector(".lista-tareas");

        if (tarea.trim() !== "") { 
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tarea;
            if(contador % 2 == 0){
                nuevaTarea.classList.add("par")
        
            }else{
                nuevaTarea.classList.add("impar")
            }
           
            listaTareas.appendChild(nuevaTarea);
            inputTarea.value = ""; 
        } else {

        }
        contador += 1;
    });
