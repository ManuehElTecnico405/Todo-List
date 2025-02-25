const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

//let selAllComplete = document.getElementById('com_sel');
//let selAllDelete = document.getElementById('del_sel');

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
        <input type="button" value="" id="edit_button"onclick="openEdit(this.parentNode)">
        <input type="submit" id="trash_button" value="" onclick="trashTasks('CURRENT')">
        <input class="select_task" type="checkbox" name="curTaskSel">
        <h2 id="CT">${name}</h2>
        <p id="CD">${desc}</p>
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