
/* ==================================
   SCREEN NAVIGATION
================================== */

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {

    const target = document.getElementById(screenId);

    if (!target) return;

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==================================
   WELCOME
================================== */

document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("questionScreen");
});


/* ==================================
   LOVE QUESTION
================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reaction = document.getElementById("reaction");

let noCount = 0;

const playfulMessages = [
    "Waittt, are you sure, shubhuuu? 🥺",
    "Think again, my babyyyy. 💗",
    "I'll give you another chance, hehe. 🙈",
    "It's okay. You can answer honestly. ❤️"
];

noBtn.addEventListener("click", () => {

    noCount++;

    reaction.textContent =
        playfulMessages[
            Math.min(noCount - 1, playfulMessages.length - 1)
        ];

    if (noCount === 1) {
        noBtn.textContent = "Think again? 🥺";
    } else if (noCount === 2) {
        noBtn.textContent = "One more thought? 💗";
    } else {
        noBtn.textContent = "It's okay ❤️";
    }

});

yesBtn.addEventListener("click", () => {

    showScreen("loveScreen");

    createHeartBurst();

});


/* ==================================
   NAVIGATION BUTTONS
================================== */

const navigation = [
    ["galleryBtn", "galleryScreen"],
    ["chatsBtn", "chatsScreen"],
    ["aboutBtn", "aboutScreen"],
    ["feelingsBtn", "feelingsScreen"],
    ["distanceBtn", "distanceScreen"],
    ["futureBtn", "futureScreen"],
    ["letterBtn", "letterScreen"],
    ["giftBtn", "giftScreen"]
];

navigation.forEach(([buttonId, screenId]) => {

    document.getElementById(buttonId).addEventListener("click", () => {

        showScreen(screenId);

    });

});


/* ==================================
   FINAL GIFT
================================== */

const giftBox = document.getElementById("giftBox");
const finalMessage = document.getElementById("finalMessage");
const giftHint = document.getElementById("giftHint");

giftBox.addEventListener("click", () => {

    giftBox.textContent = "💝";

    giftBox.style.animation = "none";

    finalMessage.classList.add("show");

    giftHint.textContent = "A little piece of my heart. ❤️";

    createHeartBurst();

});


/* ==================================
   RESTART
================================== */

document.getElementById("restartBtn").addEventListener("click", () => {

    noCount = 0;

    noBtn.textContent = "No 🙈";

    reaction.textContent = "";

    giftBox.textContent = "🎁";

    giftBox.style.animation = "";

    finalMessage.classList.remove("show");

    giftHint.textContent = "Tap to open your gift. 💗";

    showScreen("welcomeScreen");

});


/* ==================================
   FLOATING HEARTS
================================== */

const heartContainer = document.getElementById("backgroundHearts");

const heartSymbols = ["♡", "♥", "💕", "💗", "✨"];

function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.className = "heart-particle";

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duration = 7 + Math.random() * 7;

    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}

setInterval(createFloatingHeart, 850);


/* ==================================
   HEART BURST
================================== */

function createHeartBurst() {

    const colors = [
        "#ff4f87",
        "#ff8eb5",
        "#ffcade",
        "#e83270"
    ];

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("span");

        heart.textContent = "♥";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        heart.style.transition =
            "transform 1.2s ease-out, opacity 1.2s ease-out";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 200;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        requestAnimationFrame(() => {

            heart.style.transform =
                `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        });

        setTimeout(() => {
            heart.remove();
        }, 1300);

    }

}

const LOVE_PASSWORD = "Subhu143";

function unlockSurprise() {
const enteredPassword =
document.getElementById("secretPassword").value;

if (enteredPassword === LOVE_PASSWORD) {
document.getElementById("passwordScreen").style.display = "none";
} else {
document.getElementById("passwordError").textContent =
"Oops! That's not our secret password. Try again, love! 💗";
}
}

document.addEventListener("DOMContentLoaded", function () {
const passwordInput = document.getElementById("secretPassword");

if (passwordInput) {
passwordInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
unlockSurprise();
}
});
}
});
