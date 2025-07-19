function updateclock() {
    const now = new Date();

    let hours = now.getHours();
    const maridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert 24h -> 12h format

    const hourStr = hours.toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    const timeString = `${hourStr}:${minute}:${second} ${maridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);