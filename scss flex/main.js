var prevScrollpos = window.pageYOffset;
var doc = document.getElementById("navbar")
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if(currentScrollPos > 20){
    doc.style.top = "-50px";
  }
  else{
    doc.style.top = "0";
    doc.classList.remove("navmenu");
  }
  if(currentScrollPos > 100){
    doc.style.top = "0";
    doc.classList.add("navmenu");
  }
  console.log(currentScrollPos)
  prevScrollpos = currentScrollPos;
}