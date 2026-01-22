---
layout: post
title: "Flowchart of transactional data"
description: "see our diagram below!"
permalink: /new-york/plan
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 4
author: "Insightful Innovators"
date: 2025-11-20
microblog: true
footer: 
    previous: /new-york/shopping/
    home: /nyc/home/
    next: /new-york/breakfast/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New York Journey Planner System</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #0f172a;
            color: #e2e8f0;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            border-bottom: 2px solid #334155;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #60a5fa;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .flowchart {
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin: 40px 0;
        }
        
        .flow-step {
            background-color: #1e293b;
            border-radius: 12px;
            padding: 25px;
            border-left: 6px solid;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .step-number {
            position: absolute;
            top: -15px;
            left: -15px;
            width: 40px;
            height: 40px;
            background-color: #6366f1;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            color: white;
        }
        
        .step-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            gap: 15px;
        }
        
        .step-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
        }
        
        .step-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #f8fafc;
        }
        
        .step-content {
            margin-left: 65px;
        }
        
        .action-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 20px 0;
            justify-content: center;
        }
        
        .action-button {
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            border: none;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: #334155;
            color: #e2e8f0;
            min-width: 200px;
            justify-content: center;
        }
        
        .action-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .home-options-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
            justify-content: center;
        }
        
        .home-option-card {
            background-color: #1e293b;
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            flex: 1;
            min-width: 250px;
            max-width: 300px;
            border-top: 4px solid;
            transition: all 0.3s ease;
        }
        
        .home-option-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .home-option-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            display: block;
        }
        
        .home-option-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #f8fafc;
        }
        
        .home-option-desc {
            color: #94a3b8;
            font-size: 0.95rem;
            margin-bottom: 20px;
            line-height: 1.5;
        }
        
        .arrow {
            text-align: center;
            margin: 10px 0;
            font-size: 2rem;
            color: #6366f1;
        }
        
        .demo-box {
            background-color: #0f172a;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            border: 2px dashed #475569;
            min-height: 150px;
        }
        
        .demo-title {
            color: #a78bfa;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .login-form {
            background-color: #1e293b;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
        }
        
        .login-input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #475569;
            background-color: #0f172a;
            color: #e2e8f0;
        }
        
        .login-button {
            width: 100%;
            padding: 12px;
            background-color: #6366f1;
            color: white;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.3s;
        }
        
        .login-button:hover {
            background-color: #4f46e5;
        }
        
        .simple-list {
            list-style: none;
            margin-top: 15px;
        }
        
        .simple-list li {
            padding: 8px 0;
            border-bottom: 1px solid #334155;
        }
        
        .simple-list li:last-child {
            border-bottom: none;
        }
        
        .status {
            padding: 20px;
            text-align: center;
            background-color: #1e3a2f;
            border-radius: 8px;
            margin-top: 20px;
            border: 1px solid #065f46;
            color: #34d399;
        }
        
        .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: #1e293b;
            padding: 10px 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #10b981;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #6366f1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .option-result {
            margin-top: 30px;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .step-header {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .step-content {
                margin-left: 0;
            }
            
            .home-options-container {
                flex-direction: column;
                align-items: center;
            }
            
            .home-option-card {
                max-width: 100%;
                width: 100%;
            }
            
            .step-number {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 15px;
            }
            
            .action-button {
                min-width: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>New York Journey Planner</h1>
            <p class="subtitle">A simple system to plan, save, and access your NYC trip from anywhere</p>
        </header>
        
        <div class="flowchart">
            <!-- Step 1 - LOGIN FIRST -->
            <div class="flow-step" style="border-left-color: #10b981;">
                <div class="step-number">1</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #10b981;">
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                    <div class="step-title">Login to Your Account</div>
                </div>
                <div class="step-content">
                    <p>First, login to access your personalized New York Journey Planner.</p>
                    <div id="demoArea">
                        <div class="demo-box">
                            <div class="demo-title">Login to Continue</div>
                            <p style="text-align: center; color: #94a3b8;">Enter your credentials to access the system</p>
                            
                            <div class="login-form" id="loginForm">
                                <input type="email" class="login-input" id="emailInput" placeholder="Your email address" value="demo@nycplanner.com">
                                <input type="password" class="login-input" id="passwordInput" placeholder="Your password" value="••••••••">
                                <button class="login-button" id="loginButton">Login to Continue</button>
                                <div style="text-align: center; margin-top: 15px; color: #94a3b8;">
                                    No account? <a href="#" style="color: #60a5fa;">Sign up here</a>
                                </div>
                            </div>
                            
                            <div id="userWelcome" style="display: none;">
                                <div class="user-info">
                                    <div class="user-avatar">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <strong>Welcome back, Alex!</strong><br>
                                        <small>Last login: Today at 10:30 AM</small>
                                    </div>
                                </div>
                                <div style="text-align: center; margin-top: 20px;">
                                    <button class="action-button" id="proceedBtn" style="background-color: #6366f1;">
                                        <i class="fas fa-arrow-right"></i> Proceed to Home Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="arrow">↓</div>
            
            <!-- Step 2 - HOME PAGE WITH 3 BUTTON OPTIONS -->
            <div class="flow-step" style="border-left-color: #60a5fa;">
                <div class="step-number">2</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #60a5fa;">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="step-title">Choose Your Action</div>
                </div>
                <div class="step-content">
                    <p>After logging in, you'll see your home page with these three options:</p>
                    
                    <div id="homePageArea">
                        <!-- The 3 option cards will be shown here after login -->
                        <div id="optionCards" style="display: none;">
                            <div class="home-options-container">
                                <!-- Option 1: View Sample Trip -->
                                <div class="home-option-card" style="border-top-color: #60a5fa;">
                                    <div class="home-option-icon" style="color: #60a5fa;">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <div class="home-option-title">View Sample Trip</div>
                                    <div class="home-option-desc">
                                        Explore a pre-made New York itinerary to get inspiration for your own trip planning.
                                    </div>
                                    <button class="action-button" id="viewBtn" style="background-color: #60a5fa;">
                                        <i class="fas fa-eye"></i> View Sample
                                    </button>
                                </div>
                                
                                <!-- Option 2: Create New Trip -->
                                <div class="home-option-card" style="border-top-color: #f59e0b;">
                                    <div class="home-option-icon" style="color: #f59e0b;">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <div class="home-option-title">Create New Trip</div>
                                    <div class="home-option-desc">
                                        Build your perfect New York itinerary from scratch with our easy-to-use trip planner.
                                    </div>
                                    <button class="action-button" id="createBtn" style="background-color: #f59e0b;">
                                        <i class="fas fa-plus"></i> Create New
                                    </button>
                                </div>
                                
                                <!-- Option 3: My Saved Trips -->
                                <div class="home-option-card" style="border-top-color: #10b981;">
                                    <div class="home-option-icon" style="color: #10b981;">
                                        <i class="fas fa-history"></i>
                                    </div>
                                    <div class="home-option-title">My Saved Trips</div>
                                    <div class="home-option-desc">
                                        Access all your previously saved itineraries and continue planning where you left off.
                                    </div>
                                    <button class="action-button" id="previousBtn" style="background-color: #10b981;">
                                        <i class="fas fa-history"></i> View Saved
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Results area (hidden initially) -->
                            <div id="optionResult" class="option-result" style="display: none;"></div>
                        </div>
                        
                        <!-- Placeholder before login -->
                        <div id="homePlaceholder">
                            <div class="demo-box">
                                <div class="demo-title">Login Required</div>
                                <p style="text-align: center; color: #94a3b8; padding: 20px;">
                                    Please login in Step 1 to see your home page options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="arrow">↓</div>
            
            <!-- Step 3 -->
            <div class="flow-step" style="border-left-color: #f59e0b;">
                <div class="step-number">3</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #f59e0b;">
                        <i class="fas fa-database"></i>
                    </div>
                    <div class="step-title">Your Trip is Saved Safely</div>
                </div>
                <div class="step-content">
                    <p>Your New York itinerary is stored securely in our system. You can:</p>
                    <ul class="simple-list">
                        <li><i class="fas fa-check" style="color: #10b981;"></i> Access it from any device</li>
                        <li><i class="fas fa-check" style="color: #10b981;"></i> Edit and update your plans</li>
                        <li><i class="fas fa-check" style="color: #10b981;"></i> Share with travel companions</li>
                        <li><i class="fas fa-check" style="color: #10b981;"></i> Print or save as PDF</li>
                    </ul>
                </div>
            </div>
            
            <div class="arrow">↓</div>
            
            <!-- Step 4 -->
            <div class="flow-step" style="border-left-color: #8b5cf6;">
                <div class="step-number">4</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #8b5cf6;">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    <div class="step-title">Access Anywhere, Anytime</div>
                </div>
                <div class="step-content">
                    <p>Whether you're on your phone, tablet, or computer - just login to see your full New York itinerary.</p>
                    <div class="status">
                        <i class="fas fa-sync-alt"></i> All your trips are automatically synced across all your devices
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flow-step" style="margin-top: 40px; border-left-color: #6366f1;">
            <div class="step-header">
                <div class="step-icon" style="background-color: #6366f1;">
                    <i class="fas fa-sitemap"></i>
                </div>
                <div class="step-title">How It All Works Together</div>
            </div>
            <div class="step-content">
                <p>The system connects your frontend experience with secure backend storage:</p>
                <div style="text-align: center; margin: 25px 0;">
                    <div style="display: inline-block; padding: 15px 25px; background-color: #1e293b; border-radius: 8px; margin: 10px; border: 2px solid #10b981;">
                        <strong>Login First</strong><br>
                        <small>Secure authentication</small>
                    </div>
                    <div style="display: inline-block; padding: 10px; color: #6366f1; font-size: 1.5rem;">
                        →
                    </div>
                    <div style="display: inline-block; padding: 15px 25px; background-color: #1e293b; border-radius: 8px; margin: 10px; border: 2px solid #60a5fa;">
                        <strong>Choose Action</strong><br>
                        <small>3 clear options</small>
                    </div>
                    <div style="display: inline-block; padding: 10px; color: #6366f1; font-size: 1.5rem;">
                        →
                    </div>
                    <div style="display: inline-block; padding: 15px 25px; background-color: #1e293b; border-radius: 8px; margin: 10px; border: 2px solid #f59e0b;">
                        <strong>Secure Storage</strong><br>
                        <small>Keeps your trips safe</small>
                    </div>
                </div>
                <p style="text-align: center; color: #94a3b8; margin-top: 20px;">
                    Each option leads to a different path in the trip planning journey.
                </p>
            </div>
        </div>
    </div>

    <script>
        // Get elements
        const loginButton = document.getElementById('loginButton');
        const proceedBtn = document.getElementById('proceedBtn');
        const loginForm = document.getElementById('loginForm');
        const userWelcome = document.getElementById('userWelcome');
        const optionCards = document.getElementById('optionCards');
        const homePlaceholder = document.getElementById('homePlaceholder');
        const optionResult = document.getElementById('optionResult');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        
        // Login functionality
        loginButton.addEventListener('click', function() {
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            if (email && password) {
                // Show login success
                loginForm.style.display = 'none';
                userWelcome.style.display = 'block';
                
                // Show success message
                const demoBox = document.querySelector('#demoArea .demo-box');
                const successMsg = document.createElement('div');
                successMsg.className = 'status';
                successMsg.style.marginTop = '15px';
                successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Login successful! Welcome back to your NYC Planner.';
                demoBox.appendChild(successMsg);
            } else {
                alert('Please enter both email and password');
            }
        });
        
        // Proceed to home page
        proceedBtn.addEventListener('click', function() {
            // Show option cards
            optionCards.style.display = 'block';
            homePlaceholder.style.display = 'none';
            
            // Scroll to Step 2
            document.querySelector('.flow-step:nth-child(3)').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Initialize button event listeners
            setupOptionButtons();
        });
        
        // Setup option button functionality
        function setupOptionButtons() {
            // View Sample Trip button
            document.getElementById('viewBtn').addEventListener('click', function() {
                showOptionResult(1);
            });
            
            // Create New Trip button
            document.getElementById('createBtn').addEventListener('click', function() {
                showOptionResult(2);
            });
            
            // My Saved Trips button
            document.getElementById('previousBtn').addEventListener('click', function() {
                showOptionResult(3);
            });
        }
        
        // Show result based on selected option
        function showOptionResult(option) {
            // Hide the option cards
            document.querySelector('.home-options-container').style.display = 'none';
            
            // Show result area
            optionResult.style.display = 'block';
            
            let resultHTML = '';
            
            switch(option) {
                case 1: // View Sample Trip
                    resultHTML = `
                        <div class="demo-box">
                            <div class="demo-title">Sample New York Itinerary</div>
                            <div class="user-info" style="margin-bottom: 20px;">
                                <div class="user-avatar">
                                    <i class="fas fa-map-marked-alt"></i>
                                </div>
                                <div>
                                    <strong>Classic NYC 3-Day Tour</strong><br>
                                    <small>Perfect for first-time visitors | Duration: 3 days</small>
                                </div>
                            </div>
                            <ul class="simple-list">
                                <li><strong>Day 1:</strong> Central Park (Morning) → Metropolitan Museum (Afternoon) → Times Square (Evening)</li>
                                <li><strong>Day 2:</strong> Statue of Liberty (Morning) → Wall Street (Afternoon) → Brooklyn Bridge (Evening)</li>
                                <li><strong>Day 3:</strong> Empire State Building (Morning) → Broadway Show (Afternoon) → Top of the Rock (Evening)</li>
                            </ul>
                            <div class="action-buttons" style="margin-top: 20px;">
                                <button class="action-button" onclick="goBackToOptions()" style="background-color: #475569;">
                                    <i class="fas fa-arrow-left"></i> Back to Options
                                </button>
                                <button class="action-button" style="background-color: #10b981;">
                                    <i class="fas fa-copy"></i> Use as Template
                                </button>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 2: // Create New Trip
                    resultHTML = `
                        <div class="demo-box">
                            <div class="demo-title">Create Your NYC Itinerary</div>
                            <div class="user-info" style="margin-bottom: 20px;">
                                <div class="user-avatar">
                                    <i class="fas fa-edit"></i>
                                </div>
                                <div>
                                    <strong>New Trip Planner</strong><br>
                                    <small>Step 1: Set up your basic trip details</small>
                                </div>
                            </div>
                            
                            <div class="login-form" style="background-color: transparent; border: 1px solid #475569;">
                                <input type="text" class="login-input" placeholder="Trip Name (e.g., 'Summer NYC Adventure')">
                                <input type="date" class="login-input" placeholder="Start Date">
                                <input type="date" class="login-input" placeholder="End Date">
                                <select class="login-input">
                                    <option value="">Select trip type</option>
                                    <option value="family">Family Vacation</option>
                                    <option value="solo">Solo Travel</option>
                                    <option value="couple">Romantic Getaway</option>
                                    <option value="friends">Friends Trip</option>
                                    <option value="business">Business Travel</option>
                                </select>
                            </div>
                            
                            <div class="action-buttons" style="margin-top: 20px;">
                                <button class="action-button" onclick="goBackToOptions()" style="background-color: #475569;">
                                    <i class="fas fa-arrow-left"></i> Back to Options
                                </button>
                                <button class="action-button" style="background-color: #6366f1;">
                                    <i class="fas fa-arrow-right"></i> Next: Add Activities
                                </button>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 3: // My Saved Trips
                    resultHTML = `
                        <div class="demo-box">
                            <div class="demo-title">My Saved NYC Trips</div>
                            <div class="user-info" style="margin-bottom: 20px;">
                                <div class="user-avatar">
                                    <i class="fas fa-suitcase"></i>
                                </div>
                                <div>
                                    <strong>Alex's Travel Library</strong><br>
                                    <small>3 saved itineraries | Last updated: Today</small>
                                </div>
                            </div>
                            
                            <ul class="simple-list">
                                <li style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>Spring NYC Getaway</strong><br>
                                        <small>April 10-15, 2025 | 6 days | Family Vacation</small>
                                    </div>
                                    <button class="action-button" style="padding: 8px 15px; background-color: #60a5fa;">
                                        <i class="fas fa-eye"></i> View
                                    </button>
                                </li>
                                <li style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>Christmas in New York</strong><br>
                                        <small>December 20-27, 2024 | 8 days | Romantic Getaway</small>
                                    </div>
                                    <button class="action-button" style="padding: 8px 15px; background-color: #60a5fa;">
                                        <i class="fas fa-eye"></i> View
                                    </button>
                                </li>
                                <li style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>Business Conference Trip</strong><br>
                                        <small>October 5-8, 2024 | 4 days | Business Travel</small>
                                    </div>
                                    <button class="action-button" style="padding: 8px 15px; background-color: #60a5fa;">
                                        <i class="fas fa-eye"></i> View
                                    </button>
                                </li>
                            </ul>
                            
                            <div class="action-buttons" style="margin-top: 20px;">
                                <button class="action-button" onclick="goBackToOptions()" style="background-color: #475569;">
                                    <i class="fas fa-arrow-left"></i> Back to Options
                                </button>
                                <button class="action-button" style="background-color: #f59e0b;">
                                    <i class="fas fa-plus"></i> Create New Trip
                                </button>
                            </div>
                        </div>
                    `;
                    break;
            }
            
            optionResult.innerHTML = resultHTML;
            
            // Scroll to the result
            optionResult.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }
        
        // Go back to option cards
        function goBackToOptions() {
            optionResult.style.display = 'none';
            document.querySelector('.home-options-container').style.display = 'flex';
        }
        
        // Add some interactivity to the steps
        const steps = document.querySelectorAll('.flow-step');
        steps.forEach(step => {
            step.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Initialize with login form
        window.onload = function() {
            // Focus on email input
            emailInput.focus();
        };
    </script>
</body>
</html>