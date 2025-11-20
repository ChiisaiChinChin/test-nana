let num = 1;
let num2 = 1;
const secondPart = document.getElementById("ndPart");
const thirdPart = document.getElementById("rdPart");
const imgO = document.getElementById("imgO");
const imgS = document.getElementById("imgS");
const Btn = document.getElementById("ndPartBtn");
const div = document.getElementById("H");

let Scale = 1;
function particles() {
    let nextCount;
    for (let i = 0; i < num; i++) {
        createParticle();
    }
    nextCount = num + 1;
    num = Math.min(nextCount, 50);
    if (num >= 20 && num < 25){
        secondPart.style.transform = "translateY(-90%)";
    }
    if (num >= 30 && num < 40){
        secondPart.style.transform = "translateY(-80%)";
    }
    if (num >= 40 && num < 50) {
        secondPart.style.transform = "translateY(0)";
        setTimeout(() => {
            Btn.style.opacity = "1";
        }, 1000)
    }
}
function createParticle() {
    const hearts = document.createElement("div");
    hearts.classList.add("d1");
    hearts.style.zIndex = "0.5";
    hearts.style.scale = "0.25";
    hearts.style.top = "-100px";
    hearts.style.position = "absolute";
    hearts.style.boxShadow = "none";
    hearts.style.opacity = '0';
    hearts.style.transformOrigin = "50% 50%";
    hearts.style.rotate = "0";
    hearts.style.background = "var(--pop1)";

    setTimeout(() => {
        hearts.style.opacity = '1';
        let d = getRandomInt(800, 6000);
        hearts.style.transform = "translateY(" + d + "px)";
        hearts.style.transformOrigin = "50% " + d;
    }, 200)
    setTimeout(() => {
        hearts.style.rotate = getRandomInt(-30, 30) + "deg";
    }, 1000)
    hearts.style.transition = "1.2s ease-in-out";
    document.body.appendChild(hearts);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    hearts.style.left = (getRandomInt(-100, 400)) + "px";

    setTimeout(() => {
        hearts.style.transition = "0.5s ease-in-out";
        hearts.style.opacity = "0";
    }, 1800);
    setTimeout(() => {
        hearts.remove();
    }, 2300);
}

function particles2() {
    let nextCount2;
    for (let i = 0; i < num2; i++) {
        createParticle2();
    }
    nextCount2 = num2 + 5;
    num2 = Math.min(nextCount2, 50);
    if (num2 >= 20 && num2 < 25){
        thirdPart.style.opacity = "1";
        thirdPart.style.transform = "translateY(0)"
        setTimeout(() => {

            imgO.style.transform = "translateY(0)";
            imgS.style.transform = "translateY(0)";
        }, 500)
    }
}
function createParticle2() {
    const hearts2 = document.createElement("div");
    hearts2.classList.add("d2");
    hearts2.style.zIndex = "3";
    hearts2.style.scale = "0.25";
    hearts2.style.top = "-100px";
    hearts2.style.position = "absolute";
    hearts2.style.boxShadow = "none";
    hearts2.style.opacity = '0';
    hearts2.style.transformOrigin = "50% 50%";
    hearts2.style.rotate = "0";
    hearts2.style.background = "var(--main)";

    setTimeout(() => {
        hearts2.style.opacity = '1';
        let d = getRandomInt(800, 6000);
        hearts2.style.transform = "translateY(" + d + "px)";
        hearts2.style.transformOrigin = "50% " + d;
    }, 200)
    setTimeout(() => {
        hearts2.style.rotate = getRandomInt(-30, 30) + "deg";
    }, 1000)
    hearts2.style.transition = "1.2s ease-in-out";
    document.body.appendChild(hearts2);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    hearts2.style.left = (getRandomInt(-100, 400)) + "px";

    setTimeout(() => {
        hearts2.style.transition = "0.5s ease-in-out";
        hearts2.style.opacity = "0";
    }, 1800);
    setTimeout(() => {
        hearts2.remove();
    }, 2300);
}

function Return(){
    num = 0;
    num2 = 0;
    Btn.style.opacity = "0";
    secondPart.style.transform = "translateY(-100%)";
    thirdPart.style.transform = "translateY(-100%)";
    thirdPart.style.opacity = '0';
}