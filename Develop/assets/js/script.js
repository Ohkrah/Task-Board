
//variables from index
const newTask = $('#newTask');
const taskTitle = $('#taskTitle');
const taskDate = $('#taskDate');
const taskDescription = $('#taskDescription');
const submitTask = $('#submitTask');

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let task = {
        //pulled uniqueId() from jquery documentation 
        //https://api.jqueryui.com/uniqueId/#uniqueId
        id: uniqueId(),

    }
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
    //CREATE A SWITCH CASE TO TOGGLE LIST BETWEEN TODO, DONE AND IN PROGRESS BASED ON DATE 
    for(let i = 0; i < taskList.length; i++){
       
        //element for title
        const title = document.createElement('div');
        title.textContent = task.title;
        title.style.left = task.title.left;
        title.style.top = task.title.top;
        title.classList.add('cardTitle', 'draggable');
        taskCard[i].appendChild(title);
        //element for description
        const description = document.createElement('div');
        description.textContent =task.description;
        description.style.left =task.description.left;
        description.style.top =task.description.top;
        description.classList.add('cardDescription', 'draggable');
        taskCard[i].appendChild(description);
        
        //element for date
        const date = document.createElement('div');
        date.textContent = task.date;
        date.style.left = task.date.left;
        date.style.top = task.date.top;
        date.classList.add('cardDate', 'draggable');
        taskCard[i].appendChild(date);
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
        id: task.id,
        title: taskTitle.val(),
        date: taskDate.val(),
        description: taskDescription.val()
    }
    const tempStore = json.parse(localStorage.getItem('tasks'));
    tempStore.push(task);
    localStorage.setItem('tasks', JSON.stringify(tempStore));
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
    newTask.addEventListener('click', function () {
     
    });
});
