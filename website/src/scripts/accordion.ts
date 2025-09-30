  //////////////////////////////////////////////////////////////////////////////
  //  Accordion panels

  var acc = document.getElementsByClassName("accordion__btn") as HTMLCollectionOf<HTMLElement>;
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion__btn--active");
      var panel = this.nextElementSibling! as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = "";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // click on load to start out open if there is content other than TODO or specified in class
    let start_collapsed = acc[i].classList.contains("start_collapsed") // class to collapse by default on load
    let first_content = acc[i].nextElementSibling!.childNodes[0]!.textContent!.trim().toUpperCase() // content of very first node
    // console.log(first_content)
    console.log(start_collapsed)
    if (first_content != "TODO" && !start_collapsed) // exclusion criteria: panel must have "TODO" (and nothing more) as content of very first node AND not have the start_collapsed class
      acc[i].click()
  }


  // Automatic add anchors to headings based on title text
  document.querySelectorAll(".accordion__title").forEach((heading) => {
    // console.log(heading)
    let id = heading.innerHTML.trim().toLowerCase().replaceAll(" ", "_")
    heading.setAttribute("id", id)
  })