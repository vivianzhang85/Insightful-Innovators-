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
    <title>NYC Shopping Centers</title>
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

        /* Shopping Center Selection */
        .center-selection {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .center-card {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 3px solid transparent;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .center-card:hover {
            transform: translateY(-10px);
            border-color: #ffd700;
            box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3);
        }

        .center-card.selected {
            border-color: #ffd700;
            background: #2a2a2a;
        }

        .center-icon {
            font-size: 3em;
            margin-bottom: 15px;
        }

        .center-card h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #ffd700;
        }

        .center-card p {
            color: #ccc;
            font-size: 0.95em;
        }

        /* Gender Selection Screen */
        .gender-selection {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-top: 40px;
        }

        .gender-card {
            background: #1a1a1a;
            padding: 50px 40px;
            border-radius: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 3px solid transparent;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            min-width: 250px;
        }

        .gender-card:hover {
            transform: translateY(-10px);
            border-color: #ffd700;
            box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3);
        }

        .gender-card h3 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #ffd700;
        }

        .gender-card p {
            color: #ccc;
            font-size: 1.1em;
        }

        .gender-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }

        .hidden {
            display: none !important;
        }

        .back-button {
            display: inline-block;
            background: rgba(255, 215, 0, 0.2);
            color: #ffd700;
            padding: 10px 20px;
            border-radius: 20px;
            border: 1px solid #ffd700;
            cursor: pointer;
            margin-bottom: 20px;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .back-button:hover {
            background: rgba(255, 215, 0, 0.3);
            transform: translateY(-2px);
        }

        .area-info {
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid #ffd700;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }

        .area-info h2 {
            color: #ffd700;
            margin-bottom: 10px;
        }

        .area-info p {
            color: #ccc;
        }

        .wardrobe-section {
            background: #1a1a1a;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            border-top: 5px solid #ffd700;
            max-width: 600px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 1.8em;
            margin-bottom: 25px;
            text-align: center;
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
            background: #ffd700;
            color: #1a2332;
            border: none;
            padding: 6px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.85em;
            transition: all 0.3s ease;
        }

        .nav-btn:hover {
            background: #ffed4e;
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 20px;
        }

        .btn {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a2332;
            border: none;
            padding: 12px 25px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.95em;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
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
            color: #ffd700;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 1.8em;
            }

            .center-selection {
                grid-template-columns: 1fr;
            }

            .gender-selection {
                flex-direction: column;
                gap: 20px;
            }

            .gender-card {
                width: 100%;
                max-width: 300px;
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
            <h1>NYC Shopping Experience</h1>
            <p class="subtitle">Choose your shopping destination</p>
        </header>

        <!-- Shopping Center Selection -->
        <div id="center-selection-screen">
            <div class="center-selection">
                <div class="center-card" onclick="selectCenter('east-river')">
                    <div class="center-icon">🏬</div>
                    <h2>East River Plaza</h2>
                    <p>Affordable fashion & everyday essentials</p>
                </div>

                <div class="center-card" onclick="selectCenter('macys')">
                    <div class="center-icon">🏢</div>
                    <h2>Macy's Herald Square</h2>
                    <p>Classic department store elegance</p>
                </div>

                <div class="center-card" onclick="selectCenter('soho')">
                    <div class="center-icon">✨</div>
                    <h2>SoHo Center</h2>
                    <p>Trendy & fashion-forward styles</p>
                </div>

                <div class="center-card" onclick="selectCenter('columbus')">
                    <div class="center-icon">💎</div>
                    <h2>Columbus Circle</h2>
                    <p>Luxury designer boutiques</p>
                </div>
            </div>
        </div>

        <!-- Gender Selection Screen -->
        <div id="gender-selection-screen" class="hidden">
            <button class="back-button" onclick="backToCenter()">← Change Shopping Center</button>
            
            <div class="area-info">
                <h2 id="selected-center-name"></h2>
                <p id="selected-center-desc"></p>
            </div>

            <div class="gender-selection">
                <div class="gender-card" onclick="selectGender('women')">
                    <div class="gender-icon">👗</div>
                    <h3>Women's</h3>
                    <p>Shop women's fashion</p>
                </div>

                <div class="gender-card" onclick="selectGender('men')">
                    <div class="gender-icon">👔</div>
                    <h3>Men's</h3>
                    <p>Shop men's fashion</p>
                </div>
            </div>
        </div>

        <!-- Shopping Content -->
        <div id="shopping-content" class="hidden">
            <button class="back-button" onclick="backToGender()">← Change Selection</button>

            <div class="area-info">
                <h2 id="shopping-area-title"></h2>
                <p id="shopping-area-subtitle"></p>
            </div>

            <div class="wardrobe-section">
                <h2 class="section-title" id="section-title">Your Look</h2>
                
                <div class="outfit-grid">
                    <div class="clothing-item">
                        <div class="item-category">Top</div>
                        <div class="item-display" id="top-display"></div>
                        <div class="item-name" id="top-name">Top</div>
                        <div class="nav-buttons">
                            <button class="nav-btn" onclick="prevItem('top')">← Prev</button>
                            <button class="nav-btn" onclick="nextItem('top')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Bottom</div>
                        <div class="item-display" id="bottom-display"></div>
                        <div class="item-name" id="bottom-name">Bottom</div>
                        <div class="nav-buttons">
                            <button class="nav-btn" onclick="prevItem('bottom')">← Prev</button>
                            <button class="nav-btn" onclick="nextItem('bottom')">Next →</button>
                        </div>
                    </div>

                    <div class="clothing-item">
                        <div class="item-category">Shoes</div>
                        <div class="item-display" id="shoes-display"></div>
                        <div class="item-name" id="shoes-name">Shoes</div>
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

                <div class="status-message" id="status">Ready to shop!</div>
            </div>
        </div>
    </div>

    <script>
        const shoppingCenters = {
            'east-river': {
                name: 'East River Plaza',
                description: 'Affordable fashion & everyday essentials',
                women: {
                    top: [
                        { name: 'Basic Cotton T-Shirt', image: 'https://via.placeholder.com/300x400/FFB6C1/000000?text=Cotton+T-Shirt' },
                        { name: 'Casual Hoodie', image: 'https://via.placeholder.com/300x400/87CEEB/000000?text=Hoodie' },
                        { name: 'Graphic Tee', image: 'https://via.placeholder.com/300x400/DDA0DD/000000?text=Graphic+Tee' },
                        { name: 'Tank Top', image: 'https://via.placeholder.com/300x400/F0E68C/000000?text=Tank+Top' },
                        { name: 'Sweatshirt', image: 'https://via.placeholder.com/300x400/98FB98/000000?text=Sweatshirt' }
                    ],
                    bottom: [
                        { name: 'Skinny Jeans', image: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Skinny+Jeans' },
                        { name: 'Leggings', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Leggings' },
                        { name: 'Denim Shorts', image: 'https://via.placeholder.com/300x400/6495ED/FFFFFF?text=Denim+Shorts' },
                        { name: 'Joggers', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Joggers' },
                        { name: 'Casual Skirt', image: 'https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Casual+Skirt' }
                    ],
                    shoes: [
                        { name: 'Sneakers', image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=Sneakers' },
                        { name: 'Canvas Shoes', image: 'https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Canvas+Shoes' },
                        { name: 'Sandals', image: 'https://via.placeholder.com/300x200/DEB887/000000?text=Sandals' },
                        { name: 'Slip-ons', image: 'https://via.placeholder.com/300x200/000080/FFFFFF?text=Slip-ons' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Basic T-Shirt', image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=T-Shirt' },
                        { name: 'Hoodie', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Hoodie' },
                        { name: 'Graphic Tee', image: 'https://via.placeholder.com/300x400/F4A460/000000?text=Graphic+Tee' },
                        { name: 'Flannel Shirt', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Flannel' },
                        { name: 'Polo Shirt', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Polo' }
                    ],
                    bottom: [
                        { name: 'Jeans', image: 'https://via.placeholder.com/300x400/4169E1/FFFFFF?text=Jeans' },
                        { name: 'Cargo Pants', image: 'https://via.placeholder.com/300x400/556B2F/FFFFFF?text=Cargo+Pants' },
                        { name: 'Joggers', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Joggers' },
                        { name: 'Shorts', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Shorts' },
                        { name: 'Chinos', image: 'https://via.placeholder.com/300x400/8B7355/FFFFFF?text=Chinos' }
                    ],
                    shoes: [
                        { name: 'Sneakers', image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=Sneakers' },
                        { name: 'Canvas Shoes', image: 'https://via.placeholder.com/300x200/000080/FFFFFF?text=Canvas' },
                        { name: 'Casual Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Boots' },
                        { name: 'Sandals', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Sandals' }
                    ]
                }
            },
            'macys': {
                name: 'Macy\'s Herald Square',
                description: 'Classic department store elegance',
                women: {
                    top: [
                        { name: 'Silk Blouse', image: 'https://via.placeholder.com/300x400/FFE4E1/000000?text=Silk+Blouse' },
                        { name: 'Cashmere Sweater', image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Cashmere' },
                        { name: 'Blazer', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Blazer' },
                        { name: 'Button-Up Shirt', image: 'https://via.placeholder.com/300x400/F0F8FF/4682B4?text=Button+Up' },
                        { name: 'Cardigan', image: 'https://via.placeholder.com/300x400/FFDAB9/000000?text=Cardigan' }
                    ],
                    bottom: [
                        { name: 'Pencil Skirt', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Pencil+Skirt' },
                        { name: 'Dress Pants', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Dress+Pants' },
                        { name: 'A-Line Skirt', image: 'https://via.placeholder.com/300x400/800000/FFFFFF?text=A-Line+Skirt' },
                        { name: 'Wide-Leg Trousers', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Trousers' },
                        { name: 'Midi Skirt', image: 'https://via.placeholder.com/300x400/4B0082/FFFFFF?text=Midi+Skirt' }
                    ],
                    shoes: [
                        { name: 'Pumps', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Pumps' },
                        { name: 'Heeled Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Heeled+Boots' },
                        { name: 'Flats', image: 'https://via.placeholder.com/300x200/C0C0C0/000000?text=Flats' },
                        { name: 'Ankle Boots', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Ankle+Boots' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Dress Shirt', image: 'https://via.placeholder.com/300x400/F0F8FF/000080?text=Dress+Shirt' },
                        { name: 'Polo Shirt', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Polo' },
                        { name: 'Blazer', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Blazer' },
                        { name: 'V-Neck Sweater', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=V-Neck' },
                        { name: 'Sport Coat', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Sport+Coat' }
                    ],
                    bottom: [
                        { name: 'Dress Pants', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Dress+Pants' },
                        { name: 'Chinos', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Chinos' },
                        { name: 'Suit Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Suit+Pants' },
                        { name: 'Khakis', image: 'https://via.placeholder.com/300x400/BDB76B/000000?text=Khakis' },
                        { name: 'Slacks', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Slacks' }
                    ],
                    shoes: [
                        { name: 'Oxford Shoes', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Oxfords' },
                        { name: 'Loafers', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Loafers' },
                        { name: 'Derby Shoes', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Derby' },
                        { name: 'Dress Boots', image: 'https://via.placeholder.com/300x200/2F4F4F/FFFFFF?text=Dress+Boots' }
                    ]
                }
            },
            'soho': {
                name: 'SoHo Center',
                description: 'Trendy & fashion-forward styles',
                women: {
                    top: [
                        { name: 'Crop Top', image: 'https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Crop+Top' },
                        { name: 'Off-Shoulder Top', image: 'https://via.placeholder.com/300x400/FFB6C1/000000?text=Off-Shoulder' },
                        { name: 'Mesh Top', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Mesh+Top' },
                        { name: 'Statement Blouse', image: 'https://via.placeholder.com/300x400/9370DB/FFFFFF?text=Statement' },
                        { name: 'Leather Jacket', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Leather+Jacket' }
                    ],
                    bottom: [
                        { name: 'High-Waist Jeans', image: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=High-Waist' },
                        { name: 'Faux Leather Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Leather+Pants' },
                        { name: 'Mini Skirt', image: 'https://via.placeholder.com/300x400/FF1493/FFFFFF?text=Mini+Skirt' },
                        { name: 'Wide-Leg Pants', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Wide-Leg' },
                        { name: 'Plaid Skirt', image: 'https://via.placeholder.com/300x400/8B0000/FFFFFF?text=Plaid+Skirt' }
                    ],
                    shoes: [
                        { name: 'Platform Boots', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Platform+Boots' },
                        { name: 'Chunky Sneakers', image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=Chunky' },
                        { name: 'Heeled Sandals', image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Heeled+Sandals' },
                        { name: 'Combat Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Combat+Boots' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Designer T-Shirt', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Designer+Tee' },
                        { name: 'Denim Jacket', image: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Denim+Jacket' },
                        { name: 'Bomber Jacket', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Bomber' },
                        { name: 'Oversized Hoodie', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Oversized' },
                        { name: 'Turtleneck', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Turtleneck' }
                    ],
                    bottom: [
                        { name: 'Skinny Jeans', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Skinny+Jeans' },
                        { name: 'Ripped Jeans', image: 'https://via.placeholder.com/300x400/4169E1/FFFFFF?text=Ripped+Jeans' },
                        { name: 'Jogger Pants', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Joggers' },
                        { name: 'Track Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Track+Pants' },
                        { name: 'Cargo Joggers', image: 'https://via.placeholder.com/300x400/556B2F/FFFFFF?text=Cargo' }
                    ],
                    shoes: [
                        { name: 'High-Top Sneakers', image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=High-Tops' },
                        { name: 'Chelsea Boots', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Chelsea+Boots' },
                        { name: 'Designer Sneakers', image: 'https://via.placeholder.com/300x200/FF4500/FFFFFF?text=Designer' },
                        { name: 'Combat Boots', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Combat' }
                    ]
                }
            },
            'columbus': {
                name: 'Columbus Circle',
                description: 'Luxury designer boutiques',
                women: {
                    top: [
                        { name: 'Designer Silk Blouse', image: 'https://via.placeholder.com/300x400/F5F5DC/000000?text=Designer+Silk' },
                        { name: 'Couture Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Couture+Blazer' },
                        { name: 'Luxury Knit', image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Luxury+Knit' },
                        { name: 'Satin Top', image: 'https://via.placeholder.com/300x400/FFE4E1/000000?text=Satin+Top' },
                        { name: 'Velvet Jacket', image: 'https://via.placeholder.com/300x400/8B008B/FFFFFF?text=Velvet' }
                    ],
                    bottom: [
                        { name: 'Light Blue Baggy Jeans', image: 'https://image.hm.com/assets/hm/f8/a1/f8a167f63390ecd1df2bc08a500f54a08acac22e.jpg?imwidth=1536' },
                        { name: 'Haute Couture Skirt', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Haute+Couture' },
                        { name: 'Luxury Pants', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Luxury+Pants' },
                        { name: 'Pleated Skirt', image: 'https://via.placeholder.com/300x400/4B0082/FFFFFF?text=Pleated' },
                        { name: 'Wide-Leg Trousers', image: 'https://via.placeholder.com/300x400/2C3E50/FFFFFF?text=Wide-Leg' }
                    ],
                    shoes: [
                        { name: 'Designer Heels', image: 'https://via.placeholder.com/300x200/B22222/FFFFFF?text=Designer+Heels' },
                        { name: 'Luxury Boots', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Luxury+Boots' },
                        { name: 'Patent Pumps', image: 'https://via.placeholder.com/300x200/8B0000/FFFFFF?text=Patent+Pumps' },
                        { name: 'Stilettos', image: 'https://via.placeholder.com/300x200/C0C0C0/000000?text=Stilettos' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Designer Suit Jacket', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Designer+Suit' },
                        { name: 'Luxury Dress Shirt', image: 'https://via.placeholder.com/300x400/F0F8FF/000080?text=Luxury+Shirt' },
                        { name: 'Cashmere Sweater', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Cashmere' },
                        { name: 'Tailored Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Tailored' },
                        { name: 'Designer Polo', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Designer+Polo' }
                    ],
                    bottom: [
                        { name: 'Tailored Suit Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Suit+Pants' },
                        { name: 'Designer Trousers', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Designer+Trousers' },
                        { name: 'Luxury Chinos', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Luxury+Chinos' },
                        { name: 'Dress Pants', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Dress+Pants' },
                        { name: 'Wool Trousers', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Wool+Trousers' }
                    ],
                    shoes: [
                        { name: 'Italian Leather Oxfords', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Italian+Oxfords' },
                        { name: 'Designer Loafers', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Designer+Loafers' },
                        { name: 'Luxury Boots', image: 'https://via.placeholder.com/300x200/2F4F4F/FFFFFF?text=Luxury+Boots' },
                        { name: 'Patent Dress Shoes', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Patent+Shoes' }
                    ]
                }
            }
        };

        let selectedCenter = null;
        let selectedGender = null;
        let currentSelection = { top: 0, bottom: 0, shoes: 0 };

        function selectCenter(centerId) {
            selectedCenter = centerId;
            document.getElementById('center-selection-screen').classList.add('hidden');
            document.getElementById('gender-selection-screen').classList.remove('hidden');
            
            const center = shoppingCenters[centerId];
            document.getElementById('selected-center-name').textContent = '📍 ' + center.name;
            document.getElementById('selected-center-desc').textContent = center.description;
        }

        function selectGender(gender) {
            selectedGender = gender;
            document.getElementById('gender-selection-screen').classList.add('hidden');
            document.getElementById('shopping-content').classList.remove('hidden');
            
            const center = shoppingCenters[selectedCenter];
            document.getElementById('shopping-area-title').textContent = center.name;
            document.getElementById('shopping-area-subtitle').textContent = `Shopping ${gender === 'women' ? "Women's" : "Men's"} Fashion`;
            document.getElementById('section-title').textContent = gender === 'women' ? "Her Look" : "His Look";
            
            updateDisplay();
        }

        function backToCenter() {
            selectedCenter = null;
            selectedGender = null;
            currentSelection = { top: 0, bottom: 0, shoes: 0 };
            document.getElementById('center-selection-screen').classList.remove('hidden');
            document.getElementById('gender-selection-screen').classList.add('hidden');
            document.getElementById('shopping-content').classList.add('hidden');
        }

        function backToGender() {
            selectedGender = null;
            currentSelection = { top: 0, bottom: 0, shoes: 0 };
            document.getElementById('gender-selection-screen').classList.remove('hidden');
            document.getElementById('shopping-content').classList.add('hidden');
        }

        function updateDisplay() {
            if (!selectedCenter || !selectedGender) return;

            const wardrobe = shoppingCenters[selectedCenter][selectedGender];
            const topItem = wardrobe.top[currentSelection.top];
            const bottomItem = wardrobe.bottom[currentSelection.bottom];
            const shoesItem = wardrobe.shoes[currentSelection.shoes];

            document.getElementById('top-display').innerHTML = `<img src="${topItem.image}" alt="${topItem.name}">`;
            document.getElementById('bottom-display').innerHTML = `<img src="${bottomItem.image}" alt="${bottomItem.name}">`;
            document.getElementById('shoes-display').innerHTML = `<img src="${shoesItem.image}" alt="${shoesItem.name}">`;

            document.getElementById('top-name').textContent = topItem.name;
            document.getElementById('bottom-name').textContent = bottomItem.name;
            document.getElementById('shoes-name').textContent = shoesItem.name;

            const phrases = [
                "Looking great!",
                "Perfect choice!",
                "Stylish!",
                "Fashion forward!",
                "Excellent taste!",
                "Love it!"
            ];
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            document.getElementById('status').textContent = randomPhrase;
        }

        function nextItem(category) {
            const wardrobe = shoppingCenters[selectedCenter][selectedGender];
            currentSelection[category] = (currentSelection[category] + 1) % wardrobe[category].length;
            updateDisplay();
        }

        function prevItem(category) {
            const wardrobe = shoppingCenters[selectedCenter][selectedGender];
            currentSelection[category] = (currentSelection[category] - 1 + wardrobe[category].length) % wardrobe[category].length;
            updateDisplay();
        }

        function randomOutfit() {
            const wardrobe = shoppingCenters[selectedCenter][selectedGender];
            currentSelection.top = Math.floor(Math.random() * wardrobe.top.length);
            currentSelection.bottom = Math.floor(Math.random() * wardrobe.bottom.length);
            currentSelection.shoes = Math.floor(Math.random() * wardrobe.shoes.length);
            updateDisplay();
            document.getElementById('status').textContent = "✨ Surprise! ✨";
        }

        function saveOutfit() {
            const wardrobe = shoppingCenters[selectedCenter][selectedGender];
            const outfit = {
                center: shoppingCenters[selectedCenter].name,
                gender: selectedGender,
                top: wardrobe.top[currentSelection.top].name,
                bottom: wardrobe.bottom[currentSelection.bottom].name,
                shoes: wardrobe.shoes[currentSelection.shoes].name
            };
            // Persist the saved outfit to localStorage and navigate to the post page
            try {
                localStorage.setItem('savedOutfit', JSON.stringify(outfit));
                console.log('savedOutfit stored:', localStorage.getItem('savedOutfit'));
                // give brief feedback then navigate to the posting page (use canonical permalink)
                document.getElementById('status').textContent = "💾 Outfit saved! Redirecting to post...";
                setTimeout(() => { window.location.href = '/student/new-york/shopping/post/'; }, 600);
            } catch (e) {
                console.error('Failed to save outfit:', e);
                document.getElementById('status').textContent = "❌ Failed to save outfit locally.";
            }
        }
    </script>
</body>
</html>