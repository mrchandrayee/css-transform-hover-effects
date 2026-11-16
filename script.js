// On touch devices, tap a demo tile to toggle its transform.
// Desktop users can simply hover. Keyboard focus also previews each effect.
const demos = document.querySelectorAll(".demo");

demos.forEach((demo) => {
  demo.addEventListener("click", () => {
    const wasActive = demo.classList.contains("is-active");
    demos.forEach((item) => item.classList.remove("is-active"));
    if (!wasActive) demo.classList.add("is-active");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".demo")) {
    demos.forEach((item) => item.classList.remove("is-active"));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    demos.forEach((item) => item.classList.remove("is-active"));
  }
});
