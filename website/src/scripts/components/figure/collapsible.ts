/**
 * Handles collapsible captions functionality.
 * @param collapsibleElement - The collapsible element to activate.
 */
export function activateCollapsibleCaptions(collapsibleElement: HTMLElement) : void {
    // if the value is an empty string, remove collapsible
    if (collapsibleElement.nextElementSibling!.innerHTML.replace(/\s+/g,'') == ""){
      collapsibleElement.parentElement!.style.display="none";
    }
    collapsibleElement.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling! as HTMLElement; 
      if (content.style.maxHeight){
        content.style.maxHeight = "";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

var coll = document.getElementsByClassName("collapsible")! as HTMLCollectionOf<HTMLElement>;
var i;

for (i = 0; i < coll.length; i++) {
  activateCollapsibleCaptions(coll[i]);
}
 
 