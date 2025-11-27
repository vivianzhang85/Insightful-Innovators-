---
layout: post
title: "Step 2 Shopping"
description: "Time to shop! Let's make a new outfit."
permalink: /new-york/shopping/
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 2
author: "Insightful Innocators"
date: 2025-11-20
microblog: true
footer: 
    previous: /new-york/breakfast/
    home: /nyc/home/
    next: /new-york/landmarks/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Closet</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .subtitle {
            font-size: 1.2em;
            font-style: italic;
            opacity: 0.95;
        }

        .outfit-display {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            margin-bottom: 30px;
        }

        .outfit-title {
            font-size: 2em;
            color: #667eea;
            margin-bottom: 30px;
            text-align: center;
        }

        .outfit-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .clothing-item {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .clothing-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .item-category {
            font-size: 0.9em;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

        .item-display {
            width: 100%;
            height: 250px;
            background: white;
            border-radius: 8px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
        }

        .item-name {
            font-size: 1.1em;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .nav-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .nav-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background 0.3s ease;
        }

        .nav-btn:hover {
            background: #764ba2;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
        }

        .btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(0,0,0,0.3);
        }

        .status-message {
            text-align: center;
            font-size: 1.5em;
            color: #667eea;
            margin-top: 20px;
            font-style: italic;
            min-height: 40px;
        }

        @media (max-width: 768px) {
            .outfit-grid {
                grid-template-columns: 1fr;
            }

            h1 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Digital Closet</h1>
            <p class="subtitle">As if! Let's find your perfect outfit.</p>
        </header>

        <div class="outfit-display">
            <h2 class="outfit-title">Your Current Look</h2>
            
            <div class="outfit-grid">
                <div class="clothing-item">
                    <div class="item-category">Top</div>
                    <div class="item-display" id="top-display"></div>
                    <div class="item-name" id="top-name">Pink Blouse</div>
                    <div class="nav-buttons">
                        <button class="nav-btn" onclick="prevItem('top')">← Prev</button>
                        <button class="nav-btn" onclick="nextItem('top')">Next →</button>
                    </div>
                </div>

                <div class="clothing-item">
                    <div class="item-category">Bottom</div>
                    <div class="item-display" id="bottom-display"></div>
                    <div class="item-name" id="bottom-name">Navy Skirt</div>
                    <div class="nav-buttons">
                        <button class="nav-btn" onclick="prevItem('bottom')">← Prev</button>
                        <button class="nav-btn" onclick="nextItem('bottom')">Next →</button>
                    </div>
                </div>

                <div class="clothing-item">
                    <div class="item-category">Shoes</div>
                    <div class="item-display" id="shoes-display"></div>
                    <div class="item-name" id="shoes-name">Black Heels</div>
                    <div class="nav-buttons">
                        <button class="nav-btn" onclick="prevItem('shoes')">← Prev</button>
                        <button class="nav-btn" onclick="nextItem('shoes')">Next →</button>
                    </div>
                </div>
            </div>

            <div class="action-buttons">
                <button class="btn" onclick="randomOutfit()">✨ Surprise Me!</button>
                <button class="btn" onclick="saveOutfit()">💾 Save Outfit</button>
            </div>

            <div class="status-message" id="status">Whatever!</div>
        </div>
    </div>

    <script>
        const wardrobe = {
            top: [
                { name: 'Pink Blouse', color: '#FF69B4' },
                { name: 'White Turtleneck', color: '#FFFFFF' },
                { name: 'Lavender Sweater', color: '#DDA0DD' },
                { name: 'Purple Cardigan', color: '#BA55D3' },
                { name: 'Hot Pink Tank', color: '#FF1493' }
            ],
            bottom: [
                { name: 'Navy Skirt', color: '#000080' },
                { name: 'Blue Jeans', color: '#4169E1' },
                { name: 'Light Wash Denim', color: '#1E90FF' },
                { name: 'Sky Blue Pants', color: '#87CEEB' },
                { name: 'Black Mini Skirt', color: '#000000' }
            ],
            shoes: [
                { name: 'Black Heels', color: '#000000' },
                { name: 'Brown Boots', color: '#8B4513' },
                { name: 'Silver Pumps', color: '#C0C0C0' },
                { name: 'Gold Sandals', color: '#FFD700' },
                { name: 'Red Sneakers', color: '#FF0000' }
            ]
        };

        let currentSelection = {
            top: 0,
            bottom: 0,
            shoes: 0
        };

        const phrases = [
            "As if!",
            "Whatever!",
            "Totally!",
            "Way cute!",
            "Ugh, as if!",
            "That's so fetch!",
            "You look marvelous!",
            "Fabulous choice!"
        ];

        function drawClothing(elementId, color, type) {
            const canvas = document.createElement('canvas');
            canvas.width = 200;
            canvas.height = 250;
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = color;
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 3;

            if (type === 'top') {
                // Draw a simple shirt/blouse
                ctx.beginPath();
                ctx.moveTo(50, 40);
                ctx.lineTo(30, 80);
                ctx.lineTo(30, 150);
                ctx.lineTo(170, 150);
                ctx.lineTo(170, 80);
                ctx.lineTo(150, 40);
                ctx.lineTo(100, 60);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            } else if (type === 'bottom') {
                // Draw pants/skirt
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.lineTo(40, 220);
                ctx.lineTo(80, 220);
                ctx.lineTo(90, 50);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(110, 50);
                ctx.lineTo(120, 220);
                ctx.lineTo(160, 220);
                ctx.lineTo(150, 50);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            } else {
                // Draw shoes
                ctx.beginPath();
                ctx.ellipse(100, 125, 70, 40, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }

            const element = document.getElementById(elementId);
            element.innerHTML = '';
            element.appendChild(canvas);
        }

        function updateDisplay() {
            drawClothing('top-display', wardrobe.top[currentSelection.top].color, 'top');
            drawClothing('bottom-display', wardrobe.bottom[currentSelection.bottom].color, 'bottom');
            drawClothing('shoes-display', wardrobe.shoes[currentSelection.shoes].color, 'shoes');

            document.getElementById('top-name').textContent = wardrobe.top[currentSelection.top].name;
            document.getElementById('bottom-name').textContent = wardrobe.bottom[currentSelection.bottom].name;
            document.getElementById('shoes-name').textContent = wardrobe.shoes[currentSelection.shoes].name;

            document.getElementById('status').textContent = phrases[Math.floor(Math.random() * phrases.length)];
        }

        function nextItem(category) {
            currentSelection[category] = (currentSelection[category] + 1) % wardrobe[category].length;
            updateDisplay();
        }

        function prevItem(category) {
            currentSelection[category] = (currentSelection[category] - 1 + wardrobe[category].length) % wardrobe[category].length;
            updateDisplay();
        }

        function randomOutfit() {
            currentSelection.top = Math.floor(Math.random() * wardrobe.top.length);
            currentSelection.bottom = Math.floor(Math.random() * wardrobe.bottom.length);
            currentSelection.shoes = Math.floor(Math.random() * wardrobe.shoes.length);
            updateDisplay();
            document.getElementById('status').textContent = "✨ Surprise! Looking fabulous! ✨";
        }

        function saveOutfit() {
            const outfit = {
                top: wardrobe.top[currentSelection.top].name,
                bottom: wardrobe.bottom[currentSelection.bottom].name,
                shoes: wardrobe.shoes[currentSelection.shoes].name
            };
            console.log('Saved outfit:', outfit);
            document.getElementById('status').textContent = "💾 Outfit saved! You're so organized!";
        }

        // Initialize display
        updateDisplay();
    </script>
</body>
</html>
