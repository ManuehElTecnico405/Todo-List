const  CurrentTasks = document.getElementById('task_current');
const  CompletedTasks= document.getElementById('task_complete');
const  TrashedTasks= document.getElementById('task_trash');

//let curTasksQtt = [];

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

// curTasksQtt[curTasksQtt.length]=0;
// reorderTask(curTasksQtt);
// function deleteTasks(){}
// function trashTasks(mode){let selectedTasks=[];for(let i=0; i<currentTasks.childElementCount; i++){console.log(currentTasks.childNodes[i+1].checked);}}
// taskQtt[parseInt(x.id.substring(2))]=0;
// function reorderTask(task){for(let i=0; i<task.length; i++){if(task[i]==0}{if(task[i+1]!=null){task[i]=task[i+1];}else{task[i]=task.length;}}console.log(task[i]);}}
