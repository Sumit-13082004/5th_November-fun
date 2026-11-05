const buttons = document.querySelectorAll(".btn");
const log = document.getElementById("log");

const names = {
  classic: "Classic",
  glossy: "Glossy Gradient",
  neon: "Neon Outline",
  chunky: "Chunky 3D",
  ripple: "Ripple",
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const flavor = btn.dataset.flavor;
    log.textContent = `You pressed the ${names[flavor]} button.`;

    // Ripple effect only for the ripple-flavored button
    if (flavor === "ripple") {
      spawnRipple(btn, event);
    }
  });
});

function spawnRipple(btn, event) {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}
