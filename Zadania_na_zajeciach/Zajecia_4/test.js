function getSize(width, height, depth) {
	var area = width * height;
	var volume = area * depth;
	var sizes = [area, volume]
	return sizes; // funkcja zwraca tablicę elementów
}

var area = getSize(3, 2, 3)[0];
var volume = getSize(3, 2, 3)[1];

console.log(area, volume);

// lub:

var areaVolume = getSize(3, 2, 3); // tablica o dwóch elementach

console.log(areaVolume);

var numbers = [11, 6, 12, 1, 3, 14, 10, 0, 13, 4, 15, 5, 9, 17, 7, 16, 2, 8];
var chars = ['O', 'H', 'W', 'N', 'I', ' ', 'E', 'B', 'E', 'W', 'L', 'T', 'C', 'G', 'O', 'E', 'O', 'E'];

numbers.forEach(function(element) {
	console.log(chars[element]);
});


var tab2 = new Array(20);

for(var i=0;i<tab2.length;i++){
	tab2[i] = i+1;
}

//w dol
for(var j=tab2.length;j>0;j--){
	console.log(tab2[j]);
}

//normalne
console.log(tab2);
