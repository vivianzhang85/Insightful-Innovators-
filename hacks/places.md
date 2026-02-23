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
                <select id="filter-type" onchange="loadPlaces()">
                    <option value="">All Categories</option>
                    <option value="Breakfast"> Breakfast</option>
                    <option value="Shopping"> Shopping</option>
                    <option value="Landmarks"> Landmarks</option>
                    <option value="Broadway"> Broadway</option>
                    <option value="Scenery"> Scenery</option>
                    <option value="Nightlife"> Nightlife</option>
                    <option value="Recreation"> Recreation</option>
                    <option value="Art & Culture"> Art & Culture</option>
                    <option value="Family Activities"> Family</option>
                    <option value="Food & Dining"> Dining</option>
                    <option value="Entertainment"> Entertainment</option>
                    <option value="Nature"> Nature</option>
                </select>
            </div>

            <div id="browse-message"></div>
            <div id="places-grid" class="places-grid"></div>
        </div>

    <script>
        // Configuration
        const API_URL = 'http://127.0.0.1:8303'; // Change to your backend URL
        const USER_ID = 'user_' + Math.random().toString(36).substr(2, 9); // Replace with actual login

        // Switch between tabs
        function switchTab(tab, element) {
            // Update tab buttons
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            element.classList.add('active');
            
            // Update sections
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(`${tab}-section`).classList.add('active');
            
            // Load data for the tab
            if (tab === 'browse') {
                loadPlaces();
            } else if (tab === 'myplaces') {
                loadMyPlaces();
            }
        }

        // Category suggestion with debouncing
        let debounceTimer;

        function updateCategorySuggestion() {
            clearTimeout(debounceTimer);
            
            debounceTimer = setTimeout(async () => {
                const placeName = document.getElementById('place-name')?.value;
                const description = document.getElementById('place-description')?.value;
                const location = document.getElementById('place-location')?.value;
                
                if (!placeName) {
                    document.getElementById('category-preview').innerHTML = 
                        '<p style="color: #ccc;">Start typing to see category suggestion...</p>';
                    return;
                }
                
                // Show loading
                document.getElementById('category-preview').innerHTML = 
                    '<p style="color: #ccc;">Analyzing...</p>';
                
                // Call backend to get suggestion
                try {
                    const response = await fetch(`${API_URL}/api/places/suggest-category`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            place_name: placeName,
                            description: description,
                            location: location
                        })
                    });
                    
                    const data = await response.json();
                    
                    if (data.success) {
                        document.getElementById('category-preview').innerHTML = `
                            <div style="text-align: center;">
                                <p style="color: #ffd700; font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">
                                    ${data.category}
                                </p>
                                <p style="color: #aaa; font-size: 0.85em;">
                                    This place will appear under "${data.category}" on your itinerary
                                </p>
                            </div>
                        `;
                    } else {
                        document.getElementById('category-preview').innerHTML = 
                            '<p style="color: #f44336;">Error getting category</p>';
                    }
                } catch (error) {
                    console.error('Error getting category suggestion:', error);
                    document.getElementById('category-preview').innerHTML = 
                        '<p style="color: #f44336;">Unable to suggest category</p>';
                }
            }, 500); // Wait 500ms after user stops typing
        }

        // Attach debounced suggestion listeners if fields exist
        document.getElementById('place-name')?.addEventListener('input', updateCategorySuggestion);
        document.getElementById('place-description')?.addEventListener('input', updateCategorySuggestion);
        document.getElementById('place-location')?.addEventListener('input', updateCategorySuggestion);

        // Create new place form handler (if form exists)
        document.getElementById('create-place-form')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const placeData = {
                user_id: USER_ID,
                place_name: document.getElementById('place-name').value,
                description: document.getElementById('place-description').value,
                location: document.getElementById('place-location').value,
                time: document.getElementById('place-time').value,
                price: document.getElementById('place-price').value,
                image_url: document.getElementById('place-image-url').value
            };
            
            try {
                const response = await fetch(`${API_URL}/api/places/custom`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(placeData)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    showMessage('create-message', 
                        `✅ Place created successfully under category: ${data.suggested_category}`, 
                        'success');
                    document.getElementById('create-place-form').reset();
                    document.getElementById('category-preview').innerHTML = 
                        '<p style="color: #ccc;">Start typing to see category suggestion...</p>';
                } else {
                    showMessage('create-message', '❌ Error: ' + data.message, 'error');
                }
            } catch (error) {
                console.error('Error creating place:', error);
                showMessage('create-message', '❌ Failed to create place. Check console for details.', 'error');
            }
        });

        // Load all places
        async function loadPlaces() {
            const filterType = document.getElementById('filter-type').value;
            const url = filterType 
                ? `${API_URL}/api/places/custom?type=${encodeURIComponent(filterType)}` 
                : `${API_URL}/api/places/custom`;
            
            document.getElementById('places-grid').innerHTML = '<div class="loading">Loading places...</div>';
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.success) {
                    displayPlaces(data.places, 'places-grid');
                } else {
                    showMessage('browse-message', '❌ Error loading places', 'error');
                    document.getElementById('places-grid').innerHTML = '';
                }
            } catch (error) {
                console.error('Error loading places:', error);
                showMessage('browse-message', '❌ Failed to load places', 'error');
                document.getElementById('places-grid').innerHTML = '';
            }
        }

        // Load user's custom places
        async function loadMyPlaces() {
            document.getElementById('myplaces-grid')?.innerHTML = '<div class="loading">Loading your places...</div>';
            
            try {
                const response = await fetch(`${API_URL}/api/places/custom/my-itinerary?user_id=${USER_ID}`);
                const data = await response.json();
                
                if (data.success) {
                    displayPlaces(data.places, 'myplaces-grid', true);
                } else {
                    showMessage('myplaces-message', '❌ Error loading your places', 'error');
                    document.getElementById('myplaces-grid').innerHTML = '';
                }
            } catch (error) {
                console.error('Error loading my places:', error);
                showMessage('myplaces-message', '❌ Failed to load your places', 'error');
                document.getElementById('myplaces-grid').innerHTML = '';
            }
        }

        // Display places
        function displayPlaces(places, gridId, isMyPlaces = false) {
            const grid = document.getElementById(gridId);
            
            if (!places || places.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <p style="font-size: 1.2em; margin-bottom: 10px;">No places found</p>
                        <p>${isMyPlaces ? 'Add some custom places to your itinerary!' : 'Be the first to create a place!'}</p>
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
                        ${!isMyPlaces ? `
                            <button class="btn btn-small" onclick="addPlaceToItinerary(${place.id}, '${place.place_name.replace(/'/g, "\\'")}')">
                                Add to My Itinerary
                            </button>
                        ` : `
                            <p style="color: #4CAF50; margin-top: 10px;">✓ In your itinerary</p>
                        `}
                    </div>
                `;
            }).join('');
        }

        // Add place to itinerary
        async function addPlaceToItinerary(placeId, placeName) {
            try {
                const response = await fetch(`${API_URL}/api/places/custom/add-to-itinerary`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: USER_ID,
                        place_id: placeId
                    })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    alert(`✅ "${placeName}" added to your itinerary!`);
                    loadPlaces(); // Refresh to show updated popularity
                } else {
                    alert('❌ Error: ' + data.message);
                }
            } catch (error) {
                console.error('Error adding place to itinerary:', error);
                alert('❌ Failed to add place to itinerary');
            }
        }

        // Show message
        function showMessage(elementId, message, type) {
            const element = document.getElementById(elementId);
            if (!element) return;
            element.innerHTML = `<div class="message ${type}">${message}</div>`;
            setTimeout(() => element.innerHTML = '', 5000);
        }

        // Initialize
        console.log('Custom Places page initialized!');
    </script>