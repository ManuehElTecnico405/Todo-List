const currentTasks = document.getElementById('task_current');
const deletedTasks = document.getElementById('task_trash');
const completedTasks = document.getElementById('task_complete');

let taskQtt = [];
let curTaskNum = 0;
let remTaskNum = 0;

function setTask() {
    let newtask = document.getElementById("task_name").value;
    if(newtask.length>0)
    {
        addCurrentTask(newtask);
    }
    else
    {
        alert("INSERTE TEXTO");
    }
}

function addCurrentTask(task)
{
    currentTasks.innerHTML+=`<div id="CT${curTaskNum}" class="cur_task">
    <input id="checkTask" class="delete_task" type="submit" value="[C]" onclick="completeTask(this.parentNode)">
    <input class="select_task" type="checkbox">${task}
    <input type="button" value="" id="edit_button" onclick="editTask(this.parenyNode)">
    </label></div>`;
    curTaskNum++;
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
    x.remove();
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
        alert("¡Camio guardado correctamente!")
    }
    taskElement.replaceChild(inputField, taskElement.childNodes[3])
    taskElement.appendChild(saveButton)
}



// alert('TAREA AGREGADA COMO: ' + newtask);
// taskQtt[parseInt(x.id.substring(2))]=0;
// for(let i=0; i<taskQtt.length; i++){if(taskQtt[i]=="0"){taskQtt[i]=taskQtt[i+1];taskQtt[i+1]="0";document.getElementById('CT' + i).id='CT' + i;}}
// console.log(currentTasks.childNodes[i].getElementById('checkTask'+[i]));
// switch(mode){case "CURRENT":break;case "COMPLETED":break;case "TRASH":}
// taskQtt[curTaskNum]=newtask.value;
// switch(mode){case "CURRENT":break;case "COMPLETED":break;case "TRASH":}
