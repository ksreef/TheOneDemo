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

//change to let later for upgrades
const auto: number = 10000;

image.addEventListener("click", () => {
  console.log("Clicked");
  counter += 1;
  counterElement.textContent = counter.toString();
});

setInterval(() => {
  counter += 1;
  counterElement.textContent = counter.toString();
}, auto);

app.append(heading, image, counterLabel, message);
