//close button
var buttons = document.getElementsByTagName("li");
var i;
for (i = 0; i < buttons.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  var txt = document.createTextNode("XD");
  span.className = "close";
  span.appendChild(txt);
  buttons[i].appendChild(span);
}

function del(nr){

  var element = document.getElementById(nr);
  console.log(element.parentNode);
  var parent = element.parentNode.parentNode;
  parent.removeChild(element.parentNode);
  qwest.delete(url+'/'+tasks[nr].id, null, {cache: true}).then(function(xhr, response) { // usuwamy zadanie o danym identyfikatorze (tym razem nie musimy przesyłać ciała takiego zadania)
		refresh(); // odświeżamy stan strony
  });
  //location.reload(true);
}


function checktask(tags){
  var res = tags.slice(2,tags.length);
  if(tasks[res].body.is_done == false){
    tasks[res].body.is_done = true;
    var check = document.getElementById(tags);
    check.setAttribute("class", "checked");
    qwest.map('PATCH', url+'/'+tasks[res].id, tasks[res].body, {cache: true}).then(function(xhr, response) { // szukamy odpowiedniego zasobu na serwerze i modyfikujemy jego ciało
      refresh(); // odświeżamy stan strony
    });
  }
  else{
    tasks[res].body.is_done = false;
    var check = document.getElementById(tags);
    check.removeAttribute("class", "checked");
    qwest.map('PATCH', url+'/'+tasks[res].id, tasks[res].body, {cache: true}).then(function(xhr, response) { // szukamy odpowiedniego zasobu na serwerze i modyfikujemy jego ciało
      refresh(); // odświeżamy stan strony
    });
  }
}


//adding (enter)
function validateOnEnter(event) {
  var key = event.which || event.keyCode;
  if (key == 13) { // enter pressed then invoke the validation method
    newElement();
    location.reload(true);
  }

}


// adding items
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("in").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  var wejscie = inputValue.trim();
  if (wejscie === '') {

    alert("You must write something!");

  } else {

    document.getElementById("listing").appendChild(li);
    qwest.post(url, {
      title: inputValue,
      is_done: false
    }, {
      cache: true
    }); // wysłanie nowego zadania w postaci obiektu o właściwościach "title" i "is_done"
  }

  location.reload(true);
}
