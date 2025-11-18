import { listenViewTransitions } from "./animation/viewTransitions";

listenViewTransitions(() => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });
}, true);
