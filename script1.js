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