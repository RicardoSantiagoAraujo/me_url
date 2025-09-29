export function Fullscreen_slideshow() {
    /////////////////// Fullscreen images on click ///////////////////
    var imgs

    function scanForImages() {
        // imgs = document.querySelectorAll('#gallery .swiper img, #collections .collections__gallery img');
        imgs = document.querySelectorAll('figure img');
        console.log(imgs)
        imgs = Array.prototype.slice.call(imgs);
    }
    scanForImages()


    function checkIfGif(img) {
        if (img.parentElement.classList.contains("fig_gif")) // check if figure is a gif
        {
            return img.src.replace(".png", ".gif");
        } else {
            return img.src;
        }
    }

    // to pass image into fullscreen background
    const fullPage = document.querySelector('.fullpage');
    // background in fullpage mode
    const fullPage_bg = document.querySelector('.fullpage__bg');
    // caption in fullpage mode
    const fullPage_caption = document.querySelector('#fullpage__caption');
    // all extras (caption, btns) in fullpage mode
    const fullPage_extras = document.querySelector('#fullpage__extras');
    // to pass extra text into information button
    var info_btn = document.getElementById("fullpage__btn__info");
    var info_display = document.getElementById("fullpage_extra_information");

    var current_img;
    function getImgs() { //
        // console.log(imgs);
        imgs.forEach(img => {
            img.addEventListener('click', function (event) {
                // store current image
                current_img = img;
                // get image dimensions on page
                let img_width = img.width;
                let img_height = img.height;

                // Hide image in page
                img.style.opacity = "0";

                // set fullpage background as image
                fullPage.style.backgroundImage = 'url(' + img.src + ')';
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
                fullPage.style.opacity = '1';
                // updating info text
                info_update(img)
                setTimeout(() => { // SET FINAL PROPERTIES ON FULLSCREEN
                    fullPage.style.left = "0px";
                    fullPage.style.top = "0px";
                    fullPage.classList.add("fullpage_active");
                    fullPage_bg.classList.add("fullpage__bg_active");
                    fullPage.style.width = "100vw";
                    fullPage.style.height = "100vh";
                    // Disable scrolling
                    document.body.classList.add('no-scroll');
                    // Replacing fullpage caption contents
                    updateFullscreenCaption(img)

                    // get transition into fullscreen duration from css
                    let transition_delay = parseFloat(window.getComputedStyle(document.querySelector(".fullpage_active")).transitionDuration) * 1000;
                    document.querySelector('#mini_header').classList.add("mini_header_fullscreen");
                    setTimeout(() => { // SET FINAL PROPERTIES ON FULLSCREEN AT END OF ANIMATION
                        fullPage.style.pointerEvents = "all";
                    }, transition_delay);
                    //
                }, 0);
            });
        });
    }

    function updateFullscreenCaption(img) {
        // Replacing fullpage caption contents
        fullPage_caption.innerHTML = img.parentElement.querySelector(".figcaption_text").innerHTML;
    }


    getImgs(imgs)


    // next image in fullscreen mode
    const btn_next = document.getElementById("fullpage__btn__next")
    btn_next.addEventListener("click", nextImage);

    function nextImage() {
        imgs = Array.prototype.slice.call(imgs);
        var arr_position = imgs.indexOf(current_img); // find it´s index
        if (arr_position == (imgs.length - 1)) { // might need to change later
            next_img = imgs[0]
        } else {
            var next_img = imgs[arr_position + 1]
        }
        fullPage.style.backgroundImage = 'url(' + checkIfGif(next_img) + ')';
        // Replacing fullpage caption contents
        updateFullscreenCaption(next_img)

        if (arr_position < (imgs.length - 1)) { // might need to change later
            current_img = next_img;
        } else {
            current_img = imgs[0]
        } // Loop back
        let match = next_img.src.match(/[a-zA-Z0-9\-_]+\.(?:jpg|png|jpeg|svg)/);
        // updating info text with info of new img
        info_update(next_img)
    }


    // previous image in fullscreen mode
    const btn_prev = document.getElementById("fullpage__btn__prev")
    btn_prev.addEventListener("click", prevImage);

    function prevImage() {
        var arr_position = imgs.indexOf(current_img); // find it´s index
        if (arr_position >= 1) {
            var prev_img = imgs[arr_position - 1]
        } else {
            var prev_img = imgs[imgs.length - 1]
        }
        fullPage.style.backgroundImage = 'url(' + checkIfGif(prev_img) + ')';
        // Replacing fullpage caption contents
        updateFullscreenCaption(prev_img);

        current_img = prev_img;
        let match = prev_img.src.match(/[a-zA-Z0-9\-_]+\.(?:jpg|png|jpeg|svg)/);
        // updating info text with info of new image
        info_update(prev_img)
    }

    // close fullscreen mode
    const btn_close = document.getElementById("fullpage__btn__exit")
    btn_close.addEventListener("click", exit_fullPage);
    function exit_fullPage() {
        fullPage.style.opacity = '0';
        fullPage.style.pointerEvents = "none";
        fullPage.classList.remove("fullpage_active");
        fullPage_bg.classList.remove("fullpage__bg_active");
        fullPage_bg.style.pointerEvents = "none";
        document.querySelector('#mini_header').classList.remove("mini_header_fullscreen");
        // Enable scrolling
        document.body.classList.remove('no-scroll');
        // Reveal images in page
        imgs.forEach((img) => {
            img.style.opacity = "1";
        })

    }


    // Use keyboard to navigate fullscreen mode
    document.addEventListener("keydown", function (event) {
        //do something on keydown
        if (event.key == "Escape") {
            exit_fullPage()
        }
        if (event.key == "ArrowRight") {
            nextImage()
        }
        if (event.key == "ArrowLeft") {
            prevImage()
        }
    });

    // display fullpage info text on hover of info and meta buttons

    // $(document).ready(function () {

    //     // EFFECT ON HOVER EITHER:
    //     $(function () {
    //         // elements to be affected by hover:
    //         const target_elements = '.fullpage__btns, #fullpage__caption, #fullpage__btn__exit'
    //         $('#fullpage__btn__info, #fullpage__btn__meta').hover(function () {
    //             $('.fullpage').css('filter', 'grayscale(1)'); //hue-rotate(180deg)
    //             $(target_elements).css('filter', 'blur(5px)brightness(0)revert(1)');
    //             $(target_elements).css('opacity', 0);
    //         }, function () {
    //             $('.fullpage').css('filter', 'grayscale(0)'); //hue-rotate(0deg)
    //             $(target_elements).css('filter', 'blur(0px)brightness(1)revert(1)');
    //             $(target_elements).css('opacity', 1);
    //         });
    //     });
    //     // EFFECT ON HOVER INFO BUTTON:
    //     $(function () {
    //         $('#fullpage__btn__info').hover(function () {
    //             $('#fullpage_extra_information').css('opacity', '1');
    //         }, function () {
    //             // on mouseout, reset visibility
    //             $('#fullpage_extra_information').css('opacity', '0');
    //         });
    //     });
    //     // EFFECT ON HOVER META BUTTON:
    //     $(function () {
    //         $('#fullpage__btn__meta').hover(function () {
    //             $('#image_metadata').css('opacity', '1');
    //         }, function () {
    //             // on mouseout, reset visibility
    //             $('#image_metadata').css('opacity', '0');
    //         });
    //     });
    // }
    // )



    function info_update(target) {
        // content excluding space
        let content = target.parentElement.querySelector(".extra_information").innerHTML.replace(/\s+/g, ' ');
        console.log(content);
        if (content != "" && content != null) {
            content = content.charAt(0).toUpperCase() + content.slice(1); // capitalize first letter of sentence
            content = content.replace(/<a[^>]*>|<\/a>/g, ""); // remove all anchor tags
            info_display.innerHTML = "<div>" + content + "</div>";
            info_btn.style.visibility = 'visible';
        } else {
            info_btn.style.visibility = 'hidden';
        }
    }
}