
<!-- Upper East Side MET Museum Animation -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Metropolitan Museum of Art - NYC</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Garamond', 'Georgia', serif;
            background: linear-gradient(180deg, #87CEEB 0%, #B0E0E6 40%, #FFE4B5 100%);
            min-height: 100vh;
            overflow: hidden;
            position: relative;
        }

        /* Ground and street */
        .ground {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 35%;
            background: linear-gradient(180deg, #4a4a4a 0%, #2c2c2c 50%, #1a1a1a 100%);
            z-index: 2;
        }

        .sidewalk {
            position: absolute;
            bottom: 35%;
            width: 100%;
            height: 8%;
            background: linear-gradient(180deg, #d3d3d3 0%, #a9a9a9 100%);
            z-index: 3;
        }

        .grass {
            position: absolute;
            bottom: 43%;
            width: 100%;
            height: 5%;
            background: linear-gradient(180deg, #90EE90 0%, #2E8B57 100%);
            z-index: 3;
        }

        /* Animated clouds */
        .cloud {
            position: absolute;
            background: rgba(255, 255, 255, 0.85);
            border-radius: 100px;
            animation: cloudFloat 40s linear infinite;
            filter: blur(1px);
        }

        .cloud::before, .cloud::after {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.85);
            border-radius: 100px;
        }

        .cloud1 {
            width: 120px;
            height: 50px;
            top: 8%;
            left: -150px;
        }

        .cloud1::before {
            width: 60px;
            height: 60px;
            top: -30px;
            left: 15px;
        }

        .cloud1::after {
            width: 70px;
            height: 50px;
            top: -20px;
            right: 15px;
        }

        .cloud2 {
            width: 140px;
            height: 55px;
            top: 15%;
            left: -180px;
            animation-duration: 50s;
            animation-delay: 8s;
        }

        .cloud2::before {
            width: 70px;
            height: 70px;
            top: -35px;
            left: 20px;
        }

        .cloud2::after {
            width: 80px;
            height: 55px;
            top: -25px;
            right: 20px;
        }

        .cloud3 {
            width: 100px;
            height: 45px;
            top: 25%;
            left: -120px;
            animation-duration: 45s;
            animation-delay: 15s;
        }

        .cloud3::before {
            width: 50px;
            height: 50px;
            top: -25px;
            left: 12px;
        }

        .cloud3::after {
            width: 60px;
            height: 45px;
            top: -18px;
            right: 12px;
        }

        /* NYC Skyline background */
        .skyline-bg {
            position: absolute;
            bottom: 48%;
            left: 0;
            right: 0;
            height: 250px;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            opacity: 0.25;
            z-index: 1;
            gap: 15px;
            padding: 0 50px;
        }

        .bg-building {
            background: linear-gradient(180deg, #2c3e50 0%, #1a252f 100%);
            position: relative;
            animation: buildingRise 1.5s ease-out both;
            box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .bg-building::after {
            content: '';
            position: absolute;
            top: 0;
            left: 8%;
            right: 8%;
            height: 100%;
            background: repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 12px,
                rgba(255, 215, 0, 0.15) 12px,
                rgba(255, 215, 0, 0.15) 14px
            );
        }

        .bg-building1 { width: 80px; height: 180px; animation-delay: 0.1s; }
        .bg-building2 { width: 70px; height: 220px; animation-delay: 0.2s; }
        .bg-building3 { width: 90px; height: 160px; animation-delay: 0.3s; }
        .bg-building4 { width: 75px; height: 240px; animation-delay: 0.4s; }
        .bg-building5 { width: 85px; height: 190px; animation-delay: 0.5s; }
        .bg-building6 { width: 80px; height: 210px; animation-delay: 0.6s; }

        /* The Met Building - Main Structure */
        .met-complex {
            position: absolute;
            bottom: 48%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            animation: metAppear 2s ease-out 0.8s both;
        }

        /* Main building */
        .met-main {
            width: 700px;
            height: 320px;
            background: linear-gradient(180deg, #f5e6d3 0%, #d9c7b0 50%, #c9b79c 100%);
            position: relative;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        /* Roof */
        .met-roof {
            position: absolute;
            top: -25px;
            left: -15px;
            right: -15px;
            height: 25px;
            background: linear-gradient(180deg, #8b7355 0%, #6b5845 100%);
            clip-path: polygon(0 100%, 5% 0, 95% 0, 100% 100%);
        }

        /* Pediment (triangular top) */
        .pediment {
            position: absolute;
            top: -80px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 200px solid transparent;
            border-right: 200px solid transparent;
            border-bottom: 60px solid #c9b79c;
            filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
        }

        /* Classical columns */
        .colonnade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 280px;
            display: flex;
            justify-content: space-evenly;
            padding: 0 40px;
            align-items: flex-end;
        }

        .column {
            width: 50px;
            height: 100%;
            background: linear-gradient(90deg, #e8dcc8 0%, #f5f5f0 50%, #e8dcc8 100%);
            position: relative;
            box-shadow: 
                inset 3px 0 8px rgba(0, 0, 0, 0.15),
                inset -3px 0 8px rgba(0, 0, 0, 0.15);
            border-radius: 3px 3px 0 0;
        }

        .column::before {
            content: '';
            position: absolute;
            top: -15px;
            left: -5px;
            right: -5px;
            height: 18px;
            background: linear-gradient(180deg, #f5f5f0 0%, #e8dcc8 100%);
            border-radius: 3px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
        }

        .column::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -5px;
            right: -5px;
            height: 15px;
            background: #d9c7b0;
            border-radius: 2px;
        }

        /* Fluting on columns */
        .column-flute {
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            background: repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 8px,
                rgba(0, 0, 0, 0.05) 8px,
                rgba(0, 0, 0, 0.05) 9px
            );
        }

        /* Entrance */
        .met-entrance {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            height: 240px;
            background: linear-gradient(180deg, #3a2f24 0%, #1a1410 100%);
            border-radius: 8px 8px 0 0;
            box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.8);
            z-index: 10;
        }

        .entrance-arch {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            height: 220px;
            background: linear-gradient(180deg, #2c2416 0%, #0a0806 100%);
            border-radius: 80px 80px 0 0;
        }

        /* Windows */
        .window {
            position: absolute;
            width: 35px;
            height: 45px;
            background: linear-gradient(135deg, #4a6fa5 0%, #2c4870 100%);
            border: 3px solid #8b7355;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .window1 { top: 40px; left: 60px; }
        .window2 { top: 40px; right: 60px; }
        .window3 { top: 120px; left: 60px; }
        .window4 { top: 120px; right: 60px; }

        /* Grand stairs */
        .grand-stairs {
            position: absolute;
            bottom: -120px;
            left: 50%;
            transform: translateX(-50%);
            width: 750px;
            z-index: 4;
        }

        .stair-level {
            width: 100%;
            height: 15px;
            background: linear-gradient(180deg, #c9c5ba 0%, #a49f94 100%);
            margin-bottom: 5px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
            position: relative;
        }

        .stair-level::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
        }

        /* Banner flags */
        .banner {
            position: absolute;
            width: 100px;
            height: 180px;
            background: linear-gradient(180deg, #8B0000 0%, #6B0000 100%);
            top: 60px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
            animation: bannerWave 4s ease-in-out infinite;
        }

        .banner-left {
            left: 20px;
        }

        .banner-right {
            right: 20px;
            animation-delay: 2s;
        }

        .banner::after {
            content: 'MET';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
            color: #FFD700;
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 0.3rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Street lamps */
        .street-lamp {
            position: absolute;
            bottom: 48%;
            width: 8px;
            height: 100px;
            background: linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%);
            z-index: 6;
        }

        .lamp-top {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 30px;
            background: radial-gradient(circle, #ffe87c 0%, #ffb347 70%);
            border-radius: 50%;
            box-shadow: 0 0 40px rgba(255, 232, 124, 0.9);
            animation: lampFlicker 3s ease-in-out infinite;
        }

        .lamp-left { left: 15%; }
        .lamp-right { right: 15%; }

        /* Yellow taxis */
        .taxi {
            position: absolute;
            bottom: 35%;
            width: 80px;
            height: 40px;
            background: linear-gradient(180deg, #FFD700 0%, #FFC700 100%);
            border-radius: 5px 5px 3px 3px;
            animation: taxiDrive 20s linear infinite;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            z-index: 7;
        }

        .taxi-top {
            position: absolute;
            top: -12px;
            left: 25px;
            width: 40px;
            height: 15px;
            background: linear-gradient(180deg, #FFD700 0%, #FFC700 100%);
            border-radius: 3px 3px 0 0;
        }

        .taxi-sign {
            position: absolute;
            top: -18px;
            left: 32px;
            width: 26px;
            height: 8px;
            background: #FF6B6B;
            border-radius: 2px;
            font-size: 5px;
            text-align: center;
            color: white;
            font-weight: bold;
            line-height: 8px;
        }

        .taxi-wheels {
            position: absolute;
            bottom: -8px;
            width: 100%;
        }

        .wheel {
            position: absolute;
            width: 16px;
            height: 16px;
            background: #2c2c2c;
            border-radius: 50%;
            border: 2px solid #1a1a1a;
        }

        .wheel-front { left: 10px; }
        .wheel-back { right: 10px; }

        .taxi1 { 
            animation-duration: 18s; 
        }
        
        .taxi2 { 
            animation-duration: 22s; 
            animation-delay: 6s;
            bottom: 36%;
        }

        /* Trees */
        .tree {
            position: absolute;
            bottom: 48%;
            z-index: 4;
        }

        .tree-trunk {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 15px;
            height: 60px;
            background: linear-gradient(90deg, #5c4033 0%, #8B4513 50%, #5c4033 100%);
        }

        .tree-foliage {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, #228B22 0%, #006400 100%);
            border-radius: 50%;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .tree-left { left: 8%; }
        .tree-right { right: 8%; }

        /* People silhouettes */
        .person {
            position: absolute;
            bottom: 43%;
            width: 15px;
            height: 35px;
            background: linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 60%, #2c2c2c 100%);
            border-radius: 8px 8px 3px 3px;
            animation: personWalk 15s linear infinite;
            z-index: 6;
        }

        .person-head {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 12px;
            height: 12px;
            background: #d4a574;
            border-radius: 50%;
        }

        .person1 { animation-duration: 25s; left: -20px; }
        .person2 { animation-duration: 30s; animation-delay: 8s; left: -20px; }
        .person3 { animation-duration: 28s; animation-delay: 15s; left: -20px; }

        /* Title */
        .title-container {
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 10;
            animation: titleFade 2.5s ease-out both;
        }

        .main-title {
            font-size: 5rem;
            color: #8B0000;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.3);
            letter-spacing: 0.8rem;
            margin-bottom: 15px;
            font-weight: 300;
        }

        .subtitle {
            font-size: 1.8rem;
            color: #2c4870;
            letter-spacing: 0.5rem;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
            font-weight: 400;
        }

        /* Animations */
        @keyframes cloudFloat {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(100vw + 200px)); }
        }

        @keyframes buildingRise {
            0% { transform: scaleY(0); opacity: 0; }
            100% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes metAppear {
            0% { opacity: 0; transform: translateX(-50%) translateY(100px) scale(0.9); }
            100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }

        @keyframes taxiDrive {
            0% { left: -100px; }
            100% { left: calc(100% + 100px); }
        }

        @keyframes personWalk {
            0% { left: -20px; }
            100% { left: calc(100% + 20px); }
        }

        @keyframes titleFade {
            0% { opacity: 0; transform: translateX(-50%) translateY(-50px); }
            100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes bannerWave {
            0%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(1.02); }
        }

        @keyframes lampFlicker {
            0%, 100% { opacity: 1; box-shadow: 0 0 40px rgba(255, 232, 124, 0.9); }
            50% { opacity: 0.85; box-shadow: 0 0 30px rgba(255, 232, 124, 0.7); }
        }
    </style>
</head>
<body>
    <!-- Clouds -->
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud3"></div>

    <!-- Title -->
    <div class="title-container">
        <h1 class="main-title">THE MET</h1>
        <p class="subtitle">METROPOLITAN MUSEUM OF ART</p>
    </div>

    <!-- Background NYC Skyline -->
    <div class="skyline-bg">
        <div class="bg-building bg-building1"></div>
        <div class="bg-building bg-building2"></div>
        <div class="bg-building bg-building3"></div>
        <div class="bg-building bg-building4"></div>
        <div class="bg-building bg-building5"></div>
        <div class="bg-building bg-building6"></div>
    </div>

    <!-- Trees -->
    <div class="tree tree-left">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
    </div>
    <div class="tree tree-right">
        <div class="tree-trunk"></div>
        <div class="tree-foliage"></div>
    </div>

    <!-- The Met Building Complex -->
    <div class="met-complex">
        <div class="met-main">
            <div class="pediment"></div>
            <div class="met-roof"></div>
            
            <!-- Banner flags -->
            <div class="banner banner-left"></div>
            <div class="banner banner-right"></div>
            
            <!-- Windows -->
            <div class="window window1"></div>
            <div class="window window2"></div>
            <div class="window window3"></div>
            <div class="window window4"></div>
            
            <!-- Colonnade -->
            <div class="colonnade">
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
                <div class="column"><div class="column-flute"></div></div>
            </div>
            
            <!-- Main entrance -->
            <div class="met-entrance">
                <div class="entrance-arch"></div>
            </div>
        </div>
        
        <!-- Grand stairs -->
        <div class="grand-stairs">
            <div class="stair-level"></div>
            <div class="stair-level"></div>
            <div class="stair-level"></div>
            <div class="stair-level"></div>
            <div class="stair-level"></div>
            <div class="stair-level"></div>
        </div>
    </div>

    <!-- Street lamps -->
    <div class="street-lamp lamp-left">
        <div class="lamp-top"></div>
    </div>
    <div class="street-lamp lamp-right">
        <div class="lamp-top"></div>
    </div>

    <!-- Yellow taxis -->
    <div class="taxi taxi1">
        <div class="taxi-top"></div>
        <div class="taxi-sign">TAXI</div>
        <div class="taxi-wheels">
            <div class="wheel wheel-front"></div>
            <div class="wheel wheel-back"></div>
        </div>
    </div>
    <div class="taxi taxi2">
        <div class="taxi-top"></div>
        <div class="taxi-sign">TAXI</div>
        <div class="taxi-wheels">
            <div class="wheel wheel-front"></div>
            <div class="wheel wheel-back"></div>
        </div>
    </div>

    <!-- Walking people -->
    <div class="person person1">
        <div class="person-head"></div>
    </div>
    <div class="person person2">
        <div class="person-head"></div>
    </div>
    <div class="person person3">
        <div class="person-head"></div>
    </div>

    <!-- Ground layers -->
    <div class="grass"></div>
    <div class="sidewalk"></div>
    <div class="ground"></div>
</body>
</html>