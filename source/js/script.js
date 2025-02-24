const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

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
    for(let i=0; i<currentTasks.childElementCount; i++)
    {
        if (currentTasks.childNodes[i+1].querySelector("select_task").checked){}
        selectedTasks.push(currentTasks.childNodes[i+1]);
        console.log(currentTasks.childNodes[i+1].checked);
    }
}
deletedTasks.forEach(task => {
    task.remove();
    
});

function completeTask(x)
{
    x.classList.replace("cur_task","com_task");
    CompletedTasks.appendChild(x);
    console.log(x);
}

function deleteAllTasks(){
    currentTasks.innerHTML = ""
    completedTasks.innerHTML = ""
    deletedTasks.innerHTML = ""

}

function editTask (taskElement){
    let currentText = taskElement.childNodes[3].nodeValue
    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.value = currentText
    let saveButton = document.createElement("input")
    saveButton.type = "botton"
    saveButton.value = "Guardar"
    saveButton.onclick = function(){
        taskElement.childNodes[3].nodeValue = inputField.value
        taskElement.removeCild(inputField)
        taskElement.removeCild(saveButton)
        alert("¡Cambio guardado correctamente!")
    }
    taskElement.replaceChild(inputField, taskElement.childNodes[3])
    taskElement.appendChild(saveButton)
}

//html
//texto en botones (añadir y borrar)
//Falta el icono de completar
//Posicion de las barras de tarea

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