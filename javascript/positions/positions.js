const x = document.getElementById("x");
const y = document.getElementById("y");
const scrollx = document.getElementById("scrollx");
const scrolly = document.getElementById("scrolly");

window.addEventListener("mousemove", function (e) {
  x.textContent = `pageX: ${e.pageX}`;
  y.textContent = `pageY: ${e.pageY}`;
  scrollx.textContent = `scrollX: ${window.scrollX}`;
  scrolly.textContent = `scrollY: ${window.scrollY}`;
});

console.log(2 + +"1");
