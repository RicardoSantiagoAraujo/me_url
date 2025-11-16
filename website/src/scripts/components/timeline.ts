/**
 * function to animate timeline bars and add balloons in sequence
 * @returns void
 */
export default function timelineAnimation(): void {
  var timelines = document.querySelectorAll<HTMLElement>(".timeline");
  var initial_delay = 1; // recomended to be at least same as $animation-duration-line--appear
  var adjuster = 0.3;
  // for each timeline in page
  timelines?.forEach((timeline) => {
    timeline.classList.add("timeline_reveal");
    var balloons = timeline.querySelectorAll<HTMLElement>(".balloon"); // array of all sections with the reveal class (the sections of the html proper that we want to animate)
    var balloon_count = balloons.length;
    for (var i = 0; i < balloons.length; i++) {
      balloons[i].classList.add("balloon_reveal");
      var delay = initial_delay;
      if (timeline.classList.contains("horizontal")) {
        delay += i * adjuster;
      }
      if (timeline.classList.contains("vertical")) {
        delay -= i * adjuster;
      }
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
  });
}

setTimeout(() => {
  timelineAnimation();
}, 500);
