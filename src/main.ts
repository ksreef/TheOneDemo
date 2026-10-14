// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
//import { upgrade } from "asset:///node/undici/api.d.ts";
import tileUrl from "./assets/breakingpc.png";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "COMPUTERS BROKEN";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;
image.style.cursor = "pointer";

const message = document.createElement("p");

let counter: number = 0;
const counterElement = document.createElement("span");
const counterLabel = document.createElement("p");

counterElement.textContent = "0";
counterLabel.append("Computers Broken: ", counterElement);

let clickPower: number = 1;

//tracking upgrades owned
const clickQuantity = document.createElement("span");
const autoTimeQuantity = document.createElement("span");
const autoPowerQuantity = document.createElement("span");
const interestQuantity = document.createElement("span");
const productionRate = document.createElement("p");
const clickRate = document.createElement("p");
const interestRate = document.createElement("p");

type Upgrade = {
  name: string;
  cost: number;
  owned: number;
};

const upgrades: Record<string, Upgrade> = {
  click: {
    name: "Click Power",
    cost: 50,
    owned: 0,
  },
  autoTime: {
    name: "Auto Time",
    cost: 75,
    owned: 0,
  },
  autoPower: {
    name: "Auto Power",
    cost: 100,
    owned: 0,
  },
  interest: {
    name: "Interest Gain",
    cost: 150,
    owned: 0,
  },
};

//change to let for price to change
const clickUpgrade = document.createElement("span");
const cUpLabel = document.createElement("p");
const cPurchase = document.createElement("button");
cPurchase.textContent = "BUY UPGRADE";
clickUpgrade.textContent = "50";
cUpLabel.append(
  "Destructive Force: $",
  clickUpgrade,
  " | Owned: ",
  clickQuantity,
  " ",
  cPurchase,
);

//change to let later for upgrades
let auto: number = 10000;
const autoUpgrade = document.createElement("span");
const autoLabel = document.createElement("p");
const autoPurchase = document.createElement("button");
autoPurchase.textContent = "BUY UPGRADE";
autoUpgrade.textContent = "75";
autoLabel.append(
  "Computer Wreckage Machine - Time between wrecks: $",
  autoUpgrade,
  " | Owned: ",
  autoTimeQuantity,
  " ",
  autoPurchase,
);

let autoPower: number = 1;

const aPowerUpgrade = document.createElement("span");
const aPowerLabel = document.createElement("p");
const aPowerPurchase = document.createElement("button");
aPowerPurchase.textContent = "BUY UPGRADE";
aPowerUpgrade.textContent = "100";
aPowerLabel.append(
  "Computer Wreckage Macine - Machine destructive force: $",
  aPowerUpgrade,
  " | Owned: ",
  autoPowerQuantity,
  " ",
  aPowerPurchase,
);

let interestGain: number = 0;
let interestTimer: number = 0;
const interestInterval: number = 15;

const interestUpgrade = document.createElement("span");
const interestLabel = document.createElement("p");
const interestPurchase = document.createElement("button");
interestPurchase.textContent = "BUY UPGRADE";
interestUpgrade.textContent = "150";
interestLabel.append(
  "Computer Interest Machine - Gain machine interest: $",
  interestUpgrade,
  " | Owned: ",
  interestQuantity,
  " ",
  interestPurchase,
);

function purchaseUpgrade(
  upgrade: Upgrade,
  applyEffect: () => void,
) {
  if (counter < upgrade.cost) {
    console.log("Not enough money");
    return;
  }

  counter -= upgrade.cost;
  upgrade.owned += 1;
  applyEffect();
  upgrade.cost = Math.floor(upgrade.cost * 1.3);

  updateUI();
}

//updateUI
function updateUI() {
  counterElement.textContent = Math.floor(counter).toString();

  clickUpgrade.textContent = upgrades.click.cost.toString();
  autoUpgrade.textContent = upgrades.autoTime.cost.toString();
  aPowerUpgrade.textContent = upgrades.autoPower.cost.toString();
  interestUpgrade.textContent = upgrades.interest.cost.toString();

  clickQuantity.textContent = upgrades.click.owned.toString();
  autoTimeQuantity.textContent = upgrades.autoTime.owned.toString();
  autoPowerQuantity.textContent = upgrades.autoPower.owned.toString();
  interestQuantity.textContent = upgrades.interest.owned.toString();

  clickRate.textContent = `Computers Destroyed Per Click: ${clickPower}`;

  const rate = (1000 / auto) * autoPower;
  productionRate.textContent = `Computers Destroyed Per Second: ${
    rate.toFixed(2)
  }`;

  interestRate.textContent =
    `Computer Interest Per 12 Seconds: ${interestGain}`;
}

image.addEventListener("click", () => {
  counter += clickPower;
  updateUI();
});

cPurchase.addEventListener("click", () => {
  purchaseUpgrade(upgrades.click, () => {
    clickPower += 1;
  });
});

autoPurchase.addEventListener("click", () => {
  purchaseUpgrade(upgrades.autoTime, () => {
    auto = Math.max(1000, auto - 1000);
  });
});

aPowerPurchase.addEventListener("click", () => {
  purchaseUpgrade(upgrades.autoPower, () => {
    autoPower += 1;
  });
});

interestPurchase.addEventListener("click", () => {
  purchaseUpgrade(upgrades.interest, () => {
    interestGain += 0.2;
  });
});

let lastTime: number = 0;

function gameLoop(timestamp: number) {
  if (lastTime !== 0) {
    const elapsedSeconds = (timestamp - lastTime) / 1000;
    counter += (1000 / auto) * autoPower * elapsedSeconds;

    interestTimer += elapsedSeconds;
    if (interestTimer >= interestInterval) {
      counter += counter * interestGain;
      interestTimer -= interestInterval;
    }
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
  clickRate,
  productionRate,
  interestRate,
  cUpLabel,
  autoLabel,
  aPowerLabel,
  interestLabel,
  message,
);

//overall design
document.body.style.backgroundColor = "#101510";
document.body.style.color = "#39ff14";
document.body.style.fontFamily = "monospace";

heading.style.color = "#f72929";
heading.style.fontSize = "40px";

//tally design
counterLabel.style.fontSize = "24px";
counterElement.style.fontSize = "27px";
counterElement.style.fontWeight = "bold";
counterLabel.style.marginBottom = "15px";

clickRate.style.marginBottom = "15px";
productionRate.style.marginBottom = "15px";
interestRate.style.marginBottom = "35px";

//button design
for (
  const button of [cPurchase, autoPurchase, aPowerPurchase, interestPurchase]
) {
  button.style.backgroundColor = "#003600";
  button.style.color = "#f0eeee";
  button.style.border = "1px solid #1047fc";
  button.style.padding = "6px 10px";
  button.style.cursor = "pointer";
}
