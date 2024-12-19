import { DebugDisplay } from "./objects/debugdisplay.js";
import { RandomText } from "./objects/randomtext.js";

const debugDisplay = new DebugDisplay();
const randomText = new RandomText();

const gameTitle = document.getElementById("title");
const clickCounter = document.getElementById("counter");
const clickButton = document.getElementById("click-me-button");
const upgradeButton = document.getElementById("upgrade-button");
const nextUpgradeText = document.getElementById("next-upgrade");

let clicks = 0;
let clickGain = 1;
let upgradePrice = 200;

// let titleAngle = 0.0;
// let angleTime = 0.0;

let delta = 0.0;
let lastTime = 0.0;

function increment() {
    clicks += clickGain;
    clickCounter.innerHTML = clicks;
}

function decrement(amt) {
    clicks -= amt;
    clickCounter.innerHTML = clicks;
}

function buyUpgrade() {
    if(clicks < upgradePrice) {
        alert("You don't have enough clicks for this!");
        return;
    }

    decrement(upgradePrice);

    clickGain += 2;

    nextUpgradeText.style.display = "block";
    upgradeButton.style.display = "none";

    upgradePrice = Math.round(upgradePrice * 1.3);
    nextUpgradeText.innerHTML = `Next upgrade at: ${upgradePrice} Clicks`;
}

function update(time) {
    requestAnimationFrame(update);

    delta = (time - lastTime) * .001;
    lastTime = time;

    const mem = debugDisplay.isFirefox ? 0 : performance.memory.usedJSHeapSize;

    randomText.update(delta);
    debugDisplay.update(1 / delta, mem);

    if(clicks >= upgradePrice) {
        nextUpgradeText.style.display = "none";
        upgradeButton.style.display = "grid";
    }

    // angleTime += delta;
    // titleAngle += 0.1 * Math.sin(1 - angleTime);
    // gameTitle.style.transform = `rotate(${titleAngle}deg)`; 
}

function init() {
    requestAnimationFrame(update);
    randomText.setQuote();
    clickButton.addEventListener("click", (e) => increment());
    upgradeButton.addEventListener("click", (e) => buyUpgrade());
}

init();