/**
 * Handles fullscreen slideshow functionality for images within figures.
 */
export function Fullscreen_slideshow() {
  /////////////////// Fullscreen images on click ///////////////////
  var imgs: NodeListOf<HTMLImageElement> | HTMLImageElement[] = [];

  /**
   * Scans the document for images within figures that have the 'allowZoom' class.
   */
  function scanForImages() {
    // imgs = document.querySelectorAll('#gallery .swiper img, #collections .collections__gallery img');
    imgs = document.querySelectorAll("figure.fig.allowZoom img");
    imgs = Array.prototype.slice.call(imgs);
  }
  scanForImages();

  // to pass image into fullscreen background
  const fullPage = document.querySelector(".fullpage") as HTMLElement;
  // background in fullpage mode
  const fullPage_bg = document.querySelector(".fullpage__bg") as HTMLElement;
  // caption in fullpage mode
  const fullPage_caption = document.querySelector(
    "#fullpage__caption"
  ) as HTMLElement;
  // all extras (caption, btns) in fullpage mode
  const fullPage_extras = document.querySelector(
    "#fullpage__extras"
  ) as HTMLElement;
  // to pass extra text into information button
  var info_btn = document.getElementById("fullpage__btn__info") as HTMLElement;
  var info_display = document.getElementById(
    "fullpage_extra_information"
  ) as HTMLElement;

  var current_img: HTMLImageElement;
  /**
   * Initializes click event listeners on images to enable fullscreen slideshow functionality.
   */
  function getImgs() {
    //
    // console.log(imgs);
    imgs.forEach((img) => {
      img.addEventListener("click", function (event) {
        // store current image
        current_img = img;
        // get image dimensions on page
        let img_width = img.width;
        let img_height = img.height;

        // Hide image in page
        img.style.opacity = "0";

        // set fullpage background as image
        fullPage.style.backgroundImage = `url(${img.src})`;
        //// set starting position of image zoom-in
        // OPTION 1: Centered on mouse click ++++++++++++++++++
        // fullPage.style.left = event.clientX + (-img_width/2) + "px";
        // fullPage.style.top = event.clientY + (-img_height/2) + "px";
        // OPTION 2: Centered on source image ++++++++++++++++++
        fullPage.style.left = img.getBoundingClientRect().left + "px";
        fullPage.style.top = img.getBoundingClientRect().top + "px";

        // set starting size of fullscreen image to the initial dimensions on screen
        fullPage.style.width = img_width + "px";
        fullPage.style.height = img_height + "px";
        // make it visible and clickable
        fullPage.style.opacity = "1";
        // updating info text
        info_update(img);
        setTimeout(() => {
          // SET FINAL PROPERTIES ON FULLSCREEN
          fullPage.style.left = "0px";
          fullPage.style.top = "0px";
          fullPage.classList.add("fullpage_active");
          fullPage_bg.classList.add("fullpage__bg_active");
          fullPage.style.width = "100vw";
          fullPage.style.height = "100vh";
          document.body.classList.add("no-scroll");
          // Replacing fullpage caption contents
          updateFullscreenCaption(img);

          // get transition into fullscreen duration from css
          let transition_delay =
            parseFloat(
              window.getComputedStyle(
                document.querySelector(".fullpage_active") as HTMLElement
              ).transitionDuration
            ) * 1000;
          setTimeout(() => {
            // SET FINAL PROPERTIES ON FULLSCREEN AT END OF ANIMATION
            fullPage.style.pointerEvents = "all";
          }, transition_delay);
          //
        }, 0);
      });
    });
  }

  /**
   *  Updates the caption in fullscreen mode based on the provided image.
   * @param img - The image element whose caption is to be updated.
   */
  function updateFullscreenCaption(img: HTMLImageElement) {
    // Replacing fullpage caption contents
    let newCaption =
      img.parentElement!.dataset.caption;
    if (newCaption) {
      fullPage_caption.innerHTML = newCaption;
    }
  }

  getImgs();

  // next image in fullscreen mode
  const btn_next = document.getElementById(
    "fullpage__btn__next"
  ) as HTMLElement;
  btn_next.addEventListener("click", nextImage);

  /**
   * Advances to the next image in fullscreen mode.
   */
  function nextImage() {
    imgs = Array.prototype.slice.call(imgs);
    var arr_position = imgs.indexOf(current_img); // find it´s index
    if (arr_position == imgs.length - 1) {
      // might need to change later
      next_img = imgs[0];
    } else {
      var next_img = imgs[arr_position + 1];
    }
    fullPage.style.backgroundImage = `url(${next_img.src})`;

    // Replacing fullpage caption contents
    updateFullscreenCaption(next_img);

    if (arr_position < imgs.length - 1) {
      // might need to change later
      current_img = next_img;
    } else {
      current_img = imgs[0];
    } // Loop back
    let match = next_img.src.match(/[a-zA-Z0-9\-_]+\.(?:jpg|png|jpeg|svg)/);
    // updating info text with info of new img
    info_update(next_img);
  }

  // previous image in fullscreen mode
  const btn_prev = document.getElementById(
    "fullpage__btn__prev"
  ) as HTMLElement;
  btn_prev.addEventListener("click", prevImage);

  /**
   * Moves to the previous image in fullscreen mode.
   */
  function prevImage() {
    var arr_position = [...imgs].indexOf(current_img); // find it´s index
    if (arr_position >= 1) {
      var prev_img = imgs[arr_position - 1];
    } else {
      var prev_img = imgs[imgs.length - 1];
    }
    fullPage.style.backgroundImage = `url(${prev_img.src})`;
    // Replacing fullpage caption contents
    updateFullscreenCaption(prev_img);

    current_img = prev_img;
    let match = prev_img.src.match(/[a-zA-Z0-9\-_]+\.(?:jpg|png|jpeg|svg)/);
    // updating info text with info of new image
    info_update(prev_img);
  }

  // hide next/prev buttons if only one image
  if (imgs.length == 1) {
    btn_prev.style.display = "none";
    btn_next.style.display = "none";
  }

  // close fullscreen mode
  const btn_close = document.getElementById(
    "fullpage__btn__exit"
  ) as HTMLElement;
  btn_close.addEventListener("click", exit_fullPage);
  function exit_fullPage() {
    fullPage.style.opacity = "0";
    fullPage.style.pointerEvents = "none";
    fullPage.classList.remove("fullpage_active");
    fullPage_bg.classList.remove("fullpage__bg_active");
    fullPage_bg.style.pointerEvents = "none";
    // Enable scrolling
    document.body.classList.remove("no-scroll");
    // Reveal images in page
    imgs.forEach((img) => {
      img.style.opacity = "1";
    });
  }

  // Use keyboard to navigate fullscreen mode
  document.addEventListener("keydown", function (event) {
    //do something on keydown
    if (event.key == "Escape") {
      exit_fullPage();
    }
    if (event.key == "ArrowRight") {
      nextImage();
    }
    if (event.key == "ArrowLeft") {
      prevImage();
    }
  });

  // display fullpage info text on hover of info and meta buttons
  // ELEMENTS
  const targetElements = document.querySelectorAll<HTMLElement>(
    ".fullpage__btns, #fullpage__caption, #fullpage__btn__exit"
  );

  // HOVER EFFECT FOR BOTH INFO + META BUTTONS
  [info_btn].forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (fullPage) {
        fullPage.style.filter = "grayscale(1)";
      }
      targetElements.forEach((el) => {
        el.style.filter = "blur(5px) brightness(0) revert(1)";
        el.style.opacity = "0";
      });
    });

    btn.addEventListener("mouseleave", () => {
      if (fullPage) {
        fullPage.style.filter = "grayscale(0)";
      }
      targetElements.forEach((el) => {
        el.style.filter = "blur(0px) brightness(1) revert(1)";
        el.style.opacity = "1";
      });
    });
  });

  // HOVER EFFECT FOR INFO BUTTON (shows extra information)
  info_btn.addEventListener("mouseenter", () => {
    info_display.style.opacity = "1";
  });

  info_btn.addEventListener("mouseleave", () => {
    info_display.style.opacity = "0";
  });

  /**
   * Update information in fullscreen caption
   *
   * @param target
   * @returns
   */
  function info_update(target: HTMLImageElement) {
    let infoExtra =
      target.parentElement!.dataset.extra;
    if (infoExtra == null) {
      info_btn.style.visibility = "hidden";
      // fullPage_caption.style.visibility = "hidden";
      return 0;
    }
    let content = infoExtra;
    if (content != "" && content != null) {
      content = content.replace(/\s+/g, " "); // replaces multiple spaces with single spaces
      content = content.charAt(0).toUpperCase() + content.slice(1); // capitalize first letter of sentence
      content = content.replace(/<a[^>]*>|<\/a>/g, ""); // remove all anchor tags
      info_display.innerHTML = "<div>" + content + "</div>";
      info_btn.style.visibility = "visible";
      // fullPage_caption.style.visibility = "visible";
    } else {
      info_btn.style.visibility = "hidden";
    }
  }
}
