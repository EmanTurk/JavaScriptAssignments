let choice = prompt('Choose an option:\n1. Convert Letter Grade to Score\n2. Convert Score to Letter Grade');

if (choice === '1') {
  let letterGrade = prompt('Enter your letter grade (A-F):');
  letterGrade = letterGrade.toUpperCase();

  switch (letterGrade) {
    case 'A':
      console.log('Score of: 90-100');
      break;
    case 'B':
      console.log('Score of: 80-89');
      break;
    case 'C':
      console.log('Score of: 70-79');
      break;
    case 'D':
      console.log('Score of: 65-69');
      break;
    case 'F':
      console.log('Score of: 0-64');
      break;
    default:
      alert('Invalid input. Please enter a letter grade (A-F).');
  }
} else if (choice === '2') {
  let numericScore = prompt('Enter your numeric score (0-100):');
  numericScore = parseFloat(numericScore);

  if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
    alert('Invalid input. Please enter a numeric score in the range 0-100.');
  } else if (numericScore >= 90) {
    console.log('Letter Grade: A');
  } else if (numericScore >= 80) {
    console.log('Letter Grade: B');
  } else if (numericScore >= 70) {
    console.log('Letter Grade: C');
  } else if (numericScore >= 65) {
    console.log('Letter Grade: D');
  } else {
    console.log('Letter Grade: F');
  }
} else {
  alert('Invalid choice. Please enter 1 or 2.');
}
