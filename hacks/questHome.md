---
layout: post
title: Day in NYC
tailwind: True
description: >
  An Interactive Adventure Across Manhattan powered by flask
author: Insightful Innovators
permalink: /nyc/home/
lxdData:
  Title: "Day in NYC"
  Description: "Breakfast, shopping, landmarks and a broadway show in New York City!"
  Topics:
    - Title: "Breakfast"
      Level: 1
      Description: "Pick from 3 breakfast options"
      Lessons: "/new-york/breakfast/"
      Image: "/images/nycimages/newyorkbreakfast.jpeg"
    - Title: "Shopping"
      Level: 2
      Description: "Pick your own clothes, make outfit, post about it!"
      Lessons: "/new-york/shopping/"
      Image: "/images/nycimages/nycshopping.jpeg"
    - Title: "Landmarks"
      Level: 3
      Description: "Explore Manhattan's famous landmarks!"
      Lessons: "/new-york/landmarks/"
      Image: "/images/nycimages/nyclandmarks.jpeg"
    - Title: "Broadway"
      Level: 4
      Description: "Watch and hear an iconic broadway show!"
      Lessons: "/new-york/broadway/"
      Image: "/images/nycimages/broadway.jpeg"
footer: 
  home: /nyc/home/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to New York</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            overflow-x: hidden;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            text-align: center;
            padding: 20px;
            position: relative;
            z-index: 10;
        }

        .skyline {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 300px;
            background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
            z-index: 1;
        }

        .building {
            position: absolute;
            bottom: 0;
            background: linear-gradient(to bottom, #1a1a2e 0%, #0a0a0a 100%);
            animation: buildingGlow 3s ease-in-out infinite;
        }

        .building::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                rgba(255, 215, 0, 0.1) 20px,
                rgba(255, 215, 0, 0.1) 22px
            );
        }

        .building1 { left: 5%; width: 60px; height: 180px; animation-delay: 0s; }
        .building2 { left: 15%; width: 80px; height: 240px; animation-delay: 0.5s; }
        .building3 { left: 25%; width: 50px; height: 160px; animation-delay: 1s; }
        .building4 { left: 35%; width: 90px; height: 280px; animation-delay: 0.3s; }
        .building5 { left: 50%; width: 70px; height: 220px; animation-delay: 0.8s; }
        .building6 { left: 65%; width: 85px; height: 260px; animation-delay: 0.2s; }
        .building7 { left: 78%; width: 55px; height: 170px; animation-delay: 0.6s; }
        .building8 { left: 88%; width: 75px; height: 200px; animation-delay: 0.9s; }

        @keyframes buildingGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.2); }
            50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.4); }
        }

        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }

        h1 {
            font-size: 5rem;
            font-weight: bold;
            color: #ffd700;
            text-shadow: 
                0 0 10px rgba(255, 215, 0, 0.8),
                0 0 20px rgba(255, 215, 0, 0.6),
                0 0 30px rgba(255, 215, 0, 0.4),
                3px 3px 6px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
            animation: fadeInScale 2s ease-out;
            letter-spacing: 0.1em;
        }

        @keyframes fadeInScale {
            0% {
                opacity: 0;
                transform: scale(0.5) translateY(-50px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        .subtitle {
            font-size: 1.8rem;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            margin-bottom: 40px;
            animation: fadeIn 2s ease-out 0.5s both;
            font-style: italic;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .start-button {
            display: inline-block;
            padding: 20px 50px;
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e3c72;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 
                0 10px 30px rgba(255, 215, 0, 0.4),
                0 0 0 0 rgba(255, 215, 0, 0.7);
            transition: all 0.3s ease;
            animation: fadeIn 2s ease-out 1s both, pulse 2s ease-in-out 3s infinite;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .start-button:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 
                0 15px 40px rgba(255, 215, 0, 0.6),
                0 0 50px rgba(255, 215, 0, 0.5);
            background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
        }

        .start-button:active {
            transform: translateY(-2px) scale(1.02);
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 
                    0 10px 30px rgba(255, 215, 0, 0.4),
                    0 0 0 0 rgba(255, 215, 0, 0.7);
            }
            50% {
                box-shadow: 
                    0 10px 30px rgba(255, 215, 0, 0.4),
                    0 0 0 20px rgba(255, 215, 0, 0);
            }
        }

        .taxi {
            position: fixed;
            bottom: 320px;
            font-size: 3rem;
            animation: driveTaxi 15s linear infinite;
            z-index: 5;
            filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
        }

        @keyframes driveTaxi {
            0% { left: -100px; }
            100% { left: calc(100% + 100px); }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 3rem;
            }
            .subtitle {
                font-size: 1.2rem;
            }
            .start-button {
                padding: 15px 35px;
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    
    <div class="skyline">
        <div class="building building1"></div>
        <div class="building building2"></div>
        <div class="building building3"></div>
        <div class="building building4"></div>
        <div class="building building5"></div>
        <div class="building building6"></div>
        <div class="building building7"></div>
        <div class="building building8"></div>
    </div>

    <div class="taxi">🚕</div>

    <div class="container">
        <h1>WELCOME TO NEW YORK</h1>
        <p class="subtitle">The City That Never Sleeps</p>
        <a href="{{ site.baseurl }}/newyork/tripinfo/" class="start-button">
            Click Here to Start Planning Your Day
        </a>
    </div>

    <script>
        // Create stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 70 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    </script>
</body>
</html>