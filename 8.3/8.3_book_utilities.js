const book1 = {
    name: 'trust no one',
    author: 'Dan brown',
    year: 1998,
}

const book2 = {
    name: 'rich dad,poor dad',
    author: 'robert k',
    year: 2001,
}

const bookUtils = {
    getFirstPublished: function(bookA, bookB) {
        return (bookA.year < bookB.year);
    },

    setNewEdition: function(book, editionYear) {
        book.latestEdition = editionYear;
    },

    setLanguage: function(book, lang) {
        book.language = lang;
    },

    setTranslation: function(book, lang, translator) {
        book.translation = {
            language: lang,
            translator: translator
        };
    },

    setPublisher: function(book, name, location) {
        book.publisher = {
            name: name,
            location: location
        };
    },

    isSamePublisher: function(bookA, bookB) {
        return bookA.publisher && bookB.publisher && 
               bookA.publisher.name === bookB.publisher.name && 
               bookA.publisher.location === bookB.publisher.location;
    }
}

// Example Usage:
bookUtils.setLanguage(book1, 'English');
bookUtils.setPublisher(book1, 'Penguin', 'USA');
bookUtils.setPublisher(book2, 'Penguin', 'USA');
console.log(bookUtils.isSamePublisher(book1, book2));  // Returns true if they have the same publisher and location
