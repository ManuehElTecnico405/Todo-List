const currentTasks = document.getElementById('task_current');
const deletedTasks = document.getElementById('task_trash');
const completedTasks = document.getElementById('task_complete');

document.getElementById("trash_button").innerHTML = `
    <img src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-19.jpg" alt="Papelera" style="width:20px; height:20px">`;

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
    <input id="checkTask" class="delete_task" type="submit" onclick="completeTask(this.parentNode)">
    <input class="select_task" type="checkbox">
    ${task}</label></div>`;
    curTaskNum++;
}

function trashTasks(mode)
{
    let selectedTasks=[];
    for(let i=0; i<currentTasks.childElementCount; i++)
    {
        console.log(currentTasks.childNodes[i+1].checked);
    }
}

function completeTask(x)
{
    x.remove();
}


// alert('TAREA AGREGADA COMO: ' + newtask);
// taskQtt[parseInt(x.id.substring(2))]=0;
// for(let i=0; i<taskQtt.length; i++){if(taskQtt[i]=="0"){taskQtt[i]=taskQtt[i+1];taskQtt[i+1]="0";document.getElementById('CT' + i).id='CT' + i;}}
// console.log(currentTasks.childNodes[i].getElementById('checkTask'+[i]));
// switch(mode){case "CURRENT":break;case "COMPLETED":break;case "TRASH":}
// taskQtt[curTaskNum]=newtask.value;
// switch(mode){case "CURRENT":break;case "COMPLETED":break;case "TRASH":}
