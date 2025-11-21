import { listenViewTransitions } from "@/scripts/animation/viewTransitions";

listenViewTransitions(() => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links__bg-screen")?.classList.toggle("expanded");
  });
  document.querySelector(".nav-links__bg-screen")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
    document.querySelector(".nav-links__bg-screen")?.classList.toggle("expanded");
  });
}, true);
