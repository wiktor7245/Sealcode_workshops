function flip(str){
    var str_ = "";
    while(str.length != 0){
        str_ = str_ + str.substring(str.length - 1, str.length);
        str = str.slice(0, str.length-1);
    }
    return str_;
}

var remH1 = document.getElementsByTagName('h1')[0];
remH1.classList.remove('example');

var zamiana = "rotakifytnediywon";
remH1.setAttribute('id',flip(zamiana));

var newEl_ = document.createElement('br');
var newEl = document.createElement('a');
var newTxt = document.createTextNode('Sealcode.org');
newEl.appendChild(newTxt);
var pos = document.getElementsByTagName('h1')[0];
pos.appendChild(newEl_);
pos.appendChild(newEl);
newEl.setAttribute('class','new-class');
newEl.setAttribute('href','https://www.sealcode.org');
newEl.setAttribute('target','blank');


var remList = document.getElementsByTagName('ul')[0];
while(remList.hasChildNodes()){
    remList.removeChild(remList.lastChild);
}

var newLi;
var pos1 = document.getElementsByTagName('ul')[0];
for(var i = 1; i<31;i++){
    newLi = document.createElement('li');
    newTxt = document.createTextNode('Nowa treść ' + i);
    newLi.appendChild(newTxt);
    pos1 = document.getElementsByTagName('ul')[0];
    pos.appendChild(newLi);
    newLi.setAttribute('id','new'+i);
}

var chp = document.getElementsByTagName('p')[0];
chp.firstChild.nodeValue = "Zmieniona treść akapitu.";


  





