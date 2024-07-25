let addForm = document.getElementById("addForm")
let taskId = JSON.parse(localStorage.getItem("taskId")) || 0;
const taskStorage = JSON.parse(localStorage.getItem("tasks")) || []

/* FUNCIONES PRINCIPAL */
let getFormDates = function() {
    let user = document.getElementById("userName").value
    let ttl = document.getElementById("taskTtl").value
    let date = document.getElementById("taskDate").value
    let tim = document.getElementById("taskTime").value
    let descrp = document.getElementById("taskDesc").value
    if(!descrp) {
        descrp = "No contiene descripción"
    }
    addTask(user, ttl, date, tim, descrp)
    showTask()
}

let taskInfo = function(event) {
    if (event.target.classList.contains("delBtn")) {
        delTask(event.target.id)
    } else if (event.target.classList.contains("compBtn")) {
        compTask(event.target.id)
    }
}

addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    getFormDates()
})


/* FUNCIONES ESPECIFICAS */
function addTask(user, ttl, date, tim, desc) {
    let task = {
        id: taskId++,
        name: ttl,
        descrp: desc,
        date: date,
        time: tim,
        creator: user,
        completed: false
    };
    taskStorage.push(task);
    localStorage.setItem("taskId", JSON.stringify(taskId))
    localStorage.setItem("tasks", JSON.stringify(taskStorage))
    showTask()
}

function delTask(taskId) {
    let taskIndex = taskStorage.findIndex(task => task.id == taskId)
    taskStorage.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(taskStorage));
    showTask()
}

function compTask(taskId) {
    let task = taskStorage.find(task => task.id == taskId)
    task.completed = true
    localStorage.setItem("tasks", JSON.stringify(taskStorage));
    showTask()
}

function showTask() {
    let tasksCont = document.getElementById("taskCont")
    tasksCont.innerHTML = ''
    taskStorage.forEach (task => {
        const card = document.createElement("div")
        card.className = "taskCard"
        card.innerHTML  =  `<h4>${task.name}</h4>
                            <p>${task.date}<br>${task.time}<br>${task.descrp}<br>Creado por ${task.creator}<br>${task.completed ? 'Completa' : 'No completa'}</p>
                            <button class="delBtn" id="${task.id}">Eliminar</button>
                            ${task.completed ? '' : `<button class="compBtn" id="${task.id}">Marcar como completada</button>`}`
        tasksCont.appendChild(card)
    })
    tasksCont.addEventListener("click", taskInfo);
}

document.addEventListener('DOMContentLoaded', showTask);