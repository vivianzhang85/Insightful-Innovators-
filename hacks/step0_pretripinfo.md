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
footer: 
previous: /newyork/home/
home: /nyc/home/
next: /newyork/itinerary/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New York Trip Planner - Trip Information</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a1a35 0%, #1a2a4a 100%);
            color: white;
            min-height: 100vh;
        }

        /* Fixed Left Sidebar - SAME AS BREAKFAST PAGE */
        .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 260px;
            height: 100vh;
            background: linear-gradient(180deg, #1a365d 0%, #2d4a7c 50%, #4a6fa5 100%);
            border-right: 3px solid #FFD700;
            padding: 25px 20px;
            z-index: 1000;
            overflow-y: auto;
            box-shadow: 4px 0 20px rgba(255, 215, 0, 0.3);
        }

        .sidebar-header {
            margin-bottom: 35px;
            padding-bottom: 20px;
            border-bottom: 3px solid #FFD700;
            text-align: center;
        }

        .sidebar-header h2 {
            color: #FFD700;
            font-size: 1.6rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-weight: 700;
            letter-spacing: 0.5px;
        }

        .sidebar-header p {
            color: #FFE55C;
            font-size: 0.85rem;
            margin-top: 8px;
            opacity: 0.9;
        }

        .nav-menu {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .nav-button {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 215, 0, 0.3);
            color: #f0fdfa;
            padding: 16px 20px;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 600;
            cursor: pointer;
            text-align: left;
            transition: all 0.3s ease;
            border-left: 5px solid transparent;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-button:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateX(8px);
            border-left-color: #FFD700;
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
        }

        .nav-button.active {
            background: rgba(255, 215, 0, 0.3);
            border-left-color: #FFD700;
            border-color: #FFD700;
            color: #FFD700;
            box-shadow: 0 4px 16px rgba(255, 215, 0, 0.5);
        }

        .nav-button.breakfast {
            border-left-color: #fbbf24;
        }

        .nav-button.landmarks {
            border-left-color: #FFD700;
        }

        .nav-button.shopping {
            border-left-color: #c084fc;
        }

        .nav-button.broadway {
            border-left-color: #34d399;
        }

        /* Main Content Area - SHIFTED RIGHT */
        .main-content {
            margin-left: 280px;
            margin-right: 0;
            padding: 30px 60px 30px 20px;
            min-height: 100vh;
            max-width: 1100px;
        }

        .container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
            padding: 2rem;
            max-width: 28rem;
            width: 100%;
            margin: 0;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 215, 0, 0.3);
        }

        h1 {
            font-size: 1.875rem;
            font-weight: bold;
            color: #FFD700;
            margin-bottom: 1.5rem;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #FFE55C;
            margin-bottom: 0.5rem;
        }

        select, input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 0.5rem;
            font-size: 1rem;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            transition: all 0.3s ease;
        }

        select option {
            background: #1a2a4a;
            color: white;
        }

        select:focus, input:focus {
            outline: none;
            border-color: #FFD700;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
        }

        button {
            width: 100%;
            background: linear-gradient(90deg, #4f46e5, #4338ca);
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4);
            background: linear-gradient(90deg, #4338ca, #4f46e5);
        }

        .result {
            text-align: center;
        }

        .result-box {
            background: rgba(30, 58, 138, 0.5);
            border: 2px solid #FFD700;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
        }

        .result-box h2 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #FFD700;
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
            color: #FFE55C;
        }

        .hidden {
            display: none;
        }

        .reset-btn {
            background: linear-gradient(90deg, #4f46e5, #4338ca);
            padding: 0.5rem 1.5rem;
            width: auto;
            display: inline-block;
            margin-bottom: 20px;
        }

        .breakfast-nav {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid rgba(255, 215, 0, 0.3);
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
            width: 100%;
        }

        .breakfast-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
            background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
        }

        /* Itinerary Tracker Sidebar - RIGHT SIDE */
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
            backdrop-filter: blur(10px);
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
            transition: all 0.3s ease;
        }

        .itinerary-item:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateX(-5px);
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
            width: auto;
        }

        .toggle-tracker-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.6);
        }

        .itinerary-tracker.hidden {
            display: none;
        }

        @media (max-width: 1024px) {
            .sidebar {
                width: 200px;
            }
            
            .main-content {
                margin-left: 220px;
                margin-right: 0;
                padding: 20px;
                max-width: 800px;
            }
            
            .itinerary-tracker {
                display: none;
            }
            
            .itinerary-tracker.hidden {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .sidebar {
                width: 60px;
                padding: 10px;
            }
            
            .sidebar-header h2 {
                font-size: 0;
            }
            
            .sidebar-header h2::after {
                content: "🗽";
                font-size: 1.5rem;
                color: #FFD700;
            }
            
            .sidebar-header p {
                display: none;
            }
            
            .nav-button {
                padding: 10px;
                font-size: 0;
                justify-content: center;
                text-align: center;
            }
            
            .nav-button::before {
                font-size: 1.2rem;
            }
            
            .nav-button.breakfast::before {
                content: "🍳";
            }
            
            .nav-button.landmarks::before {
                content: "🗽";
            }
            
            .nav-button.shopping::before {
                content: "🛍️";
            }
            
            .nav-button.broadway::before {
                content: "🎭";
            }
            
            .main-content {
                margin-left: 70px;
                margin-right: 10px;
                padding: 15px;
                max-width: 100%;
            }

            .itinerary-tracker {
                width: 90%;
                right: 5%;
                left: 5%;
            }
            
            .container {
                padding: 1.5rem;
                max-width: 100%;
            }
            
            h1 {
                font-size: 1.5rem;
            }
            
            .breakfast-btn {
                padding: 12px 20px;
                font-size: 1rem;
            }
        }

        @media (max-width: 480px) {
            .main-content {
                padding: 10px;
            }
            
            .container {
                padding: 1rem;
            }
            
            h1 {
                font-size: 1.25rem;
            }
            
            .result-box {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Fixed Left Sidebar - SAME AS BREAKFAST PAGE -->
    <div class="sidebar">
        <div class="sidebar-header">
            <h2>NYC Trip Planner Menu</h2>
            <p>Plan your perfect New York adventure</p>
        </div>
        <div class="nav-menu">
            <button class="nav-button breakfast" onclick="navigateTo('breakfast')">
                🍳 Breakfast
            </button>
            <button class="nav-button landmarks" onclick="navigateTo('landmarks')">
                🗽 Landmarks
            </button>
            <button class="nav-button shopping" onclick="navigateTo('shopping')">
                🛍️ Shopping
            </button>
            <button class="nav-button broadway" onclick="navigateTo('broadway')">
                🎭 Broadway
            </button>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <button class="toggle-tracker-btn" onclick="toggleItineraryTracker()">
            📋 My Itinerary
        </button>

        <div class="container">
            <h1>🗽 New York Trip Planner</h1>
            
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
                    <h2>✨ Trip Details Submitted!</h2>
                    <div class="result-details">
                        <p><span>Month:</span> <span id="resultMonth"></span></p>
                        <p><span>Start Date:</span> <span id="resultStart"></span></p>
                        <p><span>End Date:</span> <span id="resultEnd"></span></p>
                    </div>
                </div>
                <button class="reset-btn" onclick="resetForm()">Plan Another Trip</button>
                <div class="breakfast-nav">
                    <a href="/Insightful-Innovators-/new-york/breakfast/" class="breakfast-btn">
                        🍳 Start Your Breakfast Adventure →
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Itinerary Tracker Sidebar - RIGHT SIDE -->
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
        // SIDEBAR NAVIGATION
        // ============================================
        
        function navigateTo(section) {
            if (section === 'breakfast') {
                window.location.href = '/Insightful-Innovators-/new-york/breakfast/';
            } else if (section === 'landmarks') {
                window.location.href = '/Insightful-Innovators-/new-york/landmarks/';
            } else if (section === 'shopping') {
                window.location.href = '/Insightful-Innovators-/new-york/shopping/';
            } else if (section === 'broadway') {
                window.location.href = '/Insightful-Innovators-/new-york/broadway/';
            }
        }

        // ============================================
        // ITINERARY TRACKER FUNCTIONS
        // ============================================

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
            // Update trip info
            if (itinerary.tripInfo) {
                document.getElementById('tripDatesValue').innerHTML = 
                    `${itinerary.tripInfo.month} ${itinerary.tripInfo.startDate} - ${itinerary.tripInfo.endDate}`;
                document.getElementById('tripInfoItem').classList.remove('incomplete');
            } else {
                document.getElementById('tripDatesValue').innerHTML = '<span class="itinerary-empty">Not set yet</span>';
                document.getElementById('tripInfoItem').classList.add('incomplete');
            }
            
            // Update breakfast
            if (itinerary.breakfast) {
                document.getElementById('breakfastValue').innerHTML = 
                    typeof itinerary.breakfast === 'object' ? itinerary.breakfast.name : itinerary.breakfast;
                document.getElementById('breakfastItem').classList.remove('incomplete');
            } else {
                document.getElementById('breakfastValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
                document.getElementById('breakfastItem').classList.add('incomplete');
            }
            
            // Update landmarks
            if (itinerary.landmarks) {
                document.getElementById('landmarksValue').innerHTML = 
                    typeof itinerary.landmarks === 'object' ? itinerary.landmarks.name : itinerary.landmarks;
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
                    document.getElementById('shoppingValue').innerHTML = itinerary.shopping;
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
                    document.getElementById('broadwayValue').innerHTML = itinerary.broadway;
                }
                document.getElementById('broadwayItem').classList.remove('incomplete');
            } else {
                document.getElementById('broadwayValue').innerHTML = '<span class="itinerary-empty">Not selected</span>';
                document.getElementById('broadwayItem').classList.add('incomplete');
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

        // ============================================
        // TRIP INFO PAGE SPECIFIC FUNCTIONS
        // ============================================

        function submitTrip() {
            const month = document.getElementById('month').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            if (month && startDate && endDate) {
                // Validate dates
                if (parseInt(startDate) > parseInt(endDate)) {
                    alert('End date must be after start date!');
                    return;
                }

                if (parseInt(startDate) < 1 || parseInt(startDate) > 31 || 
                    parseInt(endDate) < 1 || parseInt(endDate) > 31) {
                    alert('Please enter valid dates between 1 and 31');
                    return;
                }

                // Save to itinerary tracker
                saveTripInfo(month, startDate, endDate);
                
                document.getElementById('resultMonth').textContent = month;
                document.getElementById('resultStart').textContent = month + ' ' + startDate;
                document.getElementById('resultEnd').textContent = month + ' ' + endDate;

                document.getElementById('quizForm').classList.add('hidden');
                document.getElementById('result').classList.remove('hidden');
            } else {
                alert('Please fill in all fields');
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
        document.addEventListener('DOMContentLoaded', function() {
            const itinerary = getItinerary();
            updateItineraryDisplay(itinerary);
            
            // Check if we already have trip info
            if (itinerary.tripInfo) {
                document.getElementById('month').value = itinerary.tripInfo.month || '';
                document.getElementById('startDate').value = itinerary.tripInfo.startDate || '';
                document.getElementById('endDate').value = itinerary.tripInfo.endDate || '';
            }
        });

        // Expose functions to global scope
        window.navigateTo = navigateTo;
        window.toggleItineraryTracker = toggleItineraryTracker;
        window.clearItinerary = clearItinerary;
        window.submitTrip = submitTrip;
        window.resetForm = resetForm;
    </script>
</body>
</html>