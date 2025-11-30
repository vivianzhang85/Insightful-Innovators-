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
    <title>Columbus Circle - His & Hers Digital Closet</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #1a2332 0%, #2c3e50 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
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

        .wardrobes-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .wardrobe-section {
            background: #1a1a1a;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .wardrobe-section.womens {
            border-top: 5px solid #ffd700;
        }

        .wardrobe-section.mens {
            border-top: 5px solid #ffd700;
        }

        .section-title {
            font-size: 1.8em;
            margin-bottom: 25px;
            text-align: center;
        }

        .section-title.womens {
            color: #ffd700;
        }

        .section-title.mens {
            color: #ffd700;
        }

        .outfit-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .clothing-item {
            background: #2a2a2a;
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .clothing-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .item-category {
            font-size: 0.85em;
            color: #ffd700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

        .item-display {
            width: 100%;
            height: 200px;
            background: #0a0a0a;
            border-radius: 8px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .item-display img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .item-name {
            font-size: 1em;
            color: #ffffff;
            margin-bottom: 12px;
            font-weight: 600;
        }

        .nav-buttons {
            display: flex;
            gap: 8px;
            justify-content: center;
        }

        .nav-btn {
            border: none;
            padding: 6px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.85em;
            transition: all 0.3s ease;
            color: white;
        }

        .nav-btn.womens {
            background: #ffd700;
            color: #1a2332;
        }

        .nav-btn.womens:hover {
            background: #ffed4e;
        }

        .nav-btn.mens {
            background: #ffd700;
            color: #1a2332;
        }

        .nav-btn.mens:hover {
            background: #ffed4e;
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 20px;
        }

        .btn {
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.95em;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .btn.womens {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a2332;
        }

        .btn.mens {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a2332;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }

        .status-message {
            text-align: center;
            font-size: 1.1em;
            margin-top: 15px;
            font-style: italic;
            min-height: 30px;
        }

        .status-message.womens {
            color: #ffd700;
        }

        .status-message.mens {
            color: #ffd700;
        }

        @media (max-width: 1024px) {
            .wardrobes-container {
                grid-template-columns: 1fr;
            }

            h1 {
                font-size: 2.2em;
            }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 1.8em;
            }

            .wardrobe-section {
                padding: 20px;
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

        <div class="wardrobes-container">
            <!-- WOMEN'S SECTION -->
            <div class="wardrobe-section womens">
                <h2 class="section-title womens">Her Designer Look</h2>
                
                <div class="outfit-grid">
                    <div class="clothing-item">
                        <div class="item-category">Top</div>
                        <div class="item-display" id="women-top-display"></div>
                        <div class="item-name" id="women-top-name">Silk Blouse</div>
                        <div class="nav-buttons">
                            <button class="nav-btn womens" onclick="prevItem('women', 'top')">← Prev</button>
                            <button class="nav-btn womens" onclick="nextItem('women', 'top')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Bottom</div>
                        <div class="item-display" id="women-bottom-display"></div>
                        <div class="item-name" id="women-bottom-name">Pencil Skirt</div>
                        <div class="nav-buttons">
                            <button class="nav-btn womens" onclick="prevItem('women', 'bottom')">← Prev</button>
                            <button class="nav-btn womens" onclick="nextItem('women', 'bottom')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Shoes</div>
                        <div class="item-display" id="women-shoes-display"></div>
                        <div class="item-name" id="women-shoes-name">Designer Heels</div>
                        <div class="nav-buttons">
                            <button class="nav-btn womens" onclick="prevItem('women', 'shoes')">← Prev</button>
                            <button class="nav-btn womens" onclick="nextItem('women', 'shoes')">Next →</button>
                        </div>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="btn womens" onclick="randomOutfit('women')">✨ Surprise Me!</button>
                    <button class="btn womens" onclick="saveOutfit('women')">💾 Save</button>
                </div>

                <div class="status-message womens" id="women-status">Shop luxury!</div>
            </div>

            <!-- MEN'S SECTION -->
            <div class="wardrobe-section mens">
                <h2 class="section-title mens">His Designer Look</h2>
                
                <div class="outfit-grid">
                    <div class="clothing-item">
                        <div class="item-category">Top</div>
                        <div class="item-display" id="men-top-display"></div>
                        <div class="item-name" id="men-top-name">Dress Shirt</div>
                        <div class="nav-buttons">
                            <button class="nav-btn mens" onclick="prevItem('men', 'top')">← Prev</button>
                            <button class="nav-btn mens" onclick="nextItem('men', 'top')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Bottom</div>
                        <div class="item-display" id="men-bottom-display"></div>
                        <div class="item-name" id="men-bottom-name">Tailored Trousers</div>
                        <div class="nav-buttons">
                            <button class="nav-btn mens" onclick="prevItem('men', 'bottom')">← Prev</button>
                            <button class="nav-btn mens" onclick="nextItem('men', 'bottom')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Shoes</div>
                        <div class="item-display" id="men-shoes-display"></div>
                        <div class="item-name" id="men-shoes-name">Oxford Shoes</div>
                        <div class="nav-buttons">
                            <button class="nav-btn mens" onclick="prevItem('men', 'shoes')">← Prev</button>
                            <button class="nav-btn mens" onclick="nextItem('men', 'shoes')">Next →</button>
                        </div>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="btn mens" onclick="randomOutfit('men')">✨ Surprise Me!</button>
                    <button class="btn mens" onclick="saveOutfit('men')">💾 Save</button>
                </div>

                <div class="status-message mens" id="men-status">Shop luxury!</div>
            </div>
        </div>
    </div>

    <script>
        // ========================================
        // COLUMBUS CIRCLE - LUXURY COLLECTIONS
        // ADD YOUR IMAGE URLS HERE!
        // ========================================
        
        const wardrobes = {
            women: {
                top: [
                    { name: 'Silk Blouse', image: 'https://via.placeholder.com/300x400/FFE4E1/8B4513?text=Silk+Blouse' },
                    { name: 'Cashmere Sweater', image: 'https://via.placeholder.com/300x400/F0E68C/000000?text=Cashmere+Sweater' },
                    { name: 'Designer Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Designer+Blazer' },
                    { name: 'Luxury Cardigan', image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Luxury+Cardigan' }
                ],
                bottom: [
                    { name: 'Pencil Skirt', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Pencil+Skirt' },
                    { name: 'Designer Trousers', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Designer+Trousers' },
                    { name: 'A-Line Skirt', image: 'https://via.placeholder.com/300x400/8B7355/FFFFFF?text=A-Line+Skirt' },
                    { name: 'Midi Skirt', image: 'https://via.placeholder.com/300x400/800000/FFFFFF?text=Midi+Skirt' }
                ],
                shoes: [
                    { name: 'Designer Heels', image: 'https://via.placeholder.com/300x200/B22222/FFFFFF?text=Designer+Heels' },
                    { name: 'Patent Pumps', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Patent+Pumps' },
                    { name: 'Leather Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Leather+Boots' },
                    { name: 'Ankle Boots', image: 'https://via.placeholder.com/300x200/696969/FFFFFF?text=Ankle+Boots' }
                ]
            },
            men: {
                top: [
                    { name: 'Dress Shirt', image: 'https://via.placeholder.com/300x400/E0FFFF/000080?text=Dress+Shirt' },
                    { name: 'Polo Shirt', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Polo+Shirt' },
                    { name: 'Suit Jacket', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Suit+Jacket' },
                    { name: 'Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Blazer' }
                ],
                bottom: [
                    { name: 'Tailored Trousers', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Tailored+Trousers' },
                    { name: 'Dress Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Dress+Pants' },
                    { name: 'Chinos', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Chinos' },
                    { name: 'Slacks', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Slacks' }
                ],
                shoes: [
                    { name: 'Oxford Shoes', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Oxford+Shoes' },
                    { name: 'Loafers', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Loafers' },
                    { name: 'Derby Shoes', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Derby+Shoes' },
                    { name: 'Brogues', image: 'https://via.placeholder.com/300x200/8B7355/FFFFFF?text=Brogues' }
                ]
            }
        };

        let currentSelection = {
            women: { top: 0, bottom: 0, shoes: 0 },
            men: { top: 0, bottom: 0, shoes: 0 }
        };

        const phrases = {
            women: [
                "Absolutely fabulous!",
                "Très chic!",
                "Designer perfection!",
                "Pure elegance!",
                "Simply divine!",
                "Stunning choice!"
            ],
            men: [
                "Sharp and sophisticated!",
                "Dapper excellence!",
                "Timeless style!",
                "Classic elegance!",
                "Refined taste!",
                "Impeccably tailored!"
            ]
        };

        function updateDisplay(gender) {
            const prefix = gender === 'women' ? 'women' : 'men';
            const topItem = wardrobes[gender].top[currentSelection[gender].top];
            const bottomItem = wardrobes[gender].bottom[currentSelection[gender].bottom];
            const shoesItem = wardrobes[gender].shoes[currentSelection[gender].shoes];

            document.getElementById(`${prefix}-top-display`).innerHTML = `<img src="${topItem.image}" alt="${topItem.name}">`;
            document.getElementById(`${prefix}-bottom-display`).innerHTML = `<img src="${bottomItem.image}" alt="${bottomItem.name}">`;
            document.getElementById(`${prefix}-shoes-display`).innerHTML = `<img src="${shoesItem.image}" alt="${shoesItem.name}">`;

            document.getElementById(`${prefix}-top-name`).textContent = topItem.name;
            document.getElementById(`${prefix}-bottom-name`).textContent = bottomItem.name;
            document.getElementById(`${prefix}-shoes-name`).textContent = shoesItem.name;

            const randomPhrase = phrases[gender][Math.floor(Math.random() * phrases[gender].length)];
            document.getElementById(`${prefix}-status`).textContent = randomPhrase;
        }

        function nextItem(gender, category) {
            currentSelection[gender][category] = (currentSelection[gender][category] + 1) % wardrobes[gender][category].length;
            updateDisplay(gender);
        }

        function prevItem(gender, category) {
            currentSelection[gender][category] = (currentSelection[gender][category] - 1 + wardrobes[gender][category].length) % wardrobes[gender][category].length;
            updateDisplay(gender);
        }

        function randomOutfit(gender) {
            currentSelection[gender].top = Math.floor(Math.random() * wardrobes[gender].top.length);
            currentSelection[gender].bottom = Math.floor(Math.random() * wardrobes[gender].bottom.length);
            currentSelection[gender].shoes = Math.floor(Math.random() * wardrobes[gender].shoes.length);
            updateDisplay(gender);
            const prefix = gender === 'women' ? 'women' : 'men';
            document.getElementById(`${prefix}-status`).textContent = "✨ Surprise! Pure luxury! ✨";
        }

        function saveOutfit(gender) {
            const outfit = {
                top: wardrobes[gender].top[currentSelection[gender].top].name,
                bottom: wardrobes[gender].bottom[currentSelection[gender].bottom].name,
                shoes: wardrobes[gender].shoes[currentSelection[gender].shoes].name
            };
            console.log(`Saved ${gender} outfit:`, outfit);
            const prefix = gender === 'women' ? 'women' : 'men';
            document.getElementById(`${prefix}-status`).textContent = "💾 Outfit saved! Impeccable taste!";
        }

        // Initialize both displays
        updateDisplay('women');
        updateDisplay('men ');
    </script>
</body>
</html>
