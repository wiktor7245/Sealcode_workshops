//nagłówek
var nagl = document.getElementById('heading');
nagl.innerHTML = "Wiktor Tylman";

//operacje czasowe - pierwszy akapit
var months = ['stycznia', 'lutego', 'marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października',
'listopada','grudnia'];
var days = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'];
var t = new Date();
var month = months[t.getMonth()];
var day = days[t.getDay()];

var first = document.getElementById('paragraph-one');
first.innerHTML = "Data, która pojawi się przy otwarciu tej strony to: " + day + ", " + t.getDate() + ", " + month +
 ", " + t.getFullYear() + "r." + '<br />' + "Godzina w momencie otwarcia strony: " + t.getHours() + ":"
  + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds() + ".";

//operacje na stringach - drugi akapit
var zdanie = "Podstawą szczęścia jest wolność, a podstawą wolności odwaga.";
var podmiana = zdanie.replace("podstawą","fundamentem");
var obciecie = zdanie.split(',');
var odwroc = [obciecie[1]];

var second = document.getElementById('paragraph-two');
second.innerHTML = "Operuję na zdaniu: \"" + zdanie + "\"" + '<br />' + '<br />' +
"Trzynastym znakiem w tym zdaniu jest: " + zdanie.charAt(12) + "." + '<br />' +
"Znaki pomiędzy 7. a 12. pozycją to: " + zdanie.substring(6,12) + "." + '<br />' +
"Pierwszy raz znak 'ą' pojawia się na miejscu: " + zdanie.indexOf('ą') + "." + '<br />' +
"Ten ciąg ma " + zdanie.length + " znaków." + '<br />' +
"Po zamianie 'podstawą' na 'fundamentem' mamy: " + podmiana + '<br />' +
"Część zdania przed przecinkiem to: " + obciecie[0] + "." + '<br />' +
"Druga część zdania po odwróceniu to: " + odwroc.reverse();

//wlasciwosc math - trzeci akapit
//wyroznik to po prostu delta
wyroznik = 5*5 - 4 * 1 * 6;
pierwiastek = Math.sqrt(wyroznik);
msc1 = ((-5) + pierwiastek)/2*1;
msc2 = ((-5) - pierwiastek)/2*1;

var third = document.getElementById('paragraph-three');
third.innerHTML = "Korzystam z dodatkowych wiadomości o obiekcie Math ze strony: http://kursjs.pl/kurs/math.php"
+ '<br />' + '<br />' +
"Zadanie 1. Mam funkcję kwadratową: " + '<br />' +
"f(x) = x^2 + 5x + 6" + '<br />' + '<br />' +
"Wyróżnik tego trójmianu to: " + wyroznik + "." + '<br />' +
"Pierwiastek kwadratowy tego wyróżnika to: " + pierwiastek + "." + '<br />' +
"Miejscami zerowymi tej funkcji są: " + msc1 + " i " + msc2 + ".";

//number i math - akapit czwarty
var x = Math.PI / 6;
var war = Math.sqrt(Math.abs(Math.sin(Math.log(Math.pow(2,x))) + Math.max(0,x) + Math.abs((-Math.exp(2*x))
 + Math.min(-1,x))));

var forth = document.getElementById('paragraph-four');
forth.innerHTML = "Kontynuuję pracę z obiektem Math i używam obiektu Number: " + '<br />' + '<br />' +
"f(x) = sqrt(|sin(ln(2^(x))) + max(0, x) + |-e^(2x) + min(-1, x)||) dla x = pi/6." + '<br />' + '<br />' + 
"Mój wynik to: " + war + "." + '<br />' +
"Wynik w notacji wykładniczej to: " + war.toExponential() + "." + '<br />' +
"Po zaokrąleniu wyniku w górę mam: " + Math.ceil(war) + ".";








