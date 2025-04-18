// const staticNodeList = document.querySelectorAll(".task");

// const liveNodeList = document.querySelector(".container").childNodes;

// console.log(staticNodeList);
// console.log(liveNodeList);

// let newTask = document.createElement("div");
// newTask.innerHTML = "еще одна задача";
// newTask.classList.add("task");
// document.querySelector(".container").append(newTask);

// console.log(staticNodeList);
// console.log(liveNodeList);



const container = document.querySelector(".container");
const formCreatTask = document.getElementById("form-create-task");
const taskName = document.getElementById("task-name");
let tasks = document.querySelectorAll(".task");
const btnClear = document.getElementById("btn-clear");


console.log(tasks)

formCreatTask.addEventListener("submit", function(event){
    event.preventDefault(); //отменить поведение по умолчанию - в нашем случае, отменить перезагрузку страницы
    let value = taskName.value;
    console.log(value);

    /*-----создаем div.task----*/
    let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${value}</span><i tabindex="0" class="bi bi-pencil btn-edit"></i> <i tabindex="0" class="bi bi-trash3 btn-remove"></i>`;
    newTask.classList.add("task");
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})

document.getElementById('btn4').value = 'введите текст задачи';
// document.getElementById(".btn4").disabled = true;









 /*------Самостоятельно-----*/

    // Выбор кнопки сортировки по алфавиту
    const btn1 = document.getElementById('btn1'); 

// Функция сравнения для сортировки
    function compare(a, b) {
    if (a.innerHTML > b.innerHTML) return 1; // если первое значение больше второго
    if (a.innerHTML == b.innerHTML) return 0; //если равны
    if (a.innerHTML < b.innerHTML) return -1; // если первое значение меньше второго

}

// Функция сортировки по имени
    btn1.addEventListener('click', function ()  {
        let newTasks = [...tasks].sort(compare);
        container.innerHTML = ''; // Очистка контейнера
        for(let i in newTasks) {
            container.append(newTasks[i])
        }
    });

// Функция сортировки по имени (обратный порядок)
    const btn2 = document.getElementById('btn2');
    function compareReverse(a, b) { 
        if (a.innerHTML < b.innerHTML) return 1;
        if (a.innerHTML > b.innerHTML) return -1;
        if (a.innerHTML == b.innerHTML) return 0;
}

    btn2.addEventListener('click', function()  {
        let newTasks = [...tasks].sort(compareReverse); 
        container.innerHTML = ''; // Очистка контейнера
        for(let i in newTasks) {
            container.append(newTasks[i])
        }
    });


    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function()  {
        let newTasks = [...tasks];
        newTasks = Array.from(tasks).filter(task => task.classList.contains('immediate'));
        container.innerHTML = ''; // Очистка контейнера
        for(let i in newTasks) {
            container.append(newTasks[i])
        }
    });

    

    btn4.addEventListener("click", function() {
        let value = filterTaskName.value.toLowerCase(); // Получаем значение из input
        let newTasks = [...document.querySelectorAll(".task")]; // Преобразуем коллекцию задач в массив
    
        // Фильтруем задачи по введенному значению
        newTasks = newTasks.filter(function(item) {
            return item.innerHTML.toLowerCase().indexOf(value) !== -1; // Проверяем, содержится ли значение в тексте задачи
        });
        
        container.innerHTML = ""; // Очищаем контейнер
        newTasks.forEach(task => container.append(task)); // Выводим новые задачи
    });


    btn5.addEventListener('click', () => { container.innerHTML = ''; // Очистка контейнера 
// Возвращаем первоначальные задачи 
    tasks.forEach(task => { container.appendChild(task.cloneNode(true)); 
    // Клонируем элементы задач для добавления обратно в контейнер 
}); 
});



btnClear.addEventListener("click", ()=>{
    container.innerHTML = "";

})


/*------делегирование событий---*/

container.addEventListener("click", (event)=>{
    let btn = event.target; //элемент на котром кликнул пользователь
    /*-----------удаление задачи-----------*/
    if(btn.classList.contains("btn-remove")){ //если это кнопка удаления, то...
        btn.closest(".task").remove(); //удаляем задачу

    }

    /*------редактирование задачи--------*/
    if(btn.classList.contains("btn-edit")){
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true")
    }

})












// let i=0;
// const elems = document.querySelectorAll('*');
// for (let elem of elems){
//     elem.addEventListener("click", (e) => {
//         i++;
//         console.log("этап " + i);
//         console.log("целевой элемент:")
//         console.log(e.target);
//         nsole.log("элемент, на котором сработало событие:")
//         console.log(e.currentTarget);
//     },true);
// }













































































//  formCreateTask.addEventListener("submit",function(event){
//     event.preventDefault();//отменить поведение по умолчанию- в нашем случае отменить презагрузку страницы
//     let value = taskName.value
    

//     /*--создаем div.task */
//     let newTask = document.createElement("div");
//     newTask.textContent=value;
//     newTask.classList.add("task");
//     container.append(newTask);

//     tasks = document.querySelectorAll(".task")
//     console.log(tasks)

// })

// const BtnOneInput = document.getElementById('task-name');
// BtnOneInput.value = 'Введите текст задачи';


// let tasks = document.querySelectorAll(".task");
// let container = document.querySelector(".container");
// const btn1 =  document.querySelector(".btn1");

// function compare(a, b){
//     if(a.innerHTML > b.innerHTML) return 1;
//     if(a.innerHTML == b.innerHTML) return 0;
//     if(a.innerHTML < b.innerHTML) return -1;
// }

// btn1.addEventListener("click", function() {
//     let newTasks = [...tasks].sort(compare);
//     container.innerHTML = "";
//     for(let i in newTasks) {
//         container.append(newTasks[i])
//     }
// })

// const btn2 = document.querySelector(".btn2");

// function compareReverse(a, b) {
//     if(b.innerHTML > a.innerHTML) return 1;
//     if(b.innerHTML == a.innerHTML) return 0;
//     if(b.innerHTML < a.innerHTML) return -1;
// }

// btn2.addEventListener("click", function () {
//     let newTasks = [...tasks].sort(compareReverse);
//     container.innerHTML = "";
//     for (let task of newTasks) {
//         container.append(task);
//     }
// });


// // Функция фильтрации срочных задач

// btn3. addEventListener ("click", function() {
//     let newTasks = [...tasks];
//     newTasks = Array.from(tasks).filter(task => task.classList.contains('immediate'));;
//     container.innerHTML = "";
//     newTasks.forEach(task => container.append(task));
// });
 

//     btn3.addEventListener('click', function()  {
//     const newTasks =  // Фильтрация задач

//     // Очистка контейнера
//     container.innerHTML = '';

//     // Добавление только срочных задач обратно в контейнер
//     newTasks.forEach(task => {
//         container.appendChild(task);
//     });
// });




// // Функция сравнения для сортировки
//     function compare(a, b) {
//     if (a.innerHTML > b.innerHTML) return 1; // если первое значение больше второго
//     if (a.innerHTML == b.innerHTML) return 0; // если равны
//     if (a.innerHTML < b.innerHTML) return -1; // если первое значение меньше второго
    
// }

// // Функция сортировки по имени
//     btn1.addEventListener('click', function()  {
//     const sortedTasks = Array.from(tasks).sort(compare);
//      // Очистка контейнера
//      container.innerHTML = '';
//      // Добавление отсортированных задач обратно в контейнер
//     sortedTasks.forEach(task => {
//         container.appendChild(task); 
//     });
// });

// // Код для создания новой задачи можно добавить следующим образом
// const form = document.getElementById('form-create-task');

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Предотвращение перезагрузки страницы
//     const taskInput = document.getElementById('task-name');
    
//     if (taskInput.value.trim() !== '') {
//         const newTask = document.createElement('div');
//         newTask.classList.add('task');
//         newTask.textContent = taskInput.value;
        
//         // Добавляем новую задачу в контейнер
//         container.appendChild(newTask);
//         taskInput.value = ''; // Очистка поля ввода
//     }
// });

// 

// // Код для создания новой задачи

//     form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Предотвращение перезагрузки страницы
//     const taskInput = document.getElementById('task-name');

//     if (taskInput.value.trim() !== '') {
//         const newTask = document.createElement('div');
//         newTask.classList.add('task');
//         newTask.textContent = taskInput.value;

//         // Добавляем новую задачу в контейнер
//         container.appendChild(newTask);
//         taskInput.value = ''; // Очистка поля ввода
//     }
// });