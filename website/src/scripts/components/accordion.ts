/**
 * Handles accordion functionality for collapsible sections.
 * @returns void
 */
export default function accordionScript() : void {
  if (typeof window === "undefined") return; // only run in browser

  const acc = document.getElementsByClassName("accordion__btn") as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < acc.length; i++) {
    const button = acc[i];

    // Click toggle behavior
    button.addEventListener("click", function () {
      this.classList.toggle("accordion__btn--active");
      const panel = this.nextElementSibling as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = "";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // Open panel by default if content is not "TODO" and no "start_collapsed" class
    const startCollapsed = button.classList.contains("start_collapsed");
    const firstContent = button.nextElementSibling?.childNodes[0]?.textContent?.trim().toUpperCase();
    if (!startCollapsed) {
      button.click();
    }
  }

  // Add anchors to headings based on title text
  document.querySelectorAll(".accordion__title").forEach((heading) => {
    const id = heading.textContent?.trim().toLowerCase().replaceAll(" ", "_");
    if (id) heading.setAttribute("id", id);
  });
}


setTimeout(() => {
  accordionScript()
}, 200);