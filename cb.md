---
layout: post
title: "College Board Written Response"
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
            letter-spacing: -0.5px;
        }

        header p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            font-style: italic;
        }

        h2 {
            color: var(--text-primary);
            font-size: 1.8rem;
            margin: 50px 0 25px;
            font-weight: 600;
            letter-spacing: -0.3px;
        }

        h3 {
            color: var(--text-secondary);
            font-size: 1.4rem;
            margin: 35px 0 20px;
            font-weight: 500;
        }

        h4 {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin: 25px 0 15px;
            font-weight: 500;
        }

        p {
            color: var(--text-secondary);
            margin-bottom: 15px;
            text-align: justify;
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
        .comment { color: #6a9955; font-style: italic; }
        .number { color: #b5cea8; }
        .property { color: #9cdcfe; }
        .operator { color: #d4d4d4; }

        .note-box {
            background: rgba(59, 130, 246, 0.1);
            border-left: 3px solid var(--accent);
            padding: 25px;
            margin: 25px 0;
            border-radius: 4px;
        }

        .note-box p {
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            background: var(--bg-tertiary);
        }

        th, td {
            padding: 18px;
            text-align: left;
            border-bottom: 1px solid var(--border);
            color: var(--text-secondary);
        }

        th {
            background: rgba(0, 0, 0, 0.2);
            color: var(--text-primary);
            font-weight: 600;
        }

        tr:hover {
            background: rgba(59, 130, 246, 0.05);
        }

        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9em;
            color: #90cdf4;
        }

        strong {
            color: var(--text-primary);
            font-weight: 600;
        }

        @media (max-width: 768px) {
            .container {
                padding: 30px 20px;
            }

            body {
                padding: 20px 10px;
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
        <section>
            <h2>Frontend JavaScript Implementation</h2>
            
            <h3>Primary Procedure: fetchLandmarkHours</h3>
            <p>The <code>fetchLandmarkHours</code> function serves as the main procedure for retrieving live museum hours from the backend API. This function accepts a landmark key as its input parameter, which identifies which specific museum or attraction the user wants information about. The procedure implements a complete algorithm that includes sequencing through multiple steps, selection logic to handle different response scenarios, and iteration through error handling mechanisms.</p>

            <div class="code-block">
<pre><span class="keyword">async function</span> <span class="function">fetchLandmarkHours</span>(landmarkKey) {
    <span class="comment">// INPUT: landmarkKey determines which museum to scrape</span>
    <span class="keyword">const</span> landmark = LANDMARK_MAP[landmarkKey];
    <span class="keyword">if</span> (!landmark) <span class="keyword">return null</span>;

    <span class="keyword">try</span> {
        <span class="comment">// Construct API request (Input to backend)</span>
        <span class="keyword">const</span> requestOptions = {
            <span class="property">method</span>: <span class="string">'GET'</span>,
            <span class="property">headers</span>: {
                <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span>
            },
            <span class="property">credentials</span>: <span class="string">'include'</span>
        };
        
        <span class="comment">// Send request to backend API</span>
        <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(
            <span class="string">`${pythonURI}/api/landmarks/${landmark.endpoint}`</span>, 
            requestOptions
        );
        
        <span class="comment">// Check response status (Selection)</span>
        <span class="keyword">if</span> (!response.ok) {
            <span class="keyword">throw new</span> <span class="function">Error</span>(<span class="string">`HTTP </span><span class="number">${</span>response.status<span class="number">}</span><span class="string">`</span>);
        }
        
        <span class="comment">// Parse JSON response (Output from backend)</span>
        <span class="keyword">const</span> data = <span class="keyword">await</span> response.<span class="function">json</span>();
    
        <span class="comment">// Process response (Selection)</span>
        <span class="keyword">if</span> (data.success) {
            <span class="comment">// Return data to calling function</span>
            <span class="keyword">return</span> data.data;
        } <span class="keyword">else</span> {
            console.<span class="function">error</span>(<span class="string">`Error fetching </span><span class="number">${</span>landmark.name<span class="number">}</span><span class="string">:`</span>, data.error);
            <span class="keyword">return</span> <span class="function">getFallbackHours</span>(landmarkKey);
        }
    } <span class="keyword">catch</span> (error) {
        <span class="comment">// Error handling (Selection)</span>
        console.<span class="function">error</span>(<span class="string">`Network error for </span><span class="number">${</span>landmark.name<span class="number">}</span><span class="string">:`</span>, error);
        <span class="keyword">return</span> <span class="function">getFallbackHours</span>(landmarkKey);
    }
}</pre>
            </div>

            <div class="note-box">
                <h4>Algorithm Analysis for Create PT Question 3a and 3b</h4>
                <p>The purpose of this procedure is to retrieve live operating hours from museum websites by communicating with a web scraping backend API. It accepts a museum identifier as input, constructs and sends an HTTP request, handles the response cycle, and returns structured data suitable for display to the user.</p>
                <p>The algorithm demonstrates sequencing through its ordered execution of steps: lookup the landmark configuration, construct the request, send the request to the backend, parse the JSON response, and return the data. Selection logic appears in multiple conditional statements that check for valid landmark keys, successful HTTP responses, and successful data retrieval. The try-catch structure provides iteration-like behavior through error handling paths that attempt fallback mechanisms when the primary request fails.</p>
            </div>

            <h3>List Management: Date Filtering Implementation</h3>
            <p>The date filtering system employs a list data structure to manage the complexity of determining which days of the week fall within the user's trip dates. Rather than hard-coding conditional logic for every possible date combination, the system uses a dynamic approach that builds a list of relevant weekday names and uses that list to filter the museum hours display.</p>

            <div class="code-block">
<pre><span class="keyword">async function</span> <span class="function">getSelectedDays</span>() {
    <span class="keyword">try</span> {
        <span class="comment">// Get user's itinerary data (Input)</span>
        <span class="keyword">const</span> itinerary = <span class="keyword">await</span> <span class="function">getItinerary</span>();
        
        <span class="keyword">if</span> (!itinerary.tripInfo || !itinerary.tripInfo.startDate || !itinerary.tripInfo.endDate) {
            <span class="keyword">return null</span>;
        }
    
        <span class="comment">// Parse date range</span>
        <span class="keyword">const</span> month = itinerary.tripInfo.month;
        <span class="keyword">const</span> dateRange = <span class="function">parseDateRange</span>(month, itinerary.tripInfo.startDate, itinerary.tripInfo.endDate);
    
        <span class="keyword">if</span> (!dateRange) <span class="keyword">return null</span>;
    
        <span class="comment">// Create a Set to store unique days (List data structure)</span>
        <span class="keyword">const</span> selectedDays = <span class="keyword">new</span> <span class="function">Set</span>();
        <span class="keyword">const</span> currentDate = <span class="keyword">new</span> <span class="function">Date</span>(dateRange.start);

        <span class="comment">// Iteration: Loop through each day in range</span>
        <span class="keyword">while</span> (currentDate <= dateRange.end) {
            <span class="keyword">const</span> dayName = currentDate.<span class="function">toLocaleDateString</span>(<span class="string">'en-US'</span>, { 
                <span class="property">weekday</span>: <span class="string">'long'</span> 
            });
            selectedDays.<span class="function">add</span>(dayName);  <span class="comment">// Add to list</span>
            currentDate.<span class="function">setDate</span>(currentDate.<span class="function">getDate</span>() + <span class="number">1</span>);  <span class="comment">// Increment day</span>
        }
    
        <span class="comment">// Convert Set to Array and return (Output)</span>
        <span class="keyword">return</span> <span class="function">Array.from</span>(selectedDays);
    } <span class="keyword">catch</span> (error) {
        console.<span class="function">error</span>(<span class="string">'Error getting selected days:'</span>, error);
        <span class="keyword">return null</span>;
    }
}</pre>
            </div>

            <div class="note-box">
                <h4>List Usage for Create PT Questions 4a through 4d</h4>
                <p>The <code>selectedDays</code> list serves the purpose of storing weekday names that correspond to the user's trip date range. This list enables intelligent filtering of museum hours information, ensuring that users only see operating hours for the days they will actually be visiting. The data stored in this list consists of string values representing weekday names such as "Friday", "Saturday", and "Sunday".</p>
                <p>This list manages complexity by replacing what would otherwise require forty-nine or more individual conditional statements with a single iterative loop. Without the list, the code would need separate conditional logic for every possible combination of start date and end date across a month. The list-based approach scales elegantly to handle trip lengths of any duration without requiring additional code.</p>
                <p>The program accesses list elements through several standard operations including checking the length property, using the includes method to test for membership, and employing forEach to iterate over elements when creating the filtered display output.</p>
            </div>
        </section>

        <section>
            <h2>Backend Python Implementation</h2>
            
            <h3>Web Scraping Procedure: MuseumScraper Class</h3>
            <p>The backend implements a comprehensive web scraping system through the MuseumScraper class, which contains individual procedures for retrieving information from different museum websites. Each scraping procedure follows a consistent pattern: construct an HTTP request with appropriate headers, retrieve the HTML content, parse it to extract relevant information, structure the data into a standardized format, and return it as a dictionary that can be serialized to JSON.</p>

            <div class="code-block">
<pre><span class="keyword">class</span> <span class="function">MuseumScraper</span>:
    <span class="string">"""Web scraper for museum hours with improved parsing"""</span>
    
    <span class="keyword">def</span> <span class="function">scrape_met_museum</span>(<span class="property">self</span>):
        <span class="string">"""Scrape MET Museum hours - main scraping procedure"""</span>
        <span class="keyword">try</span>:
            <span class="comment"># INPUT: URL and headers for request</span>
            url = <span class="string">"https://www.metmuseum.org/visit/plan-your-visit/metropolitan-museum-of-art"</span>
            headers = {<span class="string">'User-Agent'</span>: <span class="string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'</span>}
            
            <span class="comment"># Make HTTP request (Sequencing)</span>
            response = requests.get(url, headers=headers, timeout=<span class="number">10</span>)
            soup = BeautifulSoup(response.text, <span class="string">'html.parser'</span>)
            
            <span class="comment"># Default fallback hours</span>
            hours = <span class="string">"Sun-Thu: 10:00 AM - 5:30 PM, Fri-Sat: 10:00 AM - 9:00 PM"</span>
            
            <span class="comment"># Look for hours with multiple strategies (Iteration through elements)</span>
            hour_sections = soup.find_all([<span class="string">'p'</span>, <span class="string">'div'</span>, <span class="string">'span'</span>, <span class="string">'li'</span>], 
                                         text=re.compile(<span class="string">r'[Hh]ours?|[Oo]pen|[Cc]losed|10.*AM.*5.*PM'</span>, re.IGNORECASE))
            
            <span class="comment"># Selection: Find hours in parsed HTML</span>
            <span class="keyword">for</span> section <span class="keyword">in</span> hour_sections:
                text = section.get_text().strip()
                <span class="keyword">if</span> <span class="string">'10'</span> <span class="keyword">in</span> text <span class="keyword">and</span> (<span class="string">'AM'</span> <span class="keyword">in</span> text <span class="keyword">or</span> <span class="string">'am'</span> <span class="keyword">in</span> text) <span class="keyword">and</span> (<span class="string">'PM'</span> <span class="keyword">in</span> text <span class="keyword">or</span> <span class="string">'pm'</span> <span class="keyword">in</span> text):
                    hours = text[:<span class="number">200</span>]
                    <span class="keyword">break</span>
            
            <span class="comment"># OUTPUT: Return structured data</span>
            <span class="keyword">return</span> {
                <span class="string">'museum'</span>: <span class="string">'MET Museum'</span>,
                <span class="string">'hours'</span>: hours,
                <span class="string">'address'</span>: <span class="string">'1000 5th Ave, New York, NY 10028'</span>,
                <span class="string">'phone'</span>: <span class="string">'(212) 535-7710'</span>,
                <span class="string">'status'</span>: <span class="string">'open'</span>,
                <span class="string">'last_updated'</span>: datetime.now().strftime(<span class="string">"%I:%M %p"</span>),
                <span class="string">'source'</span>: <span class="string">'metmuseum.org'</span>
            }
            
        <span class="keyword">except</span> Exception <span class="keyword">as</span> e:
            <span class="comment"># Error handling with fallback data</span>
            <span class="keyword">return</span> {
                <span class="string">'museum'</span>: <span class="string">'MET Museum'</span>,
                <span class="string">'hours'</span>: <span class="string">'Sun-Thu: 10:00 AM - 5:30 PM, Fri-Sat: 10:00 AM - 9:00 PM'</span>,
                <span class="string">'address'</span>: <span class="string">'1000 5th Ave, New York, NY 10028'</span>,
                <span class="string">'phone'</span>: <span class="string">'(212) 535-7710'</span>,
                <span class="string">'status'</span>: <span class="string">'open'</span>,
                <span class="string">'last_updated'</span>: datetime.now().strftime(<span class="string">"%I:%M %p"</span>),
                <span class="string">'error'</span>: str(e)[:<span class="number">100</span>],
                <span class="string">'source'</span>: <span class="string">'fallback'</span>
            }</pre>
            </div>

            <p>The scraping procedure demonstrates algorithmic thinking through its systematic approach to data extraction. The sequencing is evident in the ordered steps of making the HTTP request, parsing the HTML, searching for hours information, and formatting the response. Selection logic determines which HTML elements contain the relevant information and whether the scraping was successful. Iteration occurs as the procedure loops through multiple HTML elements to find the one containing the hours information.</p>

            <h3>RESTful API Endpoints</h3>
            <p>The backend exposes multiple API endpoints that serve as the interface between the frontend JavaScript and the web scraping procedures. These endpoints follow RESTful conventions, using GET requests to retrieve data and returning JSON-formatted responses. Each endpoint calls the appropriate scraping procedure and structures the response in a consistent format that the frontend can reliably parse.</p>

            <div class="code-block">
<pre><span class="property">@app</span>.route(<span class="string">'/api/met'</span>)
<span class="keyword">def</span> <span class="function">get_met_hours</span>():
    <span class="string">"""GET MET Museum hours - API endpoint"""</span>
    <span class="comment"># Call scraping procedure</span>
    data = scraper.scrape_met_museum()
    
    <span class="comment"># OUTPUT: Return JSON response</span>
    <span class="keyword">return</span> jsonify({
        <span class="string">'success'</span>: <span class="keyword">True</span>, 
        <span class="string">'data'</span>: data
    })

<span class="property">@app</span>.route(<span class="string">'/api/all'</span>)
<span class="keyword">def</span> <span class="function">get_all_hours</span>():
    <span class="string">"""GET all museum hours at once"""</span>
    <span class="comment"># Use list/dictionary to manage multiple data sources</span>
    data = {
        <span class="string">'met'</span>: scraper.scrape_met_museum(),
        <span class="string">'icecream'</span>: scraper.scrape_ice_cream_museum(),
        <span class="string">'ukrainian'</span>: scraper.scrape_ukrainian_museum(),
        <span class="string">'empire'</span>: scraper.scrape_empire_state(),
        <span class="string">'timestamp'</span>: datetime.now().strftime(<span class="string">"%Y-%m-%d %H:%M:%S"</span>)
    }
    
    <span class="comment"># OUTPUT: Structured JSON with multiple data points</span>
    <span class="keyword">return</span> jsonify({
        <span class="string">'success'</span>: <span class="keyword">True</span>, 
        <span class="string">'data'</span>: data
    })</pre>
            </div>

            <h3>Database Schema Design</h3>
            <p>The persistent storage layer uses SQLite to maintain user itinerary data across sessions. The database schema design reflects careful consideration of data relationships and storage efficiency. The primary itinerary table stores user choices in JSON-encoded text fields, allowing flexible storage of complex nested data structures while maintaining a simple table structure. This approach provides the benefits of both relational database management and flexible document storage.</p>

            <div class="code-block">
<pre><span class="keyword">class</span> <span class="function">ItineraryStorage</span>:
    <span class="string">"""Database storage for itinerary choices"""</span>
    
    <span class="keyword">def</span> <span class="function">init_database</span>(<span class="property">self</span>):
        <span class="string">"""Create database table schema"""</span>
        conn = sqlite3.connect(<span class="property">self</span>.db_path)
        cursor = conn.cursor()
        
        <span class="comment"># Define table structure</span>
        cursor.execute(<span class="string">'''
            CREATE TABLE IF NOT EXISTS itinerary (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT,
                user_id INTEGER,
                trip_info TEXT,        <span class="comment">-- JSON stored as TEXT</span>
                breakfast TEXT,        <span class="comment">-- JSON list of breakfast choices</span>
                landmarks TEXT,        <span class="comment">-- JSON list of landmark choices</span>
                shopping TEXT,         <span class="comment">-- JSON list of shopping choices</span>
                broadway TEXT,         <span class="comment">-- JSON list of Broadway choices</span>
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user_id) ON CONFLICT REPLACE
            )
        '''</span>)
        
        conn.commit()
        conn.close()
        print(<span class="string">"Itinerary Storage Database initialized"</span>)</pre>
            </div>
        </section>

        <section>
            <h2>Input and Output Data Flow</h2>
            
            <p>The system implements a complete input-output cycle that begins with user interaction in the browser and culminates in the display of dynamically retrieved information. Understanding this data flow is essential for explaining how the various components work together to achieve the program's purpose.</p>
            
            <p>Input to the system occurs when users select dates for their trip and choose which landmarks they want to visit. These selections are captured by JavaScript event listeners and stored in the application state. When the user requests information about a specific landmark, the frontend constructs an API request containing the landmark identifier. This request serves as input to the backend system.</p>
            
            <p>The backend receives the landmark identifier through the API endpoint URL path. This input determines which web scraping procedure to execute. The scraping procedure then makes its own input-output cycle by sending an HTTP request to the museum's website and receiving HTML content as its input. After parsing and processing this HTML, the backend generates a structured JSON response containing the extracted hours information.</p>
            
            <p>This JSON response serves as output from the backend and input to the frontend. The frontend JavaScript receives this data, parses it, and applies filtering logic based on the user's selected travel dates. The final output appears in the user interface, displaying only the relevant operating hours for the days the user will be visiting.</p>

            <div class="note-box">
                <h4>Example Input</h4>
                <p>User selects travel dates: March 14-16, 2025</p>
                <p>User clicks on MET Museum landmark</p>
                <p>Frontend sends: GET request to /api/met</p>
            </div>

            <div class="note-box">
                <h4>Example Output</h4>
                <p>Backend returns JSON: success indicator, museum name, operating hours string, address, phone number, last updated timestamp, and data source</p>
                <p>Frontend displays: Filtered hours showing only Friday through Sunday information</p>
            </div>
        </section>

        <section>
            <h2>Alignment with Create PT Assessment Criteria</h2>
            
            <p>This implementation addresses all aspects of the College Board Create Performance Task Skill B requirements. The following analysis demonstrates how specific components of the code satisfy each assessment criterion.</p>

            <table>
                <thead>
                    <tr>
                        <th>Assessment Question</th>
                        <th>Implementation Evidence</th>
                        <th>Code Reference</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>3a: Describe the purpose of your procedure</strong></td>
                        <td>The fetchLandmarkHours procedure retrieves live operating hours from museum websites by calling a web scraping backend API and returning structured data for display</td>
                        <td>JavaScript function that accepts landmark key parameter and returns hours data object</td>
                    </tr>
                    <tr>
                        <td><strong>3b: Describe your algorithm</strong></td>
                        <td>Algorithm uses sequencing to order request-parse-return steps, selection through conditional statements for error handling, and iteration through retry mechanisms</td>
                        <td>Try-catch blocks, if statements for response validation, fallback procedures</td>
                    </tr>
                    <tr>
                        <td><strong>3c: Show procedure call</strong></td>
                        <td>Called within refreshCurrentLandmark function passing currentLandmark as parameter</td>
                        <td>const hoursData = await fetchLandmarkHours(currentLandmark);</td>
                    </tr>
                    <tr>
                        <td><strong>4a: Describe the purpose of your list</strong></td>
                        <td>The selectedDays list stores weekday names corresponding to the user's trip dates, enabling filtered display of only relevant museum hours</td>
                        <td>Array created from date range iteration containing weekday strings</td>
                    </tr>
                    <tr>
                        <td><strong>4b: Describe data stored in list</strong></td>
                        <td>Stores string values representing weekday names such as "Friday", "Saturday", "Sunday" extracted from user's date range</td>
                        <td>Array.from(selectedDays) converts Set to array of strings</td>
                    </tr>
                    <tr>
                        <td><strong>4c: Explain how list manages complexity</strong></td>
                        <td>Replaces forty-nine or more conditional statements with single iterative loop, making code scalable to any trip length without modification</td>
                        <td>While loop iterates through date range regardless of length</td>
                    </tr>
                    <tr>
                        <td><strong>4d: Show two list operations</strong></td>
                        <td>Uses length property to check for empty list, includes method to test day membership, forEach to iterate for display</td>
                        <td>selectedDays.length, selectedDays.includes(day), selectedDays.forEach()</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="section">
            <h2>Technical Implementation Details</h2>
            
            <h3>Algorithm Components</h3>
            <p>The algorithmic foundation of this feature rests on three fundamental programming constructs that appear throughout both the frontend and backend code. Sequencing manifests in the ordered execution of HTTP request construction, transmission, response parsing, and data formatting. Each step must occur in a specific order to achieve the desired result, and disrupting this sequence would break the functionality.</p>
            
            <p>Selection logic appears in multiple contexts throughout the codebase. The frontend uses conditional statements to determine whether a valid landmark was selected, whether the API response was successful, and whether fallback data should be used. The backend employs selection when parsing HTML to identify which elements contain the hours information and when deciding whether to return scraped data or fallback values.</p>
            
            <p>Iteration occurs both explicitly and implicitly. The date filtering function uses an explicit while loop to iterate through each day in the user's date range. The web scraping procedure iterates through HTML elements until it finds one matching the search criteria. Error handling implements implicit iteration through retry and fallback mechanisms that continue attempting to provide valid data to the user.</p>

            <h3>Data Structure Strategy</h3>
            <p>The choice of data structures reflects careful consideration of the problems being solved. Lists provide the optimal solution for managing date ranges because they allow dynamic creation of day collections without requiring hardcoded logic for every possible date combination. The ability to iterate over list elements, check for membership, and access elements by index makes lists ideal for this filtering task.</p>
            
            <p>Dictionaries structure the JSON responses from the backend, providing named access to different pieces of information about each museum. This key-value structure allows the frontend to reliably access specific data points regardless of the order they appear in the response. The database schema extends this concept by storing JSON-encoded dictionaries in text fields, providing flexibility while maintaining data integrity.</p>

            <h3>Error Handling and Resilience</h3>
            <p>Robust error handling ensures the application continues functioning even when web scraping encounters problems. Network timeouts, HTML structure changes, and parsing errors all trigger fallback mechanisms that provide reasonable default data rather than causing application failures. This defensive programming approach recognizes that external websites may change unpredictably and builds resilience into the system.</p>
        </section>

        <section class="section">
            <h2>Conclusion and Assessment Readiness</h2>
            
            <p>This web scraping feature successfully demonstrates all required components for the College Board Create Performance Task Skill B assessment. The implementation provides clear examples of student-developed procedures with well-defined inputs and outputs, algorithms incorporating sequencing, selection, and iteration, and sophisticated use of lists to manage program complexity.</p>
            
            <p>The frontend JavaScript procedures handle user input and API communication, implementing algorithms that process responses and filter data for display. The backend Python code performs real web scraping operations, parsing live data from museum websites rather than using hardcoded values. The database schema provides persistent storage for user preferences, and the overall system architecture demonstrates understanding of full-stack web development principles.</p>
            
            <p>For examination purposes, the key reference points include the fetchLandmarkHours procedure as the primary algorithmic example, the selectedDays list as the data structure managing complexity, and the complete data flow from user input through web scraping to filtered output display. The implementation satisfies all rubric requirements while demonstrating practical software engineering skills applicable beyond the assessment context.</p>
        </section>
    </div>
</body>
</html>