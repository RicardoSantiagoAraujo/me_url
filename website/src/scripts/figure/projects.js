
export function Projects() {





  //////////////////////////////////////////////////////////////////////////////
  // GIF behaviour
  document.querySelectorAll(".fig_gif img").forEach((gif) => {
    // enter hover
    gif.addEventListener("mouseenter", () => {
      console.log(gif.src)
      gif.src = gif.src.replace(".png", ".gif");
      console.log(gif.src)
    }
    )
    // exit hover
    gif.addEventListener("mouseout", () => {
      console.log(gif.src)
      gif.src = gif.src.replace(".gif", ".png");
      console.log(gif.src)
    }
    )
  }
  )








}