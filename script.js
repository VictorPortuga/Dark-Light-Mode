const chk = document.querySelector("[data-chk]");
const body = document.body;

chk.addEventListener("change", () => {
  body.classList.toggle("dark");
});
