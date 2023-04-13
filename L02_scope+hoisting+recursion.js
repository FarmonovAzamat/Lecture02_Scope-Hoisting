
// GLOBAL SCOPE
let me = "Azamat is ";
let BirthYear = 2001;

function CalcAge() {
    // FUNCTION SCOPE / LOCAL SCOPE
    let now = 2023;
    let age = "22 years old in ";
    
    if (now == 2023) {
        // BLOCK SCOPE
        let job = ", and he is going to be a Web-developer inshaAllah!";
        return me + age + now + job;
    }
}
console.log(CalcAge());
console.log(now);//Reference Error: now is not defined.
 
//HOISTING is a mechanism that moves the variables and function declarations to the top
//*with var
a = 2;
var a;
console.log(a); //2;

//*with function declaration

food(2);
function food (a){
    console.log(4*a);
    console.log(b); // when 'var' executed within the FD before its' declaration, console reveals "undefined"
    b = 10; 
    var b;
}

// with let and const it is TDZ - Temporal Dead Zone
const myName = "Azamat"
if (myName === "Azamat"){
    console.log("Azamat is a " + job);
    const job = 'SoftClub Student';//Uncaught ReferenceError: Cannot access 'foo' before initialization
}