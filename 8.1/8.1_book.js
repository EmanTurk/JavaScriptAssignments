const mysteryBook = {
    bookName: 'Kafka on the Shore',
    author: 'Murakami',
    published: 2002,
    genre: 'fiction',
}
function describeBook(book) {
    return `The book ${book.bookName} was written by ${book.author} in the year ${book.published}`;
}
console.log(describeBook(mysteryBook));
