var months = ['stycznia', 'lutego', 'marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października',
'listopada','grudnia'];
var d = new Date();
var month = months[d.getMonth()];
var datownik = document.getElementById('today');
datownik.innerHTML = "Today is: " + d.getDate() + " " + month + " " + d.getFullYear() + "r." + '<br />' + " Add note:";