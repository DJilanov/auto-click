import { mouse, Button } from "@nut-tree-fork/nut-js";

async function autoClick() {
  while (true) {
    await mouse.click(Button.LEFT);
    console.log("Clicked at", new Date().toISOString());
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds
  }
}

autoClick().catch((err) => {
  console.error("Error in autoClick:", err);
});
