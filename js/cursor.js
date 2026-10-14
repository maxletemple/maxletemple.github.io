(function () {

  if (!matchMedia("(pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;


  const cursor = document.createElement("div");
  cursor.id = "animate_cursor";
  cursor.setAttribute("aria-hidden", "true");
  document.body.appendChild(cursor);

  const root = document.documentElement;
  const IDLE_DELAY = 50;
  let idleTimer = null;

  document.addEventListener("mousemove", (e) => {

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;


    root.classList.add("cursor-moving");

    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      root.classList.remove("cursor-moving");
    }, IDLE_DELAY);
  });

  root.addEventListener("mouseleave", () => {
    clearTimeout(idleTimer);
    root.classList.remove("cursor-moving");
  });
})();