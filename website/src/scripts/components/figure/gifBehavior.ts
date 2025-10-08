
function gifSwitcher(fig: HTMLImageElement): void {
      // enter hover
      fig.addEventListener("mouseenter", () => { 
        fig.src = fig.src.replace(".png", ".gif"); 
      }
      )
      // exit hover
      fig.addEventListener("mouseout", () => { 
        fig.src = fig.src.replace(".gif", ".png"); 
      }
      )
}

  //////////////////////////////////////////////////////////////////////////////
  // GIF behaviour
export function activateGifBehavior(): void {
(document.querySelectorAll(".fig_gif img") as NodeListOf<HTMLImageElement>).forEach((gif) => {
    gifSwitcher(gif as HTMLImageElement);
  }
)
}