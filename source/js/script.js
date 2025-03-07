const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');

let currentEdit;
let editName = document.getElementById('newTitle');
let editDesc = document.getElementById('newDesc');
let cacheCurrentTasks = JSON.parse(localStorage.getItem("current_tasks")) || [];

// ENCARGADOS DE GUARDAR/CARGAR LA CACHE
function saveCache(){localStorage.setItem("current_tasks", JSON.stringify(cacheCurrentTasks));}
function loadCache(){cacheCurrentTasks.forEach(task => {addCurrentTask(task);});}

function noEnviar(event){
    event.preventDefault();
    event.stopPropagation();
}
function setTask() // ENVIAR TAREAS
{
    let taskName = document.getElementById("task_name");
    let taskDesc = document.getElementById("task_desc");
    if(taskName.value.length>0) // DETECTA SI HAY TITULO O NO
    {
        if(taskDesc.value.length<=0){taskDesc.value="No Description";} // EN EL CASO DE NO TENER DESCRIPCION, SE LE APLICARA ESTA.
        const task = { // CREA LA TAREA QUE SERA ENVIADA A CACHE
            id: Date.now(), // USA LA FECHA ACTUAL COMO ID PARA QUE TODAS TENGAN UN VALOR UNICO
            name: taskName.value,
            description: taskDesc.value,
            status: "Task_Current"};
        //LIMPIA LOS INPUTS
        document.getElementById("task_name").value = "";
        document.getElementById("task_desc").value = "";
        addCurrentTask(task); // ENVIA LA TAREA
        cacheCurrentTasks.push(task); // SUBE LA TAREA A CACHE
        saveCache(); // ACTUALIZA LA CACHE
    }
    else
    {
        alert("INSERTE TEXTO");
    }
}
function addCurrentTask(task) // AÑADIR TAREAS
{
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.status}`;
    taskElement.setAttribute('data-id', task.id); // SE LE AÑADEN LAS CLASES DE ESTA FORMA PARA SIMPLIFICAR EL USO DE LA CACHE
    taskElement.innerHTML+=`<label><input type="button" class="buttonStyle Task_CompleteButton" onclick="completeTask(this.parentNode.parentNode)">
        <input type="button" class="buttonStyle Task_EditButton" onclick="editTask(this.parentNode.parentNode)">
        <input type="button" class="buttonStyle Task_TrashButton" onclick="deleteTask(this.parentNode.parentNode)">
        </label><h2 name="TaskName">${task.name}</h2><hr>
        <p name="TaskDescription">${task.description}</p>`;
    
    if (task.status==="Task_Current") // ENVIA LA TAREA DEPENDIENDO DE SU ESTADO
    {
        CurrentTasks.appendChild(taskElement);
    }
    else
    {
        CompletedTasks.appendChild(taskElement);
    }
}
function completeTask(targetTask) //BOTON COMPLETAR
{
    const taskId = targetTask.getAttribute('data-id');
    const task = cacheCurrentTasks.find(task => task.id == taskId);

    switch (task.status) //ALTERNA EL ESTADO DE LA TAREA ENTRE CURRENT/COMPLETE
    {
        case "Task_Current":
            task.status = "Task_Complete";
            CompletedTasks.appendChild(targetTask);
            break;
        case "Task_Complete":
            task.status = "Task_Current";
            CurrentTasks.appendChild(targetTask);
            break;
    }
    //ACUALIZA LA CACHE
    targetTask.classList.toggle("Task_Current");
    targetTask.classList.toggle("Task_Complete");
    saveCache();
}
function deleteTask(targetTask) // BOTON BORRAR
{
    //ACTUALIZA LA CACHE
    const taskId = targetTask.getAttribute('data-id');
    cacheCurrentTasks = cacheCurrentTasks.filter(task => task.id != taskId);
    saveCache();
    targetTask.remove(); //ELIMINAR TAREA
}
function editTask(taskSelected) //BOTON EDITAR
{
    document.getElementById('id01').style.display='block'; // CAMBIA EL CLASS PARA MOSTRAR INTERFAZ
    editName.value = taskSelected.querySelectorAll('[name="TaskName"]')[0].textContent;
    editDesc.value = taskSelected.querySelectorAll('[name="TaskDescription"]')[0].textContent;
    
    currentEdit=taskSelected;
}
function sendEdit(mode) // ENVIAR EDICION
{
    document.getElementById('id01').style.display = 'none'; // CIERRA LA INTERFAZ
    if (mode=='CONFIRM') // VERIFICA QUE LOS CAMBIOS SE HAYAN CONFIRMADO O NO
    {
        let nameVerificator = currentEdit.querySelectorAll('[name="TaskName"]')[0];
        let descVerificator = currentEdit.querySelectorAll('[name="TaskDescription"]')[0];
        if(editName.value == nameVerificator.textContent && editDesc.value == descVerificator.textContent) //NOTIFICA SI HA CAMBIADO ALGO O NO 
        {
            alert("NO SE HA REALIZADO NINGUN CAMBIO!");
        }
        else if(editName.value.length<=0) // VERIFICA SI EL TITULO TIENE TEXTO U NO
        {
            alert("LA TAREA NO TIENE TITULO");
        }
        else
        {
            if(editDesc.value.length<=0){editDesc.value="No Description";} // VERIFICA SI LA DESCRIPCION TIENE TEXTO U NO
            //ACTUALIZA EL CONTENIDO VISIBLE
            nameVerificator.innerHTML = editName.value;
            descVerificator.innerHTML = editDesc.value;
            //ACTUALIZA LA CACHE
            const taskId = currentEdit.getAttribute('data-id');
            const task = cacheCurrentTasks.find(task => task.id==taskId);
            if(task)
            {
                task.name=editName.value;
                task.description=editDesc.value;
            }
            saveCache();
        }
    }
}

window.onload = loadCache; // CARGA LA CACHE AL INICIAR

// BUGS:
// #3: Se puede meter codigo en los apartados

//SELECT ALL (UNUSED)
//function selectAll(Source) {let contId = (Source.id === 'cur_sel') ? 'task_current' : 'task_complete';let checkboxes = document.getElementById(contId).getElementsByClassName('selectTask');for (let i = 0; i < checkboxes.length; i++ ){checkboxes[i].checked = Source.checked;}}