function find(tab,x){
    for(var i=0;i<tab.length;i++){
        if(x == tab[i]){
            return "Liczba " + x + " znajduje się na " + i + " miejscu tablicy";
        }
    }
    return "Liczba " + x + " nie występuje w danej tablicy";
}

var tablica = [1,4,7,43242,-12321,131,3,0,4,9,2,4,8,3,245,6750,-41412,532,-2];
var n = 3;
console.log(find(tablica,n));