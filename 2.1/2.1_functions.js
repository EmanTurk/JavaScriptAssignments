function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const info1 = countryInfo('Spain', 47, 'Madrid');
const info2 = countryInfo('France', 80, 'Paris');
const info3 = countryInfo('Italy', 39, 'Rome');

console.log(info1);
console.log(info2);
console.log(info3);
