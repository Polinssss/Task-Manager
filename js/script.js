// let str = "Hello, world!";
// console.log(str);
// alert("Привет " + str);


// let x, y, sum;
// x = parseFloat(prompt("Введите первое число", 0));
// y = parseFloat(prompt("Введите второе число", 0));

// sum = x + y;

// alert(sum);


// let num1, num2;
// num1 = -5;
// console.log(++num1);
// console.log(-num1);

// num2 = 1;
// num2 += 5;
// console.log(num2);

/*------задача о фотограыиях--------*/

// let numberPhotoOnPage,
//     numberPhotoInFolder,
//     numberPage;
// numberPhotoInFolder = parseInt(prompt("Введите кол-во фото в папке", 0));
// numberPhotoOnPage = parseInt(prompt("Введите кол-во фото на одной странице", 0));

// numberPage = Math.ceil(numberPhotoInFolder/numberPhotoOnPage);  //ceil - кругление вверх, floor - округление вниз
// alert(numberPage);

//целочисленное деление Math.floor(/)


// let a = parseInt(prompt("Введите нижнее основание"));
// let b = parseInt(prompt("Введите верхнее основание"));
// let h = parseInt(prompt("Введите высоту"));
// let l = Math.sqrt(Math.pow(Math.abs(a - b) /2, 2)+ Math.pow(h, 2));

// let perimetr = a + b + 2 * l;
// alert(perimetr);






// let kilograms = prompt("Введите количество килограмм");
// let centers = Math.floor(kilograms/100);
// alert(centers);


// let number = parseInt(promt());
// let b1, b2, numberNew;
// b1 = Math.floor(a / 100)% 10;
// b2 = Math.floor(a / 1000)%100;

// nemberNew = b1*100 + b2*1000;


// let a = parseInt(prompt("Ведите число"));
// let tens = Math.floor((a % 100)/ 10);
// let hundreds = Math.floor((a % 1000)/100);

// alert(tens);
// alert(hundreds);


/*-------условия--------*/

// let x = 4;
// if(''){
//     console.log('истина');
// }
// else{
//     console.log('ложь');
// }




/*------задача на минимум и максимум двух чисел------*/
// let x1, x2, min, max;
// x1 = parseFloat(prompt('Введите первое число', 0));
// x2 = parseFloat(prompt('Введите второе число', 0));
// min = x1;
// max = x1;
// if(x2 < min){
//     min = x2;
// }
// if(x2 > max){
//     max = x2;
// }
// alert('Минимальное - ' + min + ', Максимальное - ' +max);





//минимум среди трех чисел
// let x1, x2, x3, min;
// x1 = parseFloat(prompt('Введите первое число', 0));
// x2 = parseFloat(prompt('Введите второе число', 0));
// x3 = parseFloat(prompt('Введите третье число', 0));
// min = x1;
// if(x2 < min){
//     min = x2;
// }
// if(x3 < min){
//     min = x3;
// }
// alert('Минимальное - ' +min);





//найти максимальное среди n чисел
// let n, x, min;
// n = parseInt(prompt('Введите кол-во чисел', 1)); //parseInt - целое число
// min = parseFloat(prompt('Введите число', 0));
// for(let i = 1; i <= n - 1; i++){
//     x = parseFloat(prompt('Введите число', 0));
//     if(x < min){
//         min = x;
//     }
// }
// alert('Минимум - ' +min);




//найти минимум среди последовательности чисел, ввод которой заканчивается на 0. При этом 0 не входит в последовательность
// x = parseFloat(prompt('Введите число', 0));
// min = x;
// while(x != 0){
//     if(x < min) min = x;
//     x = parseFloat(prompt('Введите число', 0));
// }
// alert('Минимум - ' + min);





//разбор натурального числа на цифры
// let number, digital;
// number = parseInt(prompt('введите натуральное число', 0));
// while(number != 0){
//     digital = number % 10;
//     console.log(digital);
//     number = Math.floor(number / 10);

// }




/*----3.6----*/

// let x = false;
// let y = false;
// let z = true;
// x = parseInt(prompt('введите натуральное число', 0));
// y = parseInt(prompt('введите натуральное число', 0));
// z = parseInt(prompt('введите натуральное число', 0));
// let result1;
// if(x || (y && !z)){
//     result1 =true;
// }
// else{
//     result1 = false;
// }
// console.log(result1);

// let x = false;
// let y = false;
// x = parseInt(prompt('введите натуральное число', 0));
// y = parseInt(prompt('введите натуральное число', 0));
// let result2;
// if(!x && y!){
//     result2 = true;
// }
// else{
//     result2 = false;
// }
// console.log(result2);

// let x = false;
// let y = false;
// let z = true;
// x = parseInt(prompt('введите натуральное число', 0));
// y = parseInt(prompt('введите натуральное число', 0));
// z = parseInt(prompt('введите натуральное число', 0));
// let result3;
// if(!(x && z) || y){
//     result3 = true;
// }
// else{
//     result3 = false;
// }
// console.log(result3);







/*-------------------------ИНДИВИДУАЛЬНОЕ ЗАДАНИЕ-------------------------*/



/*---3.6(а-в)---*/

// let x = false;
// let y = false;
// let z = true;
// console.log(x || (y && !z));
// console.log(!x && !y);
// console.log(!(x && z) || y);




/*--4.28(в)--*/
// let n = parseInt(prompt('введите натуральное число'));
// let secondDigit = Math.floor((n % 100) / 10);
// let lastDigit = Math.floor(n % 10);
// let result;
// if(secondDigit > lastDigit){
//     result ="Вторая больше";
// }
// else if(secondDigit < lastDigit){
//     result = "Последняя больше";
// }
// else{
//     result = "Они равны";
// }
// console.log(result);




/*---4.95---*/
// let weight = parseInt(prompt('введите вес'));
// let category;
// if(weight < 60){
//     category = "легкий вес";
// }
// else if(weight < 64){
//     category = "первый полусредний вес";
// }
// else if(weight < 69){
//     category = "полусредний вес";
// }
// console.log(category);





/*-----5.30(в)-----*/

// let n = parseInt(prompt('Введите значение n  (1 <= n <= 100):'), 10);
// let sumSquares = 0;
// // if(n >= 1 && n <= 100){
// //     let sumSquares = 0;

// for(let i = 1; i <= n; i++){
//     sumSquares += Math.pow(i, 2);

// }
// console.log(sumSquares);
// }





// /*----6.22(е)----*/
// let number = String(prompt('введите натуральное число', 0));
// let count0 = 0;
// let count5 = 0;
// for(let i = 0; i < number.length; i++){
//     if(number[i] == '0'){
//         count0++;
//     }
//     if(number[i] == '5'){
//         count5++;
//     }
// }
// console.log('Введено число: ', number);
// console.log('Кол-во цифр 0: ', count0);
// console.log('Кол-во цифр 5: ',count5);
// console.log('Общее кол-во цифр 0 и 5: ', count0 + count5);

let number, digital;
let result = 0;
number = parseInt(prompt('введите натуральное число', 0));
while(number != 0){
    digital = number % 10;
    console.log(digital);
    number = Math.floor(number / 10);
    if(digital >= 0 && digital <= 5){
        digital++
    }


}
console.log(result);
