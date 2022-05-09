const myGlossary = [...glossary];

const h1 = document.querySelector("h1");

const card = document.querySelector(".card");
const front = card.querySelector(".card__front");
const back = card.querySelector(".card__back");

const buttonsDiv = document.querySelector(".buttons");
const buttons = document.querySelectorAll("button");
const textFront = document.querySelector(".card__front h2");
const textBack = document.querySelector(".card__back p");

const clearDisplay = () => {
    card.remove();
    buttonsDiv.remove();
    h1.textContent = "Félicitations vous connaissez tous les mots à apprendre.";
    gsap.to(h1, { autoAlpha: 1 })
}

const updateGlossaryCount = () => {

    if (myGlossary.length === 0) {

        var tl = gsap.timeline({ onComplete: clearDisplay });
        tl.to(h1, { autoAlpha: 0 })
            .to(card, { autoAlpha: 0 })
            .to(buttons[0], { autoAlpha: 0 })
            .to(buttons[1], { autoAlpha: 0 })

        return;
    }

    h1.textContent = `Il vous reste ${myGlossary.length} mots à apprendre.`;
}

updateGlossaryCount();



var previousCardIndex = -1;

const getRandomInt = (max) => {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

const drawCard = () => {

    if (myGlossary.length === 0) {
        textFront.textContent = "";
        textBack.textContent = "";
        return;
    }

    let index = getRandomInt(myGlossary.length - 1);

    gsap.set(front, { clearProps: "all" });
    gsap.set(back, { clearProps: "all" });
    flipped = false;

    textFront.textContent = myGlossary[index].word;
    textBack.textContent = myGlossary[index].definition;
    previousCardIndex = index;

}

const deleteCurrentWord = () => {
    myGlossary.splice(previousCardIndex, 1);
    updateGlossaryCount();
    drawCard();
}

const skipCurrentWord = () => {
    drawCard();
}

// OK
buttons[0].addEventListener("click", deleteCurrentWord);
// NOK
buttons[1].addEventListener("click", skipCurrentWord);

let flipped = false;
card.addEventListener("click", () => {

    if (!flipped) {
        gsap.to(front, { rotationY: -180, duration: 1 });
        gsap.to(back, { rotationY: 0, duration: 1 });
        flipped = true;
        return;
    }

    gsap.to(front, { rotationY: 0, duration: 1 });
    gsap.to(back, { rotationY: 180, duration: 1 });
    flipped = false;

}

);


drawCard();