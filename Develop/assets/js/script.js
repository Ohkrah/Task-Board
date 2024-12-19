
//variables from index
const newTask = $('#newTask');
const taskTitle = $('#taskTitle');
const taskDate = $('#taskDate');
const taskDescription = $('#taskDescription');
const submitTask = $('#submitTask');
const todo = $('#todo-cards');
const inProgress = $('#in-progress');
const done = $('#done');

//create today's date
function todaysDate (){
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}


let task; 
let tempStore;

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    task = {
        //pulled uniqueId() from jquery documentation 
        //https://api.jqueryui.com/uniqueId/#uniqueId
        id: uniqueId(),

    }
    return (task.id)
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    for(let i = 0; i < taskList.length; i++){
        //element for card
        const taskCard = document.createElement('div');
        taskCard.classList.add('card');
        taskList.appendChild(taskCard);
    }
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    for(let i = 0; i < taskList.length; i++){

        //taskCard element
        const taskCard = document.createElement('div');
        taskCard.classList.add('card', 'draggable');
        console.log(taskCard);        
        console.log('display date' + taskList[i].date);
        console.log(Date.now());
        // console.log(todaysDate());
        
                
        
        if (taskList[i].date = Date.now()){
            inProgress.append(taskCard);
        }else if(taskList[i].date < Date.now()){
            done.append(taskCard);
        }else{
            todo.append(taskCard);
        }
        //element for title
        const title = document.createElement('div');
        title.textContent = taskList[i].title;
        title.style.left = taskList[i].title.left;
        title.style.top = taskList[i].title.top;
        title.classList.add('cardTitle');
        taskCard.append(title);
        //element for description
        const description = document.createElement('div');
        description.textContent =taskList[i].description;
        description.style.left =taskList[i].description.left;
        description.style.top =taskList[i].description.top;
        description.classList.add('cardDescription');
        taskCard.append(description);
        
        //element for date
        const date = document.createElement('div');
        date.textContent = JSON.stringify(taskList[i].date);
        date.style.left = taskList[i].date.left;
        date.style.top = taskList[i].date.top;
        date.classList.add('cardDate');
        taskCard.append(date);

        console.log('testing for date ');
        console.log(date);
        

        
    }
    $('#to-do').droppable({
        accept: 'draggable',
        drop: handleDrop,
    })

    $('#in-progress').droppable({
        accept: 'draggable',
        drop: handleDrop,
    })

    $('#done').droppable({
        accept: 'draggable',
        drop: handleDrop,
    })
    
}
 
// Todo: create a function to handle adding a new task
function handleAddTask(event){ 
    task={
        id: generateTaskId,
        title: taskTitle.val(),
        date: taskDate.val(),
        description: taskDescription.val()
    }
    if(localStorage.getItem('tasks')){
        tempStore = jQuery.parseJSON(localStorage.getItem('tasks'));
    }else{
        tempStore = [];
    }
    tempStore.push(task);
    localStorage.setItem('tasks', JSON.stringify(tempStore));
    console.log(tempStore);
    
}

// Todo: create a function to handle deleting a task
//used mini project from module 5 for help with this function
function handleDeleteTask(event){
//remove the task from local storage
const taskId = task.id;
localStorage.removeItem('tasks', taskId)
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    //get products from loocalStorage
    const tasks = json.parse(localStorage.getItem('tasks'));
    // get project from event
    const taskId = ui.draggable[0].dataset.projectId;
    //get id of task category
    const newStatus = event.target.id;

    //use a for of loop to filter through tasks
    for(let task of tasks){
        if(task.id === taskId){
            task.status = newStatus
        }
    }
    //save updated task to local storage and reload page data
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    submitTask.click(function () {
        console.log('testing working');
        event.preventDefault();
        handleAddTask();
        renderTaskList();
        
    });

});
