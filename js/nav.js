function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navRow") {
    x.className += " responsive";
  } else {
    x.className = "navRow";
  }
}