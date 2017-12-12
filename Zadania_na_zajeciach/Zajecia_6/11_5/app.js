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

/*Dla strony o kodzie źródłowym HTML z przykładu 11.2. napisz skrypt języka JavaScript, który akapitowi nada klasę akapit i zmieni identyfikator na zmieniony.*/
