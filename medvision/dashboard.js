function showSection(section) {
    // Hide all dashboard sections
    document.querySelectorAll('.dashboard-section').forEach((el) => {
        el.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

function accessCommunityLeaders() {
    const id = document.getElementById('communityLeaderId').value;
    const messageElement = document.getElementById('communityLeaderMessage');

    if (id === '123456789') { // Example ID for access
        messageElement.innerHTML = 'Access granted to Community Leaders features.';
        document.getElementById('communityLeaderFeatures').style.display = 'block';
    } else {
        messageElement.innerHTML = 'Invalid ID. Please try again.';
    }
}

function accessHealthCareProviders() {
    const id = document.getElementById('healthCareProviderId').value;
    const messageElement = document.getElementById('healthCareProviderMessage');

    if (id === '987654321') { // Example ID for access
        messageElement.innerHTML = 'Access granted to Healthcare Providers features.';
        document.getElementById('healthCareProviderFeatures').style.display = 'block';
    } else {
        messageElement.innerHTML = 'Invalid ID. Please try again.';
    }
}

function showFeature(feature) {
    // Hide all feature sections
    document.querySelectorAll('.feature-section').forEach((el) => {
        el.style.display = 'none';
    });
    // Show the selected feature section
    document.getElementById(feature).style.display = 'block';
}

function previewImage(event) {
    const image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}

function editProfile() {
    document.querySelector('.profile-info input, .profile-info textarea').forEach(input => {
        input.disabled = false;
    });
}

function saveProfile() {
    // Add logic to save profile data
    alert('Profile saved successfully!');
    document.querySelector('.profile-info input, .profile-info textarea').forEach(input => {
        input.disabled = true;
    });
}
