var element = document.getElementById('header');
console.log(element.firstChild.nodeValue); // wynikiem będzie "Przykład "
console.log(element.lastChild.firstChild.nodeValue) // wynikiem będzie "11.3."
console.log(element.nodeValue); // wynikiem będzie "null"
console.log(element.firstChild.nextSibling.nodeValue); // wynikiem będzie "null"
element.firstChild.nodeValue = "Zmieniony przykład ";