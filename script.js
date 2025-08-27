const taskInput = document.getElementById("task-input")
const button = document.getElementById("add-task-btn")
const list = document.getElementById("task-list")

function createTaskElement() {

    
    const Litem = document.createElement ("li")
    Litem.textContent = taskInput
    Litem.classList.add("task-item")

    const delButton = document.createElement ("button")
    delButton.textContent = "Eliminar"
    delButton.classList.add("delete-btn")


    delButton.addEventListener("click" , () => {
        taskInput.removeChild(Litem)
    })
    Litem.appendChild(delButton)
    
    list.appendChild(Litem)
}


button.onclick = () => {

    if(taskInput.value === ""){
        alert("No hay tareas para agregar")
    }
    else{
        createTaskElement()
    }
}