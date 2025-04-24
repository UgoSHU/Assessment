// Save Profile to Local Storage
if (document.getElementById('profileForm')) {
    const form = document.getElementById('profileForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const profile = {
            fname: formData.get('fname'),
            lname: formData.get('lname'),
            ageBracket: formData.get('ageBracket'),
            preferences: formData.get('preferences'),
            comments: formData.get('comments'),
        };

        localStorage.setItem('profile', JSON.stringify(profile));
        alert('Profile saved successfully!');
    });
}

// Display Profile Summary
if (document.getElementById('profileSummary')) {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    const profileSummary = document.getElementById('profileSummary');

    if (savedProfile) {
        profileSummary.innerHTML = `
            <h2>Your Profile Summary:</h2>
            <p>First Name: ${savedProfile.fname}</p>
            <p>Last Name: ${savedProfile.lname}</p>
            <p>Age Bracket: ${savedProfile.ageBracket}</p>
            <p>Preferences: ${savedProfile.preferences}</p>
            <p>Comments: ${savedProfile.comments}</p>
        `;
    }
}

// Fetch Weather Data
if (document.getElementById('weather')) {
    async function getWeather() {
        const weatherDiv = document.getElementById('weather');
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true');
            const data = await response.json();

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
            weatherDiv.innerHTML = `<p>Error fetching weather data.</p>`;
            console.error(error);
        }
    }
    getWeather();
}

// Display Suggestions
if (document.getElementById('suggestions')) {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    const suggestionsDiv = document.getElementById('suggestions');

    if (savedProfile && savedProfile.preferences) {
        const suggestion = savedProfile.preferences === 'Outdoor'
            ? 'It’s a great day for outdoor activities like hiking or cycling!'
            : 'Consider indoor activities like reading a book or watching a movie.';
        suggestionsDiv