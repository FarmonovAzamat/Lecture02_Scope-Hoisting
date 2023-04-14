
// GLOBAL SCOPE
// let me = "Azamat is ";
// let BirthYear = 2001;
// let year = 2023

// function CalcAge() {
//     // FUNCTION SCOPE / LOCAL SCOPE
//     var age = year+BirthYear

//     if (now == 2023) {
// //         // BLOCK SCOPE
//        let job = ", and he is going to be a Web-developer inshaAllah!";

//         return me + age + now + job;
//     }
// }
//     console.log(job);
//  console.log(CalcAge());
// console.log(now);//Reference Error: now is not defined.

//HOISTING is a mechanism that moves the variables and function declarations to the top
//*with var
// a = 2;
// var a;
// console.log(a); //2;

//*with function declaration

// console.log(c);
// let c =10;

// food(2);
// function food (a){
//     b = 13
//     console.log(b*a);
//     console.log(b); // when 'var' executed within the FD before its' declaration, console reveals "undefined"
//     b = 10; 
//     var b;
//}

// with let and const it is TDZ - Temporal Dead Zone
// const myName = "Azamat"
// if (myName === "Azamat"){
//     console.log("Azamat is a " + job);
//     const job = 'SoftClub Student';//Uncaught ReferenceError: Cannot access 'foo' before initialization
// }

//Global
// let me = "Azamat";
// let currentYear = 2023;
//     let job = "Student"
//     if (true) {
//         //block
//         console.log(hobby); 
//         let hobby = "Football" 

//     }
//    return hobby;

// Recursion
// function factorial (n){
//     if (n == 1) {
//         return 1
//     }
//     return factorial (n-1);
// }
// console.log(factorial(5));


//Recursion
// function sum (n){
//     if (n == 1){
//         return 1
//     }   
//     return n+sum(n-1)
// }
// console.log(sum(5));

// FACTORIAL with recursion
// function factorial (n){
//     if (n == 1) {
//         return 1
//     } 
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// Closure
// function makeAdder(x) {

//     function add(y){
//         return y + x;
//     };
//     return add;
// }
// console.log(makeAdder (4)(2));

// ---------------------Home Task - Day 3--------------//
//1) Closure
function PlusFive(n){

    function MakePlusFunction(m){
        return n+m;
    }
    return MakePlusFunction;
}
console.log(PlusFive(2)(5));
// console.log(PlusFive(-8)(5));
// console.log(PlusFive(0)(10));
// console.log(PlusFive(188)(10));
// console.log(PlusFive(5)(10));

//2) Recursion
// function FibonacciNumber(Fn) {
//     if (Fn == 1 || Fn == 2) {
//         return 1
//     }
//     return FibonacciNumber(Fn - 1) + FibonacciNumber(Fn - 2);
// }
// console.log(FibonacciNumber(5));
// console.log(FibonacciNumber(4));
// console.log(FibonacciNumber(2));

// 14) Closure
// function multiplyN1(n){

//     function multiplyN2 (m) {
//         return n*m;
//     }
//     return multiplyN2;
// }
// console.log(multiplyN1(10)(2));
// console.log(multiplyN1(-51)(-4));
// console.log(multiplyN1(3)(9));

//6) Рекурсия
// function sumDigit(n){
//     last = n%10;
//     middle = Math.floor(n/10%10);
//     rev = last + middle;
//     if (n==0){
//         return 0
//     }
//     return rev + sumDigit(Math.floor(n/100));
// }
// console.log(sumDigit(999));
// console.log(sumDigit(222));
// console.log(sumDigit(333));


