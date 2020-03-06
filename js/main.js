function ready() {
  const slidesArr = document.querySelectorAll(
    ".inner-block .clothing-type div"
  );

  const maskList = document.querySelectorAll(
    ".inner-slides-center-side #mask .mask-element"
  );
  const navigationMask = document.querySelectorAll(".mask-navigation-element");

  for (let i = 0; i < maskList.length; i++) {
    navigationMask[i].onclick = navigateMask;
  }

  for (let i = 0; i < slidesArr.length; i++) {
    console.log(slidesArr[i]);
    slidesArr[i].onclick = activeBigSlide;
  }

  function navigateMask() {
    for (let i = 0; i < maskList.length; i++) {
      maskList[i].classList.remove("active");
      navigationMask[i].classList.remove("active");
    }

    let curMask = document.getElementById(
      `mask-${this.id[this.id.length - 1]}`
    );
    curMask.classList.add("active");

    let curNavMask = document.getElementById(
      `mask-navigation-${this.id[this.id.length - 1]}`
    );
    curNavMask.classList.add("active");
  }

  function activeBigSlide() {
    console.log(this);
    const sprite = document.querySelector(".sprite img");
    sprite.removeAttribute("class");
    sprite.classList.add(this.id);
  }
}

document.addEventListener("DOMContentLoaded", ready);
