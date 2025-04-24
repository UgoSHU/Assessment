// Fetch Weather Data
async function getWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true');
        const data = await response.json();

        const weatherDiv = document.getElementById('weather');
        if (data && data.current_weather) {
            weatherDiv.innerHTML = `
                <p>Temperature: ${data.current_weather.temperature} °C</p>
                <p>Condition: Weather code ${data.current_weather.weathercode}</p>
                <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
            `;
        } else {
            weatherDiv.innerHTML = `<p>Weather data unavailable.</p>`;
        }
    } catch (error) {
        console.error(error);
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}
getWeather();