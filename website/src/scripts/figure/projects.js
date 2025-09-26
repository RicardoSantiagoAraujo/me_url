
export function Projects() {

  // changing external SVG's color. Not very practical
// window.onload=function() {
// 	// Get the Object by ID
// 	var svgs = document.querySelectorAll("object");
// 	// Get the SVG document inside the Object tag
// 	svgs.forEach((svg) =>{
//         svgDoc = svg.contentDocument;
//         // console.log(svgDoc)
//         var svgItem = svgDoc.querySelector("svg");
//         // console.log(svgItem);
//         // Set the colour to something else
//         console.log(svgItem)
//         svgItem.setAttribute("fill", "red");
//     }
//     )
// };


//////////////////////////////////////////////////////////////////////////////
/** make text appear in the innerHTML of the element, one character at a time per timeBetween */
function appearChars(str, elem, timeBetween) {
  var index = -1;
  (function go() {
    if (++index < str.length) {
      elem.innerHTML = elem.innerHTML + str.charAt(index);
      setTimeout(go, timeBetween);
    }
  })();
}

var elem = document.querySelector('#project_info .github a');
var inner_text = elem.innerHTML; // store content
elem.innerHTML = ""; // empty element
var timeBetween = 50;
setTimeout(() => {
  appearChars(inner_text, elem, timeBetween);
}, 500) // wait a little bit before starting




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
    gif.src = gif.src.replace(".png",".gif");
    console.log(gif.src)
    }
  )
  // exit hover
  gif.addEventListener("mouseout", () => {
    console.log(gif.src)
    gif.src = gif.src.replace(".gif",".png");
    console.log(gif.src)
    }
  )
}
)



//////////////////////////////////////////////////////////////////////////////
// PARALLAX EFFECT FOR BACKGROUND
document.addEventListener('DOMContentLoaded', function () {
  let parallax = document.querySelector('.parallax');
  let background = document.querySelector('.parallax_bg');

  document.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    //   let scrolled = parallax.scrollTop;
    background.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    // console.log(scrolled)
  });
});


//////////////////////////////////////////////////////////////////////////////
// MINIHEADER BEHAVIOUR

document.addEventListener('DOMContentLoaded', function () {
  let miniheader = document.querySelector('#mini_header');
  let header = document.querySelector('header');
  let header_bottom = header.offsetTop + header.offsetHeight;

  // setting authors
  let names = "";
  document.querySelectorAll('.authors .names .name').forEach((name) => {
    let fullname = name.innerHTML.trim();
    // get first name
    var firstname = fullname.split(' ')[0];
    // get family names
    var familynames = fullname.split(' ');
    familynames.shift();
    familynames = familynames.join(" ");
    // get first letter of first name
    var firstname_firstletter = firstname[0];
    // create string
    names = `${names} ${firstname_firstletter}. ${familynames},`;
  });
  names = names.slice(0, -1); // remove last comma
  document.querySelector(".authors__miniheader").innerHTML = names;


  // setting github repo
  document.querySelector('.github__miniheader a').href = document.querySelector('.github a').href
  document.querySelector('.github__miniheader a').innerHTML = document.querySelector('.github__miniheader a').href.split("com/").pop()


  // scroll behaviour
  document.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    if (scrolled > header_bottom) {
      miniheader.style.transform = "translateY(0)";
      miniheader.style.opacity = "1";
    } else {
      miniheader.style.opacity = "0";
    }
  });
});




//////////////////////////////////////////////////////////////////////////////
// Back to top button

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

window.addEventListener("scroll", scrollFunction);
var dist_threshold = 400

function scrollFunction() {
  var position = document.documentElement.scrollTop
  mybutton.style.transition = "visibility 0.5s, opacity 0.5s, transform 0.2s, background-color 0.2s";
  if (
    document.body.scrollTop > dist_threshold ||
    position > dist_threshold
  ) {
    // mybutton.style.display = "block";
    mybutton.style.opacity = 1;
    mybutton.style.visibility = "visible";
  } else {
    // mybutton.style.opacity = position / dist_threshold;
    mybutton.style.opacity = 0;
    mybutton.style.visibility = "hidden";
    // mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




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