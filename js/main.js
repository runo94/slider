function ready() {
    const slidesArr = document.querySelectorAll(
        ".inner-block .clothing-type div"
    );

    const maskList = document.querySelectorAll(
        ".inner-slides-center-side #mask .mask-element"
    );

    const descriptionList = document.querySelectorAll(
        ".description-wrapper .content-block"
    );

    const navigationMask = document.querySelectorAll(".mask-navigation-element");
    const spriteColors = document.querySelectorAll(".sprite svg");

    const blackStyle = document.getElementById("black");
    const whiteStyle = document.getElementById("white");
    let activeSpriteColors;
    blackStyle.onclick = colorPick;
    whiteStyle.onclick = colorPick;

    const prevDescription = document.getElementById('prev-description');
    const nextDescription = document.getElementById('next-description');
    nextDescription.onclick = navigationDescription;
    prevDescription.onclick = navigationDescription;


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
            descriptionList[i].classList.remove("active");
            descriptionList[i].style.cssText = ""
        }

        let curMask = document.getElementById(
            `mask-${this.id[this.id.length - 1]}`
        );
        curMask.classList.add("active");

        let curDescription = document.getElementById(
            `description-block-${this.id[this.id.length - 1]}`
        );
        curDescription.classList.add("active");
        curDescription.style.cssText = `transform: translate(-${this.id[this.id.length - 1] * 100 - 100}%, 0);`

        let curNavMask = document.getElementById(
            `mask-navigation-${this.id[this.id.length - 1]}`
        );
        curNavMask.classList.add("active");
    }

    function activeBigSlide() {
        for (let i = 0; i < spriteColors.length; i++) {
            if (spriteColors[i].classList.contains("active")) {
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

    function navigationDescription() {
        const curr = document.querySelector(".mask-navigation-element.active");
        for (let i = 0; i < maskList.length; i++) {
            maskList[i].classList.remove("active");
            navigationMask[i].classList.remove("active");
            descriptionList[i].classList.remove("active");
            descriptionList[i].style.cssText = ""
        }
        if (this.id === 'next-description') {
            if (+curr.id[curr.id.length - 1] <= maskList.length - 1) {
                document.getElementById(`mask-${+curr.id[curr.id.length - 1] + 1}`).classList.add("active");
                document.getElementById(`description-block-${+curr.id[curr.id.length - 1] + 1}`).style.cssText = `transform: translate(-${(+curr.id[curr.id.length - 1] + 1) * 100 - 100}%, 0);`;
                document.getElementById(`description-block-${+curr.id[curr.id.length - 1] + 1}`).classList.add("active");
                document.getElementById(`mask-navigation-${+curr.id[curr.id.length - 1] + 1}`).classList.add("active");
            } else {
                document.getElementById(`mask-1`).classList.add("active");
                document.getElementById(`description-block-1`).classList.add("active");
                document.getElementById(`mask-navigation-1`).classList.add("active");
            }
        } else {
            if (+curr.id[curr.id.length - 1] == 1) {
                document.getElementById(`mask-${+maskList.length}`).classList.add("active");
                document.getElementById(`description-block-${+maskList.length}`).classList.add("active");
                document.getElementById(`description-block-${+maskList.length}`).style.cssText = `transform: translate(-${(maskList.length) * 100 - 100}%, 0);`;
                document.getElementById(`mask-navigation-${+maskList.length}`).classList.add("active");
            } else {
                document.getElementById(`mask-${+curr.id[curr.id.length - 1] - 1}`).classList.add("active");
                document.getElementById(`description-block-${+curr.id[curr.id.length - 1]  - 1}`).style.cssText = `transform: translate(-${(+curr.id[curr.id.length - 1] - 1) * 100 - 100}%, 0);`;
                document.getElementById(`description-block-${+curr.id[curr.id.length - 1] - 1}`).classList.add("active");
                document.getElementById(`mask-navigation-${+curr.id[curr.id.length - 1] - 1}`).classList.add("active");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);