const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

//SAVING TEST (NO TOCAR!!!)
/*
const fs = require(FileSystem);
window.onload=saveData();
function saveData()
{
    fs.writeFile('./data/data.txt', "TEST", (err) => {
        if (err) {console.error('Error al guardar el archivo:', err);}
        else{console.log('Archivo guardado exitosamente.');}
    });
}*/

function setTask() {
    let taskName = document.getElementById("task_name").value;
    let taskDesc = document.getElementById("task_desc").value;
    //let cacheTask = {name: taskName, description: taskDesc};

    if(taskName.length>0)
    {
        if(taskDesc.length<=0){taskDesc="No Description";}
        addCurrentTask(taskName,taskDesc);
        let newTask = { name: taskName, description: taskDesc };
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("task_name").value = "";
        document.getElementById("task_desc").value = "";
    }
    else
    {
        alert("INSERTE TEXTO");
    }
}

function loadTasks(){
    let task = JSON.parse(localStorage.getItem("tasks")) || [];
    task.forEach(task =>{
        addCurrentTask(task.name, task.description);
    });
}

window.onload = loadTasks;

function addCurrentTask(name,desc)
{
    CurrentTasks.innerHTML+=
        `<div class="task cur_task">
        <input id="checkTask" class="delete_task" type="submit" value="" onclick="completeTask(this.parentNode)">
        <input type="button" value="" id="edit_button"onclick="openEdit(this.parentNode)">
        <input class="select_task" type="checkbox">
        <h2 id="CT">${name}</h2>
        <p id="CD">${desc}</p>
        </label>
        </div>`;
}

function trashTasks(mode)
{
    deleteAllTasks
    localStorage.removeItem("task")
    let selectedTasks=[];
    for(let i=0; i<CurrentTasks.childElementCount; i++)
    {
        if (CurrentTasks.childNodes[i+1].querySelector("select_task").checked){}
        selectedTasks.push(CurrentTasks.childNodes[i+1]);
        console.log(CurrentTasks.childNodes[i+1].checked);
    }
}

function completeTask(x)
{
    switch(x.classList[1])
    {
        case "cur_task":
            x.classList.replace("cur_task","com_task");
            CompletedTasks.appendChild(x);
            break;
        default:
            x.classList.replace("com_task","cur_task");
            CurrentTasks.appendChild(x); 
    }
}

function deleteAllTasks()
{
    CurrentTasks.innerHTML = "";
    CompletedTasks.innerHTML = "";
    deleteAllTasks.innerHTML = "";
}

// BOTON EDITAR

function openEdit(x)
{
    //let curName = x.getElementById('CT');
    //let curDesc = x.getElementById('CD');
    document.getElementById('id01').style.display='block';
    let newTitle = document.getElementById('newTitle');
    let newDesc = document.getElementById('newDesc');
    newTitle.value="";
    newDesc.value="";
}

function seltodo() {
    let selected = true;
    const btnSeleccionar = document.getElementById("task_current");
    if (selected) {
        checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
        btnSeleccionar.value = "Deseleccionar";
      } else {
        checkboxes.forEach(function(checkbox) {checkbox.checked = false;});
        btnSeleccionar.value = "Seleccionar";
    }
    selected = false;
};
function sendEdit(mode){document.getElementById('id01').style.display='none';}

//switch(mode){case "CONFIRM": ;break;case "CANCEL": return 0;}

//HTML
//Boton papelera más abajo / Boton papelera global

//CSS
//Paleta de colores
//Añadir fondo difuminado (o algo pa decorar)

//JS
//Boton Editar
//Boton Seleccionar todo (current, completed & trashed)
//Reordenar mejor botones (Seguramente se requiera css)
//Que se guarden los archivos

//PROBABLY USED IN A FUTURE ;)

//x.remove();
//<input class="select_task" type="checkbox">${task}
// function addCurrentTask(task){currentTasks.innerHTML+=}
// deletedTasks.forEach(task => {task.remove();});
//function deleteAllTasks.forEach(task => {task.remove();});
//let currentText = taskElement.childNodes[3].nodeValue
//let inputField = document.createElement("input")
//inputField.type = "text"
//inputField.value = currentText
//let saveButton = document.createElement("input")
//saveButton.type = "button"
//saveButton.value = "Guardar"
//saveButton.onclick = function(){
//    taskElement.childNodes[3].nodeValue = inputField.value
//    taskElement.removeChild(inputField)
//    taskElement.removeChild(saveButton)
//    alert("¡Cambio guardado correctamente!")
//}
//taskElement.replaceChild(inputField, taskElement.childNodes[3])
//taskElement.appendChild(saveButton