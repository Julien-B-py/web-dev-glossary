const h1 = document.querySelector("h1");

h1.textContent = `Il vous reste ${glossary.length} mots à apprendre.`;

const card = document.querySelector(".card");
const front = card.querySelector(".card__front");
const back = card.querySelector(".card__back");

const buttons = document.querySelectorAll("button");
const textFront = document.querySelector(".card__front h2");
const textBack = document.querySelector(".card__back p");

var previousCardIndex = -1;

const getRandomInt = (max) => {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

const drawCard = () => {

    let index = getRandomInt(glossary.length - 1);
    while (index === previousCardIndex) {
        index = getRandomInt(glossary.length - 1);
    }

    gsap.set(front, { clearProps: "all" });
    gsap.set(back, { clearProps: "all" });
    flipped = false;

    textFront.textContent = glossary[index].word;
    textBack.textContent = glossary[index].definition;
    previousCardIndex = index;
}

buttons.forEach(button => button.addEventListener("click", drawCard));

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