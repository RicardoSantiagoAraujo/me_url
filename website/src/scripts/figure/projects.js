
export function Projects() {


  //////////////////////////////////////////////////////////////////////////////
  // FIGURE NUMBERING
  Array.prototype.forEach.call(document.querySelectorAll(".fig.numbered>figcaption span"), function (e, i) {
    e.innerHTML = e.innerHTML.trim(); //trimming whitespace on either end
    e.innerHTML = e.innerHTML[0].toUpperCase() + e.innerHTML.slice(1); // Capitalize first letter
    let fig_number = document.createElement("span");
    fig_number.classList.add("numbering");
    fig_number.innerText = `Fig. ${i + 1} -\u00A0`;
    e.insertBefore(fig_number, e.childNodes[0]);
  });


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







  //////////////////////////////////////////////////////////////////////////////
  //  Accordion panels

  var acc = document.getElementsByClassName("accordion_btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active_accordion_btn");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // click on load to start out open if there is content other than TODO or specified in class
    let start_collapsed = acc[i].classList.contains("start_collapsed") // class to collapse by default on load
    let first_content = acc[i].nextElementSibling.childNodes[0].textContent.trim().toUpperCase() // content of very first node
    // console.log(first_content)
    console.log(start_collapsed)
    if (first_content != "TODO" && !start_collapsed) // exclusion criteria: panel must have "TODO" (and nothing more) as content of very first node AND not have the start_collapsed class
      acc[i].click()
  }


  // Automatic add anchors to headings based on title text
  document.querySelectorAll("h3, h4, h5, h6").forEach((heading) => {
    // console.log(heading)
    let id = heading.innerHTML.trim().toLowerCase().replaceAll(" ", "_")
    heading.setAttribute("id", id)
  })
}