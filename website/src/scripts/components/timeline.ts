/**
 * Handles the timeline script
 * @returns void
 */
export default function timelineScript(): void {
  var timeline = document.querySelector<HTMLElement>(".timeline");
  var balloons = document.querySelectorAll<HTMLElement>(".balloon"); // array of all sections with the reveal class (the sections of the html proper that we want to animate)
  var initial_delay = 2;
  var adjuster = 0.7;
  var balloon_count = balloons.length;
  // function to animate timeline bar and add balloons in sequence
  function timeline_animation() {
    timeline?.classList.add("timeline_reveal");
    for (var i = 0; i < balloons.length; i++) {
      balloons[i].classList.add("balloon_reveal");
      var delay = initial_delay + i * adjuster;
      balloons[i].style.animationDelay = delay + "s";
    }
    setTimeout(function () {
      for (var i = 0; i < balloons.length; i++) {
        balloons[i].style.animationDelay = "0s";
        balloons[i].classList.add("balloon_revealed");
      }
      timeline!.style.animation = "none";
    }, (initial_delay + adjuster * balloon_count) * 1000);

    // to avoid issues on pageback
    setTimeout(function () {
      var styleElem = document.head.appendChild(
        document.createElement("style")
      );

      styleElem.innerHTML = ".balloon_revealed div::before {animation: none;}";

      for (var i = 0; i < balloons.length; i++) {
        balloons[i].style.animation = "none";
      }
    }, (initial_delay + adjuster * balloon_count) * 1000 + 1000);
  }

  // function to do the above, but with a delay
  function timeline_animation_delayed() {
    setTimeout(timeline_animation, 1000);
  }

  // Run it
  // window.addEventListener("scroll", timeline_animation);
  window.addEventListener("scroll", timeline_animation_delayed);

}

setTimeout(() => {
  timelineScript()
}, 0);