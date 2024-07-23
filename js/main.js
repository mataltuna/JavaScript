/*let userName = prompt("Indiquenos su Nombre")

const tasks = []

taskOptions(userName)*/

/* FUNCION PRINCIPAL */
/*function taskOptions(user) {
    let taskOption = confirm("Un gusto " + user + " ¿Desea agregar una tarea a su agenda?")
    if (taskOption == true) {
        addTask(user)
        let taskOption = false
    } else {
        let otherOption = prompt("¿Desea eliminar, marcar como completada o revisar tareas? (1/2/3)")
        switch (parseInt(otherOption)) {
            case 1:
                delTask()
                break
            case 2:
                compTask()
                break
            case 3:
                revTask()
                break
            default:
                alert("Lo sentimos no es una opcion valida. Intentelo de nuevo")
                break
        }
    }
}*/



/* FUNCIONES ESPECIFICAS */
function addTask(user) {
    do {
        let taskName = prompt("¿Que desea agendar?").toUpperCase()
        let taskDesc = prompt("Escribe una pequeña descripción").toUpperCase()
        let taskDate = prompt("¿Cuando desea que se lo recordemos?").toUpperCase()
        let task = {
            name: taskName,
            descrp: taskDesc,
            date: taskDate,
            creator: user,
            completed: false
        };
        tasks.push(task);
        console.log("Se agregó la tarea correctamente")
    } while (confirm("¿Desea agregar otra?"))
}


function delTask() {
    do {
        let delName = prompt("Ingrese el nombre de la tarea").toUpperCase();
        let delId = tasks.indexOf([delName]);
        tasks.pop(delId);
        console.log("Se eliminó la tarea correctamente");
    } while (confirm("¿Desea eliminar otra?"))
}


function compTask() {
    do {
        let compName = prompt("Ingrese el nombre de la tarea").toUpperCase()
        let compId = tasks.indexOf([compName])
        tasks[compId.completed] = true
        console.log("Se completada la tarea exitosamente")
    } while (confirm("¿Desea marcar como completada otra?"))
}


function revTask() {
    for(let i = 0 ; i < tasks.length; i++) {
        console.log(tasks[i].name)
    }
}