'use strict';

//Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

/*
 (function (){
    function factorial(n) {

    if (n === 1 || n === 0) {
         return 1;
     }
     return n * factorial(n - 1);
 }

     console.log(factorial(3));
})();
 */

//Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию pow(num, degree)

/*
(function (){
    function pow (num , degree) {
        if (degree === 1) {
            return num;
        } else {
            return num * pow ( num, degree - 1);
        }
    }

    console.log(pow(3, 3));
})();
 */

//Task #3
// Рекурсивное суммирование
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +.
/*
(function (){
    function sum (a , b) {
        if (b === 0) {
            return a;
        } else {
            return sum (a + 1, b - 1);
        }
    }

    console.log(sum(5 , 5));
})();
 */