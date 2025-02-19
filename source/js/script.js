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
    CurrentTasks.innerHTML+=`<div class="task cur_task">
        <input id="checkTask" class="delete_task" type="submit" value="[C]" onclick="completeTask(this.parentNode)">
        <input class="select_task" type="checkbox"><div>
        <p>${name}</p>
        <p>${desc}</p>
        </div>
        </label>
        </div>`;
}

function completeTask(x)
{
    x.classList.replace("cur_task","com_task");
    CompletedTasks.appendChild(x);
    console.log(x);
}