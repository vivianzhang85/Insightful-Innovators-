---
layout: post
title: "Choose Your Own Event"
description: "Time to add your own event to your itinerary!"
permalink: /new-york/events/
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Events - A Day In New York</title>
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

        .events-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .event-card {
            background: #2a2a2a;
            border-radius: 12px;
            padding: 20px;
            border: 2px solid #ffd700;
            transition: all 0.3s ease;
        }

        .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
        }

        .event-card h3 {
            color: #ffd700;
            margin-bottom: 10px;
            font-size: 1.3em;
        }

        .event-card p {
            color: #ccc;
            margin: 5px 0;
            line-height: 1.6;
        }

        .event-type {
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
            
            .events-grid {
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
            <h1>🗽 Custom NYC Events</h1>
            <p style="color: #ccc;">Add your own events or browse what others have shared!</p>
        </header>

        <div class="tabs">
            <button class="tab" onclick="switchTab('browse', this)">Browse Events</button>
            <button class="tab active" onclick="switchTab('create', this)">Create Event</button>
            <button class="tab" onclick="switchTab('myevents', this)">My Itinerary</button>
        </div>

        <!-- CREATE EVENT SECTION -->
        <div id="create-section" class="section active">
            <h2>Create a Custom Event</h2>
            <div id="create-message"></div>
            
            <form id="create-event-form">
                <div class="form-group">
                    <label for="event-name">Event Name *</label>
                    <input type="text" id="event-name" required placeholder="e.g., Central Park Carriage Ride">
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Tell others about this event..."></textarea>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" placeholder="e.g., Central Park South, Manhattan">
                </div>

                <!-- Category Preview (auto-suggested) -->
                <div class="form-group">
                    <label>Suggested Category</label>
                    <div id="category-preview">
                        <p style="color: #ccc;">Start typing to see category suggestion...</p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="time">Time</label>
                    <input type="text" id="time" placeholder="e.g., 10:00 AM - 12:00 PM">
                </div>

                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" id="price" placeholder="e.g., Free, $20, $50-100">
                </div>

                <div class="form-group">
                    <label for="image-url">Image URL (optional)</label>
                    <input type="url" id="image-url" placeholder="https://example.com/image.jpg">
                </div>

                <button type="submit" class="btn">Create Event</button>
            </form>
        </div>

        <!-- BROWSE EVENTS SECTION -->
        <div id="browse-section" class="section">
            <h2>Browse Custom Events</h2>
            
            <div class="form-group">
                <label for="filter-type">Filter by Category</label>
                <select id="filter-type" onchange="loadEvents()">
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
            <div id="events-grid" class="events-grid"></div>
        </div>

        <!-- MY ITINERARY SECTION -->
        <div id="myevents-section" class="section">
            <h2>My Custom Events</h2>
            <div id="myevents-message"></div>
            <div id="myevents-grid" class="events-grid"></div>
        </div>
    </div>

    <script>
        // Configuration
        const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://127.0.0.1:8303'
            : 'https://innovators.opencodingsociety.com'; 
        const USER_ID = 'user_' + Math.random().toString(36).substr(2, 9); // Replace with actual login

        console.log('Page loaded!');
        console.log('User ID:', USER_ID);
        console.log('API URL:', API_URL);

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
                loadEvents();
            } else if (tab === 'myevents') {
                loadMyEvents();
            }
        }

        // Category suggestion with debouncing
        let debounceTimer;

        function updateCategorySuggestion() {
            clearTimeout(debounceTimer);
            
            debounceTimer = setTimeout(async () => {
                const eventName = document.getElementById('event-name').value;
                const description = document.getElementById('description').value;
                const location = document.getElementById('location').value;
                
                console.log('Updating category for:', eventName);
                
                if (!eventName) {
                    document.getElementById('category-preview').innerHTML = 
                        '<p style="color: #ccc;">Start typing to see category suggestion...</p>';
                    return;
                }
                
                // Show loading
                document.getElementById('category-preview').innerHTML = 
                    '<p style="color: #ccc;">Analyzing...</p>';
                
                // Call backend to get suggestion
                try {
                    console.log('Calling suggest-category API...');
                    const response = await fetch(`${API_URL}/api/events/suggest-category`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            event_name: eventName,
                            description: description,
                            location: location
                        })
                    });
                    
                    console.log('Response status:', response.status);
                    const data = await response.json();
                    console.log('Response data:', data);
                    
                    if (data.success) {
                        document.getElementById('category-preview').innerHTML = `
                            <div style="text-align: center;">
                                <p style="color: #ffd700; font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">
                                    ${data.category}
                                </p>
                                <p style="color: #aaa; font-size: 0.85em;">
                                    This event will appear under "${data.category}" on your itinerary
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

        // Add event listeners for live category suggestion
        document.getElementById('event-name').addEventListener('input', updateCategorySuggestion);
        document.getElementById('description').addEventListener('input', updateCategorySuggestion);
        document.getElementById('location').addEventListener('input', updateCategorySuggestion);

        // Create new event
        document.getElementById('create-event-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            console.log('Form submitted!');
            
            const eventData = {
                user_id: USER_ID,
                event_name: document.getElementById('event-name').value,
                description: document.getElementById('description').value,
                location: document.getElementById('location').value,
                time: document.getElementById('time').value,
                price: document.getElementById('price').value,
                image_url: document.getElementById('image-url').value
            };
            
            console.log('Event data to submit:', eventData);
            
            try {
                console.log('Sending POST request to:', `${API_URL}/api/events/custom`);
                const response = await fetch(`${API_URL}/api/events/custom`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(eventData)
                });
                
                console.log('Response status:', response.status);
                const data = await response.json();
                console.log('Response data:', data);
                
                if (data.success) {
                    showMessage('create-message', 
                        `✅ Event created successfully under category: ${data.suggested_category}`, 
                        'success');
                    document.getElementById('create-event-form').reset();
                    document.getElementById('category-preview').innerHTML = 
                        '<p style="color: #ccc;">Start typing to see category suggestion...</p>';
                } else {
                    showMessage('create-message', '❌ Error: ' + data.message, 'error');
                }
            } catch (error) {
                console.error('Full error details:', error);
                showMessage('create-message', '❌ Failed to create event. Check console for details.', 'error');
            }
        });

        // Load all events
        async function loadEvents() {
            const filterType = document.getElementById('filter-type').value;
            const url = filterType 
                ? `${API_URL}/api/events/custom?type=${encodeURIComponent(filterType)}` 
                : `${API_URL}/api/events/custom`;
            
            console.log('Loading events from:', url);
            document.getElementById('events-grid').innerHTML = '<div class="loading">Loading events...</div>';
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                console.log('Events loaded:', data);
                
                if (data.success) {
                    displayEvents(data.events, 'events-grid');
                } else {
                    showMessage('browse-message', '❌ Error loading events', 'error');
                    document.getElementById('events-grid').innerHTML = '';
                }
            } catch (error) {
                console.error('Error loading events:', error);
                showMessage('browse-message', '❌ Failed to load events', 'error');
                document.getElementById('events-grid').innerHTML = '';
            }
        }

        // Load user's custom events
        async function loadMyEvents() {
            console.log('Loading my events for user:', USER_ID);
            document.getElementById('myevents-grid').innerHTML = '<div class="loading">Loading your events...</div>';
            
            try {
                const response = await fetch(`${API_URL}/api/events/custom/my-itinerary?user_id=${USER_ID}`);
                const data = await response.json();
                
                console.log('My events loaded:', data);
                
                if (data.success) {
                    displayEvents(data.events, 'myevents-grid', true);
                } else {
                    showMessage('myevents-message', '❌ Error loading your events', 'error');
                    document.getElementById('myevents-grid').innerHTML = '';
                }
            } catch (error) {
                console.error('Error loading my events:', error);
                showMessage('myevents-message', '❌ Failed to load your events', 'error');
                document.getElementById('myevents-grid').innerHTML = '';
            }
        }

        // Display events
        function displayEvents(events, gridId, isMyEvents = false) {
            const grid = document.getElementById(gridId);
            
            if (events.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <p style="font-size: 1.2em; margin-bottom: 10px;">No events found</p>
                        <p>${isMyEvents ? 'Add some custom events to your itinerary!' : 'Be the first to create an event!'}</p>
                    </div>
                `;
                return;
            }
            
            grid.innerHTML = events.map(event => {
                return `
                    <div class="event-card">
                        <h3>${event.event_name}</h3>
                        <span class="event-type">${event.event_type}</span>
                        ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
                        ${event.location ? `<p><strong>📍 Location:</strong> ${event.location}</p>` : ''}
                        ${event.time ? `<p><strong>🕐 Time:</strong> ${event.time}</p>` : ''}
                        ${event.price ? `<p><strong>💵 Price:</strong> ${event.price}</p>` : ''}
                        ${event.times_added ? `<p class="popularity">⭐ Added ${event.times_added} time${event.times_added > 1 ? 's' : ''}</p>` : ''}
                        ${!isMyEvents ? `
                            <button class="btn btn-small" onclick="addToItinerary(${event.id}, '${event.event_name.replace(/'/g, "\\'")}')">
                                Add to My Itinerary
                            </button>
                        ` : `
                            <p style="color: #4CAF50; margin-top: 10px;">✓ In your itinerary</p>
                        `}
                    </div>
                `;
            }).join('');
        }

        // Add event to itinerary
        async function addToItinerary(eventId, eventName) {
            console.log('Adding to itinerary:', eventId, eventName);
            try {
                const response = await fetch(`${API_URL}/api/events/custom/add-to-itinerary`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_id: USER_ID,
                        event_id: eventId
                    })
                });
                
                const data = await response.json();
                console.log('Add to itinerary response:', data);
                
                if (data.success) {
                    alert(`✅ "${eventName}" added to your itinerary!`);
                    loadEvents(); // Refresh to show updated popularity
                } else {
                    alert('❌ Error: ' + data.message);
                }
            } catch (error) {
                console.error('Error adding to itinerary:', error);
                alert('❌ Failed to add event to itinerary');
            }
        }

        // Show message
        function showMessage(elementId, message, type) {
            const element = document.getElementById(elementId);
            element.innerHTML = `<div class="message ${type}">${message}</div>`;
            setTimeout(() => element.innerHTML = '', 5000);
        }

        // Initialize
        console.log('Custom Events page initialized!');
    </script>
</body>
</html>