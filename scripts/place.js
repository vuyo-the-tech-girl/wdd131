function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10; // °C
    const windSpeed = 15; // km/h
    const windChillElement = document.getElementById("windChill");

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + "°C";
    } else {
        windChillElement.textContent = "N/A";
    }

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

