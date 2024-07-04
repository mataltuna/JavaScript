let userName = prompt("Indiquenos su Nombre")

const tasks = []

taskOptions(userName)


const taskOptions = user=>{
    let taskOption = confirm("Un gusto "+user+" ¿Desea agregar una tarea a su agenda?")
    if (taskOption == true) {
        let taskName = prompt("¿Que desea agendar").tolowerCase()
        let taskDesc = prompt("Escribe una pequeña descripción").tolowerCase()
        let taskDate = prompt("¿Cuando desea que se lo recordemos?").tolowerCase()
        addTask(taskName, taskDesc, taskDate)
    } else {
        let otherOption = prompt("¿Desea eliminar, marcar como completada o revisar tareas? (1/2/3)")
        switch (parseInt(otherOption)){
            case 1:
                let delName = prompt("Ingrese el nombre de la tarea").tolowerCase()
                delTask(delName)
                break
            case 2:
                compTask()
                break
            case 3:
                revTask()

        }
    }
}



/* Funciones */
const addTask = function(name,desc,date) {
    while (addAgain) {
        let task = {
            nam: name,
            descrp: desc,
            date: date,
            completed: false
        }
        tasks.push(task)
    }
    let addAgain = confirm("¿Desea agregar otra?")
}


const delTask = function(name) {
    while (delAgain) {
        let delId = tasks.indexOf(task[name])
        tasks.pop(delId)
    }
    let delAgain = confirm("¿Desea eliminar otra?")
}


const compTask = function(name) {
    while (compAgain) {
        let compId = tasks.indexOf(task[name])
        tasks[compId].completed = true
        
    }
}


const revTask = function() {

}

