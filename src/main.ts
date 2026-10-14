// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;
image.style.cursor = "pointer";

const message = document.createElement("p");
message.textContent = "Your project starts here.";

let counter: number = 0;
const counterElement = document.createElement("span");
const counterLabel = document.createElement("p");

counterElement.textContent = "0";
counterLabel.append("Counter: ", counterElement);

let clickPower: number = 1;

//tracking upgrades owned
let clickUpgradesOwned: number = 0;
let autoTimeUpgradesOwned: number = 0;
let autoPowerUpgradesOwned: number = 0;

const clickQuantity = document.createElement("span");
const autoTimeQuantity = document.createElement("span");
const autoPowerQuantity = document.createElement("span");
const productionRate = document.createElement("p");

//change to let for price to change
let cUpgradeCost: number = 50;
const clickUpgrade = document.createElement("span");
const cUpLabel = document.createElement("p");
const cPurchase = document.createElement("button");
cPurchase.textContent = "Purchase?";
clickUpgrade.textContent = "50";
cUpLabel.append(
  "Click Boost: $",
  clickUpgrade,
  " | Owned: ",
  clickQuantity,
  " ",
  cPurchase,
);

//change to let later for upgrades
let auto: number = 10000;
let autoCost: number = 75;
const autoUpgrade = document.createElement("span");
const autoLabel = document.createElement("p");
const autoPurchase = document.createElement("button");
autoPurchase.textContent = "Purchase?";
autoUpgrade.textContent = "75";
autoLabel.append(
  "Auto Time Upgrade: $",
  autoUpgrade,
  " | Owned: ",
  autoTimeQuantity,
  " ",
  autoPurchase,
);

let autoPower: number = 1;
let aPowerCost: number = 100;
const aPowerUpgrade = document.createElement("span");
const aPowerLabel = document.createElement("p");
const aPowerPurchase = document.createElement("button");
aPowerPurchase.textContent = "Purchase?";
aPowerUpgrade.textContent = "100";
aPowerLabel.append(
  "Auto Power Upgrade: $",
  aPowerUpgrade,
  " | Owned: ",
  autoPowerQuantity,
  " ",
  aPowerPurchase,
);

//updateUI
function updateUI() {
  counterElement.textContent = Math.floor(counter).toString();

  clickQuantity.textContent = clickUpgradesOwned.toString();
  autoTimeQuantity.textContent = autoTimeUpgradesOwned.toString();
  autoPowerQuantity.textContent = autoPowerUpgradesOwned.toString();

  const rate = (1000 / auto) * autoPower;
  productionRate.textContent = `Production: ${rate.toFixed(2)} per second`;
}

image.addEventListener("click", () => {
  counter += clickPower;
  updateUI();
});

cPurchase.addEventListener("click", () => {
  if (counter >= cUpgradeCost) {
    console.log("Bought");
    counter -= cUpgradeCost;
    counterElement.textContent = counter.toString();
    clickPower += 1;
    clickUpgradesOwned += 1;
    cUpgradeCost *= 2;
  } else {
    console.log("Not enough money");
  }
  clickUpgrade.textContent = cUpgradeCost.toString();
  updateUI();
});

autoPurchase.addEventListener("click", () => {
  if (counter >= autoCost) {
    console.log("Bought");
    counter -= autoCost;
    counterElement.textContent = counter.toString();
    auto = Math.max(1000, auto - 1000);
    autoTimeUpgradesOwned += 1;
    autoCost *= 2;
  } else {
    console.log("Not enough money");
  }
  autoUpgrade.textContent = autoCost.toString();
  updateUI();
});

aPowerPurchase.addEventListener("click", () => {
  if (counter >= aPowerCost) {
    console.log("Bought");
    counter -= aPowerCost;
    counterElement.textContent = counter.toString();
    autoPower += 1;
    autoPowerUpgradesOwned += 1;
    aPowerCost *= 2;
  } else {
    console.log("Not enough money");
  }
  aPowerUpgrade.textContent = aPowerCost.toString();
  updateUI();
});

let lastTime: number = 0;

function gameLoop(timestamp: number) {
  if (lastTime !== 0) {
    const elapsedSeconds = (timestamp - lastTime) / 1000;
    counter += (1000 / auto) * autoPower * elapsedSeconds;
  }

  lastTime = timestamp;
  updateUI();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
app.append(
  heading,
  image,
  counterLabel,
  productionRate,
  cUpLabel,
  autoLabel,
  aPowerLabel,
  message,
);
