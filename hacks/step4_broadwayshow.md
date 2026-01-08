---
layout: post
title: "Step 4 Broadway"
description: "Time to shop! Let's make a new outfit."
permalink: /new-york/broadway/
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 3
author: "Insightful Innocators"
date: 2025-11-20
microblog: true
footer: 
    previous:  /new-york/landmarks/
    home: /nyc/home/
    next: /new-york/breakfast
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NYC Broadway Explorer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #fff;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 40px 0;
            border-bottom: 3px solid #ffd700;
            margin-bottom: 40px;
        }
        
        h1 {
            font-size: 3.5em;
            color: #ffd700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.2em;
            color: #ddd;
            font-style: italic;
        }
        
        .step {
            display: none;
        }
        
        .step.active {
            display: block;
        }
        
        .playhouse-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        
        .playhouse-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid transparent;
        }
        
        .playhouse-card:hover {
            transform: translateY(-5px);
            border-color: #ffd700;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }
        
        .playhouse-card h3 {
            margin: 0 0 10px 0;
            font-size: 24px;
            color: #ffd700;
        }
        
        .playhouse-card .badge {
            display: inline-block;
            padding: 5px 15px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 20px;
            font-size: 12px;
            margin: 10px 0;
        }
        
        .playhouse-card p {
            line-height: 1.6;
            color: #cbd5e1;
        }
        
        .show-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 20px 0;
        }
        
        .show-item {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
        }
        
        .show-item h4 {
            margin: 0 0 5px 0;
            color: #ffd700;
        }
        
        .show-item .price {
            color: #10b981;
            font-weight: bold;
            font-size: 18px;
        }
        
        .show-item p {
            color: #94a3b8;
            font-size: 14px;
            margin: 10px 0;
        }
        
        .show-item .showtimes {
            color: #ddd;
            font-size: 13px;
            margin-top: 8px;
        }
        
        .btn {
            background: linear-gradient(90deg, #ffd700, #ffed4e);
            color: #1a1a2e;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }
        
        .btn-primary {
            background: linear-gradient(90deg, #10b981, #059669);
            width: 100%;
            margin-top: 20px;
        }
        
        .btn-itinerary {
            background: linear-gradient(90deg, #4f46e5, #4338ca);
            color: white;
            margin-left: 10px;
            padding: 8px 16px;
            font-size: 14px;
        }
        
        .back-btn {
            background: transparent;
            border: 1px solid #64748b;
            color: #94a3b8;
            margin-bottom: 20px;
        }
        
        .back-btn:hover {
            border-color: white;
            color: white;
        }
        
        .booking-section {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
        }
        
        .booking-item {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .custom-input {
            width: 100%;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #475569;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            margin: 10px 0;
        }
        
        .custom-input:focus {
            outline: none;
            border-color: #ffd700;
        }
        
        .remove-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
        }
        
        .total {
            font-size: 28px;
            text-align: right;
            margin: 20px 0;
            color: #ffd700;
        }
        
        .theater-header {
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #1a1a2e;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 20px;
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

        .button-row {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        @media (max-width: 768px) {
            .playhouse-grid, .show-grid {
                grid-template-columns: 1fr;
            }
            .itinerary-tracker {
                width: 90%;
                right: 5%;
                left: 5%;
            }
            .button-row {
                flex-direction: column;
                gap: 10px;
            }
            .button-row .btn {
                width: 100%;
                margin-left: 0;
            }
        }
    </style>
</head>
<body>
    <button class="toggle-tracker-btn" onclick="toggleItineraryTracker()">
        📋 My Itinerary
    </button>

    <div class="container">
        <header>
            <div style="font-size: 4em;">🎭</div>
            <h1>Broadway Tonight!</h1>
            <p class="subtitle">Choose your theatrical experience</p>
        </header>

        <div class="step active" id="step1">
            <h2 style="text-align: center; margin-bottom: 30px;">Choose Your Playhouse</h2>
            <div class="playhouse-grid">
                <div class="playhouse-card" onclick="selectPlayhouse('majestic')">
                    <h3>Majestic Theatre</h3>
                    <div class="badge">Historic & Grand</div>
                    <p>📍 245 W 44th Street</p>
                    <p>One of Broadway's most iconic venues, featuring spectacular productions since 1927. Home to some of the longest-running shows in Broadway history.</p>
                </div>
                <div class="playhouse-card" onclick="selectPlayhouse('gershwin')">
                    <h3>Gershwin Theatre</h3>
                    <div class="badge">Largest & Most Modern</div>
                    <p>📍 222 W 51st Street</p>
                    <p>Broadway's largest theater with 1,933 seats. Known for spectacular staging and cutting-edge productions that push theatrical boundaries.</p>
                </div>
                <div class="playhouse-card" onclick="selectPlayhouse('imperial')">
                    <h3>Imperial Theatre</h3>
                    <div class="badge">Intimate & Classic</div>
                    <p>📍 249 W 45th Street</p>
                    <p>A beautifully preserved theater offering an intimate Broadway experience. Perfect acoustics and sightlines from every seat in the house.</p>
                </div>
                <div class="playhouse-card" onclick="selectPlayhouse('richardrodgers')">
                    <h3>Richard Rodgers Theatre</h3>
                    <div class="badge">Contemporary & Renowned</div>
                    <p>📍 226 W 46th Street</p>
                    <p>Home to Tony Award-winning productions and revolutionary shows. A modern theater space with state-of-the-art technology and exceptional staging.</p>
                </div>
            </div>
        </div>

        <div class="step" id="step2">
            <button class="btn back-btn" onclick="goToStep(1)">← Back</button>
            <div class="theater-header" id="theaterHeader"></div>
            <div class="show-grid" id="showGrid"></div>
            <button class="btn btn-primary" onclick="goToStep(3)">Continue to Booking →</button>
        </div>

        <div class="step" id="step3">
            <button class="btn back-btn" onclick="goToStep(2)">← Back</button>
            <div class="booking-section">
                <h2>Your Selections</h2>
                <div id="bookingList"></div>
                <h3 style="margin-top: 30px;">Add Special Request</h3>
                <input type="text" class="custom-input" id="customInput" placeholder="E.g., Wheelchair accessible seating, center orchestra">
                <button class="btn" onclick="addCustom()">Add Request</button>
            </div>
            <button class="btn btn-primary" onclick="goToStep(4)">Review Booking →</button>
        </div>

        <div class="step" id="step4">
            <div class="booking-section">
                <h2>Booking Confirmation</h2>
                <div class="theater-header" id="reviewHeader"></div>
                <div id="reviewList"></div>
                <div class="total" id="totalPrice">Total: $0</div>
                <button class="btn back-btn" onclick="goToStep(3)">← Edit Booking</button>
                <button class="btn btn-primary" onclick="confirm()">Confirm Booking</button>
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
            alert(`🎭 Added "${showName}" at ${theaterName} to your itinerary!`);
        }

        // ============================================
        // BROADWAY PAGE SPECIFIC FUNCTIONS
        // ============================================

        var data = {
            majestic: {
                name: 'Majestic Theatre',
                location: '245 W 44th Street',
                items: [
                    {name: 'The Phantom of the Opera', price: 149, desc: 'The longest-running show in Broadway history', showtimes: 'Wed & Sat 2pm, Tue-Sat 8pm'},
                    {name: 'Les Misérables', price: 139, desc: 'Epic tale of love and revolution', showtimes: 'Wed & Sat 2pm, Tue-Sun 7:30pm'},
                    {name: 'Chicago', price: 119, desc: 'Razzle dazzle musical spectacular', showtimes: 'Thu & Sat 2pm, Mon-Sat 8pm'},
                    {name: 'Cats', price: 99, desc: 'Now and forever, a timeless classic', showtimes: 'Wed & Sat 2pm, Tue-Sat 7pm'}
                ]
            },
            gershwin: {
                name: 'Gershwin Theatre',
                location: '222 W 51st Street',
                items: [
                    {name: 'Wicked', price: 189, desc: 'The untold story of the Witches of Oz', showtimes: 'Wed & Sat 2pm, Tue-Sat 8pm, Sun 3pm'},
                    {name: 'The Lion King', price: 179, desc: 'Disney\'s award-winning masterpiece', showtimes: 'Wed & Sat 2pm, Daily 8pm'},
                    {name: 'Frozen', price: 159, desc: 'Let it go on Broadway', showtimes: 'Sat & Sun 2pm, Wed-Sat 8pm'},
                    {name: 'Aladdin', price: 149, desc: 'A whole new world awaits', showtimes: 'Thu & Sun 2pm, Tue-Sun 7pm'}
                ]
            },
            imperial: {
                name: 'Imperial Theatre',
                location: '249 W 45th Street',
                items: [
                    {name: 'Moulin Rouge!', price: 169, desc: 'Spectacular spectacular!', showtimes: 'Wed & Sat 2pm, Tue-Sat 8pm'},
                    {name: 'Six', price: 129, desc: 'The Tudor queens rock out', showtimes: 'Sat & Sun 2pm, Tue-Sun 7:30pm'},
                    {name: 'Mean Girls', price: 139, desc: 'So fetch on Broadway', showtimes: 'Thu & Sat 2pm, Wed-Sat 8pm'},
                    {name: 'Dear Evan Hansen', price: 119, desc: 'You will be found', showtimes: 'Wed & Sat 2pm, Tue-Sat 7pm'}
                ]
            },
            richardrodgers: {
                name: 'Richard Rodgers Theatre',
                location: '226 W 46th Street',
                items: [
                    {name: 'Hamilton', price: 299, desc: 'The revolutionary musical phenomenon', showtimes: 'Wed & Sat 2pm, Tue-Sat 8pm, Sun 3pm'},
                    {name: 'Book of Mormon', price: 179, desc: 'Outrageous and hilarious', showtimes: 'Thu & Sat 2pm, Tue-Sun 7pm'},
                    {name: 'Come From Away', price: 149, desc: 'A true story of kindness', showtimes: 'Wed & Sat 2pm, Daily 7:30pm'},
                    {name: 'Hadestown', price: 159, desc: 'Journey to the underworld', showtimes: 'Sat & Sun 2pm, Tue-Sun 8pm'}
                ]
            }
        };

        var current = null;
        var cart = [];

        function goToStep(n) {
            var steps = document.querySelectorAll('.step');
            for (var i = 0; i < steps.length; i++) {
                steps[i].classList.remove('active');
            }
            document.getElementById('step' + n).classList.add('active');
            if (n === 4) showReview();
        }

        function selectPlayhouse(id) {
            current = data[id];
            showShows();
            goToStep(2);
        }

        function showShows() {
            document.getElementById('theaterHeader').innerHTML = '<h2>' + current.name + '</h2><p>' + current.location + '</p>';
            var html = '';
            for (var i = 0; i < current.items.length; i++) {
                var item = current.items[i];
                html += '<div class="show-item">';
                html += '<h4>' + item.name + '</h4>';
                html += '<div class="price">$' + item.price + '</div>';
                html += '<p>' + item.desc + '</p>';
                html += '<div class="showtimes">🎟️ ' + item.showtimes + '</div>';
                html += '<div class="button-row">';
                html += '<button class="btn" onclick="addItem(' + i + ')">Book Tickets</button>';
                html += '<button class="btn btn-itinerary" onclick="addToItinerary(\'' + current.name + '\', \'' + item.name + '\')">Add to Itinerary</button>';
                html += '</div>';
                html += '</div>';
            }
            document.getElementById('showGrid').innerHTML = html;
        }

        function addToItinerary(theaterName, showName) {
            saveBroadwayChoice(theaterName, showName);
        }

        function addItem(idx) {
            cart.push({name: current.items[idx].name, price: current.items[idx].price, custom: false});
            updateBooking();
        }

        function addCustom() {
            var val = document.getElementById('customInput').value;
            if (val) {
                cart.push({name: val, price: 0, custom: true});
                document.getElementById('customInput').value = '';
                updateBooking();
            }
        }

        function removeItem(idx) {
            cart.splice(idx, 1);
            updateBooking();
        }

        function updateBooking() {
            var html = '';
            if (cart.length === 0) {
                html = '<p style="text-align: center; color: #64748b;">No tickets selected yet</p>';
            } else {
                for (var i = 0; i < cart.length; i++) {
                    html += '<div class="booking-item">';
                    html += '<div>' + cart[i].name;
                    if (cart[i].custom) html += ' <span style="background: #a855f7; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Request</span>';
                    html += '</div>';
                    html += '<div>';
                    if (!cart[i].custom) html += '<span style="color: #ffd700; margin-right: 15px;">$' + cart[i].price + '</span>';
                    html += '<button class="remove-btn" onclick="removeItem(' + i + ')">Remove</button>';
                    html += '</div></div>';
                }
            }
            document.getElementById('bookingList').innerHTML = html;
        }

        function showReview() {
            document.getElementById('reviewHeader').innerHTML = '<h2>' + current.name + '</h2><p>' + current.location + '</p>';
            var html = '';
            var total = 0;
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].price;
                html += '<div class="booking-item">';
                html += '<div>' + cart[i].name;
                if (cart[i].custom) html += ' <span style="background: #a855f7; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Request</span>';
                html += '</div>';
                if (!cart[i].custom) html += '<div style="color: #ffd700;">$' + cart[i].price + '</div>';
                html += '</div>';
            }
            document.getElementById('reviewList').innerHTML = html;
            document.getElementById('totalPrice').textContent = 'Total: $' + total;
        }

        function confirm() {
            alert('Booking confirmed! Your tickets will be sent to your email. See you at the show! 🎭');
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initItinerary);
    </script>
</body>
</html>