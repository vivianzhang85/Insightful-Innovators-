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
    <title>{{ shopping_area.name }} - Digital Closet</title>
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

        /* Gender Selection Screen */
        .gender-selection {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 60vh;
            gap: 40px;
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

        .gender-card h2 {
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

        /* Hide shopping section initially */
        .shopping-content {
            display: none;
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
            margin-bottom: 10px;
        }

        .stores-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }

        .store-badge {
            background: rgba(255, 215, 0, 0.2);
            color: #ffd700;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            border: 1px solid #ffd700;
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

        .post-section {
            margin-top: 60px;
            padding: 40px;
            background: #0a0a0a;
            border-radius: 15px;
            border-top: 3px solid #ffd700;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .post-section h2 {
            text-align: center;
            color: #ffd700;
            font-size: 2em;
            margin-bottom: 30px;
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

            .post-section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Welcome to {{ shopping_area.name }}!</h1>
            <p class="subtitle">{{ shopping_area.description }}</p>
        </header>

        <!-- Gender Selection Screen -->
        <div id="gender-selection" class="gender-selection">
            <div class="gender-card" onclick="selectGender('women')">
                <div class="gender-icon">👗</div>
                <h2>Her Look</h2>
                <p>Shop women's designer fashion</p>
            </div>

            <div class="gender-card" onclick="selectGender('men')">
                <div class="gender-icon">👔</div>
                <h2>His Look</h2>
                <p>Shop men's designer fashion</p>
            </div>
        </div>

        <!-- Shopping Content (Hidden Initially) -->
        <div id="shopping-content" class="shopping-content">
            <button class="back-button" onclick="resetSelection()">← Change Selection</button>

            <div class="area-info">
                <h2>📍 Shopping in {{ shopping_area.area }}</h2>
                <p>After your breakfast, explore these luxury stores:</p>
                <div class="stores-list">
                    {% for store in shopping_area.stores %}
                    <span class="store-badge">{{ store }}</span>
                    {% endfor %}
                </div>
            </div>

            <div class="wardrobe-section">
                <h2 class="section-title" id="section-title">Designer Look</h2>
                
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
                    <button class="btn" onclick="saveOutfit()">💾 Save</button>
                </div>

                <div class="status-message" id="status">Shop luxury!</div>
            </div>

            <!-- Post Section -->
            <div class="post-section">
                <h2>✨ Post Your {{ shopping_area.name }} Look ✨</h2>
                
                <div class="outfit-preview">
                    <h3>Your Selected Outfit:</h3>
                    <div class="preview-item">
                        <strong id="preview-title">Your Look:</strong>
                        <p id="preview-outfit"></p>
                    </div>
                </div>

                <div class="caption-section">
                    <label for="caption">Add a Caption (optional):</label>
                    <textarea id="caption" placeholder="What do you think about this look at {{ shopping_area.name }}?"></textarea>
                </div>

                <button class="post-button" onclick="postOutfit()">📸 Post Your {{ shopping_area.name }} Outfit</button>

                <div class="post-status" id="post-status"></div>
            </div>
        </div>
    </div>

    <script>
        const wardrobes = {
            women: {
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
            },
            men: {
                top: [
                    { name: 'Dress Shirt', image: 'https://via.placeholder.com/300x400/E0FFFF/000080?text=Dress+Shirt' },
                    { name: 'Polo Shirt', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Polo+Shirt' },
                    { name: 'Suit Jacket', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Suit+Jacket' },
                    { name: 'Sweater', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Sweater' },
                    { name: 'Blazer', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Blazer' }
                ],
                bottom: [
                    { name: 'Tailored Trousers', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Tailored+Trousers' },
                    { name: 'Dress Pants', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=Dress+Pants' },
                    { name: 'Chinos', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Chinos' },
                    { name: 'Suit Pants', image: 'https://via.placeholder.com/300x400/191970/FFFFFF?text=Suit+Pants' },
                    { name: 'Slacks', image: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Slacks' }
                ],
                shoes: [
                    { name: 'Oxford Shoes', image: 'https://via.placeholder.com/300x200/654321/FFFFFF?text=Oxford+Shoes' },
                    { name: 'Loafers', image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Loafers' },
                    { name: 'Derby Shoes', image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Derby+Shoes' },
                    { name: 'Dress Boots', image: 'https://via.placeholder.com/300x200/2F4F4F/FFFFFF?text=Dress+Boots' },
                    { name: 'Brogues', image: 'https://via.placeholder.com/300x200/8B7355/FFFFFF?text=Brogues' }
                ]
            }
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

        let selectedGender = null;
        let currentSelection = { top: 0, bottom: 0, shoes: 0 };

        function selectGender(gender) {
            selectedGender = gender;
            document.getElementById('gender-selection').style.display = 'none';
            document.getElementById('shopping-content').style.display = 'block';
            
            // Update title
            const title = gender === 'women' ? 'Her Designer Look' : 'His Designer Look';
            document.getElementById('section-title').textContent = title;
            document.getElementById('preview-title').textContent = gender === 'women' ? 'Her Look:' : 'His Look:';
            
            updateDisplay();
            updateOutfitPreview();
        }

        function resetSelection() {
            selectedGender = null;
            currentSelection = { top: 0, bottom: 0, shoes: 0 };
            document.getElementById('gender-selection').style.display = 'flex';
            document.getElementById('shopping-content').style.display = 'none';
            document.getElementById('caption').value = '';
            document.getElementById('post-status').textContent = '';
        }

        function updateDisplay() {
            if (!selectedGender) return;

            const topItem = wardrobes[selectedGender].top[currentSelection.top];
            const bottomItem = wardrobes[selectedGender].bottom[currentSelection.bottom];
            const shoesItem = wardrobes[selectedGender].shoes[currentSelection.shoes];

            document.getElementById('top-display').innerHTML = `<img src="${topItem.image}" alt="${topItem.name}">`;
            document.getElementById('bottom-display').innerHTML = `<img src="${bottomItem.image}" alt="${bottomItem.name}">`;
            document.getElementById('shoes-display').innerHTML = `<img src="${shoesItem.image}" alt="${shoesItem.name}">`;

            document.getElementById('top-name').textContent = topItem.name;
            document.getElementById('bottom-name').textContent = bottomItem.name;
            document.getElementById('shoes-name').textContent = shoesItem.name;

            const randomPhrase = phrases[selectedGender][Math.floor(Math.random() * phrases[selectedGender].length)];
            document.getElementById('status').textContent = randomPhrase;
        }

        function nextItem(category) {
            currentSelection[category] = (currentSelection[category] + 1) % wardrobes[selectedGender][category].length;
            updateDisplay();
            updateOutfitPreview();
        }

        function prevItem(category) {
            currentSelection[category] = (currentSelection[category] - 1 + wardrobes[selectedGender][category].length) % wardrobes[selectedGender][category].length;
            updateDisplay();
            updateOutfitPreview();
        }

        function randomOutfit() {
            currentSelection.top = Math.floor(Math.random() * wardrobes[selectedGender].top.length);
            currentSelection.bottom = Math.floor(Math.random() * wardrobes[selectedGender].bottom.length);
            currentSelection.shoes = Math.floor(Math.random() * wardrobes[selectedGender].shoes.length);
            updateDisplay();
            updateOutfitPreview();
            document.getElementById('status').textContent = "✨ Surprise! Pure luxury! ✨";
        }

        function saveOutfit() {
            const outfit = {
                top: wardrobes[selectedGender].top[currentSelection.top].name,
                bottom: wardrobes[selectedGender].bottom[currentSelection.bottom].name,
                shoes: wardrobes[selectedGender].shoes[currentSelection.shoes].name
            };
            console.log(`Saved ${selectedGender} outfit:`, outfit);
            document.getElementById('status').textContent = "💾 Outfit saved! Impeccable taste!";
        }

        function updateOutfitPreview() {
            if (!selectedGender) return;
            
            const outfit = `${wardrobes[selectedGender].top[currentSelection.top].name} + ${wardrobes[selectedGender].bottom[currentSelection.bottom].name} + ${wardrobes[selectedGender].shoes[currentSelection.shoes].name}`;
            document.getElementById('preview-outfit').textContent = outfit;
        }

        function postOutfit() {
            const statusDiv = document.getElementById('post-status');
            
            const outfitData = {
                gender: selectedGender,
                top: wardrobes[selectedGender].top[currentSelection.top].name,
                bottom: wardrobes[selectedGender].bottom[currentSelection.bottom].name,
                shoes: wardrobes[selectedGender].shoes[currentSelection.shoes].name,
                caption: document.getElementById('caption').value || '',
                shopping_area: "{{ shopping_area.name }}"
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
                    statusDiv.textContent = '✅ Posted! Shopping at {{ shopping_area.name }}!';
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
    </script>
</body>
</html>