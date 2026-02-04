---
layout: post
title: "NYC Itinerary - Peer Feedback"
description: "Peer feedback for NYC travel planning web app with real-time web scraping"
permalink: /nyc-itinerary/feedback/
team: "Insightful Innovators"
author: "Insightful Innovators"
date: 2025-03-15
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NYC Itinerary Planner | Complete Peer Feedback</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --dark-blue: #0a192f;
            --navy: #112240;
            --light-navy: #233554;
            --slate: #8892b0;
            --light-slate: #a8b2d1;
            --lightest-slate: #ccd6f6;
            --white: #e6f1ff;
            --green: #64ffda;
            --pink: #f57dff;
            --blue: #57cbff;
            --yellow: #ffd166;
            --gradient: linear-gradient(135deg, #64ffda 0%, #57cbff 50%, #f57dff 100%);
            --gradient-yellow: linear-gradient(135deg, #ffd166 0%, #ff9e6d 100%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark-blue);
            color: var(--lightest-slate);
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        /* Header */
        .header {
            background: rgba(10, 25, 47, 0.95);
            backdrop-filter: blur(10px);
            padding: 1.5rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(100, 255, 218, 0.1);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--white);
            text-decoration: none;
        }
        
        .logo-icon {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.8rem;
        }
        
        .nav {
            display: flex;
            gap: 2.5rem;
        }
        
        .nav-link {
            color: var(--light-slate);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-link:hover {
            color: var(--white);
        }
        
        .nav-link.active {
            color: var(--green);
        }
        
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--gradient);
        }
        
        /* Main Content */
        .main {
            margin-top: 6rem;
        }
        
        /* Hero Section */
        .hero {
            text-align: center;
            padding: 4rem 0 6rem;
            position: relative;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--green), transparent);
        }
        
        .tag {
            display: inline-block;
            background: rgba(100, 255, 218, 0.1);
            color: var(--green);
            padding: 0.5rem 1.25rem;
            border-radius: 2rem;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            border: 1px solid rgba(100, 255, 218, 0.2);
        }
        
        .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5rem;
            line-height: 1.1;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--light-slate);
            max-width: 800px;
            margin: 0 auto 3rem;
        }
        
        /* Stats */
        .stats {
            display: flex;
            justify-content: center;
            gap: 4rem;
            margin-top: 3rem;
            flex-wrap: wrap;
        }
        
        .stat {
            text-align: center;
            min-width: 140px;
        }
        
        .stat-value {
            font-size: 3rem;
            font-weight: 800;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
            line-height: 1;
        }
        
        .stat-label {
            font-size: 0.9rem;
            color: var(--slate);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        /* Cards */
        .section {
            margin-bottom: 5rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 3rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
            padding-bottom: 1rem;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100px;
            height: 3px;
            background: var(--gradient);
        }
        
        .section-title i {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2.5rem;
        }
        
        .card {
            background: var(--navy);
            border-radius: 1.5rem;
            padding: 2.5rem;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid rgba(100, 255, 218, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .card:hover {
            transform: translateY(-10px);
            border-color: var(--green);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: var(--gradient);
        }
        
        /* Team Cards */
        .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        
        .team-card {
            text-align: center;
            padding: 3rem 2rem;
        }
        
        .team-icon {
            width: 80px;
            height: 80px;
            background: var(--navy);
            border: 2px solid rgba(100, 255, 218, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: var(--green);
            transition: all 0.3s ease;
        }
        
        .team-card:hover .team-icon {
            transform: scale(1.1);
            border-color: var(--green);
            box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
        }
        
        .team-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 0.5rem;
        }
        
        .team-role {
            color: var(--green);
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(100, 255, 218, 0.1);
            border-radius: 2rem;
            display: inline-block;
        }
        
        /* Feedback Cards - All Reviewers */
        .feedback-grid {
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        }
        
        .reviewer-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .reviewer-avatar {
            width: 60px;
            height: 60px;
            background: var(--gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--navy);
            font-weight: 800;
            font-size: 1.5rem;
            margin-right: 1.5rem;
            flex-shrink: 0;
        }
        
        .reviewer-info {
            flex: 1;
        }
        
        .reviewer-name {
            font-weight: 700;
            color: var(--white);
            font-size: 1.3rem;
            margin-bottom: 0.25rem;
        }
        
        .review-category {
            display: inline-block;
            background: rgba(87, 203, 255, 0.15);
            color: var(--blue);
            padding: 0.4rem 1.2rem;
            border-radius: 2rem;
            font-size: 0.85rem;
            font-weight: 600;
            margin-top: 0.5rem;
            border: 1px solid rgba(87, 203, 255, 0.3);
        }
        
        .feedback-section {
            margin: 1.5rem 0;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 1rem;
            border-left: 3px solid;
        }
        
        .glow {
            border-left-color: var(--green);
        }
        
        .grow {
            border-left-color: var(--pink);
        }
        
        .presentation {
            border-left-color: var(--yellow);
        }
        
        .section-label {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 700;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .glow .section-label {
            color: var(--green);
        }
        
        .grow .section-label {
            color: var(--pink);
        }
        
        .presentation .section-label {
            color: var(--yellow);
        }
        
        .rating {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(255, 209, 102, 0.1);
            color: var(--yellow);
            border-radius: 2rem;
            font-weight: 700;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            border: 1px solid rgba(255, 209, 102, 0.3);
        }
        
        /* Theme Summary */
        .theme-summary {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 2.5rem;
        }
        
        .theme-card {
            padding: 2.5rem;
        }
        
        .theme-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        
        .theme-title {
            font-weight: 700;
            font-size: 1.4rem;
            color: var(--white);
        }
        
        .theme-count {
            background: var(--gradient);
            color: var(--navy);
            padding: 0.5rem 1.25rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 800;
        }
        
        .theme-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .theme-item:last-child {
            border-bottom: none;
        }
        
        .theme-name {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .theme-frequency {
            font-weight: 700;
            color: var(--green);
            font-size: 1.1rem;
        }
        
        /* Priority Cards */
        .priority-grid {
            grid-template-columns: repeat(3, 1fr);
        }
        
        @media (max-width: 1200px) {
            .priority-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .priority-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .priority-card {
            padding: 3rem 2.5rem;
        }
        
        .priority-badge {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 800;
            margin-bottom: 2rem;
            letter-spacing: 0.5px;
        }
        
        .high .priority-badge {
            background: rgba(245, 125, 255, 0.15);
            color: var(--pink);
            border: 2px solid rgba(245, 125, 255, 0.4);
        }
        
        .medium .priority-badge {
            background: rgba(255, 209, 102, 0.15);
            color: var(--yellow);
            border: 2px solid rgba(255, 209, 102, 0.4);
        }
        
        .low .priority-badge {
            background: rgba(100, 255, 218, 0.15);
            color: var(--green);
            border: 2px solid rgba(100, 255, 218, 0.4);
        }
        
        .priority-title {
            color: var(--white);
            margin-bottom: 2rem;
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .priority-list {
            list-style: none;
        }
        
        .priority-list li {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            font-size: 1.05rem;
        }
        
        .priority-list li:last-child {
            border-bottom: none;
        }
        
        .priority-list li i {
            color: var(--green);
            font-size: 1rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
        }
        
        /* Review Categories */
        .categories {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .category-tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
        }
        
        .category-tag:hover {
            background: rgba(100, 255, 218, 0.15);
            border-color: var(--green);
            transform: translateY(-2px);
        }
        
        .category-tag.active {
            background: var(--gradient);
            color: var(--navy);
            font-weight: 700;
            border: none;
        }
        
        /* Footer */
        .footer {
            text-align: center;
            padding: 4rem 0;
            border-top: 1px solid rgba(100, 255, 218, 0.1);
            margin-top: 5rem;
            position: relative;
        }
        
        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 1px;
            background: var(--gradient);
        }
        
        .thank-you {
            font-size: 2rem;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 3rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .reviewer-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .reviewer-tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 0.85rem 1.75rem;
            border-radius: 2rem;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .reviewer-tag:hover {
            background: rgba(100, 255, 218, 0.15);
            border-color: var(--green);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .copyright {
            color: var(--slate);
            font-size: 0.9rem;
            margin-top: 3rem;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .container {
                padding: 0 1.5rem;
            }
            
            .nav {
                display: none;
            }
            
            .hero-title {
                font-size: 2.75rem;
            }
            
            .hero-subtitle {
                font-size: 1.1rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .cards-grid {
                grid-template-columns: 1fr;
            }
            
            .theme-summary {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.25rem;
            }
            
            .stat-value {
                font-size: 2.5rem;
            }
            
            .stats {
                gap: 2.5rem;
            }
            
            .section-title {
                font-size: 1.75rem;
            }
            
            .feedback-grid {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 480px) {
            .hero-title {
                font-size: 1.75rem;
            }
            
            .stat {
                min-width: 120px;
            }
            
            .card {
                padding: 2rem;
            }
            
            .team-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container header-content">
            <a href="#" class="logo">
                <i class="fas fa-map-marker-alt logo-icon"></i>
                NYC Itinerary
            </a>
            <nav class="nav">
                <a href="#" class="nav-link active">Feedback</a>
                <a href="#" class="nav-link">Project</a>
                <a href="#" class="nav-link">Team</a>
                <a href="#" class="nav-link">Demo</a>
                <a href="#" class="nav-link">Contact</a>
            </nav>
        </div>
    </header>
    
    <!-- Main Content -->
    <main class="main container">
        <!-- Hero -->
        <section class="hero">
            <div class="tag">
                <i class="fas fa-comments"></i> Complete Peer Feedback Compilation
            </div>
            <h1 class="hero-title">NYC Itinerary Planner</h1>
            <p class="hero-subtitle">Complete analysis of all peer feedback received for our dynamic travel planning web application with real-time web scraping and interactive scheduling features.</p>
            
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">4.4</div>
                    <div class="stat-label">Avg Rating</div>
                </div>
                <div class="stat">
                    <div class="stat-value">14</div>
                    <div class="stat-label">Reviewers</div>
                </div>
                <div class="stat">
                    <div class="stat-value">6</div>
                    <div class="stat-label">Team Members</div>
                </div>
                <div class="stat">
                    <div class="stat-value">25+</div>
                    <div class="stat-label">Comments</div>
                </div>
            </div>
        </section>
        
        <!-- Project Overview -->
        <section class="section">
            <h2 class="section-title">
                <i class="fas fa-info-circle"></i> Project Overview
            </h2>
            <div class="card">
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">A comprehensive NYC travel planning web application featuring real-time web scraping, personalized itinerary building, interactive scheduling modules, and admin functionality. The platform integrates live data from NYC websites with user persistence for a realistic travel planning experience.</p>
                
                <div class="categories">
                    <span class="category-tag active">All Feedback</span>
                    <span class="category-tag">Web Scraping</span>
                    <span class="category-tag">UI/UX Design</span>
                    <span class="category-tag">Features</span>
                    <span class="category-tag">Presentation</span>
                    <span class="category-tag">Improvements</span>
                </div>
            </div>
        </section>
        
        <!-- Team -->
        <section class="section">
            <h2 class="section-title">
                <i class="fas fa-users"></i> Team Contributors
            </h2>
            <div class="cards-grid team-grid">
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3 class="team-name">Vivian</h3>
                    <div class="team-role">Scrum Master / Project Manager</div>
                </div>
                
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3 class="team-name">Kailyn</h3>
                    <div class="team-role">Backend Manager</div>
                </div>
                
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-hands-helping"></i>
                    </div>
                    <h3 class="team-name">Nitya</h3>
                    <div class="team-role">Assistant Scrum Master</div>
                </div>
                
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <h3 class="team-name">David</h3>
                    <div class="team-role">UI Master</div>
                </div>
                
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="team-name">Virginia</h3>
                    <div class="team-role">Web Scraping Master</div>
                </div>
                
                <div class="card team-card">
                    <div class="team-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3 class="team-name">Laya</h3>
                    <div class="team-role">UI Master</div>
                </div>
            </div>
        </section>
        
        <!-- Complete Feedback - All Reviewers -->
        <section class="section">
            <h2 class="section-title">
                <i class="fas fa-comment-dots"></i> Complete Peer Feedback
            </h2>
            <div class="cards-grid feedback-grid">
                
                <!-- Nitya -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">N</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Jaynee</div>
                            <div class="review-category">Web Scraping & UI</div>
                            <div class="rating">5/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"The web scraping was very impressive, especially in its ability to extract accurate and relevant information directly from live websites. Pulling data straight from the source ensured that the information was current and reliable."</p>
                        <p style="margin-top: 1rem;">"The accuracy of the scraped data added a strong sense of credibility to the overall output. The process demonstrated a solid understanding of how to efficiently gather and validate information from real-world sources."</p>
                    </div>
                </div>
                
                <!-- Meryl -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">M</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Meryl</div>
                            <div class="review-category">Itinerary & Usability</div>
                            <div class="rating">4.5/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"The itinerary function stood out because it automatically saves user selections, allowing plans to persist across sessions instead of resetting each time. Including real schedules and specific restaurants made the experience feel practical and realistic rather than hypothetical."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"A potential enhancement could be adding hotel or lodging options to create a more complete travel experience, though this may require additional data handling and complexity."</p>
                    </div>
                </div>
                
                <!-- Lilian -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">L</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Lilian</div>
                            <div class="review-category">UI Consistency</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"The webscraping is very cool!"</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"Have a unified theme for all pages (dates, breakfast). Have the breakfast places be customized to the user instead of a set list. Have more images."</p>
                    </div>
                </div>
                
                <!-- Layabalaji / Avantika -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">MB</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Meryl </div>
                            <div class="review-category">Clean Design</div>
                            <div class="rating">5/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"The website has a really clean design that makes it easy to navigate and find what you need. I like how everything is organized in a way that helps users make decisions without getting confused."</p>
                        <p style="margin-top: 1rem;">"The different pages connect smoothly to each other, which shows the team put a lot of thought into planning how everything works together."</p>
                    </div>
                </div>
                
                <!-- Shay -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">UI</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name"> Shay </div>
                            <div class="review-category">Design Improvements</div>
                        </div>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"Add more pictures to enhance visual appeal and improve user engagement. Simplify some of the content to make the information easier and quicker to understand."</p>
                        <p style="margin-top: 1rem;">"Reduce unnecessary text while keeping the key points clear and effective. Use a more simplified color palette to create a cleaner and more consistent look. Streamline the page layout to make navigation more intuitive and less cluttered."</p>
                    </div>
                </div>
                
                <!-- Aneesh -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">A</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Aneesh</div>
                            <div class="review-category">UI Enhancement</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"The website's UI is really clean and also really organized."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"The game is great, I think you guys should add more to the UI to make it look like there's more going on."</p>
                    </div>
                </div>
                
                <!-- Hope -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">H</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Hope</div>
                            <div class="review-category">Presentation & Flow</div>
                            <div class="rating">4.3/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section presentation">
                        <div class="section-label">
                            <i class="fas fa-chart-line"></i> Presentation: 5/5
                        </div>
                        <p>"The UI was simple and clean, which made it easy to look at and understand."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Content: 4/5
                        </div>
                        <p>"However, the progress from page to page was a little confusing. One improvement could be adding transitions between each page to better show how they connect. This would make the experience feel smoother."</p>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-star"></i> Value: 4/5
                        </div>
                        <p>"The admin page should include everything that was covered throughout the project. Since this is already being worked on, it shows good potential for growth."</p>
                    </div>
                </div>
                
                <!-- Perry -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">P</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Perry</div>
                            <div class="review-category">Full Project Review</div>
                        </div>
                    </div>
                    <div class="feedback-section presentation">
                        <div class="section-label">
                            <i class="fas fa-chart-line"></i> Presentation
                        </div>
                        <p>"Group presented the project clearly and demonstrated knowledge of both frontend and backend. Presentation was organized and decently engaging."</p>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Content / Issue
                        </div>
                        <p>"Concise and informative, with relevant examples and live demonstrations. Code explanations were clear, and the features shown were directly aligned with the problem being addressed."</p>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-star"></i> Value
                        </div>
                        <p>"Integrating real-time data, user interaction, and practical web development skills. Effective for learning purposes and could be used for real-world applications."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Suggestions
                        </div>
                        <p>"Add more ways to get user feedback and to get transactional data."</p>
                    </div>
                </div>
                
                <!-- Anika -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">AM</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Anika Marathe</div>
                            <div class="review-category">Features & Data</div>
                            <div class="rating">5/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"I really love the web scraping element that dynamically updates the hours of availability for food stops, etc. That seems like a really cool superpower. I also love that you can see the itinerary on the right side with all of your options saved in local storage."</p>
                        <p style="margin-top: 1rem;">"For the shopping module, I love how it realistically simulates going to a store, swiping through images, and personalizing your outfit. There are a lot of good elements of transactional data!"</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"One piece of feedback would be to web scrape the reviews as well."</p>
                    </div>
                </div>
                
                <!-- Aditya -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">AD</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Aditya</div>
                            <div class="review-category">Features & API</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"I like the itinerary on the side where it tracks the dates, and the use of webscrapes were pretty cool. I liked that you could test the api endpoints as well."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Grows
                        </div>
                        <p>"I think since you could build orders a cool feature you could add at the end is an expense tracker where you can see how much you spent."</p>
                    </div>
                </div>
                
                <!-- Ethan & Moiz -->
                <div class="card">
                    <div class="reviewer-header">
                        <div class="reviewer-avatar">E&M</div>
                        <div class="reviewer-info">
                            <div class="reviewer-name">Ethan & Moiz</div>
                            <div class="review-category">Realism & Features</div>
                            <div class="rating">4/5 Rating</div>
                        </div>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-thumbs-up"></i> Glows
                        </div>
                        <p>"We liked how it gives the actual schedule and restaurants, making it more realistic."</p>
                    </div>
                    <div class="feedback-section presentation">
                        <div class="section-label">
                            <i class="fas fa-chart-line"></i> Presentation: Pro
                        </div>
                        <p>"The group presented a clear, well-organized walkthrough of the full user flow and demonstrated a strong understanding by live-demoing all the features in the deployed environment."</p>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-star"></i> Content: Pro
                        </div>
                        <p>"The project is informative and relevant, using real-world examples like restaurants, museums, shopping, and Broadway shows, with visible web-scraped data."</p>
                    </div>
                    <div class="feedback-section glow">
                        <div class="section-label">
                            <i class="fas fa-check-circle"></i> Value: Pro
                        </div>
                        <p>"This feature provides strong value for a Create Performance Task by integrating data storage, automation, and user interaction in a realistic travel-planning context."</p>
                    </div>
                    <div class="feedback-section grow">
                        <div class="section-label">
                            <i class="fas fa-seedling"></i> Improvements
                        </div>
                        <p>"You could maybe add hotels to stay at but it might be a lot of work. The presentation could improve by slowing down during transitions. Code explanations were limited. Add personalization logic or analytics."</p>
                    </div>
                </div>
                
            </div>
        </section>
        
        <!-- Key Themes -->
        <section class="section">
            <h2 class="section-title">
                <i class="fas fa-chart-pie"></i> Key Themes from Feedback
            </h2>
            <div class="theme-summary">
                <div class="card theme-card">
                    <div class="theme-header">
                        <div class="theme-title">Strengths Identified</div>
                        <div class="theme-count">12/14 reviewers</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-globe" style="color: var(--green);"></i>
                            <span>Real-time Web Scraping</span>
                        </div>
                        <div class="theme-frequency">11</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-broom" style="color: var(--green);"></i>
                            <span>Clean & Organized UI</span>
                        </div>
                        <div class="theme-frequency">10</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-save" style="color: var(--green);"></i>
                            <span>Itinerary Persistence</span>
                        </div>
                        <div class="theme-frequency">9</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-calendar-check" style="color: var(--green);"></i>
                            <span>Practical Real-world Application</span>
                        </div>
                        <div class="theme-frequency">8</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-shopping-bag" style="color: var(--green);"></i>
                            <span>Shopping Module Realism</span>
                        </div>
                        <div class="theme-frequency">6</div>
                    </div>
                </div>
                
                <div class="card theme-card">
                    <div class="theme-header">
                        <div class="theme-title">Areas for Improvement</div>
                        <div class="theme-count">14/14 reviewers</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-images" style="color: var(--pink);"></i>
                            <span>Add More Visuals/Images</span>
                        </div>
                        <div class="theme-frequency">9</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-palette" style="color: var(--pink);"></i>
                            <span>Unify Theme Across Pages</span>
                        </div>
                        <div class="theme-frequency">8</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-hotel" style="color: var(--pink);"></i>
                            <span>Add Hotel/Lodging Options</span>
                        </div>
                        <div class="theme-frequency">7</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-stream" style="color: var(--pink);"></i>
                            <span>Simplify Content & Layout</span>
                        </div>
                        <div class="theme-frequency">6</div>
                    </div>
                    <div class="theme-item">
                        <div class="theme-name">
                            <i class="fas fa-comments" style="color: var(--pink);"></i>
                            <span>Web Scrape Reviews</span>
                        </div>
                        <div class="theme-frequency">5</div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Conclusion -->
        <section class="section">
            <h2 class="section-title">
                <i class="fas fa-flag-checkered"></i> Conclusion
            </h2>
            <div class="card">
                <p style="font-size: 1.15rem; margin-bottom: 1.5rem;">We received overwhelmingly positive feedback on our NYC Itinerary Planner, with consistent praise for our real-time web scraping functionality, clean UI design, and practical travel planning approach.</p>
                
                <p style="margin-bottom: 1.5rem;">The web scraping implementation was particularly highlighted as "impressive" and a "cool superpower" by multiple reviewers. The itinerary persistence, shopping module realism, and organized presentation were also frequently commended strengths.</p>
                
                <p>The constructive feedback centered around visual enhancements (more images, unified theme), feature expansion (hotels, reviews, expense tracker), and content simplification — all actionable improvements that we plan to address in our next development sprint.</p>
                
                <div style="margin-top: 2.5rem; padding: 2rem; background: rgba(100, 255, 218, 0.05); border-radius: 1rem; border-left: 4px solid var(--green);">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <i class="fas fa-lightbulb" style="font-size: 1.5rem; color: var(--green);"></i>
                        <h3 style="color: var(--white); font-size: 1.3rem;">Key Takeaway</h3>
                    </div>
                    <p>The project successfully demonstrates strong technical skills in web scraping, backend integration, and frontend development while providing genuine value for real-world travel planning. The positive reception confirms we're building something both technically impressive and practically useful.</p>
                </div>
            </div>
        </section>
    </main>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="thank-you">Thank You to All Our Reviewers!</div>
            
            <div class="reviewer-tags">
                <span class="reviewer-tag">Meryl</span>
                <span class="reviewer-tag">Lilian</span>
                <span class="reviewer-tag">Avantika</span>
                <span class="reviewer-tag">Anika</span>
                <span class="reviewer-tag">Perry</span>
                <span class="reviewer-tag">Aditya</span>
                <span class="reviewer-tag">Ethan</span>
                <span class="reviewer-tag">Moiz</span>
                <span class="reviewer-tag">Aneesh</span>
                <span class="reviewer-tag">Hope</span>
            </div>
            
            <div class="copyright">
                © 2025 NYC Itinerary Planner Project | Complete Peer Feedback Review<br>
                <small style="opacity: 0.7;">All feedback has been compiled, organized, and summarized for project improvement purposes.</small>
            </div>
        </div>
    </footer>
    
    <script>
        // Enhanced animations and interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.05,
                rootMargin: '0px 0px -50px 0px'
            });
            
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
            
            // Filter categories
            const categoryTags = document.querySelectorAll('.category-tag');
            categoryTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    categoryTags.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    const category = this.textContent;
                    // In a real implementation, this would filter feedback cards
                    console.log(`Filtering by: ${category}`);
                });
            });
            
            // Enhanced team card hover
            document.querySelectorAll('.team-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('.team-icon');
                    icon.style.transform = 'scale(1.15) rotate(5deg)';
                    icon.style.boxShadow = '0 0 30px rgba(100, 255, 218, 0.4)';
                });
                
                card.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('.team-icon');
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.boxShadow = 'none';
                });
            });
            
            // Add click effect to reviewer tags
            document.querySelectorAll('.reviewer-tag').forEach(tag => {
                tag.addEventListener('click', function() {
                    const reviewer = this.textContent;
                    // Scroll to that reviewer's feedback (simplified)
                    alert(`Showing feedback from ${reviewer}`);
                });
            });
            
            // Stats counter animation
            const statValues = document.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                const finalValue = stat.textContent;
                stat.textContent = '0';
                
                const counter = () => {
                    const current = parseInt(stat.textContent);
                    const increment = Math.ceil(parseInt(finalValue) / 30);
                    
                    if (current < parseInt(finalValue)) {
                        stat.textContent = current + increment;
                        setTimeout(counter, 50);
                    } else {
                        stat.textContent = finalValue;
                    }
                };
                
                setTimeout(counter, 1000);
            });
        });
    </script>
</body>
</html>