const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

function setTask() {
    let taskName = document.getElementById("task_name").value;
    let taskDesc = document.getElementById("task_desc").value;
    // let cacheTask = {name: taskName, description: taskDesc};

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
    // EL GUARDADO NO ES EN TIEMPO REAL
    // FUNCIONES COMO COMPLETAR O ELIMINAR TAREAS NO SE GUARDAN
}

function loadTasks(){
    let task = JSON.parse(localStorage.getItem("tasks")) || [];
    task.forEach(task =>{
        addCurrentTask(task.name, task.description);
    });
}

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
        case "Task_Current":
            x.classList.replace("Task_Current","Task_Complete");
            CompletedTasks.appendChild(x);
            break;
        case "Task_Complete":
            x.classList.replace("Task_Complete","Task_Current");
            CurrentTasks.appendChild(x); 
    }
}

function deleteAllTasks()
{
    CurrentTasks.innerHTML = "";
    CompletedTasks.innerHTML = "";
    deleteAllTasks.innerHTML = "";
}

function deleteTask(x)
{
    localStorage.removeItem("tasks", x);
    x.remove();
}

// BOTON EDITAR

function editTask(x)
{
    document.getElementById('id01').style.display='block';
    let curName = x.getElementsByName("TaskName");
    let curDesc = x.getElementsByName("TaskDescription");
    let newTitle = document.getElementById('newTitle');
    let newDesc = document.getElementById('newDesc');
    newTitle.value="asa";
    newDesc.value="sas";
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

function selectAll(checkbox) //SELECT ALL ESTA BROKEN
{
    let selectionClass;
    switch(checkbox.id)
    {
        case "cur_sel":selectionClass = document.getElementsByName("Task_Current");break;
        case "com_sel":selectionClass = document.getElementsByName("Task_Completed");break;
        case "del_sel":selectionClass = document.getElementsByName("Task_Deleted");
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

window.onload = loadTasks;