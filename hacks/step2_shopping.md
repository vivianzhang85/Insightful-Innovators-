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

        .post-section {
            margin-top: 60px;
            padding: 40px;
            background: #0a0a0a;
            border-radius: 15px;
            border-top: 3px solid #ffd700;
        }

        .post-section h2 {
            text-align: center;
            color: #ffd700;
            font-size: 2em;
            margin-bottom: 30px;
        }

        .post-container {
            max-width: 600px;
            margin: 0 auto;
        }

        .outfit-preview {
            background: #1a1a1a;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 25px;
        }

        .outfit-preview h3 {
            color: #ffd700;
            margin-bottom: 15px;
        }

        .preview-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .preview-item {
            padding: 15px;
            background: #2a2a2a;
            border-radius: 8px;
        }

        .preview-item strong {
            color: #ffd700;
        }

        .preview-item p {
            color: #ccc;
            margin-top: 10px;
            font-size: 0.95em;
        }

        .caption-section {
            margin-bottom: 20px;
        }

        .caption-section label {
            display: block;
            color: #ffd700;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .caption-section textarea {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #ffd700;
            background: #1a1a1a;
            color: white;
            min-height: 80px;
            font-family: Georgia, serif;
            box-sizing: border-box;
            resize: vertical;
        }

        .caption-section textarea:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        .post-button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            color: #1a2332;
            border: none;
            border-radius: 25px;
            font-size: 1.1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .post-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }

        .post-status {
            text-align: center;
            margin-top: 15px;
            min-height: 25px;
            color: #ffd700;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 1.8em;
            }

            .wardrobe-section {
                padding: 20px;
            }

            .preview-grid {
                grid-template-columns: 1fr;
            }

            .post-section {
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

        <!-- post section -->
        <div class="post-section">
            <h2>✨ Post Your Look ✨</h2>
            
            <div class="post-container">
                <!-- Display current selections -->
                <div class="outfit-preview">
                    <h3>Your Selected Outfits:</h3>
                    
                    <div class="preview-grid">
                        <div class="preview-item">
                            <strong>Her Look:</strong>
                            <p id="preview-women"></p>
                        </div>
                        <div class="preview-item">
                            <strong>His Look:</strong>
                            <p id="preview-men"></p>
                        </div>
                    </div>
                </div>

                <div class="caption-section">
                    <label for="caption">Add a Caption (optional):</label>
                    <textarea id="caption" placeholder="What do you think about this look?"></textarea>
                </div>

                <button class="post-button" onclick="postOutfit()">📸 Post Your Outfit</button>

                <div class="post-status" id="post-status"></div>
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
                    { name: 'Black Top', image: 'https://m.media-amazon.com/images/I/61JLmUnNRiL._AC_UL640_FMwebp_QL65_.jpg' },
                    { name: 'White Sweater', image: 'https://image.hm.com/assets/hm/94/a8/94a886e2c8a0b80830a56678e32760996492fea8.jpg?imwidth=564' },
                    { name: 'Designer Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Designer+Blazer' },
                    { name: 'Luxury Cardigan', image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Luxury+Cardigan' }
                ],
                bottom: [
                    { name: 'Denim Skirt', image: 'https://img.abercrombie.com/is/image/anf/KIC_143-5042-00360-275_prod1?policy=product-large' },
                    { name: 'Blue Jeans', image: 'https://image.hm.com/assets/hm/77/42/7742c6f8b62131a717bfb561cb34d0b0752549a4.jpg?imwidth=657' },
                    { name: 'Denim Shorts', image: 'https://cdn-images.farfetch-contents.com/22/33/91/85/22339185_52148124_1000.jpg' }
                    { name: 'Midi Skirt', image: 'https://via.placeholder.com/300x400/800000/FFFFFF?text=Midi+Skirt' }
                ],
                shoes: [
                    { name: 'Nike Air Forces', image: 'https://millenniumshoes.com/cdn/shop/products/DH2920-111-PHCFH001-2000_1200x.jpg?v=1735626317' },
                    { name: 'Uggs', image: 'data:image/jpeg;base64,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' },
                    { name: 'Adidas Sambas', image: 'data:image/jpeg;base64,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' },
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
            updateOutfitPreview();
        }

        function prevItem(gender, category) {
            currentSelection[gender][category] = (currentSelection[gender][category] - 1 + wardrobes[gender][category].length) % wardrobes[gender][category].length;
            updateDisplay(gender);
            updateOutfitPreview();
        }

        function randomOutfit(gender) {
            currentSelection[gender].top = Math.floor(Math.random() * wardrobes[gender].top.length);
            currentSelection[gender].bottom = Math.floor(Math.random() * wardrobes[gender].bottom.length);
            currentSelection[gender].shoes = Math.floor(Math.random() * wardrobes[gender].shoes.length);
            updateDisplay(gender);
            updateOutfitPreview();
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
// post section

        function updateOutfitPreview() {
            const womenOutfit = `${wardrobes.women.top[currentSelection.women.top].name} + ${wardrobes.women.bottom[currentSelection.women.bottom].name} + ${wardrobes.women.shoes[currentSelection.women.shoes].name}`;
            const menOutfit = `${wardrobes.men.top[currentSelection.men.top].name} + ${wardrobes.men.bottom[currentSelection.men.bottom].name} + ${wardrobes.men.shoes[currentSelection.men.shoes].name}`;
            
            document.getElementById('preview-women').textContent = womenOutfit;
            document.getElementById('preview-men').textContent = menOutfit;
        }

        function postOutfit() {
            const statusDiv = document.getElementById('post-status');
            
            // Validate user is logged in (check if Flask session exists via data attribute)
            const userId = document.body.getAttribute('data-user-id');
            if (!userId) {
                statusDiv.textContent = '❌ Please log in to post your outfit!';
                statusDiv.style.color = '#ff6b6b';
                return;
            }
            
            const outfitData = {
                women_top: wardrobes.women.top[currentSelection.women.top].name,
                women_bottom: wardrobes.women.bottom[currentSelection.women.bottom].name,
                women_shoes: wardrobes.women.shoes[currentSelection.women.shoes].name,
                men_top: wardrobes.men.top[currentSelection.men.top].name,
                men_bottom: wardrobes.men.bottom[currentSelection.men.bottom].name,
                men_shoes: wardrobes.men.shoes[currentSelection.men.shoes].name,
                caption: document.getElementById('caption').value || ''
            };
            
            statusDiv.textContent = '⏳ Posting...';
            
            fetch('/api/post-outfit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(outfitData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusDiv.textContent = '✅ Posted!';
                    statusDiv.style.color = '#51cf66';
                    document.getElementById('caption').value = ''; 
                } else {
                    statusDiv.textContent = `❌ Error: ${data.error}`;
                    statusDiv.style.color = '#ff6b6b';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                statusDiv.textContent = '❌ Failed to post. Please try again.';
                statusDiv.style.color = '#ff6b6b';
            });
        }

        // Initialize both displays
        updateDisplay('women');
        updateDisplay('men ');
        updateOutfitPreview();
    </script>
</body>
</html>
