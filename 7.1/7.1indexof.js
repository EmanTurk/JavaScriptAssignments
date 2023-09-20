const Numbers = ['4', '7', '5', '6', '2', '5', '7', '8'];
const NoDoubles = [];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers.indexOf(Numbers[i]) === i) {
        NoDoubles.push(Numbers[i]);
    }
}

console.log(NoDoubles);  
