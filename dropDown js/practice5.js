let dropDown = document.getElementsByClassName("dropdown-icon");
for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let dropDownContent = this.nextElementSibling;
  if (dropDownContent.style.display === "block") {
  dropDownContent.style.display = "none";
  } else {
  dropDownContent.style.display = "block";
  }
  });
}