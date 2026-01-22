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
<!DOCTYPE html>
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
        }
        
        .action-button {
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            border: none;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: #334155;
            color: #e2e8f0;
        }
        
        .action-button:hover {
            transform: translateY(-3px);
            background-color: #475569;
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
        
        @media (max-width: 768px) {
            .step-header {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .step-content {
                margin-left: 0;
            }
            
            .action-buttons {
                justify-content: center;
            }
            
            .step-number {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 15px;
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
            <!-- Step 1 -->
            <div class="flow-step" style="border-left-color: #60a5fa;">
                <div class="step-number">1</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #60a5fa;">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <div class="step-title">Start Your NYC Journey</div>
                </div>
                <div class="step-content">
                    <p>Begin on our landing page with three simple options:</p>
                    <div class="action-buttons">
                        <button class="action-button" id="viewBtn">
                            <i class="fas fa-eye"></i> View Sample Trip
                        </button>
                        <button class="action-button" id="createBtn">
                            <i class="fas fa-plus"></i> Create New Trip
                        </button>
                        <button class="action-button" id="previousBtn">
                            <i class="fas fa-history"></i> My Saved Trips
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="arrow">↓</div>
            
            <!-- Step 2 -->
            <div class="flow-step" style="border-left-color: #10b981;">
                <div class="step-number">2</div>
                <div class="step-header">
                    <div class="step-icon" style="background-color: #10b981;">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <div class="step-title">Login to Save Your Trip</div>
                </div>
                <div class="step-content">
                    <p>Create an account or login to save your itinerary and access it later from any device.</p>
                    <div id="demoArea">
                        <div class="demo-box">
                            <div class="demo-title">Try the buttons above to see how it works</div>
                            <p style="text-align: center; color: #94a3b8;">Click "My Saved Trips" to see the login screen</p>
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
                    <div style="display: inline-block; padding: 15px 25px; background-color: #1e293b; border-radius: 8px; margin: 10px; border: 2px solid #60a5fa;">
                        <strong>Your Device</strong><br>
                        <small>Landing page & buttons</small>
                    </div>
                    <div style="display: inline-block; padding: 10px; color: #6366f1; font-size: 1.5rem;">
                        →
                    </div>
                    <div style="display: inline-block; padding: 15px 25px; background-color: #1e293b; border-radius: 8px; margin: 10px; border: 2px solid #10b981;">
                        <strong>Our System</strong><br>
                        <small>Saves & organizes your data</small>
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
                    This simple flow lets you start planning on one device and continue on another.
                </p>
            </div>
        </div>
    </div>

    <script>
        // Get elements
        const viewBtn = document.getElementById('viewBtn');
        const createBtn = document.getElementById('createBtn');
        const previousBtn = document.getElementById('previousBtn');
        const demoArea = document.getElementById('demoArea');
        
        // View Sample Trip
        viewBtn.addEventListener('click', function() {
            demoArea.innerHTML = `
                <div class="demo-box">
                    <div class="demo-title">Sample New York Itinerary</div>
                    <ul class="simple-list">
                        <li><strong>Day 1:</strong> Central Park → Metropolitan Museum → Times Square</li>
                        <li><strong>Day 2:</strong> Statue of Liberty → Wall Street → Brooklyn Bridge</li>
                        <li><strong>Day 3:</strong> Empire State Building → Broadway Show → Top of the Rock</li>
                    </ul>
                    <p style="margin-top: 15px; text-align: center; color: #94a3b8;">
                        This is just a sample. Create your own custom itinerary!
                    </p>
                </div>
            `;
        });
        
        // Create New Trip
        createBtn.addEventListener('click', function() {
            demoArea.innerHTML = `
                <div class="demo-box">
                    <div class="demo-title">Create Your NYC Itinerary</div>
                    <ul class="simple-list">
                        <li>1. Choose your travel dates</li>
                        <li>2. Add places you want to visit</li>
                        <li>3. Set times for each activity</li>
                        <li>4. Add notes and reminders</li>
                        <li>5. Save your completed itinerary</li>
                    </ul>
                    <div style="text-align: center; margin-top: 15px;">
                        <button style="padding: 10px 20px; background-color: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Start Building Your Trip
                        </button>
                    </div>
                </div>
            `;
        });
        
        // View Previous Trips (requires login)
        previousBtn.addEventListener('click', function() {
            demoArea.innerHTML = `
                <div class="demo-box">
                    <div class="demo-title">Access Your Saved Trips</div>
                    <p style="text-align: center; margin-bottom: 20px;">Login to see all your saved New York itineraries</p>
                    
                    <div class="login-form">
                        <input type="email" class="login-input" placeholder="Your email address">
                        <input type="password" class="login-input" placeholder="Your password">
                        <button class="login-button">Login to See My Trips</button>
                        <div style="text-align: center; margin-top: 15px; color: #94a3b8;">
                            No account? <a href="#" style="color: #60a5fa;">Sign up here</a>
                        </div>
                    </div>
                    
                    <p style="margin-top: 15px; text-align: center; color: #94a3b8;">
                        Once logged in, you can access your trips from any device.
                    </p>
                </div>
            `;
        });
        
        // Add some interactivity to the steps
        const steps = document.querySelectorAll('.flow-step');
        steps.forEach(step => {
            step.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Initialize with a message
        window.onload = function() {
            demoArea.innerHTML = `
                <div class="demo-box">
                    <div class="demo-title">Try It Out</div>
                    <p style="text-align: center; padding: 20px;">
                        Click the buttons above to see how the New York Journey Planner works.<br>
                        Each button shows a different part of the system.
                    </p>
                </div>
            `;
        };
    </script>
</body>
</html>