//quistion 2:
  // Select and log each element using querySelector/querySelectorAll
  const h1 = document.querySelector('h1');
  console.log(h1);

  const p = document.querySelector('p');
  console.log(p);

  const a = document.querySelector('a');
  console.log(a);

  const img = document.querySelector('img');
  console.log(img);

  const divWithClass = document.querySelector('.x');
  console.log(divWithClass);

  const divWithId = document.querySelector('#y');
  console.log(divWithId);

  // For multiple elements with the same tag, you might want to use querySelectorAll and loop through the NodeList
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    console.log(input);
  });

// question 3:  // Using querySelectorAll


  const inputElements1 = document.querySelectorAll('input');
  inputElements1.forEach(function(input) {
    console.log(input);
  });

  const inputElements2 = document.getElementsByTagName('input');
  Array.from(inputElements2).forEach(function(input) {
    console.log(input);
  });

