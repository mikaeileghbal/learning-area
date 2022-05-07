const notification = (() => {
  const d = document;
  const container = d.body.appendChild(d.createElement("div"));
  const message = container.appendChild(d.createElement("p"));
  const dismissBtn = container.appendChild(d.createElement("button"));
  container.className = "notification";
  dismissBtn.textContent = "Dismiss!";
  dismissBtn.onclick = () => {
    container.style.display = "none";
  };
  return {
    display(msg) {
      message.textContent = msg;
      container.style.display = "block";
    },
  };
})();

notification.display("Notification");
