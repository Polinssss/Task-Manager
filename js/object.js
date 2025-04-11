
const name = "Полина"; 
const wordText = `Привет, <strong>мир!</strong> Меня зовут <em>${name}</em>.`;
document.querySelector(".test-text").innerHTML = wordText;



// const paragraph = document.querySelector('.test-text');
// paragraph.textContent = "Привет, мир! Меня зовут Полина.";



//Заполняем поле email и делаем его неактивным
document.getElementById('email').value = 'mail@mail.ru';
document.getElementById('email').disabled = true;

//Устанавливаем галочку в чекбоксе и делаем ее неактивной
document.getElementById('remember').checked = true;

//Изменяем текст кнопки на "Войти"
document.getElementById('btn').value= 'Войти';

const link = document.createElement('a');
link.textContent = 'МИДИС'; // Текст ссылки
link.href = 'https://midis.ru/'; // URL вашего вуза
link.target = '_blank'; // Открыть в новой вкладке

link.style.color = 'black'; // Цвет текста
link.style.textDecoration = 'none'; // Убираем подчеркивание
link.style.fontSize = '20px'; // Размер шрифта

link.addEventListener('mouseover', function () {
    link.style.color = 'blue'; // Изменяем цвет при наведении
    link.style.transform = 'scale(1.1)'; // Увеличиваем размер
});

link.addEventListener('mouseout',  function () {
    link.style.color = 'black'; // Возвращаем цвет
    link.style.transform = 'scale(1)'; // Возвращаем размер
});

document.getElementById('linkContainer').append(link); //appendChild в JavaScript — это метод, который добавляет узел в конец элемента (то есть после последнего его дочернего узла). возвращает ссылку на добавленный узел.

const balloon = document.getElementById('balloon');
const button = document.getElementById('startButton');

function liftBalloon() {
    let position = 0; // Начальная позиция шарика
    const interval = setInterval(() => {
        if (position > -150) { // Устанавливаем предел для подъема
            position--; // Уменьшаем позицию, чтобы шарик двигался вверх
            balloon.style.transform = `translateY(${position}px)`; // Применяем смещение к шарику
        } 
        else {
            clearInterval(interval); // Останавливаем подъем, если шарик достиг верхней границы
        }
    }, 20); // Интервал в миллисекундах между шагами
}

button.addEventListener('click', liftBalloon);

