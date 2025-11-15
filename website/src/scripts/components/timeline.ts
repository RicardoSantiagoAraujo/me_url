/**
 * Handles the timeline script
 * @returns void
 */
export default function timelineAnimation(): void {
  var timeline = document.querySelector<HTMLElement>(".timeline");
  var balloons = document.querySelectorAll<HTMLElement>(".balloon"); // array of all sections with the reveal class (the sections of the html proper that we want to animate)
  var initial_delay = 2;
  var adjuster = 0.3;
  var balloon_count = balloons.length;
  // function to animate timeline bar and add balloons in sequence

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
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".balloon_revealed div::before {animation: none;}";

    for (var i = 0; i < balloons.length; i++) {
      balloons[i].style.animation = "none";
    }
  }, (initial_delay + adjuster * balloon_count) * 1000 + 1000);
}
