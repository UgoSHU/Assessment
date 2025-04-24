// Save Profile to Local Storage
const form = document.getElementById('profileForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const profile = {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        ageBracket: formData.get("ageBracket"),
        preferences: formData.get("preferences"),
        comments: formData.get("comments"),
    };

    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved successfully!");
});