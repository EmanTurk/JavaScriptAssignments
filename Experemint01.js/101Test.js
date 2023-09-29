const booksArray = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

// booksArray.forEach(function (authore) {
//   console.log(authore.author.toUpperCase());
// });

const Authors= booksArray.map(function(b) {
    return b.author;
})

////////////map//////

// const numbersArray = ['one', 'two', 'three', 'four', 'five', 'six'];
// const wordsArray = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];


// numbersArray.map (function(num){
//     return num *1;
// }
// )