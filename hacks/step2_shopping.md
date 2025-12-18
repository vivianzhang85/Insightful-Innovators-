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
                <div class="center-card" data-center="east-river">
                    <div class="center-icon">🏬</div>
                    <h2>East River Plaza</h2>
                    <p>Affordable fashion & everyday essentials</p>
                </div>

                <div class="center-card" data-center="macys">
                    <div class="center-icon">🏢</div>
                    <h2>Macy's Herald Square</h2>
                    <p>Classic department store elegance</p>
                </div>

                <div class="center-card" data-center="soho">
                    <div class="center-icon">✨</div>
                    <h2>SoHo Center</h2>
                    <p>Trendy & fashion-forward styles</p>
                </div>

                <div class="center-card" data-center="columbus">
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
                        { name: 'Red Long-Sleeve', image: 'https://target.scene7.com/is/image/Target/GUEST_49359324-e894-4de5-8dbf-6503e0661b83?wid=1200&hei=1200&qlt=80' },
                        { name: 'Grey Sweater', image: 'https://target.scene7.com/is/image/Target/GUEST_db9c98bf-5cf5-4892-881b-4d81e4e278c9?wid=1000&hei=1000&qlt=80&fmt=webp' },
                        { name: 'Cream Sweater', image: 'https://target.scene7.com/is/image/Target/GUEST_b6932887-f0a4-4a95-ac72-995aac2e4c2b?wid=1000&hei=1000&qlt=80&fmt=webp' },
                        { name: 'White Hoodie', image: 'https://target.scene7.com/is/image/Target/GUEST_31f5583e-e190-483a-a087-92040e57443b?wid=1200&hei=1200&qlt=80' },
                    ],
                    bottom: [
                        { name: 'Grey Sweats', image: 'https://target.scene7.com/is/image/Target/GUEST_21b65932-7ea1-4e82-92b9-79b19ba0caa4?wid=1000&hei=1000&qlt=80&fmt=webp' },
                        { name: 'Flare Pants', image: 'https://target.scene7.com/is/image/Target/GUEST_dff2f97b-febc-4ca3-9ab5-8d6c78ffc557?wid=1000&hei=1000&qlt=80&fmt=webp' },
                        { name: 'Light Blue Jeans', image: 'https://target.scene7.com/is/image/Target/GUEST_8d88d561-dffe-4dae-a7f9-af9c809f054c?wid=1200&hei=1200&qlt=80' },
                        { name: 'Black Jeans', image: 'https://target.scene7.com/is/image/Target/GUEST_25dca9f0-804e-4952-a8be-0fa54c239050?wid=1200&hei=1200&qlt=80' },
                    ],
                    shoes: [
                        { name: 'White Sneakers', image: 'https://target.scene7.com/is/image/Target/GUEST_220298a7-b188-404a-acfe-4f680957ba68?wid=1200&hei=1200&qlt=80' },
                        { name: 'Reebok', image: 'https://target.scene7.com/is/image/Target/GUEST_72ac4900-d657-473c-a708-192c9e81edef?wid=1200&hei=1200&qlt=80' },
                        { name: 'Red Sneakers', image: 'https://target.scene7.com/is/image/Target/GUEST_89089a42-5009-4794-909a-c8a35da75209?qlt=85&fmt=webp&hei=500&wid=500' },
                        { name: 'Clogs', image: 'https://target.scene7.com/is/image/Target/GUEST_a578e0f7-85df-4cca-8d10-a371d0ef863e?qlt=85&fmt=webp&hei=500&wid=500' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Cream Quarter Zip', image: 'https://target.scene7.com/is/image/Target/GUEST_7231c7a4-45a6-4b1b-b153-8b1fb6b2d834?wid=1200&hei=1200&qlt=80' },
                        { name: 'Black Sweater', image: 'https://target.scene7.com/is/image/Target/GUEST_13e94bdd-f53d-41e6-8682-9f4c8f3d7d9d?qlt=85&fmt=webp&hei=500&wid=500' },
                        { name: 'Black Hoodie', image: 'https://target.scene7.com/is/image/Target/GUEST_d32e3820-0485-4d1e-ae24-ef27ffedd289?wid=1200&hei=1200&qlt=80e' },
                        { name: 'Grey Crewneck', image: 'https://target.scene7.com/is/image/Target/GUEST_e48c1890-4761-482c-9cdf-37908d270950?wid=1200&hei=1200&qlt=80' },
                    ],
                    bottom: [
                        { name: 'Dark Blue Jeans', image: 'https://target.scene7.com/is/image/Target/GUEST_d9cf97d8-2f05-4ef3-af6c-1065b649bf4e?wid=1200&hei=1200&qlt=80' },
                        { name: 'Baggy Utility Pants', image: 'https://target.scene7.com/is/image/Target/GUEST_44c96d3a-3ee5-407c-8035-14d1336bb299?wid=1200&hei=1200&qlt=80' },
                        { name: 'Brown Pants', image: 'https://target.scene7.com/is/image/Target/GUEST_ad55d77f-8054-47a0-bd03-a0483d019352?qlt=85&fmt=webp&hei=500&wid=500' },
                        { name: 'Cargo Pants', image: 'https://target.scene7.com/is/image/Target/GUEST_5209e381-b85d-491d-b66c-fe19ec091349?qlt=85&fmt=webp&hei=500&wid=500' },
                    ],
                    shoes: [
                        { name: 'Brown Shoes', image: 'https://target.scene7.com/is/image/Target/GUEST_9d157095-ebd9-4032-8504-9882ec5f683a?wid=1200&hei=1200&qlt=80' },
                        { name: 'Dockers Men Shoes', image: 'https://target.scene7.com/is/image/Target/GUEST_27f79b0c-c324-4e5c-a61d-b0c8709f6989?wid=1200&hei=1200&qlt=80' },
                        { name: 'White Sneakers', image: 'https://target.scene7.com/is/image/Target/GUEST_1933b21b-f55d-4a14-9f65-4c00fcc80134?qlt=85&fmt=webp&hei=500&wid=500' },
                        { name: 'Leather Shoes', image: 'https://target.scene7.com/is/image/Target/GUEST_4bfb83b0-234a-4283-b2ca-c0b415152535?qlt=85&fmt=webp&hei=500&wid=500' }
                    ]
                }
            },
            'macys': {
                name: 'Macy's Herald Square',
                description: 'Classic department store elegance',
                women: {
                    top: [
                        { name: 'White Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/26347896_fpx.tif?op_sharpen=1&wid=1500&fit=fit%2C1&fmt=webp' },
                        { name: 'Cream Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/31049706_fpx.tif?op_sharpen=1&wid=1500&fit=fit%2C1&fmt=webp' },
                        { name: 'Grey Striped Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/31049706_fpx.tif?op_sharpen=1&wid=1500&fit=fit%2C1&fmt=webp' },
                        { name: 'Blue Striped Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/34690286_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=240&hei=293' },
                    ],
                    bottom: [
                        { name: 'Bootcut Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/34492948_fpx.tif?op_sharpen=1&wid=1500&fit=fit%2C1&fmt=webp' },
                        { name: 'Blue Baggy Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/34816643_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Light Wash Baggy Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/25060138_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Black Sweatpants', image: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/30437390_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                    ],
                    shoes: [
                        { name: 'Adidas', image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/31271463_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Ugg Tasman', image: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/33636358_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'White Platform Sneakers', image: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/24150204_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&fmt=webp' },
                        { name: 'Nikes', image: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/28841871_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Blue Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/34421941_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Cream Hoodie', image: 'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/28131229_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Red Quarter-Zip', image: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/34871670_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Black Sweater', image: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/34876543_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' }
                    ],
                    bottom: [
                        { name: 'Medium Blue Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/33255971_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Black Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/27686001_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Light Blue Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/31838162_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Dark Blue Jeans', image: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/33159924_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                    ],
                    shoes: [
                        { name: 'White Sneakers', image: 'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/32120719_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Adidas', image: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/34109882_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Brown Sneaker', image: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/31392084_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' },
                        { name: 'Black and White Nikes', image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/32221626_fpx.tif?qlt=55,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=webp&wid=684&hei=834' }
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
                        { name: 'Cream Knit Sweater', image: 'https://image.hm.com/assets/hm/5a/a9/5aa96ad24ca61307f2fd557199d2c37316495b72.jpg?imwidth=2160' },
                        { name: 'Cream Cardigan', image: 'https://image.hm.com/assets/hm/49/5a/495a728ace736a9858fc0c58d4fd53c1301499c6.jpg?imwidth=2160' },
                        { name: 'Long-Sleaved Jersey Top', image: 'https://image.hm.com/assets/hm/fd/b0/fdb01fd25e177172f290cf7c3cd8b548591f6eb1.jpg?imwidth=2160' },
                        { name: 'Oversized Boatneck Sweater', image: 'https://image.hm.com/assets/hm/07/c8/07c86252327a71cd0a1b97c6b5c6cbaba3f16873.jpg?imwidth=2160' },
                        { name: 'Black Hoodie', image: 'https://image.hm.com/assets/hm/67/c6/67c65b95233364e5c312e4fc7f36eda04251323d.jpg?imwidth=657' }
                    ],
                    bottom: [
                        { name: 'Light Blue Baggy Jeans', image: 'https://image.hm.com/assets/hm/f8/a1/f8a167f63390ecd1df2bc08a500f54a08acac22e.jpg?imwidth=1536' },
                        { name: 'Black Pleated Mini Skirt', image: 'https://image.hm.com/assets/hm/0e/ea/0eea470eab0ef124cc191d3b1e2c8b04e3d4cf80.jpg?imwidth=396' },
                        { name: 'Flared Low Jeans', image: 'https://image.hm.com/assets/hm/1b/67/1b67cbc902c9736c9fa89eb2ebc548062731eb16.jpg?imwidth=657' },
                        { name: 'Dressy Mini Skirt', image: 'https://image.hm.com/assets/hm/4d/1d/4d1d5e2b834d9afe152d7169ae98e8ed77136244.jpg?imwidth=657' },
                        { name: 'Dark Blue Baggy Jeans', image: 'https://image.hm.com/assets/hm/1c/92/1c924704a2fd8de7965831f055c1f421f4e4a02e.jpg?imwidth=1536' }
                    ],
                    shoes: [
                        { name: 'Sneakers', image: 'https://image.hm.com/assets/hm/b8/9e/b89ed253c72a9f66549c31c868340d52e9988477.jpg?imwidth=2160' },
                        { name: 'Warm-lined Boots', image: 'https://image.hm.com/assets/hm/9b/90/9b90c6cbf772d2d8195e0b4359e36d01174147fa.jpg?imwidth=2160' },
                        { name: 'Birkenstock Sandals', image: 'https://cdn.fleetfeet.com/productTile/products/151183_left.jpg' },
                        { name: 'Heeled Slingbacks', image: 'https://image.hm.com/assets/hm/df/2b/df2b10db22e3561154471fafc8ff422098309334.jpg?imwidth=657' }
                    ]
                },
                men: {
                    top: [
                        { name: 'Black Sweater', image: 'https://image.hm.com/assets/hm/9a/77/9a77c0f49d87abe822edcabd76cb25d7ff41044e.jpg?imwidth=2160' },
                        { name: 'Loose Fit Half-Zip Sweatshirt', image: 'https://image.hm.com/assets/hm/1d/9c/1d9cad8c0834c59489037805c885fb5d5a240e2f.jpg?imwidth=2160' },
                        { name: 'Loose Fit Scuba Hoodie', image: 'https://image.hm.com/assets/hm/75/fb/75fb2c3e06bad89c2755f7f76cae3485bfd559d8.jpg?imwidth=2160' },
                        { name: 'Regular-Fit Rib-Knit Cotton Sweater', image: 'https://image.hm.com/assets/hm/e9/94/e99416b0bac9e59a6e3480cba0a242fb44e8db8c.jpg?imwidth=2160' },
                    ],
                    bottom: [
                        { name: 'Baggy Darted Jeans', image: 'https://image.hm.com/assets/hm/89/d8/89d87ebd0a209c702474f3f79c6bbeb24d72d451.jpg?imwidth=657' },
                        { name: 'Light Blue Jeans', image: 'https://image.hm.com/assets/hm/db/5c/db5ca18fca0db5d6a8b6a05a131601a2c0780507.jpg?imwidth=657' },
                        { name: 'Fairfax Baggy Jeans', image: 'https://image.hm.com/assets/hm/dc/98/dc987f075569a9e8afb546dd6288344c6cc7a614.jpg?imwidth=2160' },
                        { name: 'Loose-Fit Sweatpants', image: 'https://image.hm.com/assets/hm/ec/ed/ecedfe5492def4518cbd18ba0946a0215b48a1fe.jpg?imwidth=657' }
                    ],
                    shoes: [
                        { name: 'Brown Sneakers', image: 'https://image.hm.com/assets/hm/d2/80/d280bb63e27922efc6a171e0fb14b93f407abced.jpg?imwidth=2160' },
                        { name: 'Chunky Sneakers', image: 'https://image.hm.com/assets/hm/91/8e/918e07a0ef4eec4b511b269b208a83a790d10dd5.jpg?imwidth=2160' },
                        { name: 'White Sneakers', image: 'https://image.hm.com/assets/hm/fb/8d/fb8d78018ef31d1891a4e96c7ad7b0bb80348db8.jpg?imwidth=2160' }
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