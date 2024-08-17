const title = document.getElementById("title");
const tasks = document.getElementById("tasks");
const del = document.getElementById("del");
let mytasks=[];
const getTasks = () => {
    fetch("http://localhost:3000/showtasks")
    .then(res => res.json())
    .then(data => {
        mytasks = data;
        console.log(mytasks);
        let html = "";
        mytasks.forEach(task => {
            html += `<li>task no.${task.id}:- ${task.title} made at ${task.maketime}</li>`;
        });
        console.log(html);
        if(mytasks.length == 0){
            tasks.innerHTML = "no tasks to show";
        }else{
            tasks.innerHTML = html;
        }
        
    })
};

getTasks();

const addTask = () => {
    const task = {
        title: title.value
    }
    fetch("http://localhost:3000/addtask", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
    getTasks();
};

add.addEventListener("click", addTask);

const deleteTask = () => {
    const id = mytasks[0].id;
    fetch("http://localhost:3000/deletetask", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
    getTasks();
};

del.addEventListener("click", deleteTask);
window.addEventListener("keydown", (e) => {
    if(e.key == "Delete"){
        deleteTask();
    }
    if(e.key == "Enter"){
        addTask();
    }
});

