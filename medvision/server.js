// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const apiKey = 'AIzaSyD8gDkud-080-xaEABNalRcuRDeJ_NF7Es'; // Replace with your actual API key

app.get('/nearby-health-services', async (req, res) => {
    const { lat, lng } = req.query; // Get latitude and longitude from query params

    // Google Places API request URL
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.json(response.data); // Send response back to the client
    } catch (error) {
        console.error("Error fetching data:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error fetching data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const cors = require('cors');
app.use(cors());

async function fetchNearbyHealthData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            try {
                const response = await fetch(`http://localhost:3000/nearby-health-services?lat=${lat}&lng=${lng}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                displayHealthData(data.results);
            } catch (error) {
                console.error("Error in fetching data:", error);
                document.getElementById("health-info").innerText = "Error fetching data.";
            }
        }, (error) => {
            console.error("Error getting location:", error);
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}


