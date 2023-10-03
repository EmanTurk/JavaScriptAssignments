//quistion 2:
  // Select and log each element using querySelector/querySelectorAll
    var h1 = document.querySelector('h1');
    console.log(h1);

    var p = document.querySelector('p');
    console.log(p);

    var a = document.querySelector('a');
    console.log(a);

    var img = document.querySelector('img');
    console.log(img);

    var divWithClass = document.querySelector('.x');
    console.log(divWithClass);

    var divWithId = document.querySelector('#y');
    console.log(divWithId);

    // For multiple elements with the same tag, you might want to use querySelectorAll and loop through the NodeList
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
      console.log(input);
    });
// question 3:

//inside script:
var inputElements1 = document.querySelectorAll('input');
inputElements1.forEach(function(input) {
  console.log(input);
});

// Using getElementsByTagName-here
var inputElements2 = document.getElementsByTagName('input');
Array.from(inputElements2).forEach(function(input) {
  console.log(input);
});
