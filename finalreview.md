---
layout: post
title: "AP CSP Review - NYC Itinerary Builder Team Portfolio"
description: "Individual contributions, code snippets, CollegeBoard results, and GitHub analytics for our NYC trip planner project"
permalink: /csp/review/nyc-team/
---
---
layout: post
title: "AP CSP Review - NYC Itinerary Builder Team Portfolio"
description: "Individual contributions, code snippets, CollegeBoard results, and GitHub analytics for our NYC trip planner project"
permalink: /csp/review/nyc-team/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NYC Itinerary Builder - Project Overview & Review</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --accent-gold: #fbbf24;
            --accent-blue: #3b82f6;
            --text-primary: #f1f5f9;
            --text-secondary: #cbd5e1;
            --border-color: #334155;
            --code-bg: #0a0f1a;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
        }

        .navbar {
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-gold);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--accent-gold);
        }

        .login-btn {
            background: var(--accent-blue);
            color: white !important;
            padding: 0.5rem 1.2rem;
            border-radius: 8px;
        }

        .login-btn:hover {
            background: #2563eb;
            color: white !important;
        }

        .container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .post-meta {
            display: flex;
            gap: 1rem;
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .categories {
            color: var(--accent-blue);
        }

        .read-time {
            color: var(--accent-gold);
        }

        h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 2rem;
            line-height: 1.2;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h2 {
            font-size: 2rem;
            margin: 3rem 0 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--accent-gold);
        }

        h3 {
            font-size: 1.5rem;
            margin: 2rem 0 1rem;
            color: var(--accent-gold);
        }

        h4 {
            font-size: 1.2rem;
            margin: 1.5rem 0 0.5rem;
            color: var(--text-secondary);
        }

        .section-card {
            background: var(--bg-secondary);
            border-radius: 16px;
            padding: 2rem;
            margin: 2rem 0;
            border: 1px solid var(--border-color);
        }

        .code-block {
            background: var(--code-bg);
            border-radius: 12px;
            padding: 1.5rem;
            margin: 1.5rem 0;
            overflow-x: auto;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 0.9rem;
            color: #a5d8ff;
            border-left: 4px solid var(--accent-blue);
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .member-card {
            background: var(--bg-secondary);
            border-radius: 12px;
            padding: 1.8rem;
            border: 1px solid var(--border-color);
            transition: transform 0.2s;
        }

        .member-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-gold);
        }

        .member-name {
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--accent-gold);
            margin-bottom: 0.5rem;
        }

        .member-role {
            color: var(--accent-blue);
            font-weight: 500;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .member-superpower {
            background: #0f1a2b;
            border-left: 4px solid var(--accent-gold);
            padding: 0.8rem 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            font-size: 0.95rem;
            color: var(--accent-gold);
            font-weight: 500;
        }

        .contribution-list {
            list-style: none;
            margin: 1rem 0;
        }

        .contribution-list li {
            color: var(--text-secondary);
            padding: 0.3rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .contribution-list li::before {
            content: "→";
            color: var(--accent-gold);
            position: absolute;
            left: 0;
        }

        .mc-row {
            background: #0f1a2b;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin: 1.5rem 0;
        }

        .mc-badge {
            background: var(--accent-gold);
            color: #0b1e2e;
            font-weight: 700;
            padding: 0.4rem 1.2rem;
            border-radius: 40px;
        }

        .mc-detail {
            color: #b9c9e0;
        }

        .github-stats {
            background: #0f1a25;
            border-radius: 12px;
            padding: 1rem;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 1rem;
            border: 1px solid #375a7e;
        }

        .github-stat {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .num {
            font-weight: 800;
            font-size: 1.5rem;
            color: var(--accent-gold);
        }

        .label {
            color: #94a3b8;
        }

        .feedback-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .feedback-card {
            background: #0f1a2b;
            border-radius: 12px;
            padding: 1.5rem;
            border-left: 4px solid var(--accent-blue);
        }

        .feedback-author {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--accent-gold);
            margin-bottom: 0.5rem;
        }

        .feedback-text {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin: 0.5rem 0;
            font-style: italic;
        }

        .api-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: var(--bg-secondary);
            border-radius: 12px;
            overflow: hidden;
        }

        .api-table th {
            background: #0f1a2b;
            color: var(--accent-gold);
            padding: 1rem;
            text-align: left;
            font-weight: 600;
        }

        .api-table td {
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            color: var(--text-secondary);
        }

        .api-table tr:last-child td {
            border-bottom: none;
        }

        .comment-section {
            margin: 4rem 0;
            padding: 2rem;
            background: var(--bg-secondary);
            border-radius: 16px;
        }

        .comment-form {
            margin: 2rem 0;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem 1rem;
            background: #0f1a2b;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent-gold);
        }

        .submit-btn {
            background: var(--accent-gold);
            color: #0f172a;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .submit-btn:hover {
            background: #f59e0b;
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 1rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 0 1rem;
            }
            
            .team-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="#" class="logo">NYC Itinerary</a>
        <div class="nav-links">
            <a href="#">Blogs</a>
            <a href="#">Search</a>
            <a href="#" class="login-btn">Login</a>
        </div>
    </nav>

    <div class="container">
        <div class="post-meta">
            <span class="categories">Categories: Travel/Planning, AP CSP</span>
            <span class="read-time">• 15 min read</span>
        </div>

        <h1>NYC Itinerary Builder - Project Overview & Team Review</h1>

        <!-- How It Works Section -->
        <div class="section-card">
            <h2>How NYC Itinerary Builder Works</h2>
            <p>The NYC Itinerary Builder is a comprehensive trip planning application that helps users create personalized New York City experiences. Users can select travel dates, choose restaurants, explore landmarks, shop for outfits, and book Broadway shows — all while tracking their selections in a persistent itinerary.</p>

            <h3>User Flow</h3>
            <div style="display: flex; align-items: center; justify-content: space-between; margin: 2rem 0; flex-wrap: wrap; gap: 1rem;">
                <span style="background: var(--accent-blue); padding: 0.5rem 1rem; border-radius: 8px;">Login / Sign Up</span>
                <span style="color: var(--accent-gold);">→</span>
                <span style="background: var(--bg-secondary); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">Trip Dates</span>
                <span style="color: var(--accent-gold);">→</span>
                <span style="background: var(--bg-secondary); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">Breakfast</span>
                <span style="color: var(--accent-gold);">→</span>
                <span style="background: var(--bg-secondary); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">Landmarks</span>
                <span style="color: var(--accent-gold);">→</span>
                <span style="background: var(--bg-secondary); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">Shopping</span>
                <span style="color: var(--accent-gold);">→</span>
                <span style="background: var(--bg-secondary); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">Broadway</span>
            </div>

            <h3>Core Features</h3>
            <ul style="list-style: none; margin: 1.5rem 0;">
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Trip Dates & Itinerary Tracker</strong> — Users input travel dates, stored in localStorage and synced across all modules via itinerary tracker sidebar</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Live Restaurant Hours (Web Scraping)</strong> — Fetches real-time hours for Sarabeth's, Jack's Wife Frida, Ess-a-Bagel, and Shuka via backend scraping API with fallback data</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Menu Ordering System</strong> — Interactive cart where users add breakfast items and calculate totals</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Landmark Explorer</strong> — Museum hours for MET, Ice Cream Museum, Empire State Building, Ukrainian Museum with interactive games</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Shopping Outfit Builder</strong> — Browse clothing items by center (East River, Macy's, SoHo, Columbus) and gender, save outfits</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Broadway Show Selection</strong> — Choose shows, check availability, select tickets, view total cost</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Lyrics Voting</strong> — Real-time voting on Broadway lyrics with love/dislike buttons (updates every 5 seconds)</li>
                <li style="margin: 1rem 0; padding-left: 2rem; position: relative;">• <strong>Persistent Itinerary</strong> — Tracks all user selections across modules using localStorage and backend API</li>
            </ul>
        </div>

        <!-- Technical Architecture Section -->
        <div class="section-card">
            <h2>Technical Architecture & Data Flow</h2>
            <p>The system uses a Jekyll static frontend communicating with a Flask (Python) backend via REST APIs. All data persists in SQLite via SQLAlchemy ORM with user authentication support.</p>

            <h3>File Structure</h3>
            <table class="api-table">
                <tr><th>Layer</th><th>File</th><th>Purpose</th></tr>
                <tr><td>Frontend</td><td>/newyork/tripinfo/</td><td>Trip date selection, itinerary tracker initialization</td></tr>
                <tr><td>Frontend</td><td>/new-york/breakfast/</td><td>Restaurant selection, menu ordering, live hours display</td></tr>
                <tr><td>Frontend</td><td>/new-york/landmarks/</td><td>Museum explorer with interactive games and live hours</td></tr>
                <tr><td>Frontend</td><td>/new-york/shopping/</td><td>Outfit builder with clothing items by center/gender</td></tr>
                <tr><td>Frontend</td><td>/new-york/broadway/</td><td>Show selection, ticket booking, lyrics voting</td></tr>
                <tr><td>Backend API</td><td>/api/met, /api/icecream, etc.</td><td>Museum hours scraping endpoints</td></tr>
                <tr><td>Backend API</td><td>/api/breakfast/*</td><td>Restaurant hours scraping endpoints</td></tr>
                <tr><td>Backend API</td><td>/api/broadway/*</td><td>Broadway availability and lyrics endpoints</td></tr>
                <tr><td>Backend API</td><td>/api/itinerary/*</td><td>Itinerary storage with user/session support</td></tr>
                <tr><td>Backend API</td><td>/api/budget/*</td><td>Budget tracking system</td></tr>
                <tr><td>Models</td><td>model/user.py</td><td>User authentication and roles</td></tr>
                <tr><td>Models</td><td>itinerary_storage.db</td><td>SQLite database for itinerary choices</td></tr>
                <tr><td>Deployment</td><td>main.py</td><td>Flask application entry point, port 8303</td></tr>
            </table>
        </div>

        <!-- Team Work Split Section (REWRITTEN - DETAILED VERSION) -->
        <div class="section-card">
            <h2>Team Work Split</h2>
            
            <div class="team-grid">
                <!-- Vivian -->
                <div class="member-card">
                    <div class="member-name">Vivian</div>
                    <div class="member-role">Project Lead / Web Scraping Developer</div>
                    <div class="member-superpower">🕷️ Live Web Scraping — pulls real museum hours from live websites so users never see stale data</div>
                    <ul class="contribution-list">
                        <li>Purpose and scope definition, project coordination</li>
                        <li>Web scraping backend for museum hours (MET, Ice Cream, Ukrainian, Empire State)</li>
                        <li><strong>MuseumScraper</strong> class with fallback logic and error recovery</li>
                        <li>API endpoints: <code>/api/met</code>, <code>/api/icecream</code>, <code>/api/ukrainian</code>, <code>/api/empire</code>, <code>/api/all</code></li>
                        <li>HTML parsing with BeautifulSoup and regex fallback patterns</li>
                        <li>Sequencing: request → parse → extract → return JSON with source metadata</li>
                        <li>Selection logic: if/else for try/except, if response.ok, if hours found in page</li>
                        <li>Iteration: loops through HTML elements to locate hours text; iterates fallback data on failure</li>
                        <li>List usage: museum endpoints list, hours dictionary structure</li>
                        <li>Procedure: <code>scrape_met_museum()</code> with no parameters, returns structured dictionary</li>
                    </ul>
                    </div>
                </div>

                <!-- Kailyn -->
                <div class="member-card">
                    <div class="member-name">Kailyn</div>
                    <div class="member-role">Authentication & Deployment Lead</div>
                    <div class="member-superpower">🔐 Secure Sessions — login system that remembers user choices and syncs guest sessions</div>
                    <ul class="contribution-list">
                        <li>Start the quest with login (backend authentication)</li>
                        <li>Deployment + debugging session coordination</li>
                        <li>Flask-Login integration with <code>@login_required</code> decorators</li>
                        <li>Session merging: when user logs in, guest itinerary automatically syncs to account</li>
                        <li>Cookie management and secure password hashing (werkzeug)</li>
                        <li>Docker deployment debugging (viewed logs, fixed nginx routes)</li>
                        <li>Postman test suite for all authenticated endpoints</li>
                        <li>Sequencing: login flow: receive form → query user → check password → login_user → merge → redirect</li>
                        <li>Selection: <code>if user and user.is_password()</code> for authentication</li>
                        <li>Iteration: loops through itinerary sections during session merge</li>
                        <li>List: user roles list, session data structure</li>
                        <li>Procedure: <code>login()</code> with form data input, returns redirect or error</li>
                    </ul>
                    <div class="code-block">
                    </div>
                </div>

                <!-- Nitya -->
                <div class="member-card">
                    <div class="member-name">Nitya</div>
                    <div class="member-role">Profile & UI Experience Lead</div>
                    <div class="member-superpower">🧑‍🎨 Personal Touch — screen name + profile bio make each user's trip feel unique</div>
                    <ul class="contribution-list">
                        <li>Screen name + profile bio (backend storage and frontend display)</li>
                        <li>UI walkthrough: guided tour for first-time users</li>
                        <li><code>/api/id</code> endpoint to fetch current user profile</li>
                        <li>Profile editor with bio and avatar preferences</li>
                        <li>Frontend navigation flow between all game pages (breakfast → landmarks → shopping → broadway)</li>
                        <li>Sequencing: profile retrieval: check authentication → query user → format data → return JSON</li>
                        <li>Selection: <code>if current_user.is_authenticated</code> to determine response</li>
                        <li>Iteration: UI walkthrough steps iteration (next/prev)</li>
                        <li>List: user roles list, profile fields (name, bio, avatar)</li>
                        <li>Procedure: <code>get_user_id()</code> with no parameters, returns user JSON</li>
                    </ul>
                    <div class="code-block">
                    </div>
                </div>

                <!-- Ginny -->
                <div class="member-card">
                    <div class="member-name">Ginny</div>
                    <div class="member-role">Budget & Dates Lead</div>
                    <div class="member-superpower">💰 Smart Spending — budget tracker that auto-calculates trip costs across all modules</div>
                    <ul class="contribution-list">
                        <li>Budget tracking system (SQLite database with expenses, daily breakdown, alerts)</li>
                        <li>Trip dates implementation (month, start date, end date with validation)</li>
                        <li>Night at the Museum feedback collection and corrections board</li>
                        <li>Happy moment #1: deployment breakthrough after weekend with Mr. Mortensen</li>
                        <li><code>BudgetTracker</code> class: create budget, add expense, remove expense, get summary</li>
                        <li>API endpoints: <code>/api/budget</code> (GET/POST), <code>/api/budget/expense</code>, <code>/api/budget/summary</code></li>
                        <li>Daily budget allocation based on trip duration</li>
                        <li>Sequencing: budget creation: validate → insert budget → initialize daily budgets → return</li>
                        <li>Selection: <code>if total_cost > remaining_budget</code> to prevent overspending</li>
                        <li>Iteration: loop through trip days to create daily budgets</li>
                        <li>List: expenses list, category totals dictionary</li>
                        <li>Procedure: <code>add_expense()</code> with category, price, quantity parameters</li>
                    </ul>
                    <div class="code-block">

                    </div>
                </div>

                <!-- Laya -->
                <div class="member-card">
                    <div class="member-name">Laya</div>
                    <div class="member-role">Database & Places Table Lead</div>
                    <div class="member-superpower">🗄️ Persistent Memory — itinerary database that never forgets your choices</div>
                    <ul class="contribution-list">
                        <li>Places table implementation (itinerary database schema)</li>
                        <li><code>ItineraryStorage</code> class with SQLite and JSON columns</li>
                        <li>Happy moment #2: Night at the Museum live demo success</li>
                        <li>API endpoints: <code>/api/itinerary</code> (GET/POST), <code>/api/itinerary/section/&lt;section&gt;</code></li>
                        <li>Bulk data creation scripts (<code>db_init.py</code> seeds 50+ landmarks, 20 breakfast items, 8 shows)</li>
                        <li>Destroy and restart demonstration: <code>python db_init.py --reset</code></li>
                        <li>Sequencing: database queries: connect → execute SELECT → fetch results → close → return</li>
                        <li>Selection: <code>if place exists</code> in database (update vs insert)</li>
                        <li>Iteration: loop through query results to build response list</li>
                        <li>List: places list returned from database, JSON arrays stored in text columns</li>
                        <li>Procedure: <code>get_itinerary()</code> with session_id parameter</li>
                    </ul>
                    <div class="code-block">
                    </div>
                </div>

                <!-- David -->
                <div class="member-card">
                    <div class="member-name">David</div>
                    <div class="member-role">Social Influence & Iteration Lead</div>
                    <div class="member-superpower">🗣️ Community Driven — turns peer feedback into real features</div>
                    <ul class="contribution-list">
                        <li>Social influence: organized peer review sessions (3 rounds)</li>
                        <li>Brainstorming facilitator for new features (hotel + transport, recommendation engine)</li>
                        <li>Incorporated feedback into lyrics voting UI and itinerary tracker</li>
                        <li>Documented feature/issue lifecycle: early visual → early implementation → polished → recent</li>
                        <li>Collected Night at the Museum feedback from parents (10+ comments)</li>
                        <li>Managed project board: No Status (6), To Do (7), In Review (5), Done (3)</li>
                        <li>Sequencing: feedback collection → prioritization → implementation → review</li>
                        <li>Selection: which feedback to implement now vs. future roadmap</li>
                        <li>Iteration: multiple improvement cycles based on user testing</li>
                        <li>List: feedback items list with status and priority</li>
                        <li>Procedure: <code>process_feedback()</code> with feedback text and category</li>
                    </ul>
                    <div class="code-block">
            </div>
        </div>

        <!-- Individual AP CSP Requirements Section -->
        <div class="section-card">
            <h2>Individual AP CSP Requirements by Team Member</h2>
            
            <h3>Vivian — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Web scraping pipeline: construct request → fetch HTML → parse with BeautifulSoup → extract hours → return JSON</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> if/else for try/except error handling; if response.ok checks</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> Looping through HTML elements to find hours text; iterating fallback data</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> Museum endpoints list, hours data dictionary structure</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> scrape_met_museum() with no parameters, returns dictionary</li>
            </ul>

            <h3>Kailyn — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Login flow: receive form → query user → check password → login_user → redirect</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> if user and user.is_password() for authentication</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> Session sync loops through itinerary sections when merging</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> User roles list, session data structure</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> login() with form data input, returns redirect or error</li>
            </ul>

            <h3>Nitya — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Profile retrieval: check authentication → query user → format data → return JSON</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> if current_user.is_authenticated to determine response</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> UI walkthrough steps iteration</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> User roles list, profile fields</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> get_user_id() with no parameters, returns user JSON</li>
            </ul>

            <h3>Ginny — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Budget creation: validate input → insert budget → initialize daily budgets → return</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> if enough budget remaining before adding expense</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> Loop through trip days to create daily budgets</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> Expenses list, category totals dictionary</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> add_expense() with category, price, quantity parameters</li>
            </ul>

            <h3>Laya — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Database queries: connect → execute SELECT → fetch results → close → return</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> if place exists in database</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> Loop through query results to build response</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> Places list returned from database</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> get_itinerary() with session_id parameter</li>
            </ul>

            <h3>David — AP CSP Alignment</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                <li style="margin: 0.5rem 0;">• <strong>Sequencing:</strong> Feedback collection → prioritization → implementation → review</li>
                <li style="margin: 0.5rem 0;">• <strong>Selection:</strong> Which feedback to implement now vs. future roadmap</li>
                <li style="margin: 0.5rem 0;">• <strong>Iteration:</strong> Multiple improvement cycles based on user testing</li>
                <li style="margin: 0.5rem 0;">• <strong>List:</strong> Feedback items list with status and priority</li>
                <li style="margin: 0.5rem 0;">• <strong>Procedure:</strong> process_feedback() with feedback text and category</li>
            </ul>
        </div>

        <!-- Night at the Museum Feedback Section -->
        <div class="section-card">
            <h2>Night at the Museum Feedback & Planned Improvements</h2>
            <p>During our Night at the Museum presentation, we received valuable feedback from parents and visitors. Below is the feedback we collected and the changes we plan to implement based on these suggestions.</p>

            <div class="feedback-grid">
                <!-- Parent 1 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 1</div>
                    <div class="feedback-text">"I would add the weather also to the website. Prediction based on historic data. I liked the site. Easy to navigate."</div>
                </div>

                <!-- Parent 2 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 2</div>
                    <div class="feedback-text">"Be able to add multiple landmarks or shopping plans to itinerary."</div>
                </div>

                <!-- Akshara -->
                <div class="feedback-card">
                    <div class="feedback-author">Akshara</div>
                    <div class="feedback-text">"The layout and idea looks really good. The only thing is some of the buttons are off the screen/box."</div>
                </div>

                <!-- Parent 3 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 3</div>
                    <div class="feedback-text">"Nice presentation. Good graphic organization."</div>
                </div>

                <!-- Parent 4 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 4</div>
                    <div class="feedback-text">"Looks good, should maybe condense."</div>
                </div>

                <!-- Parent 5 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 5</div>
                    <div class="feedback-text">"Fun idea! There might be a few bugs to clean up, but I like the idea of food, landmarks and shows :)"</div>
                </div>

                <!-- Parent 6 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 6</div>
                    <div class="feedback-text">"Think of building a recommendation engine on each of the categories based on a profile. You can import previous itineraries or shopping history from stores or Expedia or something and plan the trip for the person and recommend a trip instead of choosing every aspect of the trip."</div>
                </div>

                <!-- Parent 7 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 7</div>
                    <div class="feedback-text">"Hotel plus live transportation."</div>
                </div>

                <!-- Parent 8 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 8</div>
                    <div class="feedback-text">"It's awesome. Detailed explanation and good data. Adding couple of more data (hotel/transport) will be really helpful."</div>
                </div>

                <!-- Parent 9 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 9</div>
                    <div class="feedback-text">"Very interesting — could have used this on my trip to NYC."</div>
                </div>

                <!-- Parent 10 -->
                <div class="feedback-card">
                    <div class="feedback-author">Parent 10</div>
                    <div class="feedback-text">"Interesting backend concept. Could have it focus on multiple trips."</div>
                </div>
            </div>

            <h3 style="margin-top: 2rem;">Planned Improvements Based on Feedback</h3>
            <table class="api-table">
                <tr><th>Feedback</th><th>Planned Change</th><th>Status</th></tr>
                <tr><td>Add weather prediction</td><td>Integrate OpenWeather API to show historical weather data and forecasts based on trip dates</td><td>In Review</td></tr>
                <tr><td>Add multiple landmarks/shopping to itinerary</td><td>Enhance itinerary tracker to allow multiple selections per category with drag-and-drop reordering</td><td>In Review</td></tr>
                <tr><td>Buttons off screen/box</td><td>Fix responsive design issues, ensure all buttons fit within containers on mobile devices</td><td>In Review</td></tr>
                <tr><td>Condense layout</td><td>Improve UI density, reduce whitespace, make information more scannable</td><td>To Do</td></tr>
                <tr><td>Bug fixes</td><td>Comprehensive testing and debugging across all modules</td><td>In Progress</td></tr>
                <tr><td>Recommendation engine</td><td>Build ML-based recommendation system that suggests trips based on user preferences and past behavior</td><td>Future Plan</td></tr>
                <tr><td>Hotel + transportation</td><td>Add hotel booking and live transportation options (flights, trains, subway)</td><td>Future Plan</td></tr>
                <tr><td>Multiple trips support</td><td>Allow users to save and manage multiple itineraries for different trips</td><td>Future Plan</td></tr>
            </table>

            <div style="margin-top: 2rem; background: #0f1a2b; padding: 1.5rem; border-radius: 12px;">
                <h4 style="color: var(--accent-gold); margin-bottom: 1rem;">Project Board Status</h4>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div><span style="color: var(--text-secondary);">No Status:</span> <span style="color: var(--accent-gold); font-weight: 600;">6 items</span></div>
                    <div><span style="color: var(--text-secondary);">To Do:</span> <span style="color: var(--accent-gold); font-weight: 600;">7 items</span></div>
                    <div><span style="color: var(--text-secondary);">In Review:</span> <span style="color: var(--accent-gold); font-weight: 600;">5 items</span></div>
                    <div><span style="color: var(--text-secondary);">Done:</span> <span style="color: var(--accent-gold); font-weight: 600;">3 items</span></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>