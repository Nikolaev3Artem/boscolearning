"use strict"
var modal = document.getElementById("myModal");
var btn = document.getElementById("accept")
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.onclick = function(){
    document.cookie = "CookieIsAccepted = True";
    modal.style.display = "none";
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}


var accept = getCookie("CookieIsAccepted")
console.log(accept)
if(accept){
    modal.style.display = "none";
}
else{
    modal.style.display = "block"
}