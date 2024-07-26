function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');

    li.innerHTML =
        <><span onclick="toggleTask(this)">${taskText}</span><button onclick="editTask(this)">ویرایش</button><button onclick="deleteTask(this)">حذف</button></>  
    ;

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function toggleTask(span) {
    span.classList.toggle('completed');
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('ویرایش وظیفه:', span.innerText);

    if (newTask !== null) {
        span.innerText = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}



