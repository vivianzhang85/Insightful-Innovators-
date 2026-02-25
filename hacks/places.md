---
layout: post
title: "Choose Your Own Place"
description: "Time to add your own place to your itinerary!"
permalink: /new-york/places/
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 4
author: "Insightful Innovators"
date: 2025-11-20
microblog: true
footer: 
    previous: /new-york/shopping/
    home: /nyc/home/
    next: /new-york/broadway/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Places - A Day In New York</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1a2332 0%, #2c3e50 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }

        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .tab {
            background: rgba(255, 215, 0, 0.2);
            color: #ffd700;
            padding: 12px 25px;
            border: 2px solid #ffd700;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .tab:hover, .tab.active {
            background: #ffd700;
            color: #1a2332;
            transform: translateY(-2px);
        }

        .section {
            background: #1a1a1a;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            display: none;
        }

        .section.active {
            display: block;
        }

        .section h2 {
            color: #ffd700;
            margin-bottom: 20px;
            font-size: 2em;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            color: #ffd700;
            margin-bottom: 8px;
            font-weight: bold;
        }

        input, textarea, select {
            width: 100%;
            padding: 12px;
            background: #2a2a2a;
            border: 1px solid #ffd700;
            border-radius: 8px;
            color: white;
            font-size: 1em;
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        textarea {
            min-height: 100px;
            resize: vertical;
        }

        small {
            color: #aaa;
            font-size: 0.85em;
            display: block;
            margin-top: 5px;
        }

        .btn {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a2332;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-small {
            padding: 8px 15px;
            font-size: 0.9em;
            margin-top: 10px;
        }

        .places-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .place-card {
            background: #2a2a2a;
            border-radius: 12px;
            padding: 20px;
            border: 2px solid #ffd700;
            transition: all 0.3s ease;
        }

        .place-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
        }

        .place-card h3 {
            color: #ffd700;
            margin-bottom: 10px;
            font-size: 1.3em;
        }

        .place-card p {
            color: #ccc;
            margin: 5px 0;
            line-height: 1.6;
        }

        .place-type {
            display: inline-block;
            background: #ffd700;
            color: #1a2332;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85em;
            font-weight: bold;
            margin: 10px 0;
        }

        .popularity {
            color: #4CAF50;
            font-size: 0.9em;
            margin-top: 10px;
            font-weight: bold;
        }

        .message {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }

        .success {
            background: #4CAF50;
            color: white;
        }

        .error {
            background: #f44336;
            color: white;
        }

        #category-preview {
            background: #2a2a2a;
            padding: 15px;
            border-radius: 8px;
            border: 2px dashed #ffd700;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #category-preview p {
            margin: 0;
        }

        .loading {
            text-align: center;
            color: #ffd700;
            padding: 40px;
            font-size: 1.2em;
        }

        .empty-state {
            text-align: center;
            color: #888;
            padding: 60px 20px;
        }

        .empty-state-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2em;
            }

            .tabs {
                flex-direction: column;
            }

            .tab {
                width: 100%;
            }
            
            .places-grid {
                grid-template-columns: 1fr;
            }

            .section {
                padding: 20px;
            }
        }

        /* Itinerary Tracker Sidebar */
        .itinerary-tracker {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 300px;
            background: rgba(26, 35, 50, 0.95);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            border: 2px solid #ffd700;
            z-index: 9999;
            max-height: 80vh;
            overflow-y: auto;
        }

        .itinerary-tracker h3 {
            color: #ffd700;
            margin-bottom: 15px;
            font-size: 1.3rem;
            text-align: center;
            border-bottom: 2px solid #ffd700;
            padding-bottom: 10px;
        }

        .itinerary-item {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 10px;
            border-left: 4px solid #ffd700;
        }

        .itinerary-item.incomplete {
            border-left-color: #666;
            opacity: 0.6;
        }

        .itinerary-label {
            font-size: 0.85rem;
            color: #ffd700;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .itinerary-value {
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
        }

        .itinerary-empty {
            color: #999;
            font-style: italic;
            font-size: 0.9rem;
        }

        .clear-itinerary-btn {
            width: 100%;
            background: #ef4444;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 15px;
            transition: all 0.3s;
        }

        .clear-itinerary-btn:hover {
            background: #dc2626;
            transform: translateY(-2px);
        }

        .toggle-tracker-btn {
            position: fixed;
            right: 20px;
            top: 20px;
            background: #ffd700;
            color: #1a2332;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
            transition: all 0.3s;
        }

        .toggle-tracker-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.6);
        }

        .itinerary-tracker.hidden {
            display: none;
        }

    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🗽 Custom NYC Places</h1>
            <p style="color: #ccc;">Add your own places or browse what others have shared!</p>
        </header>

        <div class="tabs">
            <button class="tab active" onclick="switchTab('browse', this)">Browse Places</button>
        </div>

        <!-- BROWSE PLACES SECTION -->
        <div id="browse-section" class="section active">
            <h2>Browse Custom Places</h2>
            
        <div class="form-group">
            <label for="filter-type">Filter by Category</label>
            <select id="filter-type">
                <option value="">All Categories</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Shopping">Shopping</option>
                <option value="Landmarks">Landmarks</option>
                <option value="Broadway">Broadway</option>
                <option value="Scenery">Scenery</option>
                <option value="Nightlife">Nightlife</option>
                <option value="Recreation">Recreation</option>
                <option value="Art & Culture">Art & Culture</option>
                <option value="Family Activities">Family</option>
                <option value="Food & Dining">Dining</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Nature">Nature</option>
            </select>
        </div>

            <div id="browse-message"></div>
            <div id="places-grid" class="places-grid"></div>
        </div>

<!-- Toggle Button for Itinerary Tracker -->
<button class="toggle-tracker-btn" onclick="toggleItineraryTracker()">
    📋 My Itinerary
</button>

<!-- Itinerary Tracker Sidebar -->
<div class="itinerary-tracker hidden" id="itineraryTracker">
    <h3>🗽 Your NYC Trip</h3>
    
    <div class="itinerary-item" id="tripInfoItem">
        <div class="itinerary-label">📅 Trip Dates</div>
        <div class="itinerary-value" id="tripDatesValue">
            <span class="itinerary-empty">Not set yet</span>
        </div>
    </div>
    
    <div class="itinerary-item incomplete" id="breakfastItem">
        <div class="itinerary-label">🍳 Breakfast</div>
        <div class="itinerary-value" id="breakfastValue">
            <span class="itinerary-empty">Not selected</span>
        </div>
    </div>
    
    <div class="itinerary-item incomplete" id="landmarksItem">
        <div class="itinerary-label">🗽 Landmarks</div>
        <div class="itinerary-value" id="landmarksValue">
            <span class="itinerary-empty">Not selected</span>
        </div>
    </div>
    
    <div class="itinerary-item incomplete" id="shoppingItem">
        <div class="itinerary-label">🛍️ Shopping</div>
        <div class="itinerary-value" id="shoppingValue">
            <span class="itinerary-empty">Not selected</span>
        </div>
    </div>
    
    <div class="itinerary-item incomplete" id="broadwayItem">
        <div class="itinerary-label">🎭 Broadway</div>
        <div class="itinerary-value" id="broadwayValue">
            <span class="itinerary-empty">Not selected</span>
        </div>
    </div>
    
    <div class="itinerary-item incomplete" id="customPlacesItem">
        <div class="itinerary-label">📍 Custom Places</div>
        <div class="itinerary-value" id="customPlacesValue">
            <span class="itinerary-empty">None added</span>
        </div>
    </div>
    
    <button class="clear-itinerary-btn" onclick="clearItinerary()">
        Clear All Selections
    </button>
</div> 

    {% raw %}
<script>
    // Configuration
    const API_URL = 'http://localhost:8303';
    const USER_ID = 'user_' + Math.random().toString(36).substr(2, 9);

    console.log('🚀 Initializing Custom Places page...');
    console.log('📡 API URL:', API_URL);

    // Switch between tabs
    function switchTab(tab, element) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        element.classList.add('active');
        
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(`${tab}-section`).classList.add('active');
        
        if (tab === 'browse') {
            loadPlaces();
        }
    }

    // Load all places
    async function loadPlaces() {
        console.log('🔍 Loading places...');
        
        const filterType = document.getElementById('filter-type').value;
        const url = filterType 
            ? `${API_URL}/api/places/custom?type=${encodeURIComponent(filterType)}` 
            : `${API_URL}/api/places/custom`;
        
        console.log('📡 Fetching from:', url);
        
        document.getElementById('places-grid').innerHTML = '<div class="loading">Loading places...</div>';
        
        try {
            const response = await fetch(url);
            console.log('📦 Response status:', response.status);
            
            const data = await response.json();
            console.log('📦 Response data:', data);
            
            if (data.success) {
                console.log(`✅ Loaded ${data.places.length} places`);
                displayPlaces(data.places, 'places-grid');
            } else {
                console.error('❌ API error:', data.message);
                showMessage('browse-message', '❌ Error loading places', 'error');
                document.getElementById('places-grid').innerHTML = '';
            }
        } catch (error) {
            console.error('❌ Failed to load places:', error);
            showMessage('browse-message', '❌ Failed to connect to backend. Make sure Flask is running on port 8303!', 'error');
            document.getElementById('places-grid').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    <h3>Cannot Connect to Backend</h3>
                    <p>Make sure Flask is running: <code>python main.py</code></p>
                    <p>Backend should be at: ${API_URL}</p>
                </div>
            `;
        }
    }

    // Display places
    function displayPlaces(places, gridId) {
        const grid = document.getElementById(gridId);
        
        if (!places || places.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p style="font-size: 1.2em; margin-bottom: 10px; color: #ffd700;">No places found</p>
                    <p style="color: #ccc;">Be the first to create a place in the admin panel!</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = places.map(place => {
            return `
                <div class="place-card">
                    <h3>${place.place_name}</h3>
                    <span class="place-type">${place.place_type}</span>
                    ${place.description ? `<p><strong>Description:</strong> ${place.description}</p>` : ''}
                    ${place.location ? `<p><strong>📍 Location:</strong> ${place.location}</p>` : ''}
                    ${place.time ? `<p><strong>🕐 Time:</strong> ${place.time}</p>` : ''}
                    ${place.price ? `<p><strong>💵 Price:</strong> ${place.price}</p>` : ''}
                    ${place.times_added ? `<p class="popularity">⭐ Added ${place.times_added} time${place.times_added > 1 ? 's' : ''}</p>` : ''}
                    
                    <button class="btn btn-small add-itinerary-btn" data-place-id="${place.id}" data-place-name="${place.place_name}" data-place-type="${place.place_type}">
                        ➕ Add to Itinerary
                    </button>
                </div>
            `;
        }).join('');
    }

    // Show message
    function showMessage(elementId, message, type) {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.innerHTML = `<div class="message ${type}">${message}</div>`;
        setTimeout(() => element.innerHTML = '', 5000);
    }

async function addToItinerary(placeId, placeName, placeType) {
    try {
        console.log('🔵 Adding to itinerary:', placeId, placeName, placeType);
        
        const response = await fetch(`${API_URL}/api/itinerary/custom-places/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',  // ADD THIS LINE - important for cookies!
            body: JSON.stringify({
                place_id: placeId
            })
        });
        
        console.log('📦 Response status:', response.status);
        const data = await response.json();
        console.log('📦 Response data:', data);
        
        if (data.success) {
            alert(`✅ "${placeName}" added to your itinerary!`);
            
            // Refresh itinerary display
            await loadItinerary();
            
            // Refresh places to update popularity count
            loadPlaces();
        } else {
            alert('❌ ' + (data.error || 'Failed to add to itinerary'));
        }
    } catch (error) {
        console.error('❌ Error adding to itinerary:', error);
        alert('❌ Failed to add to itinerary');
    }
}


    // Itinerary tracker functions
    function toggleItineraryTracker() {
        const tracker = document.getElementById('itineraryTracker');
        tracker.classList.toggle('hidden');
    }

    async function loadItinerary() {
        try {
            const response = await fetch(`${API_URL}/api/itinerary`, {
                credentials: 'include'
            });
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                updateItineraryDisplay(data.data || {});
            }
        } catch (error) {
            console.error('Error loading itinerary:', error);
        }
    }

    function updateItineraryDisplay(itinerary) {
        // Update trip info
        if (itinerary.trip_info) {
            if (typeof itinerary.trip_info === 'object') {
                document.getElementById('tripDatesValue').innerHTML =
                    `${itinerary.trip_info.month || ''} ${itinerary.trip_info.startDate || ''} - ${itinerary.trip_info.endDate || ''}`;
            } else {
                document.getElementById('tripDatesValue').innerHTML = itinerary.trip_info;
            }
            document.getElementById('tripInfoItem').classList.remove('incomplete');
        } else {
            document.getElementById('tripDatesValue').innerHTML = '<span class="itinerary-empty">Not set yet</span>';
            document.getElementById('tripInfoItem').classList.add('incomplete');
        }

        // Update breakfast
        if (itinerary.breakfast) {
            if (typeof itinerary.breakfast === 'object') {
                document.getElementById('breakfastValue').textContent = itinerary.breakfast.name || 'Breakfast selected';
            } else {
                document.getElementById('breakfastValue').textContent = itinerary.breakfast;
            }
            document.getElementById('breakfastItem').classList.remove('incomplete');
        } else {
            document.getElementById('breakfastValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
            document.getElementById('breakfastItem').classList.add('incomplete');
        }

        // Update landmarks
        if (itinerary.landmarks) {
            if (typeof itinerary.landmarks === 'object') {
                document.getElementById('landmarksValue').textContent = itinerary.landmarks.name || 'Landmark selected';
            } else {
                document.getElementById('landmarksValue').textContent = itinerary.landmarks;
            }
            document.getElementById('landmarksItem').classList.remove('incomplete');
        } else {
            document.getElementById('landmarksValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
            document.getElementById('landmarksItem').classList.add('incomplete');
        }

        // Update shopping
        if (itinerary.shopping) {
            if (typeof itinerary.shopping === 'object') {
                document.getElementById('shoppingValue').innerHTML =
                    `${itinerary.shopping.center || 'Shopping'}<br><small>${itinerary.shopping.gender || ''}'s Fashion</small>`;
            } else {
                document.getElementById('shoppingValue').textContent = itinerary.shopping;
            }
            document.getElementById('shoppingItem').classList.remove('incomplete');
        } else {
            document.getElementById('shoppingValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
            document.getElementById('shoppingItem').classList.add('incomplete');
        }

        // Update broadway
        if (itinerary.broadway) {
            if (typeof itinerary.broadway === 'object') {
                document.getElementById('broadwayValue').innerHTML =
                    `${itinerary.broadway.theater || 'Broadway'}<br><small>${itinerary.broadway.show || ''}</small>`;
            } else {
                document.getElementById('broadwayValue').textContent = itinerary.broadway;
            }
            document.getElementById('broadwayItem').classList.remove('incomplete');
        } else {
            document.getElementById('broadwayValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
            document.getElementById('broadwayItem').classList.add('incomplete');
        }

        // Update custom places
        if (itinerary.custom_places && itinerary.custom_places.length > 0) {
            let customPlacesArray = itinerary.custom_places;
            
            // Parse if it's a JSON string
            if (typeof customPlacesArray === 'string') {
                try {
                    customPlacesArray = JSON.parse(customPlacesArray);
                } catch (e) {
                    customPlacesArray = [];
                }
            }
            
            if (customPlacesArray.length > 0) {
                // Group by category
                const grouped = {};
                customPlacesArray.forEach(place => {
                    const category = place.place_type || 'Other';
                    if (!grouped[category]) {
                        grouped[category] = [];
                    }
                    grouped[category].push(place.place_name);
                });
                
                // Display grouped
                let displayHTML = '';
                Object.keys(grouped).forEach(category => {
                    const places = grouped[category];
                    displayHTML += `<strong>${category}:</strong> ${places.join(', ')}<br>`;
                });
                
                document.getElementById('customPlacesValue').innerHTML = displayHTML;
                document.getElementById('customPlacesItem').classList.remove('incomplete');
            } else {
                document.getElementById('customPlacesValue').innerHTML = '<span class="itinerary-empty">None added</span>';
                document.getElementById('customPlacesItem').classList.add('incomplete');
            }
        } else {
            document.getElementById('customPlacesValue').innerHTML = '<span class="itinerary-empty">None added</span>';
            document.getElementById('customPlacesItem').classList.add('incomplete');
        }
    }

    async function clearItinerary() {
        console.log('🗑️ Clear itinerary clicked');
        
        if (confirm('Are you sure you want to clear your entire itinerary?')) {
            console.log('✅ User confirmed clear');
            
            try {
                console.log('📡 Sending DELETE request to:', `${API_URL}/api/itinerary/clear`);
                
                const response = await fetch(`${API_URL}/api/itinerary/clear`, {
                    method: 'DELETE',
                    credentials: 'include'
                });
                
                console.log('📦 Response status:', response.status);
                const data = await response.json();
                console.log('📦 Response data:', data);
                
                if (data.success) {
                    console.log('✅ Itinerary cleared successfully!');
                    
                    // Clear the session cookie
                    document.cookie = 'itinerary_session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    
                    // Also clear localStorage just in case
                    localStorage.removeItem('nycItinerary');
                    
                    console.log('🔄 Reloading page...');
                    location.reload();
                } else {
                    console.error('❌ Clear failed:', data.error);
                    alert('Failed to clear itinerary: ' + (data.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('❌ Error clearing itinerary:', error);
                alert('Failed to clear itinerary: ' + error.message);
            }
        } else {
            console.log('❌ User cancelled clear');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        console.log('✅ DOM loaded, setting up event listeners...');
        
        // Attach event listener to filter dropdown
        const filterSelect = document.getElementById('filter-type');
        if (filterSelect) {
            filterSelect.addEventListener('change', loadPlaces);
            console.log('✅ Filter dropdown event listener attached');
        }
        
        // Add event listener for "Add to Itinerary" buttons (event delegation)
        document.getElementById('places-grid').addEventListener('click', function(event) {
            if (event.target.classList.contains('add-itinerary-btn') || 
                event.target.closest('.add-itinerary-btn')) {
                
                const button = event.target.classList.contains('add-itinerary-btn') 
                    ? event.target 
                    : event.target.closest('.add-itinerary-btn');
                
                const placeId = parseInt(button.dataset.placeId);
                const placeName = button.dataset.placeName;
                const placeType = button.dataset.placeType;
                
                console.log('🔵 Button clicked!', placeId, placeName, placeType);
                addToItinerary(placeId, placeName, placeType);
            }
        });
        
        // Load places on page load
        console.log('🔄 Loading initial places...');
        loadPlaces();
        
        // Load itinerary on page load
        loadItinerary();
    });


    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✅ DOM loaded, setting up event listeners...');
        
        // Attach event listener to filter dropdown
        const filterSelect = document.getElementById('filter-type');
        if (filterSelect) {
            filterSelect.addEventListener('change', loadPlaces);
            console.log('✅ Filter dropdown event listener attached');
        }
        
        // Load places on page load
        console.log('🔄 Loading initial places...');
        loadPlaces();
    });
    
    // Make functions globally accessible
    window.addToItinerary = addToItinerary;
    window.toggleItineraryTracker = toggleItineraryTracker;
    window.clearItinerary = clearItinerary;
    window.switchTab = switchTab;

    console.log('✅ Custom Places script loaded!');
</script>
{% endraw %}