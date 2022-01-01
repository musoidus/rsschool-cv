const menuItems = document.querySelectorAll(".menu");

menuItems.forEach(function (element) {
  let arg = "#section_" + element.id;
  element.addEventListener("mouseover", function () {
    document.querySelector(arg).classList.add("highlited");
  });
  element.addEventListener("mouseout", function () {
    document.querySelector(arg).classList.remove("highlited");
  });
});
