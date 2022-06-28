window.addEventListener("load", (e) => {
  const doc = document || document.documentElement;
  const body = doc.body;
  const _head = doc.firstChild;
  const _body = doc.lastChild;
  const _head_ = doc.childNodes[0];
  const title = _head.firstChild;

  console.log(doc);
  console.log(body);
  console.log(_head);
  console.log(_body);
  console.log(_head_);
  console.log(title);
  console.log(_head.parentNode === doc);

  const parafs = document.getElementsByTagName("p");
  console.log(parafs);

  function showFeelings() {
    const feelings = document.getElementsByName("feeling");
    console.log("feeling: ", feelings[0].getAttribute("value"));
    console.log("feeling: ", feelings[1].getAttribute("value"));
  }

  document.getElementById("submit").addEventListener("click", (e) => {
    showFeelings();
  });
});

$(document).ready(function () {
  $("#greeting").html("Hello Martina.");
});

// Shortcut for above code
$(function () {
  $("#greeting").html("Hello again Martina");
});
