function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){ //Uncaught TypeError: Cannot read properties of undefined (reading 'length')- I get this error since the ode was trying to access a lenght of an undefined variable.
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
    //getSum([1,2,3], [5,66,23]); // here we're trying to pass two seperate arrays as an argument. so we should add a comma between them

const result = getSum([1, 2, 3], [5, 66, 23]);
console.log(result); 


// first I chnaged the const to let, since the value of this variable will change and we can't use here const. Second in the get sum, we used two arguments, and we should use a comma between so we can pass two seperate arguments. I added return to make it accesable outside the function
// Problem:
//getSum([1,2,3][5,66,23]); - This line.
//const sum = 0; - This line.