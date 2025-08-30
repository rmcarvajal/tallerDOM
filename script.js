const taskInput = document.getElementById("task-input")
const button = document.getElementById("add-task-btn")
const list = document.getElementById("task-list")


function createTaskElement() {
const taskValue = taskInput.value
    
    const Litem = document.createElement ("li")
    Litem.textContent = taskValue
    Litem.classList.add("task-item")

    const delButton = document.createElement ("button")
    delButton.textContent = "Eliminar"
    delButton.classList.add("delete-btn")


    delButton.addEventListener("click" , () => {
        list.removeChild(Litem)
    })
    Litem.appendChild(delButton)
    
    list.appendChild(Litem)

    saveTasks()
}


button.onclick = () => {

    if(taskInput.value === ""){
        alert("No hay tareas para agregar")
    }
    else{
        createTaskElement()
        taskInput.value = ""
    }
}

function saveTasks() {
    const taskItems = document.querySelectorAll(".task-item")

    const tasks = []
    
    tasks.push(taskItems)

    localStorage.setItem("taskLog", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("taskLog"));
    console.log(savedTasks)
}

loadTasks()