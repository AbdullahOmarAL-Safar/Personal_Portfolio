const myButton = document.getElementById("myButton");
const myIMG = document.getElementById("myIMG");

myButton.addEventListener("click", event => {
    if (myIMG.style.visibility === "hidden") {
        myIMG.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        myIMG.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});