document.getElementById('submitButton').addEventListener('click', checkAge);

function checkAge() {
  const age = document.getElementById('age').value;
  const messageElement = document.getElementById('message');

  if (age >= 18) {
    messageElement.textContent = 'You can drink!';
    messageElement.style.color = 'green';
  } else if (age < 18 && age > 0) {
    messageElement.textContent = "You're too young!";
    messageElement.style.color = 'red';
  } else {
    messageElement.textContent = "Please enter a valid age!";
    messageElement.style.color = 'orange';
  }
}