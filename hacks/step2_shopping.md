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
    <title>Columbus Circle Digital Closet</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
            color: #f5576c;
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
            background: #fff5f7;
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

        .item-display img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
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
            background: #f5576c;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background 0.3s ease;
        }

        .nav-btn:hover {
            background: #f093fb;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
        }

        .btn {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
            color: #f5576c;
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
            <h1>Welcome to Columbus Circle!</h1>
            <p class="subtitle">Luxury shopping in the heart of Manhattan</p>
        </header>

        <div class="outfit-display">
            <h2 class="outfit-title">Your Designer Look</h2>
            
            <div class="outfit-grid">
                <div class="clothing-item">
                    <div class="item-category">Top</div>
                    <div class="item-display" id="top-display"></div>
                    <div class="item-name" id="top-name">Silk Blouse</div>
                    <div class="nav-buttons">
                        <button class="nav-btn" onclick="prevItem('top')">← Prev</button>
                        <button class="nav-btn" onclick="nextItem('top')">Next →</button>
                    </div>
                </div>

                <div class="clothing-item">
                    <div class="item-category">Bottom</div>
                    <div class="item-display" id="bottom-display"></div>
                    <div class="item-name" id="bottom-name">Pencil Skirt</div>
                    <div class="nav-buttons">
                        <button class="nav-btn" onclick="prevItem('bottom')">← Prev</button>
                        <button class="nav-btn" onclick="nextItem('bottom')">Next →</button>
                    </div>
                </div>

                <div class="clothing-item">
                    <div class="item-category">Shoes</div>
                    <div class="item-display" id="shoes-display"></div>
                    <div class="item-name" id="shoes-name">Designer Heels</div>
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

            <div class="status-message" id="status">Shop luxury!</div>
        </div>
    </div>

    <script>
        // ========================================
        // COLUMBUS CIRCLE - LUXURY COLLECTION
        // ADD YOUR IMAGE URLS HERE!
        // ========================================
        
        const wardrobe = {
            top: [
                { name: 'Silk Blouse', image: 'https://via.placeholder.com/300x400/FFE4E1/8B4513?text=Silk+Blouse' },
                { name: 'Cashmere Sweater', image: 'https://via.placeholder.com/300x400/F0E68C/000000?text=Cashmere+Sweater' },
                { name: 'Designer Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Designer+Blazer' },
                { name: 'Satin Top', image: 'https://via.placeholder.com/300x400/FFB6C1/000000?text=Satin+Top' },
                { name: 'Luxury Cardigan', image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Luxury+Cardigan' }
            ],
            bottom: [
                { name: 'Pencil Skirt', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Pencil+Skirt' },
                { name: 'Designer Trousers', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Designer+Trousers' },
                { name: 'A-Line Skirt', image: 'https://via.placeholder.com/300x400/8B7355/FFFFFF?text=A-Line+Skirt' },
                { name: 'Tailored Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Tailored+Pants' },
                { name: 'Midi Skirt', image: 'https://via.placeholder.com/300x400/800000/FFFFFF?text=Midi+Skirt' }
            ],
            shoes: [
                { name: 'Designer Heels', image: 'https://via.placeholder.com/300x200/B22222/FFFFFF?text=Designer+Heels' },
                { name: 'Patent Pumps', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Patent+Pumps' },
                { name: 'Leather Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Leather+Boots' },
                { name: 'Stilettos', image: 'https://via.placeholder.com/300x200/C0C0C0/000000?text=Stilettos' },
                { name: 'Ankle Boots', image: 'https://via.placeholder.com/300x200/696969/FFFFFF?text=Ankle+Boots' }
            ]
        };

        let currentSelection = {
            top: 0,
            bottom: 0,
            shoes: 0
        };

        const phrases = [
            "Absolutely fabulous!",
            "Très chic!",
            "Designer perfection!",
            "Luxury looks!",
            "High fashion!",
            "Stunning choice!",
            "Pure elegance!",
            "Simply divine!"
        ];

        function updateDisplay() {
            const topItem = wardrobe.top[currentSelection.top];
            const bottomItem = wardrobe.bottom[currentSelection.bottom];
            const shoesItem = wardrobe.shoes[currentSelection.shoes];

            document.getElementById('top-display').innerHTML = `<img src="${topItem.image}" alt="${topItem.name}">`;
            document.getElementById('bottom-display').innerHTML = `<img src="${bottomItem.image}" alt="${bottomItem.name}">`;
            document.getElementById('shoes-display').innerHTML = `<img src="${shoesItem.image}" alt="${shoesItem.name}">`;

            document.getElementById('top-name').textContent = topItem.name;
            document.getElementById('bottom-name').textContent = bottomItem.name;
            document.getElementById('shoes-name').textContent = shoesItem.name;

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
            document.getElementById('status').textContent = "✨ Surprise! Pure luxury! ✨";
        }

        function saveOutfit() {
            const outfit = {
                top: wardrobe.top[currentSelection.top].name,
                bottom: wardrobe.bottom[currentSelection.bottom].name,
                shoes: wardrobe.shoes[currentSelection.shoes].name
            };
            console.log('Saved outfit:', outfit);
            document.getElementById('status').textContent = "💾 Outfit saved! Impeccable taste!";
        }

        updateDisplay();
    </script>
</body>
</html>
