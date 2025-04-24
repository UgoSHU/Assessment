// Display Suggestions
if (document.getElementById('suggestions')) {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    const suggestionsDiv = document.getElementById('suggestions');

    if (savedProfile && savedProfile.preferences) {
        const suggestion = savedProfile.preferences === 'Outdoor'
            ? 'It’s a great day for outdoor activities like hiking or cycling!'
            : 'Consider indoor activities like reading a book or watching a movie.';
        // Display the suggestion in the 'suggestionsDiv'
        suggestionsDiv.textContent = suggestion;
    } else {
        // Default message if preferences are not available
        suggestionsDiv.textContent = 'Let us know your preferences to receive personalized suggestions!';
    }
}