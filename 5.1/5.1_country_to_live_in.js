const language = prompt('What language do you prefer?');
const isIsland = prompt('Is it an island (true or false)?') === 'true';
const population = parseInt(prompt('What is the population of the country?'));
const country = prompt('Enter the name of the country:').toLowerCase();

if (language === 'english' && !isIsland && population < 50) {
  console.log(`You should live in ${country}.`);
} else {
  console.log(`${country} does not meet your criteria.`);
}
