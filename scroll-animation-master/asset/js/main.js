const boxes = [...document.querySelectorAll(".box")];

window.addEventListener("scroll", scrollAnimate);

scrollAnimate();

function scrollAnimate() {
  const windowHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;

    if (boxTop < windowHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
