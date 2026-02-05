const btn = document.getElementById("runBtn");
const msg = document.getElementById("message");

// Move button randomly when mouse comes near
btn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
});

// If user manages to click
btn.addEventListener("click", () => {
  msg.textContent = "😲 Wow! You caught me di THANGO!";
});

