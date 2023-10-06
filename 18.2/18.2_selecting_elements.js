document.getElementById('h01').style.color= "blue";
console.log(document.getElementById('h01'));

const paragraphs= document.getElementsByClassName("paragraph"); 
paragraphs[0].style.fontSize= "30px";
console.log("paragraph"); //remember getbyclassName returns a collction of elements. 


document.getElementById('description').style.display ='inline-block';
console.log(document.getElementById('description'));

document.body.style.backgroundColor= "green";
console.log(document.body.backgroundColor); //you can use quesrySelector of body but this is faster-udemyTip.

document.title = 'New Title';//document.title is a special property provided by the DOM (Document Object Model) API that directly references the text content of the <title> element in the HTML document-good to know this
