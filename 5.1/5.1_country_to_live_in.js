const language = prompt('language');
let isIsland = prompt('isIsland');
const population = parseInt(prompt('population'));
const country = prompt('country');

isIsland == 'false' ? isIsland = false : isIsland=true;

if(language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet yout criteria`)}