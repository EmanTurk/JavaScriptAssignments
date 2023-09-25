const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function haveSameValues(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let item of arr1) {
        if (!arr2.includes(item)) {
            return false;
        }
    }

    for (let item of arr2) {
        if (!arr1.includes(item)) {
            return false;
        }
    }

    return true;
}

console.log(haveSameValues(food1, food2));  //  false
