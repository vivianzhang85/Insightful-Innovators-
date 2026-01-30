---
layout: post
title: "Step 1 Breakfast"
description: "Breakfast time hits, and in NYC that means one thing: pick your spot and dive in."
permalink: /new-york/breakfastt/
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 1
author: "Insightful Innocators"
date: 2025-11-20
microblog: true
footer:
  previous: /new-york/landmarks/
  home: /nyc/home/
  next: /new-york/shopping/
---


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NYC Breakfast Explorer</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
    min-height: 100vh;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    border: 2px solid #f59e0b;
  }
  
  .header h1 {
    font-size: 48px;
    margin: 0 0 10px 0;
    color: #fbbf24;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  .header p {
    font-size: 1.2rem;
    color: #cbd5e1;
  }
  
  .login-info {
    margin-top: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border: 1px solid #4CAF50;
  }
  
  .login-info a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
  }
  
  .login-info a:hover {
    text-decoration: underline;
  }
  
  .login-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1rem;
  }
  
  .login-status.authenticated {
    color: #4CAF50;
  }
  
  .login-status.not-authenticated {
    color: #FF9800;
  }
  
  .live-hours-container {
    margin: 30px 0;
    padding: 25px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    border-left: 5px solid #10b981;
  }
  
  .live-hours-container h2 {
    color: #10b981;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  
  .restaurant-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    border: 2px solid transparent;
    transition: all 0.3s;
  }
  
  .restaurant-card:hover {
    transform: translateY(-5px);
    border-color: #f59e0b;
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
  }
  
  .restaurant-card h3 {
    margin: 0 0 15px 0;
    font-size: 28px;
    color: #f59e0b;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .restaurant-card .badge {
    display: inline-block;
    padding: 5px 15px;
    background: rgba(245, 158, 11, 0.2);
    border-radius: 20px;
    font-size: 12px;
    margin: 10px 0;
  }
  
  .restaurant-card p {
    line-height: 1.6;
    color: #cbd5e1;
    margin: 10px 0;
  }
  
  .hours-display {
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 10px;
    margin: 15px 0;
  }
  
  .day-hour {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .day-hour:last-child {
    border-bottom: none;
  }
  
  .day-hour .day {
    font-weight: bold;
    color: #fbbf24;
  }
  
  .day-hour .time {
    color: #10b981;
    font-weight: bold;
  }
  
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0;
  }
  
  .menu-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.3s;
  }
  
  .menu-item:hover {
    transform: scale(1.02);
  }
  
  .menu-item h4 {
    margin: 0 0 5px 0;
    color: #fbbf24;
    font-size: 1.2rem;
  }
  
  .menu-item .price {
    color: #10b981;
    font-weight: bold;
    font-size: 20px;
    margin: 5px 0;
  }
  
  .menu-item p {
    color: #94a3b8;
    font-size: 14px;
    margin: 10px 0;
  }
  
  .btn {
    background: linear-gradient(90deg, #f59e0b, #f97316);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(245, 158, 11, 0.4);
  }
  
  .btn-primary {
    background: linear-gradient(90deg, #10b981, #059669);
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
  
  .refresh-btn {
    background: linear-gradient(90deg, #8b5cf6, #7c3aed);
    margin-top: 10px;
  }
  
  .step {
    display: none;
  }
  
  .step.active {
    display: block;
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
  
  .order-section {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 30px;
  }
  
  .order-item {
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
    border-color: #a855f7;
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
    color: #fbbf24;
  }
  
  .restaurant-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .restaurant-location {
    color: #f59e0b;
    font-weight: bold;
  }
  
  .restaurant-cuisine {
    background: rgba(139, 92, 246, 0.2);
    color: #c4b5fd;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
  }
  
  .location-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0;
  }
  
  .location-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    transition: all 0.3s;
    border: 2px solid transparent;
    position: relative;
  }
  
  .location-card:hover {
    transform: translateY(-5px);
    border-color: #f59e0b;
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
  }
  
  .location-card h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
    color: #f59e0b;
  }

  .location-card-footer {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  .view-menu-btn {
    flex: 1;
    background: linear-gradient(90deg, #f59e0b, #f97316);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .view-menu-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(245, 158, 11, 0.4);
  }

  .quick-add-btn {
    background: linear-gradient(90deg, #ffd700, #ffed4e);
    color: #1a1a2e;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .quick-add-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.5);
  }

  .quick-add-btn.added {
    background: linear-gradient(90deg, #10b981, #059669);
    color: white;
  }
  
  .nav-to-landmarks {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    padding: 40px;
    background: rgba(255, 215, 0, 0.1);
    border-radius: 15px;
    border: 2px solid #ffd700;
  }
  
  .nav-to-landmarks h2 {
    color: #fbbf24;
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  .nav-to-landmarks p {
    color: #cbd5e1;
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .landmarks-btn {
    display: inline-block;
    padding: 20px 50px;
    font-size: 1.3rem;
    font-weight: bold;
    color: #1a1a2e;
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
  
  .landmarks-btn:hover {
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

  .add-to-itinerary-btn {
    background: linear-gradient(90deg, #ffd700, #ffed4e);
    color: #1a1a2e;
    margin-top: 15px;
    font-weight: bold;
    width: 100%;
    justify-content: center;
  }

  .add-to-itinerary-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.5);
  }

  .add-to-itinerary-btn.added {
    background: linear-gradient(90deg, #10b981, #059669);
    color: white;
  }

  .live-data-indicator {
    display: inline-block;
    padding: 4px 12px;
    background: #4CAF50;
    color: white;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-left: 10px;
    animation: pulse 2s infinite;
  }
  
  .live-data-indicator.updating {
    background: #FF9800;
  }
  
  .live-data-indicator.offline {
    background: #F44336;
  }
  
  .hours-loading {
    text-align: center;
    padding: 40px;
    color: #94a3b8;
  }
  
  .live-loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #f59e0b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 10px auto;
  }
  
  .hours-header {
    margin: 30px 0 20px 0;
    color: #fbbf24;
    font-size: 1.8rem;
    border-bottom: 2px solid #f59e0b;
    padding-bottom: 10px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  .update-note {
    font-style: italic;
    color: #94a3b8;
    font-size: 0.9rem;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    .location-grid,
    .menu-grid {
      grid-template-columns: 1fr;
    }
  
    .header h1 {
      font-size: 36px;
    }
  
    .restaurant-card h3 {
      font-size: 24px;
    }
  
    .landmarks-btn {
      padding: 15px 35px;
      font-size: 1.1rem;
    }

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
  <div class="header">
    <h1>🍳 NYC Breakfast Explorer</h1>
    <p>Choose your perfect morning meal with live restaurant hours</p>
    
    <!-- Login Status Display -->
    <div class="login-info" id="loginInfo">
      <div id="loginStatus" class="login-status not-authenticated">
        🔒 Guest Mode - <a href="/login?next={{ page.url }}" id="loginLink">Login</a> to save your itinerary
      </div>
      <div id="userInfo" style="display: none; margin-top: 10px; font-size: 0.9rem;">
        Welcome, <span id="userName"></span>! Your itinerary will be saved to your account.
      </div>
    </div>
    
    <div class="live-data-indicator" id="apiStatus">🔌 Connecting to API...</div>
  </div>

  <!-- Restaurant Selection Grid -->
  <div id="step1" class="step active">
    <h2 style="text-align: center; margin-bottom: 30px; color: #fbbf24;">Choose Your Breakfast Spot</h2>
    <div class="location-grid">
      <div class="location-card">
        <h3>Sarabeth's</h3>
        <div class="badge">Elegant & Classic</div>
        <p>📍 Upper West Side</p>
        <p>A beloved NYC institution known for its legendary homemade jams and elegant brunch classics. Perfect for a refined, upscale breakfast experience.</p>
        <div class="restaurant-cuisine">Breakfast & Pastries</div>
        <div class="location-card-footer">
          <button class="view-menu-btn" onclick="selectRestaurant('sarabeths')">
            <span>📖</span> View Menu
          </button>
          <button class="quick-add-btn" onclick="quickAddToItinerary('sarabeths', event)" data-restaurant="sarabeths">
            <span>⭐</span> Add
          </button>
        </div>
      </div>
      <div class="location-card">
        <h3>Jack's Wife Frida</h3>
        <div class="badge">Bold & Trendy</div>
        <p>📍 SoHo</p>
        <p>Mediterranean-inspired breakfast with bold Mexican flavors. A trendy spot with colorful dishes and creative twists on morning favorites.</p>
        <div class="restaurant-cuisine">Mediterranean</div>
        <div class="location-card-footer">
          <button class="view-menu-btn" onclick="selectRestaurant('jacks')">
            <span>📖</span> View Menu
          </button>
          <button class="quick-add-btn" onclick="quickAddToItinerary('jacks', event)" data-restaurant="jacks">
            <span>⭐</span> Add
          </button>
        </div>
      </div>
      <div class="location-card">
        <h3>Ess a Bagel</h3>
        <div class="badge">Authentic & Iconic</div>
        <p>📍 Midtown East</p>
        <p>The ultimate NYC bagel experience. Hand-rolled, kettle-boiled bagels that are crispy outside and pillowy inside. A true New York classic.</p>
        <div class="restaurant-cuisine">Bagels & Deli</div>
        <div class="location-card-footer">
          <button class="view-menu-btn" onclick="selectRestaurant('ess')">
            <span>📖</span> View Menu
          </button>
          <button class="quick-add-btn" onclick="quickAddToItinerary('ess', event)" data-restaurant="ess">
            <span>⭐</span> Add
          </button>
        </div>
      </div>
      <div class="location-card">
        <h3>Shuka</h3>
        <div class="badge">Fresh & Vibrant</div>
        <p>📍 East Village</p>
        <p>Modern Mediterranean cuisine with Israeli breakfast specialties. Fresh, vibrant dishes featuring tahini, hummus, and perfectly spiced shakshuka.</p>
        <div class="restaurant-cuisine">Mediterranean</div>
        <div class="location-card-footer">
          <button class="view-menu-btn" onclick="selectRestaurant('shuka')">
            <span>📖</span> View Menu
          </button>
          <button class="quick-add-btn" onclick="quickAddToItinerary('shuka', event)" data-restaurant="shuka">
            <span>⭐</span> Add
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Restaurant Details & Menu -->
  <div class="step" id="step2">
    <button class="btn back-btn" onclick="goToStep(1)">
      <span>←</span> Back to Restaurants
    </button>
    <div class="restaurant-card" id="restaurantDetails">
      <div class="restaurant-info">
        <h3 id="restaurantName">Loading...</h3>
        <div class="restaurant-location" id="restaurantLocation"></div>
      </div>
      <p id="restaurantDescription"></p>
    
      <!-- Hours section moved here (AFTER restaurant selection) -->
      <div id="hoursSection">
        <h2 class="hours-header">🕒 Live Restaurant Hours</h2>
        <div id="restaurantHours">
          <div class="hours-loading">
            <div class="live-loading-spinner"></div>
            <div>Fetching live hours...</div>
          </div>
        </div>
        <button class="btn refresh-btn" onclick="refreshCurrentRestaurant()">
          <span>🔄</span> Update Live Hours
        </button>
      </div>
    </div>
  
    <h3 style="margin: 30px 0 20px 0; color: #fbbf24;">Menu Highlights</h3>
    <div class="menu-grid" id="menuGrid"></div>
  
    <button class="btn add-to-itinerary-btn" id="addToItineraryBtn" onclick="addBreakfastToItinerary()">
      <span>⭐</span> Add to My Itinerary
    </button>

    <button class="btn btn-primary" onclick="goToStep(3)">
      <span>📝</span> Continue to Order
      <span>→</span>
    </button>
  </div>

  <!-- Order Section -->
  <div class="step" id="step3">
    <button class="btn back-btn" onclick="goToStep(2)">
      <span>←</span> Back to Menu
    </button>
    <div class="order-section">
      <h2 style="color: #fbbf24; margin-bottom: 20px;">Your Order</h2>
      <div id="orderList"></div>
    
      <h3 style="margin-top: 30px; color: #fbbf24;">Add Custom Item</h3>
      <input type="text" class="custom-input" id="customInput" placeholder="E.g., Gluten-free waffle with almond butter">
      <button class="btn" onclick="addCustom()">
        <span>➕</span> Add Custom Item
      </button>
    </div>
    <button class="btn btn-primary" onclick="goToStep(4)">
      <span>✅</span> Review Order
      <span>→</span>
    </button>
  </div>

  <!-- Order Confirmation -->
  <div class="step" id="step4">
    <div class="order-section">
      <h2 style="color: #fbbf24; margin-bottom: 20px;">Order Confirmation</h2>
      <div id="reviewHeader"></div>
      <div id="reviewList"></div>
      <div class="total" id="totalPrice">Total: $0</div>
    
      <button class="btn back-btn" onclick="goToStep(3)">
        <span>←</span> Edit Order
      </button>
      <button class="btn btn-primary" onclick="confirmOrder()">
        <span>📦</span> Confirm Order
      </button>
    </div>
  </div>

  <!-- Navigation to Landmarks Page -->
  <div class="nav-to-landmarks">
    <h2>Ready for the Next Adventure?</h2>
    <p>With a full stomach, let's move on to picking your ideal attraction to sight see!</p>
    <a href="/Insightful-Innovators-/new-york/landmarks/" class="landmarks-btn">
      🗽 Explore NYC Landmarks
    </a>
  </div>
</div>

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
  
  <button class="clear-itinerary-btn" onclick="clearItinerary()">
    Clear All Selections
  </button>
</div>

<script type="module">
  // Import configuration from config.js
  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
  
  console.log('Config loaded - Python URI:', pythonURI);

  // ============================================
  // USER AUTHENTICATION FUNCTIONS
  // ============================================

  let currentUser = null;

  async function checkLoginStatus() {
    try {
      const response = await fetch(`${pythonURI}/api/id`, {
        ...fetchOptions,
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Login check failed');
      }
      
      const userData = await response.json();
      
      if (userData.is_authenticated) {
        currentUser = userData;
        updateLoginDisplay(true, userData);
        return true;
      } else {
        currentUser = null;
        updateLoginDisplay(false);
        return false;
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      currentUser = null;
      updateLoginDisplay(false);
      return false;
    }
  }

  function updateLoginDisplay(isLoggedIn, userData = null) {
    const loginStatus = document.getElementById('loginStatus');
    const userInfo = document.getElementById('userInfo');
    const loginLink = document.getElementById('loginLink');
    
    if (isLoggedIn && userData) {
      loginStatus.className = 'login-status authenticated';
      loginStatus.innerHTML = `✅ Logged in as <strong>${userData.name || userData.uid}</strong>`;
      
      userInfo.style.display = 'block';
      document.getElementById('userName').textContent = userData.name || userData.uid;
      
      // Update login link to logout
      loginLink.textContent = 'Logout';
      loginLink.href = '/logout';
    } else {
      loginStatus.className = 'login-status not-authenticated';
      loginStatus.innerHTML = '🔒 Guest Mode - <a href="/login?next={{ page.url }}" id="loginLink">Login</a> to save your itinerary';
      
      userInfo.style.display = 'none';
      
      // Update login link to login
      loginLink.textContent = 'Login';
      loginLink.href = '/login?next={{ page.url }}';
    }
  }

  // ============================================
  // ITINERARY TRACKER JAVASCRIPT (UPDATED FOR USER AUTH)
  // ============================================

  async function initItinerary() {
    try {
      // First check login status
      await checkLoginStatus();
      
      // Then load itinerary
      const itinerary = await getItinerary();
      updateItineraryDisplay(itinerary);
      updateQuickAddButtons();
    } catch (error) {
      console.error('Failed to initialize itinerary:', error);
      // Fallback to empty itinerary
      updateItineraryDisplay({
        tripInfo: null,
        breakfast: null,
        landmarks: null,
        shopping: null,
        broadway: null
      });
    }
  }

  async function getItinerary() {
    try {
      const requestOptions = {
        ...fetchOptions,
        method: 'GET',
        credentials: 'include' // Important for cookies
      };
      
      const response = await fetch(`${pythonURI}/api/itinerary`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Map backend data to frontend format
        const backendData = data.data || {};
        console.log('Loaded itinerary:', data);
        
        return {
          tripInfo: backendData.trip_info || null,
          breakfast: backendData.breakfast || null,
          landmarks: backendData.landmarks || null,
          shopping: backendData.shopping || null,
          broadway: backendData.broadway || null
        };
      } else {
        throw new Error(data.error || 'Failed to get itinerary');
      }
    } catch (error) {
      console.error('Error fetching itinerary from backend:', error);
      return {
        tripInfo: null,
        breakfast: null,
        landmarks: null,
        shopping: null,
        broadway: null
      };
    }
  }

  async function saveItinerary(itinerary) {
    try {
      // Convert frontend format to backend format
      const backendItinerary = {
        trip_info: itinerary.tripInfo || null,
        breakfast: itinerary.breakfast || null,
        landmarks: itinerary.landmarks || null,
        shopping: itinerary.shopping || null,
        broadway: itinerary.broadway || null
      };
      
      const requestOptions = {
        ...fetchOptions,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(backendItinerary)
      };
      
      const response = await fetch(`${pythonURI}/api/itinerary`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Saved itinerary:', data);
        updateItineraryDisplay(itinerary);
        return itinerary;
      } else {
        throw new Error(data.error || 'Failed to save itinerary');
      }
    } catch (error) {
      console.error('Error saving itinerary to backend:', error);
      throw error; // Re-throw to handle in calling function
    }
  }

  async function updateBreakfastInItinerary(restaurantData) {
    try {
      const requestOptions = {
        ...fetchOptions,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(restaurantData)
      };
      
      const response = await fetch(`${pythonURI}/api/itinerary/section/breakfast`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        console.log('Updated breakfast in itinerary:', data);
        // Update local display
        const itinerary = await getItinerary();
        updateItineraryDisplay(itinerary);
        return data.data;
      } else {
        throw new Error(data.error || 'Failed to update breakfast');
      }
    } catch (error) {
      console.error('Error updating breakfast in backend:', error);
      throw error;
    }
  }

  async function clearItinerary() {
    if (confirm('Are you sure you want to clear your entire itinerary?')) {
      try {
        const requestOptions = {
          ...fetchOptions,
          method: 'DELETE',
          credentials: 'include'
        };
        
        const response = await fetch(`${pythonURI}/api/itinerary/clear`, requestOptions);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          location.reload();
        } else {
          throw new Error(data.error || 'Failed to clear itinerary');
        }
      } catch (error) {
        console.error('Error clearing itinerary in backend:', error);
        alert('Error clearing itinerary. Please try again.');
      }
    }
  }

  async function syncItineraryToAccount() {
    if (!currentUser) {
      alert('Please login first to sync your itinerary to your account.');
      return;
    }
    
    try {
      const requestOptions = {
        ...fetchOptions,
        method: 'POST',
        credentials: 'include'
      };
      
      const response = await fetch(`${pythonURI}/api/itinerary/sync`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        alert('✅ Itinerary synced to your account! Your selections are now saved.');
        // Reload itinerary to show updated data
        await initItinerary();
      } else {
        throw new Error(data.error || 'Failed to sync itinerary');
      }
    } catch (error) {
      console.error('Error syncing itinerary:', error);
      alert('Failed to sync itinerary. Please try again.');
    }
  }

  function updateItineraryDisplay(itinerary) {
    // Update trip info
    if (itinerary.tripInfo) {
      if (typeof itinerary.tripInfo === 'object') {
        // Handle object format from backend
        document.getElementById('tripDatesValue').innerHTML =
          `${itinerary.tripInfo.month || ''} ${itinerary.tripInfo.startDate || ''} - ${itinerary.tripInfo.endDate || ''}`;
      } else {
        // Handle string format
        document.getElementById('tripDatesValue').innerHTML = itinerary.tripInfo;
      }
      document.getElementById('tripInfoItem').classList.remove('incomplete');
    } else {
      document.getElementById('tripDatesValue').innerHTML = '<span class="itinerary-empty">Not set yet</span>';
      document.getElementById('tripInfoItem').classList.add('incomplete');
    }

    // Update breakfast
    if (itinerary.breakfast) {
      if (typeof itinerary.breakfast === 'object') {
        // Handle object format from backend
        document.getElementById('breakfastValue').textContent = itinerary.breakfast.name || 'Breakfast selected';
      } else {
        // Handle string format
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
  }

  function toggleItineraryTracker() {
    const tracker = document.getElementById('itineraryTracker');
    tracker.classList.toggle('hidden');
  }

  async function addBreakfastToItinerary() {
    if (!currentRestaurant) return;

    const restaurantData = MENU_DATA[currentRestaurant];
    
    // Save to backend
    const breakfastData = {
      name: restaurantData.name,
      location: restaurantData.location,
      selected_at: new Date().toISOString(),
      restaurant_id: currentRestaurant
    };
    
    try {
      await updateBreakfastInItinerary(breakfastData);
      
      // Update button state
      const btn = document.getElementById('addToItineraryBtn');
      btn.classList.add('added');
      btn.innerHTML = '<span>✓</span> Added to Itinerary';

      // Update quick add buttons
      await updateQuickAddButtons();
      
      // Revert button after 2 seconds
      setTimeout(() => {
        updateAddButton();
      }, 2000);
      
      // Show login reminder if not logged in
      if (!currentUser) {
        setTimeout(() => {
          alert('✅ Added to itinerary! 💡 Tip: Login to save your selections to your account.');
        }, 100);
      }
      
    } catch (error) {
      console.error('Failed to add breakfast to itinerary:', error);
      alert('Failed to save to itinerary. Please try again.');
    }
  }

  async function updateAddButton() {
    try {
      const itinerary = await getItinerary();
      const btn = document.getElementById('addToItineraryBtn');
      
      if (btn && itinerary.breakfast && currentRestaurant) {
        const restaurantData = MENU_DATA[currentRestaurant];
        
        // Check if this restaurant is the one saved
        let isCurrentRestaurant = false;
        if (typeof itinerary.breakfast === 'object') {
          isCurrentRestaurant = itinerary.breakfast.name === restaurantData.name;
        } else {
          isCurrentRestaurant = itinerary.breakfast === restaurantData.name;
        }
        
        if (isCurrentRestaurant) {
          btn.classList.add('added');
          btn.innerHTML = '<span>✓</span> Added to Itinerary';
        } else {
          btn.classList.remove('added');
          btn.innerHTML = '<span>⭐</span> Add to My Itinerary';
        }
      }
    } catch (error) {
      console.error('Error updating add button:', error);
    }
  }

  async function updateQuickAddButtons() {
    try {
      const itinerary = await getItinerary();
      const buttons = document.querySelectorAll('.quick-add-btn');

      buttons.forEach((btn) => {
        const restaurantKey = btn.getAttribute('data-restaurant');
        const restaurantData = MENU_DATA[restaurantKey];
        
        // Check if this restaurant is saved
        let isSaved = false;
        if (itinerary.breakfast) {
          if (typeof itinerary.breakfast === 'object') {
            isSaved = itinerary.breakfast.name === restaurantData.name;
          } else {
            isSaved = itinerary.breakfast === restaurantData.name;
          }
        }
      
        if (isSaved) {
          btn.classList.add('added');
          btn.innerHTML = '<span>✓</span> Added';
        } else {
          btn.classList.remove('added');
          btn.innerHTML = '<span>⭐</span> Add';
        }
      });
    } catch (error) {
      console.error('Error updating quick add buttons:', error);
    }
  }

  async function quickAddToItinerary(restaurantKey, event) {
    event.stopPropagation();

    const restaurantData = MENU_DATA[restaurantKey];
    
    // Save to backend
    const breakfastData = {
      name: restaurantData.name,
      location: restaurantData.location,
      selected_at: new Date().toISOString(),
      restaurant_id: restaurantKey
    };
    
    try {
      await updateBreakfastInItinerary(breakfastData);
      await updateQuickAddButtons();
      
      // Show confirmation
      const btn = event.target.closest('.quick-add-btn');
      if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>✓</span> Saved!';
        setTimeout(() => {
          btn.innerHTML = '<span>✓</span> Added';
        }, 1000);
      }
      
      // Show login reminder if not logged in
      if (!currentUser) {
        setTimeout(() => {
          alert('✅ Added to itinerary! 💡 Tip: Login to save your selections to your account.');
        }, 100);
      }
      
    } catch (error) {
      console.error('Failed to quick add to itinerary:', error);
      alert('Failed to save selection. Please try again.');
    }
  }

  // ============================================
  // DATE FILTERING FUNCTIONS
  // ============================================

  // Get selected days from itinerary
  async function getSelectedDays() {
    try {
      const itinerary = await getItinerary();
      
      if (!itinerary.tripInfo || !itinerary.tripInfo.startDate || !itinerary.tripInfo.endDate) {
        return null; // Return null if no dates are selected
      }
    
      const month = itinerary.tripInfo.month;
      const dateRange = parseDateRange(month, itinerary.tripInfo.startDate, itinerary.tripInfo.endDate);
    
      if (!dateRange) return null;
    
      // Get unique days of the week from the date range
      const selectedDays = new Set();
      const currentDate = new Date(dateRange.start);
    
      while (currentDate <= dateRange.end) {
        const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        selectedDays.add(dayName);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    
      return Array.from(selectedDays);
    } catch (error) {
      console.error('Error getting selected days:', error);
      return null;
    }
  }

  // Parse date range from stored format
  function parseDateRange(month, startStr, endStr) {
    try {
      const currentYear = new Date().getFullYear();
    
      // Extract day numbers
      const startDay = parseInt(startStr.match(/\d+/)[0]);
      const endDay = parseInt(endStr.match(/\d+/)[0]);
    
      const startDate = new Date(`${month} ${startDay}, ${currentYear}`);
      const endDate = new Date(`${month} ${endDay}, ${currentYear}`);
    
      return { start: startDate, end: endDate };
    } catch (error) {
      console.error('Error parsing dates:', error);
      return null;
    }
  }

  // ============================================
  // LIVE BREAKFAST HOURS INTEGRATION
  // ============================================

  // Restaurant mapping
  const RESTAURANT_MAP = {
    'sarabeths': { name: "Sarabeth's", endpoint: 'sarabeths' },
    'jacks': { name: "Jack's Wife Freda", endpoint: 'jacks' },
    'ess': { name: "Ess-a-Bagel", endpoint: 'bagel' },
    'shuka': { name: "Shuka", endpoint: 'shuka' }
  };

  // Menu data
  const MENU_DATA = {
    sarabeths: {
      name: "Sarabeth's",
      location: "Upper West Side",
      description: "A beloved NYC institution known for its legendary homemade jams and elegant brunch classics. Perfect for a refined, upscale breakfast experience.",
      items: [
        {name: 'Lemon Ricotta Pancakes', price: 18, desc: 'Fluffy pancakes with fresh lemon zest'},
        {name: 'Eggs Benedict', price: 22, desc: 'Poached eggs on English muffin'},
        {name: 'French Toast', price: 16, desc: 'Challah bread with maple syrup'},
        {name: 'Fresh Squeezed OJ', price: 8, desc: 'Orange juice made to order'}
      ]
    },
    jacks: {
      name: "Jack's Wife Frida",
      location: "SoHo",
      description: "Mediterranean-inspired breakfast with bold Mexican flavors. A trendy spot with colorful dishes and creative twists on morning favorites.",
      items: [
        {name: 'Shakshuka', price: 19, desc: 'Poached eggs in spicy tomato sauce'},
        {name: 'Avocado Toast', price: 16, desc: 'Sourdough with smashed avocado'},
        {name: 'Mexican Omelet', price: 18, desc: 'With chorizo and peppers'},
        {name: 'Cold Brew Coffee', price: 6, desc: 'Smooth and refreshing'}
      ]
    },
    ess: {
      name: "Ess a Bagel",
      location: "Midtown East",
      description: "The ultimate NYC bagel experience. Hand-rolled, kettle-boiled bagels that are crispy outside and pillowy inside. A true New York classic.",
      items: [
        {name: 'Everything Bagel', price: 5, desc: 'With cream cheese'},
        {name: 'Lox and Bagel', price: 18, desc: 'Nova lox with cream cheese'},
        {name: 'Egg Sandwich', price: 12, desc: 'Fried egg and cheese'},
        {name: 'Hot Coffee', price: 3, desc: 'Fresh brewed'}
      ]
    },
    shuka: {
      name: "Shuka",
      location: "East Village",
      description: "Modern Mediterranean cuisine with Israeli breakfast specialties. Fresh, vibrant dishes featuring tahini, hummus, and perfectly spiced shakshuka.",
      items: [
        {name: 'Israeli Breakfast', price: 22, desc: 'Eggs, hummus, tahini, salad'},
        {name: 'Halloumi Scramble', price: 19, desc: 'With grilled halloumi cheese'},
        {name: 'Quinoa Bowl', price: 17, desc: 'Roasted vegetables and egg'},
        {name: 'Turkish Coffee', price: 5, desc: 'Strong and aromatic'}
      ]
    }
  };

  let currentRestaurant = null;
  let cart = [];

  // ============================================
  // API FUNCTIONS
  // ============================================

  // Test API connection
  async function testAPIConnection() {
    try {
      // Test breakfast API
      const requestOptions = {
        ...fetchOptions,
        method: 'GET'
      };
      
      const response = await fetch(`${pythonURI}/api/breakfast/test`, requestOptions);
      const data = await response.json();
    
      const statusIndicator = document.getElementById('apiStatus');
      if (data.success) {
        statusIndicator.textContent = '✅ API Connected';
        statusIndicator.className = 'live-data-indicator';
        return true;
      } else {
        statusIndicator.textContent = '⚠️ API Error';
        statusIndicator.className = 'live-data-indicator offline';
        return false;
      }
    } catch (error) {
      console.error('API connection failed:', error);
      const statusIndicator = document.getElementById('apiStatus');
      statusIndicator.textContent = '❌ API Offline';
      statusIndicator.className = 'live-data-indicator offline';
      return false;
    }
  }

  // MODIFIED: Format hours with date filtering
  function formatHoursInChronologicalOrder(hoursData, selectedDays = null) {
    const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let html = '';
  
    if (hoursData.hours && typeof hoursData.hours === 'object') {
      // Filter days based on selected itinerary dates
      let daysToDisplay = dayOrder;
      if (selectedDays && selectedDays.length > 0) {
        daysToDisplay = dayOrder.filter(day => selectedDays.includes(day));
      }
    
      // Display only filtered days
      daysToDisplay.forEach(day => {
        if (hoursData.hours[day]) {
          html += `
            <div class="day-hour">
              <span class="day">${day}:</span>
              <span class="time">${hoursData.hours[day]}</span>
            </div>
          `;
        }
      });
    
      // Show message if no hours for selected days
      if (html === '' && Object.keys(hoursData.hours).length > 0) {
        html = `
          <div class="day-hour">
            <span class="day">Note:</span>
            <span class="time">No hours available for selected dates</span>
          </div>
        `;
      }
    } else if (typeof hoursData.hours === 'string') {
      html += `<div class="day-hour"><span class="time">${hoursData.hours}</span></div>`;
    }
  
    return html;
  }

  // Fetch hours for a specific restaurant
  async function fetchRestaurantHours(restaurantKey) {
    const restaurant = RESTAURANT_MAP[restaurantKey];
    if (!restaurant) return null;

    try {
      const requestOptions = {
        ...fetchOptions,
        method: 'GET'
      };
      
      const response = await fetch(`${pythonURI}/api/breakfast/${restaurant.endpoint}`, requestOptions);
      const data = await response.json();
    
      if (data.success) {
        return data.data;
      } else {
        console.error(`Error fetching ${restaurant.name}:`, data.error);
        return null;
      }
    } catch (error) {
      console.error(`Network error for ${restaurant.name}:`, error);
      return null;
    }
  }

  // ============================================
  // UI FUNCTIONS
  // ============================================

  function goToStep(n) {
    document.querySelectorAll('.step').forEach(step => {
      step.classList.remove('active');
    });
    document.getElementById('step' + n).classList.add('active');
    if (n === 4) showReview();
    if (n === 2) updateAddButton();
  }

  async function selectRestaurant(restaurantKey) {
    currentRestaurant = restaurantKey;
  
    // Update restaurant details
    const restaurantData = MENU_DATA[restaurantKey];
    document.getElementById('restaurantName').textContent = restaurantData.name;
    document.getElementById('restaurantLocation').textContent = `📍 ${restaurantData.location}`;
    document.getElementById('restaurantDescription').textContent = restaurantData.description;
  
    // Fetch live hours
    await refreshCurrentRestaurant();
  
    // Show menu
    showMenu();
    goToStep(2);
  }

  // MODIFIED: Refresh restaurant with date filtering
  async function refreshCurrentRestaurant() {
    if (!currentRestaurant) return;
  
    const restaurantData = MENU_DATA[currentRestaurant];
    const hoursContainer = document.getElementById('restaurantHours');
  
    // Show loading
    hoursContainer.innerHTML = `
      <div class="hours-loading">
        <div class="live-loading-spinner"></div>
        <div>Fetching live hours for ${restaurantData.name}...</div>
      </div>
    `;
  
    try {
      const hoursData = await fetchRestaurantHours(currentRestaurant);
      const selectedDays = await getSelectedDays();
    
      if (hoursData) {
        let hoursHtml = `<div class="hours-display">`;
      
        // Add subtle indicator if filtering is active
        if (selectedDays && selectedDays.length > 0) {
          hoursHtml += `
            <div style="margin-bottom: 10px; padding: 8px; background: rgba(255, 215, 0, 0.05); border-radius: 6px; font-size: 0.9rem; color: #ffd700;">
              📅 Showing hours for: ${selectedDays.join(', ')}
            </div>
          `;
        }
      
        // Use filtered chronological order formatting
        hoursHtml += formatHoursInChronologicalOrder(hoursData, selectedDays);
      
        hoursHtml += `</div>`;
      
        if (hoursData.error) {
          hoursHtml += `<p style="color: #ef4444;">⚠️ Note: ${hoursData.error}</p>`;
        }
      
        hoursHtml += `
          <div class="update-note">
            <strong>Source:</strong> ${hoursData.source || 'Live API'}
            | <strong>Updated:</strong> ${new Date().toLocaleTimeString()}
            ${selectedDays ? ` | <strong>Filtered by itinerary</strong>` : ''}
          </div>
        `;
      
        hoursContainer.innerHTML = hoursHtml;
      } else {
        throw new Error('No hours data');
      }
    } catch (error) {
      console.error('Error fetching hours:', error);
    
      // Get selected days for error message
      const selectedDays = await getSelectedDays();
      let errorMessage = 'Unable to fetch live hours';
      if (selectedDays) {
        errorMessage += ` for selected dates`;
      }
    
      hoursContainer.innerHTML = `
        <div class="hours-display">
          <div class="day-hour">
            <span class="day">Status:</span>
            <span class="time" style="color: #ef4444;">${errorMessage}</span>
          </div>
        </div>
        <div class="update-note">⚠️ Showing fallback information</div>
      `;
    }
  }

  function showMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const items = MENU_DATA[currentRestaurant].items;
  
    menuGrid.innerHTML = items.map(item => `
      <div class="menu-item">
        <h4>${item.name}</h4>
        <div class="price">${item.price}</div>
        <p>${item.desc}</p>
        <button class="btn" onclick="addToCart('${item.name}', ${item.price})" style="width: 100%; margin-top: 10px;">
          <span>➕</span> Add to Order
        </button>
      </div>
    `).join('');
  }

  function addToCart(name, price) {
    cart.push({ name, price });
    updateOrderList();
  }

  function updateOrderList() {
    const orderList = document.getElementById('orderList');
    if (cart.length === 0) {
      orderList.innerHTML = '<p style="color: #94a3b8;">Your order is empty. Add items from the menu!</p>';
      return;
    }
  
    orderList.innerHTML = cart.map((item, index) => `
      <div class="order-item">
        <div>
          <strong>${item.name}</strong>
          <div style="color: #10b981;">${item.price}</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `).join('');
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateOrderList();
  }

  function addCustom() {
    const input = document.getElementById('customInput');
    const customItem = input.value.trim();
  
    if (customItem) {
      cart.push({ name: customItem, price: 0 });
      input.value = '';
      updateOrderList();
    }
  }

  function showReview() {
    const reviewHeader = document.getElementById('reviewHeader');
    const reviewList = document.getElementById('reviewList');
    const totalPrice = document.getElementById('totalPrice');
  
    reviewHeader.innerHTML = `<h3 style="color: #f59e0b; margin-bottom: 20px;">${MENU_DATA[currentRestaurant].name}</h3>`;
  
    if (cart.length === 0) {
      reviewList.innerHTML = '<p style="color: #94a3b8;">No items in order</p>';
      totalPrice.textContent = 'Total: $0';
      return;
    }
  
    reviewList.innerHTML = cart.map(item => `
      <div class="order-item">
        <div>
          <strong>${item.name}</strong>
        </div>
        <div style="color: #10b981; font-size: 20px; font-weight: bold;">${item.price}</div>
      </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = `Total: ${total}`;
  }

  function confirmOrder() {
    alert(`Order confirmed at ${MENU_DATA[currentRestaurant].name}! Total: ${cart.reduce((sum, item) => sum + item.price, 0)}`);
    cart = [];
    goToStep(1);
  }

  // ============================================
  // INITIALIZE EVERYTHING
  // ============================================

  // Expose all functions to global window scope for inline onclick handlers
  window.initItinerary = initItinerary;
  window.getItinerary = getItinerary;
  window.saveItinerary = saveItinerary;
  window.clearItinerary = clearItinerary;
  window.toggleItineraryTracker = toggleItineraryTracker;
  window.addBreakfastToItinerary = addBreakfastToItinerary;
  window.updateAddButton = updateAddButton;
  window.updateQuickAddButtons = updateQuickAddButtons;
  window.quickAddToItinerary = quickAddToItinerary;
  window.getSelectedDays = getSelectedDays;
  window.parseDateRange = parseDateRange;
  window.testAPIConnection = testAPIConnection;
  window.formatHoursInChronologicalOrder = formatHoursInChronologicalOrder;
  window.fetchRestaurantHours = fetchRestaurantHours;
  window.goToStep = goToStep;
  window.selectRestaurant = selectRestaurant;
  window.refreshCurrentRestaurant = refreshCurrentRestaurant;
  window.showMenu = showMenu;
  window.addToCart = addToCart;
  window.updateOrderList = updateOrderList;
  window.removeFromCart = removeFromCart;
  window.addCustom = addCustom;
  window.showReview = showReview;
  window.confirmOrder = confirmOrder;
  window.checkLoginStatus = checkLoginStatus;
  window.syncItineraryToAccount = syncItineraryToAccount;

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      await initItinerary();
      await testAPIConnection();
    } catch (error) {
      console.error('Initialization error:', error);
    }
  });
</script>
</body>
</html>


