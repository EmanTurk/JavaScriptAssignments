const people = ["Greg", "Mary", "Devon", "James"];
people.shift();

//second quiestion
const people = ["Greg", "Mary", "Devon", "James"];

people.pop()
//third one

const people = ["Greg", "Mary", "Devon", "James"];
people.unshift("Matt");
//forth one
const people = ["Greg", "Mary", "Devon", "James"];
people.push("Eman");
//fifth one
const people = ["Greg", "Mary", "Devon", "James"];
const copy = people.slice(2); 
// slice+ the number= will start form 2
const people = ['Matt', 'Mary', 'Devon', 'Eman'];
people.slice(2); 
// slice= always start from the number we sit here in the slice! here I used to 2 so it satrted from Devon(0,1,2)

//Sixth One
const people = ["Greg", "Mary", "Devon", "James"];
maryIndex = people.indexOf("Mary");

//Sevenith
const people = ["Greg", "Mary", "Devon", "James"];
fooIndex = people.indexOf("Foo");
// it will give -1 cause it's not there.

// 8 one
const people = ["Greg", "Mary", "Devon", "James"];

const devonIndex = people.indexOf("Devon");
//remove devon here then add the new variable
if (devonIndex !== -1) {
    people.splice(devonIndex, 1, "Elizabeth");
}
//9

const withBob = people.concat("Bob");



