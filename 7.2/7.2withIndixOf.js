const string = "The more you know, the more you know that you don't know";

let index = -1;
let nextIndex = string.indexOf("you");

while (nextIndex !== -1) {
    index = nextIndex;
    nextIndex = string.indexOf("you", index + 1);
}

console.log(index);