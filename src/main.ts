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

//change to let for price to change
const cUpgradeCost: number = 50;
const clickUpgrade = document.createElement("span");
const cUpLabel = document.createElement("p");
const cPurchase = document.createElement("button");
cPurchase.textContent = "Purchase?";
clickUpgrade.textContent = "50";
cUpLabel.append("Click Boost: ", "$", clickUpgrade, "    ", cPurchase);

//change to let later for upgrades
const auto: number = 10000;

image.addEventListener("click", () => {
  console.log("Clicked");
  counter += clickPower;
  counterElement.textContent = counter.toString();
});

setInterval(() => {
  counter += clickPower;
  counterElement.textContent = counter.toString();
}, auto);

cPurchase.addEventListener("click", () => {
  if (counter >= cUpgradeCost) {
    console.log("Bought");
    counter -= 50;
    counterElement.textContent = counter.toString();
    clickPower += 1;
  } else {
    console.log("Not enough money");
  }
  clickUpgrade.textContent = cUpgradeCost.toString();
});
app.append(heading, image, counterLabel, cUpLabel, message);
