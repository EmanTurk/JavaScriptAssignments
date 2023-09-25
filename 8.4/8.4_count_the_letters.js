const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    let letterCount = {};
    let maxCount = 0;
    let mostFrequentLetter = '';

    for (let word of arr) {
        for (let char of word) {
            let lowerChar = char.toLowerCase();
            if (lowerChar >= 'a' && lowerChar <= 'z') {
                letterCount[lowerChar] = (letterCount[lowerChar] || 0) + 1;
                if (letterCount[lowerChar] > maxCount) {
                    maxCount = letterCount[lowerChar];
                    mostFrequentLetter = lowerChar;
                }
            }
        }
    }

    console.log(`Most frequent letter: ${mostFrequentLetter} with ${maxCount} occurrences`);
    return letterCount;
}

console.log(countLetters(array));
