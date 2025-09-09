import { mouse, Button } from "@nut-tree-fork/nut-js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

async function autoClick() {
  while (true) {
    await mouse.click(Button.LEFT);
    console.log("Clicked at", new Date().toISOString());

    const delay = randomBetween(3000, 5000); // 3–5 sec
    console.log(`Waiting ${delay / 1000} seconds...`);
    await sleep(delay);
  }
}

autoClick().catch((err) => {
  console.error("Error in autoClick:", err);
});
