var nag = document.getElementById('heading-one');
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
pozostale.innerHTML = zadania.ileZostalo();
