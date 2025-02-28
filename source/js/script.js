const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');

let currentEdit;
let editName = document.getElementById('newTitle');
let editDesc = document.getElementById('newDesc');

let cacheCurrentTasks = JSON.parse(localStorage.getItem("current_tasks")) || [];
let cacheCompletedTasks = JSON.parse(localStorage.getItem("completed_tasks")) || [];

// AÑADIR Y GUARADAR TAREAS
    // FUNCIONES COMO COMPLETAR/ELIMINAR/EDITAR TAREAS NO SE GUARDAN

function setTask() {
    let taskName = document.getElementById("task_name").value;
    let taskDesc = document.getElementById("task_desc").value;

    if(taskName.length>0)
    {
        if(taskDesc.length<=0){taskDesc="No Description";}
        document.getElementById("task_name").value = "";
        document.getElementById("task_desc").value = "";
        addCurrentTask(taskName,taskDesc);

        pushCache(taskName, taskDesc);
    }
    else{alert("INSERTE TEXTO");}
}

// GUARDAR EN CACHE

function pushCache(savedTaskName, savedDescName)
{
    let newTask = { name: savedTaskName, description: savedDescName };
    cacheCurrentTasks.push(newTask);
    saveCache();
}

function saveCache()
{
    localStorage.setItem("current_tasks", JSON.stringify(cacheCurrentTasks));
}

function loadCache()
{
    cacheCurrentTasks.forEach(cacheCurrentTasks =>{
        addCurrentTask(cacheCurrentTasks.name, cacheCurrentTasks.description);
    });
}

// REMOVE
function readCache()
{
    console.log(cacheCurrentTasks[0]);
}

function taskCacheFilter(selectedTask)
{
    zone=CurrentTasks;
    let dummy = 0;
    let found = false;
    while(dummy < CurrentTasks.childElementCount && !found)
    {
        if(CurrentTasks.children[dummy]==selectedTask){found=true;}
        else{dummy++;}
    }

    return dummy;
}

// AÑADIR TAREAS

function addCurrentTask(name,desc) //AUN NO SE HAN REORDENADO LOS BOTONES DE LA TAREA (CSS)
{
    CurrentTasks.innerHTML+=
        `<div class="task Task_Current">
        <input type="checkbox" class="selectTask" name="current">
        <input type="button" class="buttonStyle Task_CompleteButton" onclick="completeTask(this.parentNode)">
        <input type="button" class="buttonStyle Task_EditButton" onclick="editTask(this.parentNode)">
        <input type="button" class="buttonStyle Task_TrashButton" onclick="deleteTask(this.parentNode)">
        <h2 name="TaskName">${name}</h2>
        <p name="TaskDescription">${desc}</p></div>`;
}

//COMPLETAR TAREAS
function completeTask(x)
{
    switch(x.classList[1])
    {
        case "Task_Current":
            x.classList.replace("Task_Current","Task_Complete");
            CompletedTasks.appendChild(x);
            break;
        case "Task_Complete":
            x.classList.replace("Task_Complete","Task_Current");
            CurrentTasks.appendChild(x); 
    }
}

// BORRAR TAREAS

function deleteAllTasks()
{
    CurrentTasks.innerHTML = "";
    CompletedTasks.innerHTML = "";
    deleteAllTasks.innerHTML = "";
}

function deleteTask(x) //FALTA ACABAR
{
    localStorage.removeItem(cacheCurrentTasks[taskCacheFilter(x)]);
    console.log(cacheCurrentTasks[taskCacheFilter(x)]);
    x.remove();
}

// BOTON EDITAR

function editTask(taskSelected)
{
    document.getElementById('id01').style.display='block';
    editName.value = taskSelected.querySelectorAll('[name="TaskName"]')[0].textContent;
    editDesc.value = taskSelected.querySelectorAll('[name="TaskDescription"]')[0].textContent;
    
    currentEdit=taskSelected;
}

function sendEdit(mode)
{
    document.getElementById('id01').style.display='none';
    if(mode=='CONFIRM')
    {
        let nameVerificator=currentEdit.querySelectorAll('[name="TaskName"]')[0];
        let descVerificator=currentEdit.querySelectorAll('[name="TaskDescription"]')[0];
        if(editName.value==nameVerificator.textContent && editDesc.value==descVerificator.textContent)
        {alert("NO SE HA REALIZADO NINGUN CAMBIO!");}
        else
        {
            nameVerificator.innerHTML=editName.value;
            descVerificator.innerHTML=editDesc.value;
        }
    }
}

//function seltodo() {
//    let selected = true;
//    const btnSeleccionar = document.getElementById("task_current");
//    if (selected) {
//        checkboxes.forEach(function(checkbox) {
//        checkbox.checked = true;
//    });
//        btnSeleccionar.value = "Deseleccionar";
//      } else {
//        checkboxes.forEach(function(checkbox) {checkbox.checked = false;});
//        btnSeleccionar.value = "Seleccionar";
//    }
//    selected = false;
//};

// SELECT ALL

function selectAll(checkbox)
{
    let selectionClass;
    switch(checkbox.id)
    {
        case "cur_sel":selectionClass = document.getElementsByName("Task_Current");break;
        case "com_sel":selectionClass = document.getElementsByName("Task_Completed");
    }
    if(checkbox.checked)
    {
        for(let i=0; i<selectionClass.length; i++)
        {
            selectionClass[i].checked=true;
        }
    }
    else
    {
        for(let i=0; i<selectionClass.length; i++)
        {
            selectionClass[i].checked=false;
        }
    }
}

window.onload = loadCache;

//PROBABLY REMOVED

//function trashTasks(mode)
//{
//    let selectedTasks=[];
//    for(let i=0; i<CurrentTasks.childElementCount; i++)
//    {
//        if (CurrentTasks.childNodes[i+1].querySelector("select_task").checked){}
//        selectedTasks.push(CurrentTasks.childNodes[i+1]);
//        console.log(CurrentTasks.childNodes[i+1].checked);
//    }
//}