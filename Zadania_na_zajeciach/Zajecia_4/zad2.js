function odwroc(array){
  var tab = new Array(array.length);
  var i = 0;
  for(var j=array.length;j>0;j--){
  	tab[i] = array[j-1];
    i++;
  }
  return tab;
}

var tablica = [1,2,3,4,5];
console.log(odwroc(tablica));
