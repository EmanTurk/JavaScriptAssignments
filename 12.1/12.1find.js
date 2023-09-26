const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
    
    //call out a function-filter from the array itself-so anything with not a true reading status is false
    function goodBooks(libraryArray) {
        const readableBooks = libraryArray.filter(function(book) {
            return book.readingStatus === true;
        });
        return readableBooks;
    }
    //this is how we check if it's true

    const result = goodBooks(library);
console.log(result);