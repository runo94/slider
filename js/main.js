function ready() {
  const slidesArr = document.querySelectorAll(
    ".inner-block .clothing-type div"
  );

  const maskList = document.querySelectorAll(
    ".inner-slides-center-side #mask .mask-element"
  );
  const navigationMask = document.querySelectorAll(".mask-navigation-element");
  const spriteColors = document.querySelectorAll(".sprite svg");

  const blackStyle = document.getElementById("black");
  const whiteStyle = document.getElementById("white");

  let activeSpriteColors;

  blackStyle.onclick = colorPick;
  whiteStyle.onclick = colorPick;


  for (let i = 0; i < maskList.length; i++) {
    navigationMask[i].onclick = navigateMask;
  }

  for (let i = 0; i < slidesArr.length; i++) {
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
    for (let i = 0; i < spriteColors.length; i++) {
      if(spriteColors[i].classList.contains("active")){
          activeSpriteColors = spriteColors[i];
      }
    }

    for (let i = 0; i < slidesArr.length; i++) {
      slidesArr[i].classList.remove("active");
    }

    const sprite = document.querySelector(".sprite img");
    sprite.removeAttribute("class");
    sprite.classList.add(this.id);

    this.classList.add("active");
    activeSpriteColors.classList.remove("active");
    colorPick()
  }

  function colorPick() {
    const clothType = document.querySelector(".clothing-type div.active");
    const spriteActiveColor = document.querySelector(".sprite svg.active");
    
    if (this.id === "white") {
      spriteActiveColor.classList.remove("active");
    } else {
      for (let i = 0; i < spriteColors.length; i++) {
        if (spriteColors[i].classList[0] === clothType.id) {
          spriteColors[i].classList.add("active");
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", ready);
