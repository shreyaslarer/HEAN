function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Redirect to the login page
document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "login.html"; // Change this to your actual login page URL
});

// Redirect to the signup page
document.getElementById("signupBtn").addEventListener("click", function() {
    window.location.href = "signup.html"; // Change this to your actual signup page URL
});

// script.js

document.getElementById("findServicesBtn").addEventListener("click", function() {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Construct Google Maps URL for nearby hospitals with directions from user's location
            const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=hospital&travelmode=driving&dir_action=navigate`;

            // Open the constructed URL in a new browser tab
            window.open(url, '_blank');
        }, function(error) {
            // Handle location retrieval errors
            alert("Unable to retrieve your location. Please enable location access and try again.");
            console.error("Geolocation error:", error);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
}

// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
}

// Send user message and get AI response
async function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        const userInput = document.getElementById("userInput").value.trim();
        if (userInput === "") return;

        // Display user message
        displayMessage(userInput, "user");

        // Clear input
        document.getElementById("userInput").value = "";

        // Fetch AI response
        const response = await getAIResponse(userInput);
        displayMessage(response, "bot");
    }
}

// Display message in chatbot
function displayMessage(message, sender) {
    const messagesContainer = document.getElementById("chatbotMessages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chatbot-message", sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
}

// Fetch response from OpenAI API
async function getAIResponse(message) {
    try {
        const apiKey = "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";  // Replace with your OpenAI API key
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",  // Ensure correct model
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();

        // Check if response contains an answer
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error("Unexpected response format from OpenAI API.");
        }
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return "Sorry, I couldn't process that request at the moment. Please try again later.";
    }
}

// Function to log health data
function logHealthData() {
    const bloodPressure = document.getElementById('bloodPressure').value;
    const heartRate = document.getElementById('heartRate').value;
    const symptomLog = document.getElementById('symptomLog').value;
    const medSchedule = document.getElementById('medSchedule').value;

    // Save health data logic here (e.g., send to backend)
    const healthData = {
        bloodPressure,
        heartRate,
        symptomLog,
        medSchedule,
    };

    // For demonstration, we will just log it
    console.log("Health data logged:", healthData);
    alert("Health data logged successfully!");
}

// Function to sync wearable device data
function syncWearableData() {
    // Logic for syncing data from wearable devices
    // For demonstration, we will just show an alert
    alert("Syncing data from your wearable device...");
    // Here you would typically call an API or perform logic to sync the data
}

// Function to generate recommendations based on profile data
function generateRecommendations() {
    // In a real scenario, use AI/ML to generate personalized recommendations
    const recommendations = [
        "Stay hydrated and drink plenty of water.",
        "Maintain a balanced diet rich in fruits and vegetables.",
        "Engage in at least 30 minutes of exercise most days of the week.",
        "Schedule regular check-ups with your healthcare provider.",
        "Monitor your sleep patterns and aim for 7-9 hours of sleep per night."
    ];

    const resultsContainer = document.getElementById('recommendationResults');
    resultsContainer.innerHTML = '<h3>Your Recommendations:</h3>';
    recommendations.forEach(rec => {
        resultsContainer.innerHTML += `<p>${rec}</p>`;
    });
}

// function enableHealthTracking() {
//     // Simulated user location
//     const userLocation = 'Village XYZ'; // Replace with the actual user location
//     const alerts = fetchHealthAlerts(userLocation);
    
//     displayAlerts(alerts);
// }

// function fetchHealthAlerts(location) {
//     // Simulated health alert data based on user location
//     const healthAlerts = {
//         'Village XYZ': [
//             'COVID-19 case reported nearby.',
//             'Flu outbreak detected in the area.',
//             'Allergy alerts for pollen levels.',
//         ],
//         'Village ABC': [
//             'Food poisoning cases reported.',
//             'High number of flu cases in the community.',
//         ],
//     };

//     return healthAlerts[location] || [];
// }

// function displayAlerts(alerts) {
//     const alertInfo = document.getElementById('alert-info');

//     if (alerts.length > 0) {
//         alertInfo.innerHTML = '<h3>Current Health Risk Alerts:</h3><ul>' + 
//             alerts.map(alert => `<li>${alert}</li>`).join('') + 
//             '</ul>';
//     } else {
//         alertInfo.innerHTML = '<h3>No health alerts found nearby.</h3>';
//     }
// }

function enableHealthTracking() {
    // Open Google Maps in a new tab with the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Open Google Maps with the current location
            const googleMapsUrl = `https://www.google.com/maps/@${lat},${lng},15z`;
            window.open(googleMapsUrl, '_blank');

            // Fetch and display nearby health risk alerts
            fetchNearbyHealthRiskAlerts(lat, lng);
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function enableHealthTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Open Google Maps with current location
            window.open(`https://www.google.com/maps/@${latitude},${longitude},15z`, '_blank');

            // Fetch health risk alerts based on current location
            fetchNearbyHealthRiskAlerts(latitude, longitude);
        }, () => {
            alert("Unable to retrieve your location. Please check your location settings.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }

    // Show the nearby alerts section after enabling health tracking
    document.getElementById('nearby-alerts').style.display = 'block';
}

function fetchNearbyHealthRiskAlerts(lat, lng) {
    // This is a mock function. Replace it with your actual logic for fetching risk alerts
    const alerts = [
        { name: "COVID-19 Alert", distance: "1.5 km", description: "Nearby COVID-19 case reported." },
        { name: "Flu Alert", distance: "2.0 km", description: "Increased flu cases in the area." },
        { name: "Allergy Alert", distance: "3.0 km", description: "High pollen count in the area." }
    ];

    const alertInfo = document.getElementById('alert-info');
    alertInfo.innerHTML = ""; // Clear previous alerts

    alerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';
        alertDiv.innerHTML = `<strong>${alert.name}</strong><br>
                             Distance: ${alert.distance}<br>
                             Description: ${alert.description}`;
        alertInfo.appendChild(alertDiv);
    });
}

function shareAlerts() {
    const alertInfo = document.getElementById('alert-info');
    let shareContent = "Check out these health risk alerts:\n\n";
    let hasAlerts = false;

    // Collect alerts
    alertInfo.querySelectorAll('.alert').forEach(alert => {
        const title = alert.querySelector('strong').innerText;
        const distance = alert.innerText.split("Distance: ")[1].split("Description: ")[0].trim();
        const description = alert.innerText.split("Description: ")[1].trim();
        
        shareContent += `${title}\nDistance: ${distance}\nDescription: ${description}\n\n`;
        hasAlerts = true; // Mark that we have at least one alert
    });

    if (!hasAlerts) {
        alert("No health risk alerts to share!");
        return; // Exit if there are no alerts
    }

    // Encode content for sharing
    const encodedContent = encodeURIComponent(shareContent);
    const shareUrl = `https://api.whatsapp.com/send?text=${encodedContent}`;
    const emailBody = `mailto:?subject=Health Risk Alerts&body=${encodedContent}`;

    // Create share options
    const shareOptions = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); z-index: 1000;">
            <h2>Share Alerts</h2>
            <p>Choose a sharing method:</p>
            <button onclick="window.open('${shareUrl}', '_blank')">Share via WhatsApp</button>
            <button onclick="window.open('${emailBody}', '_self')">Share via Email</button>
            <button onclick="closeShareOptions()">Cancel</button>
        </div>
    `;

    // Display share options
    document.body.insertAdjacentHTML('beforeend', shareOptions);
}

function closeShareOptions() {
    const shareDiv = document.querySelector('div[style*="position: fixed"]');
    if (shareDiv) {
        shareDiv.remove();
    }
}

// Mock data for healthcare providers and prescriptions
const healthcareProviders = [
    { name: "Dr. Alice Smith", specialty: "General Practitioner", rating: 4.5, contact: "alice.smith@example.com" },
    { name: "Dr. Bob Johnson", specialty: "Cardiologist", rating: 4.8, contact: "bob.johnson@example.com" },
    { name: "Dr. Carol Williams", specialty: "Pediatrician", rating: 4.7, contact: "carol.williams@example.com" }
];

const prescriptions = [
    { medication: "Amoxicillin", date: "2023-01-15", dosage: "500 mg", refills: 1 },
    { medication: "Lisinopril", date: "2023-02-10", dosage: "10 mg", refills: 0 }
];

// Function to book a consultation
function bookConsultation() {
    const selectedProvider = prompt("Enter the healthcare provider's name:");
    const selectedDate = prompt("Enter the date for your consultation (YYYY-MM-DD):");
    
    if (selectedProvider && selectedDate) {
        alert(`Consultation booked with ${selectedProvider} on ${selectedDate}.`);
        document.getElementById('video-call-interface').style.display = 'block'; // Show video call interface
    } else {
        alert("Please provide both provider's name and date.");
    }
}

// Function to start a video call
function startVideoCall() {
    // You can change the URL to the actual video call service or use a mock URL for testing
    const videoCallURL = "https://meet.google.com"; // Example URL for Google Meet

    // Redirect to the video call URL
    window.open(videoCallURL, '_blank');
}

// Function to display healthcare providers
function displayHealthcareProviders() {
    const providerDirectory = document.getElementById('provider-directory');
    providerDirectory.innerHTML = ""; // Clear previous listings

    healthcareProviders.forEach(provider => {
        const providerDiv = document.createElement('div');
        providerDiv.innerHTML = `
            <strong>${provider.name}</strong> - ${provider.specialty}<br>
            Rating: ${provider.rating} | Contact: <a href="mailto:${provider.contact}">${provider.contact}</a>
        `;
        providerDirectory.appendChild(providerDiv);
    });
}

// Function to display past prescriptions
function displayPrescriptions() {
    const prescriptionsList = document.getElementById('prescriptions-list');
    prescriptionsList.innerHTML = ""; // Clear previous prescriptions

    prescriptions.forEach(prescription => {
        const prescriptionDiv = document.createElement('div');
        prescriptionDiv.innerHTML = `
            Medication: ${prescription.medication} | Date: ${prescription.date} | Dosage: ${prescription.dosage} | Refills: ${prescription.refills}
        `;
        prescriptionsList.appendChild(prescriptionDiv);
    });
}

// Function to request prescription renewal
function requestPrescriptionRenewal() {
    const medication = prompt("Enter the name of the medication for renewal:");
    if (medication) {
        alert(`Prescription renewal request submitted for ${medication}.`);
    } else {
        alert("Please enter a medication name.");
    }
}

// Initialize the Telehealth page
function initTelehealthPage() {
    displayHealthcareProviders();
    displayPrescriptions();
}

// Call the initialization function
initTelehealthPage();

// Opens the respective discussion panel
function openDiscussionPanel(panelId) {
    document.getElementById(`${panelId}-panel`).style.display = 'block';
}

// Closes the respective discussion panel
function closeDiscussionPanel(panelId) {
    document.getElementById(`${panelId}-panel`).style.display = 'none';
}

// Sends a message in the specified chat panel
function sendMessage(panelId) {
    const messageInput = document.getElementById(`${panelId}-message`);
    const messageText = messageInput.value.trim();
    if (messageText === "") return; // Ignore empty messages

    const chatBox = document.getElementById(`${panelId}-chat`);
    const messagePara = document.createElement('p');
    messagePara.textContent = `You: ${messageText}`;
    chatBox.appendChild(messagePara);

    messageInput.value = ""; // Clear the input after sending
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to simulate registration for a webinar
function registerForWebinar() {
    alert("Thank you for registering for the webinar!");
}

// Function to open modal and display the selected image
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    caption.innerHTML = modalImage.alt; // Display the alt text as caption
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Function to save notification settings
function saveNotificationSettings() {
    const notificationType = document.getElementById("notification-type").value;
    const userContact = document.getElementById("user-contact").value;
    const resultDiv = document.getElementById("notification-result");

    // Simple validation
    if (userContact.trim() === "") {
        resultDiv.innerHTML = "<p style='color:red;'>Please enter your contact info.</p>";
        return;
    }

    // Simulate saving settings (in real use, you'd send this to a server)
    resultDiv.innerHTML = `<p style='color:green;'>Notification settings saved! You will receive alerts via ${notificationType} at ${userContact}.</p>`;
}

// Function to toggle profile sharing
function toggleProfileSharing() {
    const sharingCheckbox = document.getElementById("profile-sharing");
    const statusMessage = document.getElementById("profile-status");
    
    if (sharingCheckbox.checked) {
        statusMessage.textContent = "Profile sharing is enabled.";
    } else {
        statusMessage.textContent = "Profile sharing is disabled.";
    }
}

// Function to open the caregiver dashboard
function openCaregiverDashboard() {
    document.getElementById("family-caregiver-access").style.display = "none"; // Hide the access section
    document.getElementById("caregiver-dashboard").style.display = "block"; // Show the dashboard
}

// Function to close the caregiver dashboard
function closeCaregiverDashboard() {
    document.getElementById("caregiver-dashboard").style.display = "none"; // Hide the dashboard
    document.getElementById("family-caregiver-access").style.display = "block"; // Show the access section again
}

// Function to save access level settings
function saveAccessLevel() {
    const accessLevel = document.getElementById("access-level").value;
    const privacyMessage = document.getElementById("privacy-message");

    privacyMessage.textContent = `Access level set to: ${accessLevel}`;
}

// Function to toggle profile sharing
function toggleProfileSharing() {
    const sharingCheckbox = document.getElementById("profile-sharing");
    const statusMessage = document.getElementById("profile-status");
    
    if (sharingCheckbox.checked) {
        statusMessage.textContent = "Profile sharing is enabled.";
    } else {
        statusMessage.textContent = "Profile sharing is disabled.";
    }
}

// Function to open the caregiver dashboard
function openCaregiverDashboard() {
    document.getElementById("family-caregiver-access").style.display = "none"; // Hide the access section
    document.getElementById("caregiver-dashboard").style.display = "block"; // Show the dashboard
}

// Function to close the caregiver dashboard
function closeCaregiverDashboard() {
    document.getElementById("caregiver-dashboard").style.display = "none"; // Hide the dashboard
    document.getElementById("family-caregiver-access").style.display = "block"; // Show the access section again
}

// Function to save access level settings
function saveAccessLevel() {
    const accessLevel = document.getElementById("access-level").value;
    const privacyMessage = document.getElementById("privacy-message");

    privacyMessage.textContent = `Access level set to: ${accessLevel}`;
}


