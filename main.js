console.log("main.js loaded");

import { Chime } from "./Chime.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const chimes = [
    new Chime(200, 200, 0.01),
    new Chime(300, 200, 0.02),
    new Chime(400, 200, 0.03)
];
canvas.addEventListener("pointerdown", (event) => { 
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    for (const chime of chimes) {
        if (chime.isHit(mouseX, mouseY)) {
            chime.speed += 0.01;
        }
    }
});
function update() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for (const chime of chimes) {
        chime.update();
        chime.draw(ctx);
    }

    requestAnimationFrame(update);
}

update();

