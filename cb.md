---
layout: post
title: "Vivian Zhang College Board Written Response, MCQ Analysis, and GitHub Analytics"
permalink: cb/written
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill B - Individual Code: Web Scraping Feature</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #0a1929;
            --bg-secondary: #132f4c;
            --bg-tertiary: #1a3a52;
            --text-primary: #ffffff;
            --text-secondary: #b0c4de;
            --text-muted: #8896a8;
            --accent: #3b82f6;
            --border: #1e3a5f;
            --code-bg: #000000;
            --success: #10b981;
            --warning: #f59e0b;
            --github-bg: #0d1117;
        }

        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.8;
            color: var(--text-primary);
            background: var(--bg-primary);
            padding: 40px 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--bg-secondary);
            border-radius: 8px;
            padding: 60px 80px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        header {
            text-align: center;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 2px solid var(--border);
        }

        header h1 {
            font-size: 2.5rem;
            color: var(--text-primary);
            margin-bottom: 15px;
            font-weight: 600;
        }

        header p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            font-style: italic;
        }

        h2 {
            color: var(--text-primary);
            font-size: 1.8rem;
            margin: 40px 0 25px;
            font-weight: 600;
            border-bottom: 1px solid var(--border);
            padding-bottom: 10px;
        }

        h3 {
            color: var(--text-secondary);
            font-size: 1.4rem;
            margin: 30px 0 20px;
            font-weight: 500;
        }

        p {
            color: var(--text-secondary);
            margin-bottom: 15px;
        }

        .section {
            margin: 40px 0;
            padding: 30px;
            background: var(--bg-tertiary);
            border-left: 3px solid var(--accent);
            border-radius: 4px;
        }

        .code-block {
            background: var(--code-bg);
            color: #d4d4d4;
            padding: 30px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 25px 0;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9rem;
            line-height: 1.6;
            border: 1px solid var(--border);
        }

        .keyword { color: #569cd6; }
        .function { color: #dcdcaa; }
        .string { color: #ce9178; }
        .comment { color: #6a9955; }
        .number { color: #b5cea8; }
        .property { color: #9cdcfe; }

        .rubric-box {
            background: rgba(59, 130, 246, 0.1);
            border-left: 3px solid var(--accent);
            padding: 20px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .rubric-box h4 {
            color: var(--accent);
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            background: var(--bg-tertiary);
            border-radius: 4px;
            overflow: hidden;
        }

        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid var(--border);
            color: var(--text-secondary);
        }

        th {
            background: var(--bg-primary);
            color: var(--text-primary);
            font-weight: 600;
        }

        tr:hover {
            background: rgba(59, 130, 246, 0.1);
        }

        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Consolas', 'Monaco', monospace;
            color: #90cdf4;
        }

        .flow-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 30px 0;
        }

        .flow-card {
            background: var(--bg-tertiary);
            padding: 25px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid var(--border);
        }

        .flow-card h4 {
            color: var(--accent);
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        /* MCQ Section */
        .mcq-section {
            background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-primary));
            padding: 40px;
            border-radius: 12px;
            margin: 40px 0 20px;
            border: 2px solid var(--accent);
        }

        .score-badge {
            display: inline-block;
            background: var(--success);
            color: white;
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 25px;
        }

        .missed-question {
            background: rgba(245, 158, 11, 0.15);
            padding: 25px;
            border-radius: 8px;
            margin: 25px 0;
            border-left: 4px solid var(--warning);
        }

        .missed-question h4 {
            color: var(--warning);
            margin-bottom: 15px;
        }

        /* Analytics Section - SEPARATE */
        .analytics-section {
            background: var(--github-bg);
            padding: 40px;
            border-radius: 12px;
            margin: 40px 0;
            border: 2px solid var(--accent);
        }

        .analytics-section h2 {
            color: white;
            border-bottom: 2px solid var(--accent);
            margin-top: 0;
        }

        .analytics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin: 30px 0;
        }

        .analytics-card {
            background: #161b22;
            padding: 30px 20px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #30363d;
            transition: transform 0.2s;
        }

        .analytics-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
        }

        .analytics-number {
            font-size: 3rem;
            font-weight: 700;
            color: var(--accent);
            line-height: 1.2;
            margin-bottom: 5px;
        }

        .analytics-label {
            font-size: 1.2rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
        }

        .analytics-detail {
            font-size: 1rem;
            color: var(--text-muted);
            margin-top: 10px;
            font-family: 'Consolas', monospace;
        }

        .lines-changed {
            background: #161b22;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
            border: 1px solid #30363d;
        }

        .lines-changed .analytics-number {
            font-size: 2.5rem;
        }

        .grade-box {
            background: linear-gradient(135deg, #161b22, #0d1117);
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            margin-top: 30px;
            border: 2px solid var(--accent);
        }

        .grade-box .grade {
            font-size: 4rem;
            color: var(--accent);
            font-weight: bold;
            line-height: 1;
        }

        .grade-box .grade-label {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-top: 10px;
        }

        .grade-box .grade-desc {
            color: var(--text-muted);
            margin-top: 15px;
            font-style: italic;
        }

        @media (max-width: 768px) {
            .container {
                padding: 30px 20px;
            }
            .flow-grid, .analytics-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Skill B - Individual Code, Schema, and Logic</h1>
            <p>Web Scraping Feature: Live Museum Hours with Itinerary Integration</p>
            <p>Create PT Written Response Reference Document</p>
        </header>

        <!-- INPUT/OUTPUT FLOW SECTION - FIRST -->
        <section>
            <h2>Input → Process → Output Flow</h2>
            
            <div class="flow-grid">
                <div class="flow-card">
                    <h4>📥 INPUT</h4>
                    <p>User clicks museum card<br>↓<br>Museum key passed to function<br>↓<br>API request to backend</p>
                </div>
                <div class="flow-card">
                    <h4>⚙️ PROCESS</h4>
                    <p>Backend scrapes website<br>↓<br>Data structured as JSON<br>↓<br>Frontend filters by trip dates</p>
                </div>
                <div class="flow-card">
                    <h4>📤 OUTPUT</h4>
                    <p>Museum name displayed<br>↓<br>Live hours displayed<br>↓<br>Filtered by selected days</p>
                </div>
            </div>

            <div class="code-block">
<pre><span class="comment">// Complete Input → Process → Output Example</span>
<span class="comment">// INPUT: User clicks MET Museum button</span>
&lt;button onclick=<span class="string">"selectLandmark('met')"</span>&gt;MET Museum&lt;/button&gt;

<span class="keyword">async function</span> <span class="function">selectLandmark</span>(landmarkKey) {
    <span class="comment">// PROCESS: Fetch data from backend</span>
    <span class="keyword">const</span> hoursData = <span class="keyword">await</span> <span class="function">fetchMuseumHours</span>(landmarkKey);
    <span class="keyword">const</span> tripDays = <span class="keyword">await</span> <span class="function">getSelectedDays</span>();
    
    <span class="comment">// OUTPUT: Display to user</span>
    <span class="function">displayMuseumInfo</span>(LANDMARK_DATA[landmarkKey]);
    <span class="function">displayFilteredHours</span>(hoursData, tripDays);
}</pre>
            </div>
        </section>

        <!-- Personal Project Reference -->
        <section>
            <h2>Personal Project Reference</h2>
            <p>This museum hours module uses web scraping to collect live operating hours from museum websites and displays them to users based on their selected landmark and trip dates.</p>
        </section>

        <!-- Input -->
        <section>
            <h3>📥 Input</h3>
            <p>The program accepts input when a user clicks a museum card, which calls <code>selectLandmark('met')</code> with a unique museum key.</p>

            <div class="code-block">
<pre><span class="comment">&lt;!-- HTML Button Input --&gt;</span>
&lt;button class=<span class="string">"museum-card"</span> onclick=<span class="string">"selectLandmark('met')"</span>&gt;
    &lt;span&gt;🏛️&lt;/span&gt; MET Museum
&lt;/button&gt;

&lt;button class=<span class="string">"museum-card"</span> onclick=<span class="string">"selectLandmark('icecream')"</span>&gt;
    &lt;span&gt;🍦&lt;/span&gt; Museum of Ice Cream
&lt;/button&gt;

&lt;button class=<span class="string">"museum-card"</span> onclick=<span class="string">"selectLandmark('ukrainian')"</span>&gt;
    &lt;span&gt;🇺🇦&lt;/span&gt; Ukrainian Museum
&lt;/button&gt;</pre>
            </div>
        </section>

        <!-- Output -->
        <section>
            <h3>📤 Output</h3>
            <p>The program displays the museum's name, address, and live hours fetched from the backend API, filtered by the user's trip dates.</p>

            <div class="code-block">
<pre><span class="keyword">async function</span> <span class="function">selectLandmark</span>(landmarkKey) {
    <span class="comment">// Display museum info from LANDMARK_DATA</span>
    <span class="keyword">const</span> museumData = LANDMARK_DATA[landmarkKey];
    <span class="function">displayMuseumInfo</span>(museumData);
    
    <span class="comment">// Fetch and display live hours</span>
    <span class="keyword">const</span> hoursData = <span class="keyword">await</span> <span class="function">fetchMuseumHours</span>(landmarkKey);
    <span class="keyword">const</span> tripDays = <span class="keyword">await</span> <span class="function">getSelectedDays</span>();
    
    <span class="comment">// OUTPUT: Show filtered hours</span>
    <span class="function">displayFilteredHours</span>(hoursData, tripDays);
}</pre>
            </div>
        </section>

        <!-- Procedures -->
        <section>
            <h3>⚙️ Procedures</h3>
            <p>The <code>fetchMuseumHours</code> procedure attempts to retrieve live data from the backend API and calls <code>getFallbackHours</code> if the request fails.</p>

            <div class="code-block">
<pre><span class="keyword">async function</span> <span class="function">fetchMuseumHours</span>(landmarkKey) {
    <span class="keyword">try</span> {
        <span class="comment">// Call backend API</span>
        <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">`/api/landmarks/${landmarkKey}`</span>);
        <span class="keyword">const</span> data = <span class="keyword">await</span> response.<span class="function">json</span>();
        
        <span class="comment">// SELECTION: Return data or fallback</span>
        <span class="keyword">return</span> data.success ? data.data : <span class="function">getFallbackHours</span>(landmarkKey);
    } <span class="keyword">catch</span> (error) {
        <span class="comment">// SELECTION: Error handling</span>
        <span class="keyword">return</span> <span class="function">getFallbackHours</span>(landmarkKey);
    }
}</pre>
            </div>
        </section>

        <!-- List -->
        <section>
            <h3>📋 List</h3>
            <p>The <code>LANDMARK_DATA</code> list stores all museum information, accessed by museum key throughout the program.</p>

            <div class="code-block">
<pre><span class="comment">// LIST: Museum data structure</span>
<span class="keyword">const</span> LANDMARK_DATA = {
    met: {
        name: <span class="string">"MET Museum"</span>,
        address: <span class="string">"1000 5th Ave, New York, NY"</span>,
        phone: <span class="string">"(212) 535-7710"</span>
    },
    icecream: {
        name: <span class="string">"Museum of Ice Cream"</span>,
        address: <span class="string">"558 Broadway, New York, NY"</span>,
        phone: <span class="string">"(212) 123-4567"</span>
    },
    ukrainian: {
        name: <span class="string">"Ukrainian Museum"</span>,
        address: <span class="string">"222 E 6th St, New York, NY"</span>,
        phone: <span class="string">"(212) 228-0110"</span>
    }
};</pre>
            </div>
        </section>

        <!-- Algorithm Feature: Selection -->
        <section>
            <h3>🔄 Algorithm Feature: Selection</h3>
            <p>The <code>formatHoursForDisplay</code> function uses if-else statements to check if hours data exists and if they match the user's selected days.</p>

            <div class="code-block">
<pre><span class="keyword">function</span> <span class="function">formatHoursForDisplay</span>(hoursData, selectedDays) {
    <span class="comment">// SELECTION: Check if hours data exists</span>
    <span class="keyword">if</span> (hoursData &amp;&amp; hoursData.hours) {
        <span class="comment">// SELECTION: Check if selected days exist</span>
        <span class="keyword">if</span> (selectedDays &amp;&amp; selectedDays.length > <span class="number">0</span>) {
            <span class="keyword">return</span> hoursData.hours
                .<span class="function">filter</span>(h => selectedDays.<span class="function">includes</span>(h.day))
                .<span class="function">map</span>(h => <span class="string">`&lt;div&gt;${h.day}: ${h.time}&lt;/div&gt;`</span>)
                .<span class="function">join</span>(<span class="string">''</span>);
        }
        <span class="keyword">return</span> <span class="string">'&lt;div&gt;Hours not available for selected days&lt;/div&gt;'</span>;
    }
    <span class="keyword">return</span> <span class="string">'&lt;div&gt;Hours not available&lt;/div&gt;'</span>;
}</pre>
            </div>
        </section>

        <!-- Algorithm Feature: Iteration -->
        <section>
            <h3>🔄 Algorithm Feature: Iteration</h3>
            <p>The <code>displayMuseumGrid</code> function iterates through the landmarks list to generate HTML for each museum card.</p>

            <div class="code-block">
<pre><span class="keyword">function</span> <span class="function">displayMuseumGrid</span>() {
    <span class="keyword">const</span> grid = <span class="function">document.getElementById</span>(<span class="string">'museumGrid'</span>);
    
    <span class="comment">// ITERATION: Loop through LANDMARK_DATA</span>
    grid.innerHTML = Object.<span class="function">entries</span>(LANDMARK_DATA)
        .<span class="function">map</span>(([key, museum]) =&gt; <span class="string">`
            &lt;div class="museum-card" onclick="selectLandmark('<span class="number">${</span>key<span class="number">}</span>')"&gt;
                &lt;h3&gt;<span class="number">${</span>museum.name<span class="number">}</span>&lt;/h3&gt;
                &lt;p&gt;<span class="number">${</span>museum.address<span class="number">}</span>&lt;/p&gt;
            &lt;/div&gt;
        `</span>)
        .<span class="function">join</span>(<span class="string">''</span>);
}</pre>
            </div>
        </section>

        <!-- Backend Web Scraping -->
        <section>
            <h3>⚙️ Backend Web Scraping</h3>

            <div class="code-block">
<pre><span class="keyword">class</span> <span class="function">MuseumScraper</span>:
    <span class="keyword">def</span> <span class="function">scrape_met_museum</span>(<span class="property">self</span>):
        <span class="string">"""Web scraping procedure with sequencing, selection, iteration"""</span>
        <span class="keyword">try</span>:
            <span class="comment"># SEQUENCING: Request → Parse → Extract → Return</span>
            url = <span class="string">"https://www.metmuseum.org/visit"</span>
            response = requests.get(url, timeout=<span class="number">10</span>)
            soup = BeautifulSoup(response.text, <span class="string">'html.parser'</span>)
            
            hours = <span class="string">"Sun-Thu: 10AM-5:30PM, Fri-Sat: 10AM-9PM"</span>
            
            <span class="comment"># ITERATION: Search through HTML elements</span>
            hour_elements = soup.find_all([<span class="string">'p'</span>, <span class="string">'div'</span>], 
                text=re.compile(<span class="string">r'[Hh]ours|10.*AM.*PM'</span>))
            
            <span class="comment"># SELECTION: Find matching text</span>
            <span class="keyword">for</span> element <span class="keyword">in</span> hour_elements:
                text = element.get_text()
                <span class="keyword">if</span> <span class="string">'10'</span> <span class="keyword">in</span> text <span class="keyword">and</span> <span class="string">'AM'</span> <span class="keyword">in</span> text:
                    hours = text[:<span class="number">200</span>]
                    <span class="keyword">break</span>
            
            <span class="comment"># OUTPUT: Return structured data</span>
            <span class="keyword">return</span> {
                <span class="string">'museum'</span>: <span class="string">'MET Museum'</span>,
                <span class="string">'hours'</span>: hours,
                <span class="string">'last_updated'</span>: datetime.now().strftime(<span class="string">"%I:%M %p"</span>)
            }
        <span class="keyword">except</span> Exception <span class="keyword">as</span> e:
            <span class="keyword">return</span> {<span class="string">'museum'</span>: <span class="string">'MET Museum'</span>, <span class="string">'hours'</span>: hours, <span class="string">'error'</span>: <span class="keyword">True</span>}</pre>
            </div>
        </section>

        <!-- API Endpoints -->
        <section>
            <h3>🌐 API Endpoints</h3>

            <div class="code-block">
<pre><span class="property">@app</span>.route(<span class="string">'/api/landmarks/&lt;landmark_key&gt;'</span>)
<span class="keyword">def</span> <span class="function">get_landmark_hours</span>(landmark_key):
    <span class="string">"""API endpoint that calls appropriate scraper"""</span>
    scrapers = {
        <span class="string">'met'</span>: scraper.scrape_met_museum,
        <span class="string">'icecream'</span>: scraper.scrape_ice_cream_museum,
        <span class="string">'ukrainian'</span>: scraper.scrape_ukrainian_museum
    }
    
    <span class="keyword">if</span> landmark_key <span class="keyword">in</span> scrapers:
        data = scrapers[landmark_key]()
        <span class="keyword">return</span> jsonify({<span class="string">'success'</span>: <span class="keyword">True</span>, <span class="string">'data'</span>: data})
    <span class="keyword">return</span> jsonify({<span class="string">'success'</span>: <span class="keyword">False</span>}), <span class="number">404</span>

<span class="property">@app</span>.route(<span class="string">'/api/all'</span>)
<span class="keyword">def</span> <span class="function">get_all_hours</span>():
    <span class="string">"""Get all museum hours at once using iteration"""</span>
    data = {}
    <span class="keyword">for</span> key <span class="keyword">in</span> [<span class="string">'met'</span>, <span class="string">'icecream'</span>, <span class="string">'ukrainian'</span>]:
        data[key] = scrapers[key]()
    <span class="keyword">return</span> jsonify({<span class="string">'success'</span>: <span class="keyword">True</span>, <span class="string">'data'</span>: data})</pre>
            </div>
        </section>

        <!-- ALIGNMENT TABLE -->
        <section>
            <h2>📌 College Board CPT Standards Alignment</h2>

            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Implementation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>3a: Procedure Purpose</strong></td>
                        <td><code>fetchMuseumHours()</code> retrieves live museum hours from backend API</td>
                    </tr>
                    <tr>
                        <td><strong>3b: Algorithm</strong></td>
                        <td>Sequencing (request→parse→return), Selection (if/else, try/catch), Iteration (error handling paths, HTML element search)</td>
                    </tr>
                    <tr>
                        <td><strong>3c: Procedure Call</strong></td>
                        <td><code>const hours = await fetchMuseumHours('met');</code></td>
                    </tr>
                    <tr>
                        <td><strong>4a: List Purpose</strong></td>
                        <td><code>LANDMARK_DATA</code> stores museum information accessed by key throughout program</td>
                    </tr>
                    <tr>
                        <td><strong>4b: List Data</strong></td>
                        <td>Stores museum names, addresses, phone numbers as string values</td>
                    </tr>
                    <tr>
                        <td><strong>4c: Complexity Management</strong></td>
                        <td>Dictionary replaces multiple if/else statements; adding new museum requires one line</td>
                    </tr>
                    <tr>
                        <td><strong>4d: List Operations</strong></td>
                        <td><code>Object.entries()</code> iteration, dictionary lookup by key, <code>.map()</code> transformation</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- MCQ SECTION -->
        <div class="mcq-section">
            <div class="score-badge">🎯 66/67 (98.5%)</div>
            
            <h3 style="color: white; margin-bottom: 15px;">MCQ Performance</h3>
            
            <div class="missed-question">
                <h4>❌ Missed Question #48 - Big Idea 2.3 (Cybersecurity)</h4>
                <p><strong>Topic:</strong> Phishing vs. Password Guessing</p>
                <p><strong>My answer:</strong> D - User chooses weak password, attacker guesses from common list</p>
                <p><strong>Correct answer:</strong> C - User receives email offering tech help, clicks link and enters credentials</p>
                <p><strong>Why I missed it:</strong> I selected password guessing (technical exploitation) but the question asked for phishing, which is social engineering (tricking users). Phishing specifically involves deception to make users voluntarily reveal information.</p>
            </div>
        </div>

        <!-- ANALYTICS SECTION - SEPARATE WITH EXACT NUMBERS -->
        <div class="analytics-section">
            <h2>📊 GitHub Analytics</h2>
            
            <div class="analytics-grid">
                <div class="analytics-card">
                    <div class="analytics-number">107</div>
                    <div class="analytics-label">COMMITS</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-number">25</div>
                    <div class="analytics-label">ISSUES</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-number">8</div>
                    <div class="analytics-label">PULL REQUESTS</div>
                </div>
                <div class="analytics-card">
                    <div class="analytics-number">+610K</div>
                    <div class="analytics-label">LINES CHANGED</div>
                </div>
            </div>

            <div class="lines-changed">
                <div class="analytics-number">+610,204 / -20,423</div>
                <div class="analytics-label">NET LINES</div>
            </div>

            <div class="grade-box">
                <div class="grade">90% A</div>
                <div class="grade-label">Grade Prediction</div>
                <div class="grade-desc">based on commits and project complexity</div>
            </div>
        </div>
    </div>
</body>
</html>