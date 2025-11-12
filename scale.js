const $scale = document.querySelector(".scale");
const task = () => $scale.innerHTML = `${document.body.clientWidth}px`;
window.addEventListener("resize", task);
task();
