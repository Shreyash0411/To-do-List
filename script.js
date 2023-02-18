let task = document.getElementById("task");
let check = 0;

function addTask()
{
    if(task.value =="")
    {
        document.getElementById("Error").innerHTML = "Kindly enter the task name";
        check = 0
    }
    
    else
    {   
        document.getElementById("Error").innerHTML = "";
        document.querySelector(".addedTask").innerHTML +=`
        <div class= "newTask">
            <span>
               ${task.value} 
            </span>
            <button class="delete">
            </button>
        </div>
        `;
    }



let currentTask =  document.querySelectorAll(".delete");
for(let i =0;i<currentTask.length;i++)
{
    currentTask[i].onclick = function()
    {
       this.parentNode.remove();
    }
}

if(check == 1)
        return true;
    else
        return false;
}
