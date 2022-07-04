const alertPlaceholder = document.getElementById("alertPlaceholder");
const alertTrigger = document.getElementById("liveAlertBtn");

function alert(message, type) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class='alert alert-${type} show fade alert-dismissible' role='alert'>${message}<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='close'></button></div>`;
  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener("click", function () {
    alert("Nice, you triggered this alert message!", "success");
  });
}
