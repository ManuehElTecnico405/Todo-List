const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

window.onload = loadTasks;

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

function addCurrentTask(name,desc)
{
    CurrentTasks.innerHTML+=
        `<div class="task Task_Current">
        <input type="checkbox" class="selectTask" name="current">
        <input type="button" class="buttonStyle Task_CompleteButton" onclick="completeTask(this.parentNode)">
        <input type="button" class="buttonStyle Task_EditButton" onclick="openEdit(this.parentNode)">
        <input type="button" class="buttonStyle Task_TrashButton" onclick="trashTasks('CURRENT')">
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

// BOTON EDITAR

function openEdit(x)
{
    let curName = x.getElementById('CT');
    let curDesc = x.getElementById('CD');
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

function selectAll(checkbox)
{
    let selectionClass;
    switch(checkbox.id)
    {
        case "cur_sel":selectionClass = document.getElementsByName("curTaskSel");break;
        case "com_sel":selectionClass = document.getElementsByName("sel_CompleteTask");break;
        case "del_sel":selectionClass = document.getElementsByName("sel_DeletedTask");
    }
    if(checkbox.checked){for(let i=0; i<selectionClass.length; i++){selectionClass[i].checked=true;}}
    else{for(let i=0; i<selectionClass.length; i++){selectionClass[i].checked=false;}}
}

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

//ALL classes

//taskCreatorGui (Interfaz de las barras donde va el nombre y la desc)
//modal [Y variantes] (Todo lo relacionado con la interfaz del boton de edit))