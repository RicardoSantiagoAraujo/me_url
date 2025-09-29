export function activateCollapsibleCaptions() {

var coll = document.getElementsByClassName("collapsible") as HTMLCollectionOf<HTMLElement>;
var i;

for (i = 0; i < coll.length; i++) {

  // if the value is an empty string, remove collapsible
  if (coll[i].nextElementSibling.innerHTML.replace(/\s+/g,'') == ""){
    coll[i].parentElement.style.display="none";
  }
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

}