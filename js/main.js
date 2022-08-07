function typedReady() {
  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 100,
    loop: true,
    startDelay: 800,
    backSpeed: 100,
    smartBackspace: true,
    backDelay: 500,
    showCursor:false,

  });
 
}
document.getElementById("demo").innerHTML = " designed by ali mahmoud ";
console.log("hello ali ");
typedReady();
