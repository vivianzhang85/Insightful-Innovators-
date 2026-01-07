---
layout: post
title: "Trip Information Quiz"
description: "Start by inputting the dates of your trip"
permalink: /newyork/tripinfo/
parent: "Travel/Planning"
team: "Trip Planners"
submodule: 1
author: "Trip Planners"
date: 2025-01-06
microblog: true
footer: 
previous: /newyork/home/
home: /nyc/home/
next: /newyork/itinerary/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New York Trip Planner</title>
    <style>
        body {
            min-height: 100vh;
            background: linear-gradient(to bottom right, #1e3a8a, #1e40af);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .container {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 28rem;
            width: 100%;
        }
        h1 {
            font-size: 1.875rem;
            font-weight: bold;
            color: #000000;
            margin-bottom: 1.5rem;
            text-align: center;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #000000;
            margin-bottom: 0.5rem;
        }
        select, input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
            box-sizing: border-box;
        }
        select:focus, input:focus {
            outline: none;
            ring: 2px;
            ring-color: #4f46e5;
            border-color: transparent;
        }
        button {
            width: 100%;
            background: #4f46e5;
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        button:hover {
            background: #4338ca;
        }
        .result {
            text-align: center;
        }
        .result-box {
            background: #1e3a8a;
            border: 1px solid #090329ff;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
        }
        .result-box h2 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 1rem;
        }
        .result-details {
            text-align: left;
            color: #ffffff;
        }
        .result-details p {
            margin: 0.5rem 0;
        }
        .result-details span {
            font-weight: 500;
        }
        .hidden {
            display: none;
        }
        .reset-btn {
            background: #4f46e5;
            padding: 0.5rem 1.5rem;
            width: auto;
            display: inline-block;
        }
        .breakfast-nav {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
        .breakfast-btn {
            display: inline-block;
            padding: 15px 40px;
            font-size: 1.2rem;
            font-weight: bold;
            color: #1e3a8a;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .breakfast-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
            background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
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

        @media (max-width: 768px) {
            .itinerary-tracker {
                width: 90%;
                right: 5%;
                left: 5%;
            }
        }
    </style>
</head>
<body>
    <button class="toggle-tracker-btn" onclick="toggleItineraryTracker()">
        📋 My Itinerary
    </button>

    <div class="container">
        <h1>New York Trip Planner</h1>
        
        <div id="quizForm">
            <div class="form-group">
                <label for="month">Which month are you traveling?</label>
                <select id="month">
                    <option value="">Select a month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

            <div class="form-group">
                <label for="startDate">Start Date</label>
                <input type="number" id="startDate" min="1" max="31" placeholder="e.g., 15">
            </div>

            <div class="form-group">
                <label for="endDate">End Date</label>
                <input type="number" id="endDate" min="1" max="31" placeholder="e.g., 20">
            </div>

            <button onclick="submitTrip()">Submit Trip Details</button>
        </div>

        <div id="result" class="result hidden">
            <div class="result-box">
                <h2>Trip Details Submitted!</h2>
                <div class="result-details">
                    <p><span>Month:</span> <span id="resultMonth"></span></p>
                    <p><span>Start Date:</span> <span id="resultStart"></span></p>
                    <p><span>End Date:</span> <span id="resultEnd"></span></p>
                </div>
            </div>
            <button class="reset-btn" onclick="resetForm()">Plan Another Trip</button>
            <div class="breakfast-nav">
                <a href="/student/new-york/breakfast/" class="breakfast-btn">
                    🍳 Hungry? It's time to pick your breakfast spot!
                </a>
            </div>
        </div>
    </div>

    <div class="itinerary-tracker" id="itineraryTracker">
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
        
        <button class="clear-itinerary-btn" onclick="clearItinerary()">
            Clear All Selections
        </button>
    </div>

    <script>
        // ============================================
        // ITINERARY TRACKER JAVASCRIPT
        // ============================================

        function initItinerary() {
            const itinerary = getItinerary();
            updateItineraryDisplay(itinerary);
        }

        function getItinerary() {
            const stored = localStorage.getItem('nycItinerary');
            return stored ? JSON.parse(stored) : {
                tripInfo: null,
                breakfast: null,
                landmarks: null,
                shopping: null,
                broadway: null
            };
        }

        function saveItinerary(itinerary) {
            localStorage.setItem('nycItinerary', JSON.stringify(itinerary));
            updateItineraryDisplay(itinerary);
        }

        function updateItineraryDisplay(itinerary) {
            if (itinerary.tripInfo) {
                document.getElementById('tripDatesValue').innerHTML = 
                    `${itinerary.tripInfo.month} ${itinerary.tripInfo.startDate} - ${itinerary.tripInfo.endDate}`;
                document.getElementById('tripInfoItem').classList.remove('incomplete');
            }
            
            if (itinerary.breakfast) {
                document.getElementById('breakfastValue').textContent = itinerary.breakfast;
                document.getElementById('breakfastItem').classList.remove('incomplete');
            }
            
            if (itinerary.landmarks) {
                document.getElementById('landmarksValue').textContent = itinerary.landmarks;
                document.getElementById('landmarksItem').classList.remove('incomplete');
            }
            
            if (itinerary.shopping) {
                document.getElementById('shoppingValue').innerHTML = 
                    `${itinerary.shopping.center}<br><small>${itinerary.shopping.gender}'s Fashion</small>`;
                document.getElementById('shoppingItem').classList.remove('incomplete');
            }
            
            if (itinerary.broadway) {
                document.getElementById('broadwayValue').innerHTML = 
                    `${itinerary.broadway.theater}<br><small>${itinerary.broadway.show}</small>`;
                document.getElementById('broadwayItem').classList.remove('incomplete');
            }
        }

        function clearItinerary() {
            if (confirm('Are you sure you want to clear your entire itinerary?')) {
                localStorage.removeItem('nycItinerary');
                location.reload();
            }
        }

        function toggleItineraryTracker() {
            const tracker = document.getElementById('itineraryTracker');
            tracker.classList.toggle('hidden');
        }

        function saveTripInfo(month, startDate, endDate) {
            const itinerary = getItinerary();
            itinerary.tripInfo = { month, startDate, endDate };
            saveItinerary(itinerary);
        }

        function saveBreakfastChoice(restaurantName) {
            const itinerary = getItinerary();
            itinerary.breakfast = restaurantName;
            saveItinerary(itinerary);
        }

        function saveLandmarkVisit(landmarkName) {
            const itinerary = getItinerary();
            itinerary.landmarks = landmarkName;
            saveItinerary(itinerary);
        }

        function saveShoppingChoice(centerName, gender) {
            const itinerary = getItinerary();
            itinerary.shopping = { center: centerName, gender: gender };
            saveItinerary(itinerary);
        }

        function saveBroadwayChoice(theaterName, showName) {
            const itinerary = getItinerary();
            itinerary.broadway = { theater: theaterName, show: showName };
            saveItinerary(itinerary);
        }

        // ============================================
        // TRIP INFO PAGE SPECIFIC FUNCTIONS
        // ============================================

        function submitTrip() {
            const month = document.getElementById('month').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            if (month && startDate && endDate) {
                // Save to itinerary tracker
                saveTripInfo(month, startDate, endDate);
                
                document.getElementById('resultMonth').textContent = month;
                document.getElementById('resultStart').textContent = month + ' ' + startDate;
                document.getElementById('resultEnd').textContent = month + ' ' + endDate;

                document.getElementById('quizForm').classList.add('hidden');
                document.getElementById('result').classList.remove('hidden');
            }
        }

        function resetForm() {
            document.getElementById('month').value = '';
            document.getElementById('startDate').value = '';
            document.getElementById('endDate').value = '';

            document.getElementById('quizForm').classList.remove('hidden');
            document.getElementById('result').classList.add('hidden');
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initItinerary);
    </script>
</body>
</html>