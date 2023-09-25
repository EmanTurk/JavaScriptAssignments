function swapPropertiesAndValues(obj) {
    const swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}
//try this 

// Example for boba
const original = {
    catname: "Boba",
    age: "4",
    city: "Tokyo"
};

const result = swapPropertiesAndValues(original);
console.log(result);
