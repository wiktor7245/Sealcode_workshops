//close button
var buttons = document.getElementsByTagName("li");
var i;
for(i=0; i < buttons.length; i++){
    var span = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    var txt = document.createTextNode("XD");
    span.className = "close";
    span.appendChild(txt);
    buttons[i].appendChild(span);
}


//deleting items
var close = document.getElementsByClassName("close");
var i;
for(i=0;i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//check symbol
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// adding items
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("in").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("listing").appendChild(li);
  }
    tasks.push(inputValue);
  document.getElementById("in").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  qwest.post(url, {title: inputValue, is_done: false}, {cache: true}); // wysłanie nowego zadania w postaci obiektu o właściwościach "title" i "is_done"
    
    //this cant be right without rest api
    /*window.location.reload(true);
    console.log(Math.random());*/
}