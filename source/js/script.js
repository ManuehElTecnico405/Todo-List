const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');

let currentEdit;
let editName = document.getElementById('newTitle');
let editDesc = document.getElementById('newDesc');
let cacheCurrentTasks = JSON.parse(localStorage.getItem("current_tasks")) || [];
let cacheCompletedTasks = JSON.parse(localStorage.getItem("completed_tasks")) || [];

// LOAD & SAVE THINGS
function saveCache(){localStorage.setItem("current_tasks", JSON.stringify(cacheCurrentTasks));}
function loadCache(){cacheCurrentTasks.forEach(task => {addCurrentTask(task);});}


 //   event.preventDefault();
 //   event.stopPropagation();


//AÑADIR TAREAS
function setTask() {
    let taskName = document.getElementById("task_name").value;
    let taskDesc = document.getElementById("task_desc").value;

    if(taskName.length>0)
    {
        if(taskDesc.length<=0){taskDesc="No Description";}
        const task = {id: Date.now(), name: taskName, description: taskDesc, status: "Task_Current"};
        document.getElementById("task_name").value = "";
        document.getElementById("task_desc").value = "";
        addCurrentTask(task);
        cacheCurrentTasks.push(task);
        saveCache();
    }
    else{alert("INSERTE TEXTO");}
}

function addCurrentTask(task) //AUN NO SE HAN REORDENADO LOS BOTONES DE LA TAREA (CSS)
{
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.status}`;
    taskElement.setAttribute('data-id', task.id);
    taskElement.innerHTML+=`<input type="checkbox" class="selectTask" name="current">
        <input type="button" class="buttonStyle Task_CompleteButton" onclick="completeTask(this.parentNode)">
        <input type="button" class="buttonStyle Task_EditButton" onclick="editTask(this.parentNode)">
        <input type="button" class="buttonStyle Task_TrashButton" onclick="deleteTask(this.parentNode)">
        <h2 name="TaskName">${task.name}</h2><p name="TaskDescription">${task.desc}</p>`;
    
    if (task.status==="Task_Current"){CurrentTasks.appendChild(taskElement);}
    else{CompletedTasks.appendChild(taskElement);}
}

//COMPLETAR TAREAS
function completeTask(targetTask)
{
    const taskId = targetTask.getAttribute('data-id');
    const task = cacheCurrentTasks.find(task => task.id == taskId);

    switch (task.status) {
        case "Task_Current":
            task.status = "Task_Complete";
            CompletedTasks.appendChild(targetTask);
            break;
        case "Task_Complete":
            task.status = "Task_Current";
            CurrentTasks.appendChild(targetTask);
            break;
    }
    targetTask.classList.toggle("Task_Current");
    targetTask.classList.toggle("Task_Complete");
    saveCache();
}

// BORRAR TAREAS
function deleteTask(targetTask)
{
    const taskId = targetTask.getAttribute('data-id');
    cacheCurrentTasks = cacheCurrentTasks.filter(task => task.id != taskId);
    saveCache();
    targetTask.remove();
}

// BOTON EDITAR
function editTask(taskSelected)
{
    document.getElementById('id01').style.display='block';
    editName.value = taskSelected.querySelectorAll('[name="TaskName"]')[0].textContent;
    editDesc.value = taskSelected.querySelectorAll('[name="TaskDescription"]')[0].textContent;
    
    currentEdit=taskSelected;
}

//EDICION
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

// SELECT ALL

function selectAll(Source) {
    let contId = (Source.id === 'cur_sel') ? 'task_current' : 'task_complete';
    let checkboxes = document.getElementById(contId).getElementsByClassName('selectTask');

    for (let i = 0; i < checkboxes.length; i++ ){
        checkboxes[i].checked = Source.checked;
    }
}

/* 
function selectAll(checkbox)
{
    let selectionClass;
    switch(checkbox.id)
    {
        case "cur_sel":selectionClass = document.getElementsByName("Task_Current");break;
        case "com_sel":selectionClass = document.getElementsByName("Task_Completed");
    }
    if(checkbox.checked){for(let i=0; i<selectionClass.length; i++){selectionClass[i].checked=true;}}
    else{for(let i=0; i<selectionClass.length; i++){selectionClass[i].checked=false;}}
}
    */

window.onload = loadCache;

// CACHE (EDITAR)
// BOTON SELECCIONAR TODO
// REORDENAR BOTONES TAREAS