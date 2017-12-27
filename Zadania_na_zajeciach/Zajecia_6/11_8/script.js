var remEl = document.getElementsByTagName('ul')[0];
while(remEl.hasChildNodes()){
    remEl.removeChild(remEl.lastChild);
}

var containerEl = remEl.parentNode;
containerEl.removeChild(remEl);