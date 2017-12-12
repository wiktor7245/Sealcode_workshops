var el = document.getElementById('header');

if (el.hasAttribute('id')) { // sprawdzamy, czy element ma atrybut 'id'
	var attr = el.getAttribute('id'); // pobieramy wartość atrybutu 'id'
	console.log(attr);
	el.id = "nowy-id"; // zmieniamy wartość atrybutu 'id';
}

if (el.hasAttribute('class')) { // sprawdzamy, czy element ma atrybut 'class'
	var attr = el.getAttribute('class'); // pobieramy wartość atrybutu 'class'
	console.log(attr);
}
else {
	el.setAttribute('class', 'nowa-klasa'); // dodajemy do elementu atrybut 'class' o wartości 'nowa-klasa'
	var attr2 = el.className; // przypisujemy do zmiennej nazwę klasy
	console.log(attr2);
	el.removeAttribute('id'); // usuwamy atrybut 'id'
	console.log(el.getAttribute('id'));
}

var x = document.getElementsByTagName('p')

// Moja czesc
var zm = document.getElementById('paragraph');

if (zm.hasAttribute('id')) { // sprawdzamy, czy element ma atrybut 'id'
var attri = zm.getAttribute('id'); // pobieramy wartość atrybutu 'id'
console.log(attri);
zm.id = "zmieniony"; // zmieniamy wartość atrybutu 'id';
console.log(zm);
}

if (zm.hasAttribute('class')) { // sprawdzamy, czy element ma atrybut 'class'
var attri = zm.getAttribute('class'); // pobieramy wartość atrybutu 'class'
console.log(attri);
}
else {
zm.setAttribute('class', 'akapit'); // dodajemy do elementu atrybut 'class' o wartości 'nowa-klasa'
var attr3 = zm.className; // przypisujemy do zmiennej nazwę klasy
console.log(attr3);
zm.removeAttribute('id'); // usuwamy atrybut 'id'
console.log(zm.getAttribute('id'));
}