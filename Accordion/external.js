const accordion = document.getElementsByClassName("header");
var i; 
const arrows = document.querySelectorAll(".arrow-icon");



for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
      console.log(i)
     console.log(arrows)
    this.classList.toggle("active");


    const panel = this.nextElementSibling;
    const panelimage = this.firstElementChild.firstElementChild;
    console.log(panelimage)
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panelimage.style.transform = "none";
    
    } else {
      panel.style.display = "block";
      panelimage.style.transform = "rotate(180deg)";
    }
  });
}

