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

    if(taskName.length>0)
    {
        if(taskDesc.length<=0){taskDesc="No Description";}
        addCurrentTask(taskName,taskDesc);
    }
    else
    {
        alert("INSERTE TEXTO");
    }
}


function addCurrentTask(name,desc)
{
    CurrentTasks.innerHTML+=
        `<div class="task cur_task">
        <input id="checkTask" class="delete_task" type="submit" value="" onclick="completeTask(this.parentNode)">
        <input type="button" value="" id="edit_button" onclick="editTask(this.parenyNode)">
        <input class="select_task" type="checkbox">
        <p>${name}</p><p>${desc}</p>
        </label>
        </div>`;
}

function trashTasks(mode)
{
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
    x.classList.replace("cur_task","com_task");
    CompletedTasks.appendChild(x);
    console.log(x);
}

function deleteAllTasks(){
    CurrentTasks.innerHTML = ""
    CompletedTasks.innerHTML = ""
    deleteAllTasks.innerHTML = ""

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
        checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
        });
        btnSeleccionar.value = "Seleccionar";
      }
      selected = false;
    };

function editTask (taskElement){
    let currentText = taskElement.childNodes[3].nodeValue
    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.value = currentText
    let saveButton = document.createElement("input")
    saveButton.type = "button"
    saveButton.value = "Guardar"
    saveButton.onclick = function(){
        taskElement.childNodes[3].nodeValue = inputField.value
        taskElement.removeChild(inputField)
        taskElement.removeChild(saveButton)
        alert("¡Cambio guardado correctamente!")
    }
    taskElement.replaceChild(inputField, taskElement.childNodes[3])
    taskElement.appendChild(saveButton)
}

//html
//texto en botones (añadir y borrar) VV
//Falta el icono de completar VV
//Posicion de las barras de tarea VV

//css
//Mejorar diseño del header
//Añadir fondo difuminado (o algo pa decorar)

//js
//Boton de Editar
//Boton Seleccionar todo (current, completed & trashed)
//Reordenar mejor botones (Seguramente se requiera css)

//x.remove();
//<input class="select_task" type="checkbox">${task}
// function addCurrentTask(task){currentTasks.innerHTML+=}
// deletedTasks.forEach(task => {task.remove();});
//function deleteAllTasks.forEach(task => {task.remove();});