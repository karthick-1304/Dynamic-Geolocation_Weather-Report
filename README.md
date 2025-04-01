# Weather App

## Overview
This Weather App provides real-time weather information based on user-selected locations. It utilizes OpenWeatherMap API to fetch weather details and Leaflet.js for interactive mapping.

## Features
- Search for a location to get its weather details
- Click on the map to fetch weather data for that location
- Displays:
  - Temperature (°C/°F toggle)
  - Humidity
  - Wind speed
  - Latitude and Longitude
- Interactive map with OpenStreetMap tiles

## Technologies Used
- **HTML, CSS, JavaScript**: Frontend development
- **Leaflet.js**: Interactive map functionality
- **OpenWeatherMap API**: Weather data
- **Nominatim API**: Location search

## Setup Instructions
### Prerequisites
- A web browser (Chrome, Firefox, etc.)
- Internet connection (for API requests)

### Steps
1. Clone the repository:
   ```bash
   git clone https://karthick-1304/Dynamic-Geolocation_Weather-Report.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in your browser.

## API Keys
This project uses OpenWeatherMap API. Replace the `apiKey` variable in `script.js` with your own API key:
```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

## Usage
1. Enter a location in the search bar and click **Search**.
2. Click on the map to fetch weather data for any point.
3. Toggle between Celsius (°C) and Fahrenheit (°F) using the **Switch to °F** button.

## File Structure
```
weather-app/
│── index.html  # Main HTML file
│── styles.css  # Stylesheet
│── script.js   # JavaScript logic
└── README.md   # Project documentation
```
