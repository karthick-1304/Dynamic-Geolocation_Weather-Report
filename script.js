let map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let tempCelsius = null; // Store original temperature in Celsius
let currentUnit = "C"; // Track the current unit

function fetchWeatherData(lat, lon) {
    const apiKey = '7eb0082c5cdef8a84cefd9aa2fb3ddaf';
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            tempCelsius = data.main.temp; // Store temperature in Celsius
            updateTemperatureDisplay(tempCelsius, "C"); // Default display in Celsius
            document.getElementById("location-details").textContent = `Lat: ${lat}, Lon: ${lon}`;
            document.getElementById("weather-details").textContent = `Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

document.getElementById("search-btn").addEventListener("click", function () {
    const location = document.getElementById("search").value;
    if (!location) return;
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert("Location not found");
                return;
            }
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            map.setView([lat, lon], 10);
            fetchWeatherData(lat, lon);
        })
        .catch(error => console.error("Error fetching location:", error));
});

document.getElementById('unit-toggle').addEventListener('click', function () {
    if (tempCelsius === null) return; // Prevent conversion if no temperature data

    if (currentUnit === "C") {
        let tempF = (tempCelsius * 9) / 5 + 32;
        updateTemperatureDisplay(tempF, "F");
        currentUnit = "F";
    } else {
        updateTemperatureDisplay(tempCelsius, "C");
        currentUnit = "C";
    }
});

function updateTemperatureDisplay(temp, unit) {
    document.getElementById('temperature').textContent = `Temperature: ${temp.toFixed(2)} °${unit}`;
    document.getElementById('unit-toggle').textContent = unit === "C" ? "Switch to °F" : "Switch to °C";
}

map.on("click", function (e) {
    fetchWeatherData(e.latlng.lat, e.latlng.lng);
});