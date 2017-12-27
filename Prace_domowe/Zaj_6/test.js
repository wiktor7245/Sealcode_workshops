function flip(str){
    var str_ = "";
    while(str.length != 0){
        str_ = str_ + str.substring(str.length - 1, str.length);
        str = str.slice(0, str.length-1);
    }
    return str_;
}

var dasds = "XASDASDASDWQDAWDASDFGEHG";
console.log(flip(dasds));