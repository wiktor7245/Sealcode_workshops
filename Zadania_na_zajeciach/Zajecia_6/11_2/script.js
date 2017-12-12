for(var i = 1; i<5;i++){
  console.log(document.getElementById('li-'+i).innerHTML);
}

var el = document.getElementsByClassName('example');
for (var i = 0; i < el.length; ++i) {
    console.log(el[i].innerHTML);
}
