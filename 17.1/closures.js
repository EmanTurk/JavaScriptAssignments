 // block 1

 var b = 1; // the variable b is declared in the global scope.
function someFunction(number) { //the function is declared, it has a paramater called number and there's another function nested inside the ssomeFunction
function otherFunction(input) {
return b;
}
b = 5; //is declared withing the scope.
return otherFunction; //will retrun the value of b wich is 5
}
var firstResult = someFunction(9); //will be reference to otherFunction
var result = firstResult(2);// this will have a value of 5 because otherfunction returns 5 that has been declared within the scope of someFunction

// **number and input here both parameters are unnecessary in this code since they haven't been utlized.
///////////////////////

//block 2

//***note to self: only for const declaration and initiazation ahppen simutanously. for let and var it can happen simutanuously.


var a = 1;
function b2() {
a = 10; //this referes to the hoisted function 'a' within b(), not the global variable a which was defined above. 
return;
function a() { }
}
b2();
console.log(a);// this will give 1 since this log invokes the global variable a
// in Summary: first a in function b is within the scope of the function! in the console log(a)- this will refer to the global variable a, which is in the global scope.

/////////////////////
//block 3

let i; ///let has block-level scoping. it's declared outside the loop.
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);//After the for loop has run, setTimeout begins to execute the log functions with delays of 100 milliseconds.
}// the output: 0
1
2
///with each number being logged after a delay of 100 milliseconds.

