const myBox = document.getElementById("myBox");
const moveAmount = 10;
let currentX = 0;
let currentY = 0;

document.addEventListener("keydown", (event) => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault(); // Prevent default scrolling behavior
        switch (event.key) {
            case "ArrowUp":
                currentY -= moveAmount;
                myBox.style.top = currentY + "px";
                break;
            case "ArrowDown":
                currentY += moveAmount;
                myBox.style.top = currentY + "px";
                break;
            case "ArrowLeft":
                currentX -= moveAmount;
                myBox.style.left = currentX + "px";
                break;
            case "ArrowRight":
                currentX += moveAmount;
                myBox.style.left = currentX + "px";
                break;
        }
        myBox.style.top = currentY + "px";
        myBox.style.left = currentX + "px";
    }
});