import { mouse, Button } from "@nut-tree/nut-js";

async function autoClick() {
  while (true) {
    await mouse.click(Button.LEFT);
    console.log("Clicked!");
    await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 sec
  }
}

autoClick();
