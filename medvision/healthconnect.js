function accessTelehealth() {
    // Redirect to a telehealth service link (example)
    window.open("https://www.telehealthservice.com", "_blank");
}

function findLocalClinics() {
    // Use Google Maps to find local clinics based on the user's location
    const userLocation = prompt("Please enter your location:");
    if (userLocation) {
        const query = encodeURIComponent(`clinics in ${userLocation}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
    } else {
        alert("Location is required to find clinics.");
    }
}



// Access Telehealth Service
document.getElementById('accessTelehealthBtn').onclick = function() {
    document.getElementById('scheduleModal').style.display = "block";
};

// Close the modal
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('scheduleModal').style.display = "none";
};

// Schedule appointment button
document.getElementById('scheduleBtn').onclick = function() {
    const doctor = document.getElementById('doctorSelect').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    if (doctor && appointmentDate) {
        const appointmentDetails = `You have scheduled an appointment with ${doctor} on ${new Date(appointmentDate).toLocaleString()}.`;
        alert(appointmentDetails);

        // Add the event to the calendar
        addToCalendar(appointmentDetails, appointmentDate);
        
        // Close the modal
        document.getElementById('scheduleModal').style.display = "none";
    } else {
        alert("Please select a doctor and a date/time.");
    }
};

// Function to add event to calendar (Google Calendar)
function addToCalendar(details, dateTime) {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(details)}&dates=${formatDateForCalendar(dateTime)}`;
    window.open(url, '_blank');
}

// Function to format date for Google Calendar URL
function formatDateForCalendar(dateTime) {
    const date = new Date(dateTime);
    const start = date.toISOString().replace(/-|:|\.\d{3}/g, "");
    const end = new Date(date.getTime() + 30 * 60000).toISOString().replace(/-|:|\.\d{3}/g, ""); // 30 minutes later
    return `${start}/${end}`;
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('scheduleModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function findTransportation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Open Google Maps with a search for nearby ambulance services
            const searchQuery = 'ambulance near me';
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}&location=${latitude},${longitude}`;

            // Open the Google Maps URL in a new tab
            window.open(googleMapsUrl, '_blank');

            // Display a mock contact number (you can replace this with real numbers if available)
            const ambulanceNumbers = [
                { name: 'Ambulance Service 1', number: '+1234567890' }, // Replace with real numbers if available
                { name: 'Ambulance Service 2', number: '+0987654321' }, // Replace with real numbers if available
                // Add more as needed
            ];

            // Create a list to display the contact numbers
            const servicesInfo = document.getElementById('transportation-info');
            servicesInfo.innerHTML = '<h3>Nearby Ambulance Services:</h3>';
            ambulanceNumbers.forEach(service => {
                servicesInfo.innerHTML += `
                    <div>
                        <span>${service.name} - </span>
                        <a href="tel:${service.number}" class="btn primary-btn">Call ${service.number}</a>
                    </div>
                `;
            });
        }, error => {
            console.error('Error getting location:', error);
            const servicesInfo = document.getElementById('transportation-info');
            servicesInfo.innerHTML = '<p>Error getting location: ' + error.message + '</p>';
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        const servicesInfo = document.getElementById('transportation-info');
        servicesInfo.innerHTML = '<p>Geolocation is not supported by this browser.</p>';
    }
}
// Simulated data for local support groups
const supportGroups = [
    { name: 'Mental Health Support Group', contact: '+1234567890', details: 'Weekly meetings every Wednesday.' },
    { name: 'Community Outreach Program', contact: '+0987654321', details: 'Provides food and shelter assistance.' },
    { name: 'Family Support Services', contact: '+1122334455', details: 'Helps families in crisis situations.' },
];

// Function to access the support network
function accessSupportNetwork() {
    const supportInfo = document.getElementById('support-info');
    supportInfo.innerHTML = '<h3>Local Support Groups:</h3>';
    
    supportGroups.forEach(group => {
        supportInfo.innerHTML += `
            <div>
                <strong>${group.name}</strong><br>
                <span>${group.details}</span><br>
                <a href="tel:${group.contact}" class="btn primary-btn">Call ${group.contact}</a>
            </div>
            <hr>
        `;
    });
}

// Function to open the community forum
function openForum() {
    document.getElementById('community-forum').style.display = 'block';
    document.getElementById('event-calendar').style.display = 'none';
    document.getElementById('resources-page').style.display = 'none';
    document.getElementById('support-info').style.display = 'none';
}

// Function to submit a post in the community forum
function submitForumPost() {
    const postContent = document.getElementById('forumPost').value;
    if (postContent.trim()) {
        const forumPosts = document.getElementById('forumPosts');
        forumPosts.innerHTML += `<div>${postContent}</div><hr>`;
        document.getElementById('forumPost').value = ''; // Clear the textarea
    } else {
        alert("Please write something before posting.");
    }
}

// Function to open the event calendar
function openEventCalendar() {
    document.getElementById('event-calendar').style.display = 'block';
    document.getElementById('community-forum').style.display = 'none';
    document.getElementById('resources-page').style.display = 'none';
    document.getElementById('support-info').style.display = 'none';
    
    // Display existing events (if any)
    displayEvents();
}

// Sample events data
let events = [
    { date: '2024-10-30', name: 'Mental Health Awareness Workshop' },
    { date: '2024-11-05', name: 'Support Group Meeting' }
];

// Function to display events in the calendar
function displayEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    
    events.forEach(event => {
        eventList.innerHTML += `<li>${event.date}: ${event.name}</li>`;
    });
}

// Function to add a new event
function addEvent() {
    const eventName = prompt("Enter event name:");
    const eventDate = prompt("Enter event date (YYYY-MM-DD):");
    
    if (eventName && eventDate) {
        events.push({ date: eventDate, name: eventName });
        displayEvents();
    } else {
        alert("Please provide both event name and date.");
    }
}

// Function to view resources page
function viewResources() {
    document.getElementById('resources-page').style.display = 'block';
    document.getElementById('community-forum').style.display = 'none';
    document.getElementById('event-calendar').style.display = 'none';
    document.getElementById('support-info').style.display = 'none';
}

// Function to submit a support group
function submitGroup() {
    const groupName = document.getElementById('groupName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const details = document.getElementById('details').value;

    // Logic to handle submissions (e.g., sending to a backend)
    supportGroups.push({ name: groupName, contact: contactInfo, details: details });

    // Clear inputs and close modal
    document.getElementById('groupName').value = '';
    document.getElementById('contactInfo').value = '';
    document.getElementById('details').value = '';
    alert('Support group submitted successfully!');

    // You can call accessSupportNetwork to refresh the displayed groups
    accessSupportNetwork();
}

// Function to close the submission modal
document.getElementById('closeSubmissionModal').onclick = function() {
    document.getElementById('submissionModal').style.display = 'none';
};

// Show modal for user submissions
function showSubmissionModal() {
    document.getElementById('submissionModal').style.display = 'block';
}
