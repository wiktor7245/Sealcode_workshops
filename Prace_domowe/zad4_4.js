function bin(x){
    var remainder;
    var str = "";
    while (x>0){
        remainder = x%2;
        x = Math.floor(x/2);
        str = str + remainder;
    }
    //return str;
    var output = '';
    for (var i = str.length - 1; i >= 0; i--)
      output += str[i];
    return output;
}

console.log(bin(20));


