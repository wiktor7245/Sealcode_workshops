var tasks = [];
var z = 0;
var url='http://sealcode.org:8082/api/v1/resources/task';

function getTasks() { // pobieramy listę zadań po wystąpieniu odpowiedniego zdarzenia
	qwest.get(url, {}, {cache: true}).then(
		function(xhr, response) {
			response.forEach(function(element) { // wywołujemy dla każdego pobranego zasobu
				tasks.push(element); // dodajemy pobrany element zasobu do tablicy "tasks"
				/* Teraz treść danego zadania i jego inne własciwości będą ukrywać się w tasks[index].body.nazwaWlasciwosci, np. tasks[0].body.title - nazwa pierwszego zadania w tablicy! */
            //	refresh(); // odświeżamy stan strony
            console.log(element.body.title);

            var xd = document.createElement('li');
    var x = document.createTextNode(element.body.title);
    xd.appendChild(x);
    document.getElementById("listing").appendChild(xd);
    
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    xd.appendChild(span);
    j=0;
    for (j = 0; j < close.length; j++) {
    close[j].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
	})});
}

getTasks();
console.log("XD");
console.log(tasks.length);