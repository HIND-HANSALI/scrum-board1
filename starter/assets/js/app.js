/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let title = document.getElementById('title')
let type = document.getElementById('feature')
let priority = document.getElementById('priority')
let Status = document.getElementById('Status')
let date = document.getElementById('date')
let description = document.getElementById('description')




let todo = document.getElementById('to-do-tasks')
let Progress = document.getElementById('in-progress-tasks')
let done = document.getElementById('done-tasks')

let btnSave = document.getElementById('btnSave')

function Afficher() {
    todo.innerHTML = '';
    Progress.innerHTML = '';
    done.innerHTML = '';
    let to_do_counter = 0;
    let in_progress_counter = 0;
    let done_counter = 0;
    let todoNum = document.getElementById('to-do-tasks-count');
    let inprogressNum = document.getElementById('in-progress-tasks-count');
    let doneNum = document.getElementById('done-tasks-count');

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") { //value
            to_do_counter++;

            todo.innerHTML += `<button id=${tasks[i]["id"]} class="d-flex button border  w-100 p-1">
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i> 
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${tasks[i]["title"]}</div>
                <div class="">
                    <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                    <div class="" title="${tasks[i]["description"]}">${tasks[i]["description"]}</div>
                </div>
                <div class="">
                    <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                    <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                    <span onclick="editTask(${tasks[i]["id"]})" class="btn btn-purple bi bi-pencil-square text-black" data-bs-toggle="modal" data-bs-target="#taskButton">edit</span>
                    <span onclick="deleteTask(${tasks[i]["id"]})" class="btn btn-red bi bi-trash3 text-black">delete</span>
                  
                </div>
            </div>
        </button>`;
        }
        else if (tasks[i].status == "In Progress") {
            in_progress_counter++;

            Progress.innerHTML += `<button id=${tasks[i]["id"]} class="d-flex button border  w-100 p-1">
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i> 
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${tasks[i]["title"]}</div>
                <div class="">
                    <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                    <div class="" title="">${tasks[i]["description"]}</div>
                </div>
                <div class="">
                    <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                    <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                    <span onclick="editTask(${tasks[i]["id"]})" class="btn btn-purple bi bi-pencil-square text-black" data-bs-toggle="modal" data-bs-target="#taskButton">edit</span>
                    <span onclick="deleteTask(${tasks[i]["id"]})" class="btn btn-red bi bi-trash3 text-black">delete</span>
                </div>
            </div>
        </button>`;

        }
        else if (tasks[i].status == "Done") {
            done_counter++;

            done.innerHTML += `<button id=${tasks[i]["id"]} class="d-flex button border  w-100 p-1">
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i> 
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${tasks[i]["title"]}</div>
                <div class="">
                    <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                    <div class="" title="">${tasks[i]["description"]}</div>
                </div>
                <div class="">
                    <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                    <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                    <span onclick="editTask(${tasks[i]["id"]})" class="btn btn-purple bi bi-pencil-square text-black" data-bs-toggle="modal" data-bs-target="#taskButton">edit</span>
                    <span onclick="deleteTask(${tasks[i]["id"]})" class="btn btn-red bi bi-trash3 text-black">delete</span>
                </div>
            </div>
        </button>`;
        }
        todoNum.innerText = to_do_counter;
        inprogressNum.innerText = in_progress_counter;
        doneNum.innerText = done_counter;

    }
}

Afficher();



function createTask() {
    // initialiser task form


    // Afficher le boutton save

    // Ouvrir modal form

}
// function addobj(){
//     let obj={
//         'title':title.value,

//     }
// }

function saveTask() {
    // Recuperer task attributes a partir les champs input


    // Créez task object
    // let selectStatus=document.querySelector('#status').value;
    // let selectPriority=document.querySelector('#priority').value;
    // let radiosType=document.querySelector('input[name=type]:checked').value;
    // let task={
    //     titleTask: document.getElementById('title').value,
    //     dateTask:document.getElementById('date').value,
    //     descriptionTask:document.getElementById('description').value,
    //     statusTask : selectStatus,
    //     priorityTask:selectPriority,
    //     typeTask:radiosType,

    // }

    let idTask = tasks[tasks.length - 1].id + 1;
    console.log(idTask)
    let task = {
        id: idTask,
        title: title.value,
        type: type.checked ? "feature" : "bug",
        priority: priority.value,
        status: Status.value,
        date: date.value,
        description: description.value
    }


    // Ajoutez object au Array
    tasks.push(task)
    console.log(tasks)
    // refresh tasks
    Afficher();
}

function editTask(id) {

    console.log(id);
    tasks.forEach(taskele => {

        if (taskele.id == id) {
            console.log(taskele);

            title.value = taskele.title;
            description.value = taskele.description;
            priority.value = taskele.priority;
            type.value = taskele.type;
            Status.value = taskele.status;
            date.value = taskele.date;

        }
        // Initialisez task form

        // Affichez updates

        // Delete Button

        // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

        // Definir FORM INPUTS

        // Ouvrir Modal form
    });
    btnSave.innerHTML = 'Update';
    btnSave.setAttribute("onclick", `updateTask(${id})`);

}


function updateTask(id) {
    // GET TASK ATTRIBUTES FROM INPUTS
    tasks.forEach(taskele => {
        if (taskele.id == id) {
            taskele.title = title.value;
            taskele.description = description.value;
            taskele.priority = priority.value;
            taskele.type = type.value;
            taskele.status = Status.value;
            taskele.date = date.value;
        }

    });
    Afficher();

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask(id) {
    // Get index of task in the array

    // Remove task from array by index splice function
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
        }
    }

    // close modal form

    // refresh tasks
    Afficher()
}
function vider(){
    title.value = "";
    type.value = "";
    priority.value = "";
    Status.value = "";
    date.value = "";
    description.value = ""

    btnSave.innerHTML='save'
    btnSave.setAttribute("onclick",`AjouterTask()`)  

}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}


// import {tasks} from "./data.js";
// console.log(tasks)
// for (let i=0;i<tasks.length;i++){
//     console.log(tasks[i].priority);
//     console.log(tasks[i].type);
// }

