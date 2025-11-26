---
layout: post
title: "Step 3 Landmarks"
description: "Let's see the sights of the big apple!"
permalink: /new-york/landmarks/
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
    <title>NYC Landmarks Experience</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a1a35;
            color: #000;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 26, 53, 0.95);
            padding: 1rem 2rem;
            box-shadow: 0 2px 15px rgba(0,0,0,0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: all 0.3s ease;
            border-bottom: 2px solid #FFD700;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #FFD700;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: #000;
            font-weight: 600;
            transition: color 0.3s;
            position: relative;
            background: #FFD700;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        .nav-links a:hover {
            background: #ffed4a;
            transform: translateY(-2px);
        }

        /* Sections */
        .section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .animation-container {
            flex: 1;
            position: relative;
            overflow: hidden;
            height: 40vh;
            min-height: 300px;
        }

        .content-container {
            background: #0a1a35;
            padding: 2rem;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.3);
            z-index: 10;
            border-top: 2px solid #FFD700;
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #000;
            text-shadow: 2px 2px 4px rgba(255,255,255,0.7);
            font-weight: 800;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: #000;
            margin-bottom: 2rem;
            font-weight: 600;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.7);
        }

        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .info-card {
            background: #1e3a5f;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            border: 1px solid #FFD700;
        }

        .info-card h3 {
            margin-bottom: 1rem;
            color: #000;
            border-bottom: 2px solid #FFD700;
            padding-bottom: 0.5rem;
            font-weight: 700;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.7);
        }

        .hours-list {
            list-style: none;
        }

        .hours-list li {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #2d4a7c;
            color: #000;
            font-weight: 600;
        }

        .highlight-list {
            list-style: none;
        }

        .highlight-list li {
            padding: 0.5rem 0;
            position: relative;
            padding-left: 1.5rem;
            color: #000;
            font-weight: 600;
        }

        .highlight-list li::before {
            content: '★';
            position: absolute;
            left: 0;
            color: #FFD700;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        /* Reviews */
        .reviews-container {
            margin-top: 2rem;
        }

        .review-card {
            background: #1e3a5f;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border-left: 4px solid #FFD700;
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .review-author {
            font-weight: bold;
            color: #000;
            text-shadow: 1px 1px 2px rgba(255,255,255,0.7);
        }

        .review-date {
            color: #000;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .review-rating {
            color: #FFD700;
            margin-bottom: 0.5rem;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .review-text {
            color: #000;
            line-height: 1.5;
            font-size: 0.9rem;
            font-weight: 600;
        }

        /* Interactive Elements */
        .interactive-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .btn {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 700;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
        }

        .btn-primary {
            background: #FFD700;
            color: #000;
        }

        .btn-primary:hover {
            background: #ffed4a;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255,215,0,0.5);
        }

        .btn-secondary {
            background: #1e3a5f;
            color: #FFD700;
            border: 2px solid #FFD700;
        }

        .btn-secondary:hover {
            background: #2d4a7c;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255,215,0,0.3);
        }

        /* Progress indicator */
        .progress-container {
            position: fixed;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 100;
        }

        .progress-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.5);
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid #000;
        }

        .progress-dot.active {
            background: #FFD700;
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(255,215,0,0.8);
        }

        /* Enhanced Animation Styles */
        .animation-container {
            position: relative;
            overflow: hidden;
        }

        /* The Met Animation */
        .met-animation {
            background: linear-gradient(180deg, #1a3a5f 0%, #2d4a7c 50%, #4a6fa5 100%);
            position: relative;
            height: 100%;
            overflow: hidden;
        }

        .met-building {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 250px;
            background: linear-gradient(45deg, #8B7355, #A52A2A);
            border-radius: 15px 15px 0 0;
            box-shadow: 0 0 40px rgba(0,0,0,0.6);
        }

        .met-roof {
            position: absolute;
            top: -40px;
            left: -20px;
            right: -20px;
            height: 50px;
            background: #8B4513;
            clip-path: polygon(0 100%, 5% 0, 95% 0, 100% 100%);
        }

        .met-columns {
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 0 40px;
        }

        .met-column {
            width: 25px;
            height: 180px;
            background: linear-gradient(45deg, #DEB887, #F5F5DC);
            border-radius: 8px 8px 0 0;
            position: relative;
        }

        .met-column::before {
            content: '';
            position: absolute;
            top: -15px;
            left: -5px;
            right: -5px;
            height: 20px;
            background: #F5F5DC;
            border-radius: 5px;
        }

        .art-pieces {
            position: absolute;
            top: 15%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
        }

        .art-piece {
            width: 80px;
            height: 100px;
            background: linear-gradient(45deg, #FFD700, #FF6347);
            border-radius: 8px;
            animation: floatArt 6s ease-in-out infinite;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            border: 3px solid #FFD700;
        }

        .art-piece:nth-child(2) {
            animation-delay: 2s;
            background: linear-gradient(45deg, #4682B4, #87CEEB);
        }

        .art-piece:nth-child(3) {
            animation-delay: 4s;
            background: linear-gradient(45deg, #32CD32, #90EE90);
        }

        /* Ice Cream Museum Animation */
        .icecream-animation {
            background: linear-gradient(45deg, #FFB6C1, #FF69B4, #FF1493);
            position: relative;
            height: 100%;
            overflow: hidden;
        }

        .icecream-building {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 350px;
            height: 200px;
            background: linear-gradient(45deg, #FF69B4, #FF1493);
            border-radius: 20px 20px 0 0;
            box-shadow: 0 0 30px rgba(255,105,180,0.6);
            border: 5px solid #FFD700;
        }

        .icecream-roof {
            position: absolute;
            top: -50px;
            left: -25px;
            right: -25px;
            height: 60px;
            background: #FF69B4;
            border-radius: 50% 50% 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .giant-icecream {
            position: absolute;
            top: -120px;
            left: 50%;
            transform: translateX(-50%);
        }

        .giant-cone {
            width: 0;
            height: 0;
            border-left: 60px solid transparent;
            border-right: 60px solid transparent;
            border-bottom: 120px solid #D2691E;
        }

        .giant-scoop {
            position: absolute;
            top: -80px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FFB6C1, #FF69B4);
            animation: wobble 3s ease-in-out infinite;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .giant-cherry {
            position: absolute;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 30px;
            background: #FF0000;
            border-radius: 50%;
            animation: bounce 2s infinite alternate;
        }

        .floating-cones {
            position: absolute;
            top: 10%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
        }

        .floating-cone {
            width: 50px;
            height: 70px;
            background: #D2691E;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            animation: floatCone 8s ease-in-out infinite;
            position: relative;
        }

        .floating-scoop {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 50px;
            border-radius: 50%;
        }

        .floating-cone:nth-child(1) .floating-scoop {
            background: linear-gradient(135deg, #98FB98, #00FA9A);
        }

        .floating-cone:nth-child(2) .floating-scoop {
            background: linear-gradient(135deg, #87CEEB, #4682B4);
        }

        .floating-cone:nth-child(3) .floating-scoop {
            background: linear-gradient(135deg, #FFD700, #FFA500);
        }

        /* Empire State Animation */
        .empire-animation {
            background: linear-gradient(180deg, #0a1628 0%, #1a2a4a 30%, #2d4a7c 60%, #4a6fa5 100%);
            position: relative;
            height: 100%;
            overflow: hidden;
        }

        .empire-building {
            position: absolute;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 450px;
            background: linear-gradient(45deg, #708090, #2F4F4F);
            box-shadow: 0 0 50px rgba(255,255,255,0.2);
        }

        .building-section {
            position: absolute;
            left: 10%;
            right: 10%;
            height: 25px;
            background: rgba(255,255,255,0.15);
            border-bottom: 2px solid rgba(255,255,255,0.3);
        }

        .empire-antenna {
            position: absolute;
            bottom: 450px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 100px;
            background: #C0C0C0;
        }

        .antenna-light {
            position: absolute;
            bottom: 550px;
            left: 50%;
            transform: translateX(-50%);
            width: 25px;
            height: 25px;
            background: #FF0000;
            border-radius: 50%;
            animation: blinkAntenna 2s ease-in-out infinite;
            box-shadow: 0 0 30px #FF0000;
        }

        .observation-deck {
            position: absolute;
            bottom: 350px;
            left: 50%;
            transform: translateX(-50%);
            width: 250px;
            height: 30px;
            background: rgba(255,255,255,0.2);
            border-radius: 5px;
        }

        .stars {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .star {
            position: absolute;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s ease-in-out infinite;
        }

        /* Ukrainian Museum Animation */
        .ukrainian-animation {
            background: linear-gradient(180deg, #0057B7 0%, #0057B7 50%, #FFD700 50%, #FFD700 100%);
            position: relative;
            height: 100%;
            overflow: hidden;
        }

        .ukrainian-building {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            height: 220px;
            background: linear-gradient(45deg, #8B0000, #A52A2A);
            border-radius: 15px;
            box-shadow: 0 0 40px rgba(0,0,0,0.5);
            border: 5px solid #FFD700;
        }

        .ukrainian-roof {
            position: absolute;
            top: -40px;
            left: -20px;
            right: -20px;
            height: 50px;
            background: #FFD700;
            clip-path: polygon(0 100%, 5% 0, 95% 0, 100% 100%);
        }

        .ornament {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #FFD700;
            border-radius: 50%;
            animation: pulseOrnament 2s ease-in-out infinite;
            box-shadow: 0 0 15px rgba(255,215,0,0.7);
        }

        .cultural-symbols {
            position: absolute;
            top: 15%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
        }

        .symbol {
            width: 70px;
            height: 70px;
            background: #FFD700;
            border-radius: 50%;
            animation: rotateSymbol 8s linear infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .flag-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,215,0,0.1) 10px,
                rgba(255,215,0,0.1) 20px
            );
        }

        /* Animations */
        @keyframes floatArt {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(5deg); }
        }

        @keyframes wobble {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            25% { transform: translateX(-50%) rotate(8deg); }
            75% { transform: translateX(-50%) rotate(-8deg); }
        }

        @keyframes bounce {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-15px); }
        }

        @keyframes fallSprinkle {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes floatCone {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(15deg); }
        }

        @keyframes blinkAntenna {
            0%, 100% { opacity: 1; box-shadow: 0 0 30px #FF0000; }
            50% { opacity: 0.3; box-shadow: 0 0 15px #FF0000; }
        }

        @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.8); }
        }

        @keyframes pulseOrnament {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.8; }
        }

        @keyframes rotateSymbol {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Footer */
        footer {
            background: #0a1a35;
            color: #000;
            padding: 3rem 2rem;
            text-align: center;
            border-top: 2px solid #FFD700;
        }

        .copyright {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #2d4a7c;
            text-align: center;
            color: #000;
            font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
            
            .nav-links {
                display: none;
            }
            
            .progress-container {
                right: 1rem;
            }
            
            .interactive-buttons {
                flex-direction: column;
            }
            
            .met-building, .icecream-building, .empire-building, .ukrainian-building {
                transform: translateX(-50%) scale(0.8);
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="logo">
            <span>🗽</span> NYC Landmarks
        </div>
        <div class="nav-links">
            <a href="#met-section">The Met</a>
            <a href="#icecream-section">Ice Cream Museum</a>
            <a href="#empire-section">Empire State</a>
            <a href="#ukrainian-section">Ukrainian Museum</a>
        </div>
    </nav>

    <!-- Progress Indicator -->
    <div class="progress-container">
        <div class="progress-dot active" data-section="met-section"></div>
        <div class="progress-dot" data-section="icecream-section"></div>
        <div class="progress-dot" data-section="empire-section"></div>
        <div class="progress-dot" data-section="ukrainian-section"></div>
    </div>

    <!-- The Met Section -->
    <section id="met-section" class="section">
        <div class="animation-container">
            <div class="met-animation">
                <div class="met-building">
                    <div class="met-roof"></div>
                    <div class="met-columns">
                        <div class="met-column"></div>
                        <div class="met-column"></div>
                        <div class="met-column"></div>
                        <div class="met-column"></div>
                        <div class="met-column"></div>
                    </div>
                </div>
                <div class="art-pieces">
                    <div class="art-piece"></div>
                    <div class="art-piece"></div>
                    <div class="art-piece"></div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <h2 class="section-title">The Metropolitan Museum of Art</h2>
            <p class="section-subtitle">Upper East Side • Art & Culture</p>
            
            <div class="content-grid">
                <div class="info-card">
                    <h3>Hours & Admission</h3>
                    <ul class="hours-list">
                        <li><span>Sunday - Thursday</span><span>10:00 AM - 5:30 PM</span></li>
                        <li><span>Friday - Saturday</span><span>10:00 AM - 9:00 PM</span></li>
                        <li><span>General Admission</span><span>$30 (Adults)</span></li>
                        <li><span>Students/Seniors</span><span>$17</span></li>
                    </ul>
                </div>
                
                <div class="info-card">
                    <h3>Highlights</h3>
                    <ul class="highlight-list">
                        <li>European Paintings Gallery</li>
                        <li>Temple of Dendur</li>
                        <li>American Wing</li>
                        <li>Arms and Armor Collection</li>
                        <li>Costume Institute</li>
                    </ul>
                </div>
            </div>
            
            <div class="reviews-container">
                <h3 style="color: #000; text-shadow: 1px 1px 2px rgba(255,255,255,0.7); margin-bottom: 1rem;">Visitor Reviews</h3>
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Sarah M.</span>
                        <span class="review-date">March 15, 2023</span>
                    </div>
                    <div class="review-rating">★★★★★</div>
                    <p>Absolutely breathtaking! The European paintings collection is world-class. Spent 5 hours and still didn't see everything. Will definitely return.</p>
                </div>
                
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">James T.</span>
                        <span class="review-date">February 28, 2023</span>
                    </div>
                    <div class="review-rating">★★★★☆</div>
                    <p>Incredible museum but very crowded. Go early to avoid lines. The Egyptian wing was my favorite part.</p>
                </div>
            </div>
            
            <div class="interactive-buttons">
                <button class="btn btn-primary" onclick="window.open('https://www.metmuseum.org', '_blank')">
                    <span>🌐</span> Visit Website
                </button>
                <button class="btn btn-secondary" onclick="alert('Directions to The Met')">
                    <span>🗺️</span> Get Directions
                </button>
            </div>
        </div>
    </section>

    <!-- Ice Cream Museum Section -->
    <section id="icecream-section" class="section">
        <div class="animation-container">
            <div class="icecream-animation">
                <div class="icecream-building">
                    <div class="icecream-roof">
                        <div class="giant-icecream">
                            <div class="giant-scoop"></div>
                            <div class="giant-cherry"></div>
                            <div class="giant-cone"></div>
                        </div>
                    </div>
                </div>
                <div class="floating-cones">
                    <div class="floating-cone">
                        <div class="floating-scoop"></div>
                    </div>
                    <div class="floating-cone">
                        <div class="floating-scoop"></div>
                    </div>
                    <div class="floating-cone">
                        <div class="floating-scoop"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <h2 class="section-title">Museum of Ice Cream</h2>
            <p class="section-subtitle">Soho • Fun & Interactive</p>
            
            <div class="content-grid">
                <div class="info-card">
                    <h3>Hours & Tickets</h3>
                    <ul class="hours-list">
                        <li><span>Monday - Thursday</span><span>11:00 AM - 7:00 PM</span></li>
                        <li><span>Friday - Sunday</span><span>10:00 AM - 8:00 PM</span></li>
                        <li><span>General Admission</span><span>$39 (All Ages)</span></li>
                        <li><span>Children under 2</span><span>Free</span></li>
                    </ul>
                </div>
                
                <div class="info-card">
                    <h3>Highlights</h3>
                    <ul class="highlight-list">
                        <li>Interactive Sprinkle Pool</li>
                        <li>Ice Cream Tastings</li>
                        <li>Pink Subway Installation</li>
                        <li>Cherry on Top Rooftop</li>
                        <li>Unicorn-themed Rooms</li>
                    </ul>
                </div>
            </div>
            
            <div class="reviews-container">
                <h3 style="color: #000; text-shadow: 1px 1px 2px rgba(255,255,255,0.7); margin-bottom: 1rem;">Visitor Reviews</h3>
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Jessica L.</span>
                        <span class="review-date">April 2, 2023</span>
                    </div>
                    <div class="review-rating">★★★★★</div>
                    <p>So much fun for all ages! The sprinkle pool was a dream come true. The ice cream samples were delicious and creative.</p>
                </div>
                
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Michael R.</span>
                        <span class="review-date">March 20, 2023</span>
                    </div>
                    <div class="review-rating">★★★★☆</div>
                    <p>Great Instagram spot! Very colorful and playful. A bit pricey for what it is, but the kids loved it.</p>
                </div>
            </div>
            
            <div class="interactive-buttons">
                <button class="btn btn-primary" onclick="window.open('https://www.museumoficecream.com', '_blank')">
                    <span>🌐</span> Visit Website
                </button>
                <button class="btn btn-secondary" onclick="alert('Directions to Museum of Ice Cream')">
                    <span>🗺️</span> Get Directions
                </button>
            </div>
        </div>
    </section>

    <!-- Empire State Building Section -->
    <section id="empire-section" class="section">
        <div class="animation-container">
            <div class="empire-animation">
                <div class="empire-building">
                    <div class="empire-antenna"></div>
                    <div class="antenna-light"></div>
                    <div class="observation-deck"></div>
                </div>
                <div class="stars" id="stars-container"></div>
            </div>
        </div>
        <div class="content-container">
            <h2 class="section-title">Empire State Building</h2>
            <p class="section-subtitle">Midtown • Iconic Skyline</p>
            
            <div class="content-grid">
                <div class="info-card">
                    <h3>Hours & Tickets</h3>
                    <ul class="hours-list">
                        <li><span>Everyday</span><span>8:00 AM - 2:00 AM</span></li>
                        <li><span>Last Elevator</span><span>1:15 AM</span></li>
                        <li><span>Main Deck (86th)</span><span>$44 (Adults)</span></li>
                        <li><span>Top Deck (102nd)</span><span>+$20</span></li>
                    </ul>
                </div>
                
                <div class="info-card">
                    <h3>Highlights</h3>
                    <ul class="highlight-list">
                        <li>86th Floor Observatory</li>
                        <li>102nd Floor Observatory</li>
                        <li>Dare to Dream Exhibit</li>
                        <li>Sustainability Exhibit</li>
                        <li>King Kong Exhibit</li>
                    </ul>
                </div>
            </div>
            
            <div class="reviews-container">
                <h3 style="color: #000; text-shadow: 1px 1px 2px rgba(255,255,255,0.7); margin-bottom: 1rem;">Visitor Reviews</h3>
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">David K.</span>
                        <span class="review-date">May 10, 2023</span>
                    </div>
                    <div class="review-rating">★★★★★</div>
                    <p>The view is absolutely spectacular, especially at sunset. The 102nd floor is worth the extra cost for the 360-degree views.</p>
                </div>
                
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Amanda P.</span>
                        <span class="review-date">April 28, 2023</span>
                    </div>
                    <div class="review-rating">★★★★☆</div>
                    <p>Iconic NYC experience. Lines can be long, so book tickets in advance. The exhibits on the way up are interesting too.</p>
                </div>
            </div>
            
            <div class="interactive-buttons">
                <button class="btn btn-primary" onclick="window.open('https://www.esbnyc.com', '_blank')">
                    <span>🌐</span> Visit Website
                </button>
                <button class="btn btn-secondary" onclick="alert('Directions to Empire State Building')">
                    <span>🗺️</span> Get Directions
                </button>
            </div>
        </div>
    </section>

    <!-- Ukrainian Museum Section -->
    <section id="ukrainian-section" class="section">
        <div class="animation-container">
            <div class="ukrainian-animation">
                <div class="flag-pattern"></div>
                <div class="ukrainian-building">
                    <div class="ukrainian-roof"></div>
                    <div class="ornament" style="top: 30px; left: 40px;"></div>
                    <div class="ornament" style="top: 30px; right: 40px;"></div>
                    <div class="ornament" style="bottom: 50px; left: 50px;"></div>
                    <div class="ornament" style="bottom: 50px; right: 50px;"></div>
                </div>
                <div class="cultural-symbols">
                    <div class="symbol">🇺🇦</div>
                    <div class="symbol">🌻</div>
                    <div class="symbol">🎵</div>
                </div>
            </div>
        </div>
        <div class="content-container">
            <h2 class="section-title">Ukrainian Museum</h2>
            <p class="section-subtitle">East Village • Cultural Heritage</p>
            
            <div class="content-grid">
                <div class="info-card">
                    <h3>Hours & Admission</h3>
                    <ul class="hours-list">
                        <li><span>Thursday - Sunday</span><span>11:30 AM - 5:00 PM</span></li>
                        <li><span>Monday - Wednesday</span><span>Closed</span></li>
                        <li><span>General Admission</span><span>$12 (Adults)</span></li>
                        <li><span>Students/Seniors</span><span>$8</span></li>
                    </ul>
                </div>
                
                <div class="info-card">
                    <h3>Highlights</h3>
                    <ul class="highlight-list">
                        <li>Folk Art Collection</li>
                        <li>Traditional Textiles</li>
                        <li>Fine Arts Exhibitions</li>
                        <li>Historical Artifacts</li>
                        <li>Cultural Events</li>
                    </ul>
                </div>
            </div>
            
            <div class="reviews-container">
                <h3 style="color: #000; text-shadow: 1px 1px 2px rgba(255,255,255,0.7); margin-bottom: 1rem;">Visitor Reviews</h3>
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Olena S.</span>
                        <span class="review-date">June 5, 2023</span>
                    </div>
                    <div class="review-rating">★★★★★</div>
                    <p>Beautiful collection that showcases Ukrainian culture and heritage. The folk art is particularly impressive. A hidden gem in the East Village.</p>
                </div>
                
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">Mark T.</span>
                        <span class="review-date">May 22, 2023</span>
                    </div>
                    <div class="review-rating">★★★★☆</div>
                    <p>Small but well-curated museum. Learned a lot about Ukrainian history and traditions. The staff was very knowledgeable and friendly.</p>
                </div>
            </div>
            
            <div class="interactive-buttons">
                <button class="btn btn-primary" onclick="window.open('https://www.ukrainianmuseum.org', '_blank')">
                    <span>🌐</span> Visit Website
                </button>
                <button class="btn btn-secondary" onclick="alert('Directions to Ukrainian Museum')">
                    <span>🗺️</span> Get Directions
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="copyright">
            <p>&copy; 2023 NYC Landmarks Experience. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Create stars for Empire State section
        function createStars() {
            const starsContainer = document.getElementById('stars-container');
            const starCount = 150;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 2 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }

        // Create building sections for Empire State
        function createBuildingSections() {
            const building = document.querySelector('.empire-building');
            const sectionCount = 18;
            
            for (let i = 0; i < sectionCount; i++) {
                const section = document.createElement('div');
                section.className = 'building-section';
                section.style.bottom = (i * 25) + 'px';
                building.appendChild(section);
            }
        }

        // Scroll progress indicator
        const sections = document.querySelectorAll('.section');
        const progressDots = document.querySelectorAll('.progress-dot');
        
        function updateProgressIndicator() {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - window.innerHeight / 2) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            progressDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-section') === currentSection) {
                    dot.classList.add('active');
                }
            });
        }
        
        // Scroll to section when clicking on progress dots
        progressDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            createBuildingSections();
            
            window.addEventListener('scroll', updateProgressIndicator);
            updateProgressIndicator();
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const nav = document.querySelector('nav');
                if (window.scrollY > 100) {
                    nav.style.padding = '0.5rem 2rem';
                    nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.3)';
                } else {
                    nav.style.padding = '1rem 2rem';
                    nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.3)';
                }
            });
        });
    </script>
</body>
</html>