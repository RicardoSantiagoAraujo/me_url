import { listenViewTransitions } from "@/scripts/animation/viewTransitions";

listenViewTransitions(() => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });
}, true);
