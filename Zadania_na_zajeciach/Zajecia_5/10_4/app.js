/*var nag = document.getElementById('heading-one');
nag.innerHTML =  'Zmieniona zawartość';


function Zadania(iloscZadan, nazwaPrzedmiotu, ileZrobionych) {
  this.iloscZadan = iloscZadan;
  this.nazwaPrzedmiotu = nazwaPrzedmiotu;
  this.ileZrobionych = ileZrobionych;
  this.ileZostalo = function() {
    return this.iloscZadan - this.ileZrobionych;
  };
}

var zadania = new Zadania(20, 'Przyroda', 2);

var przedmiot = document.getElementById('span-one');
przedmiot.innerHTML = zadania.nazwaPrzedmiotu;

var pozostale = document.getElementById('span-two');
pozostale.innerHTML = zadania.ileZostalo();*/

var sentence = " Home sweet home ";
var nag = document.getElementById('paragraph-one');
nag.innerHTML =  "Nasz ciąg ma długość: " + sentence.length + '.' + "<br>" +
"Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: " + sentence.toUpperCase() + '.' + "<br>"+
"Na 10. pozycji znajduje się znak: " + sentence.charAt(9) + '.' + "<br>" +
"Ciąg 'ee' znajduje się na miejscu: " + sentence.indexOf("ee") + '.' + "<br>" +
"Ostatni indeks znaku 'e' to: " + sentence.lastIndexOf('e') + '.' + "<br>" +
"Znaki od 8 do 14 to: " + sentence.substring(7,13) + '.' + "<br>" +
"Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: " + sentence.trim() + '.' + "<br>" +
"Po zmianie 'me' na 'w' nasz ciąg wygląda tak: " + sentence.replace("me",'w') + '.' + "<br>";
