const myCountry= {
    countryname:'France',
    Capital: 'Paris',
    population: '40 million',
    neighbours: ['Italy', 'UK', 'Belgium'],
    
    describe: function() {
        return `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};
//okay try
console.log(myCountry.describe());

myCountry.checkIsland();
console.log(myCountry.isIsland); 

