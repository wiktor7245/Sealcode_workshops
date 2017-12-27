var newEl = document.createElement('li');
newEl.setAttribute('id','li-5');
var newTxt = document.createTextNode('Punkt 5.');
newEl.appendChild(newTxt);
var pos = document.getElementsByTagName('ul')[0];
pos.appendChild(newEl);
