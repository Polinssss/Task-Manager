/*------выбор элементов-----*/
/*1.Выбратьпо id--*/
let h1 = document.getElementById("title");
console.log(h1); 

/*2.Выбрать один элемент по селектору--*/
const link = document.querySelector("a");
console.log(link);

/*3.Выбрать несколько элементов по селектору--*/
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs)

/*4.Выбрать один или несколько элементов внутри другого элемента--*/
const menu = document.querySelector(".menu");
const links = menu.querySelectorAll("a");
console.log(links);




/*---------Работа с контентом-----------*/
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.outerText);
console.log(h1.outerHTML);

h1.textContent = "Привет!";
h1.innerText = "Заголовок <img src = 'img/5.png' alt = 'логотип'>"
h1.innerHTML = "Заголовок <img src = 'img/5.png' alt = 'логотип'>"

/*-----Работа со стилями(атрибут style)-----*/
link.style.color = "red";
link.style.textDecoration = "none";


/*--------Работа с класаами(атрибут class)----------*/
h1.classList.add("blue");
h1.classList.add("border");
h1.classList.remove("border");
console.log(h1.classList.contains("blue"));


/*---работа с атрибутами----*/
console.log(link.getAttribute('href'));
link.setAttribute("href", "https://portal.midis.info/stream/")
link.setAttribute("target", "_blank");
link.removeAttribute("style");


/*--------поиск родителей/предков----------*/
let firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink);
console.log(firstLink.parentNode);
console.log(firstLink.closest('.menu'));

/*-------создание нового элемента--------*/
const newImg = document.createElement("img");
newImg.setAttribute("src", "img/6.png");
newImg.setAttribute("alt", "Пример картинки");
const block = document.getElementById("block");
block.append(newImg);




/*-----------обработка события onclick------------*/
const btnAddTask = document.getElementById("add-task");
const listTask =document.querySelector(".tasks");
btnAddTask.addEventListener("click", function(){
    const p = document.createElement("p");
    p.innerHTML = "Новая задача";
    listTask.append(p);

});

