var Name = "Win + Alt to search"; 
if (navigator.appVersion.indexOf("Mac") != -1){
   Name = "⌘ + Option to search"
}
var elt = document.getElementById("search-shortcut");
elt.innerText = Name;
