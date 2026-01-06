---
layout: post
title: "Trip Information Quiz"
description: "Start by inputting the dates of your trip"
permalink: /newyork/tripinfo/
parent: "Travel/Planning"
team: "Trip Planners"
submodule: 1
author: "Trip Planners"
date: 2025-01-06
microblog: true
footer: 
previous: /newyork/home/
home: /nyc/home/
next: /newyork/itinerary/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New York Trip Planner</title>
    <style>
        body {
            min-height: 100vh;
            background: linear-gradient(to bottom right, #1e3a8a, #1e40af);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .container {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 28rem;
            width: 100%;
        }
        h1 {
            font-size: 1.875rem;
            font-weight: bold;
            color: #000000;
            margin-bottom: 1.5rem;
            text-align: center;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #000000;
            margin-bottom: 0.5rem;
        }
        select, input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
            box-sizing: border-box;
        }
        select:focus, input:focus {
            outline: none;
            ring: 2px;
            ring-color: #4f46e5;
            border-color: transparent;
        }
        button {
            width: 100%;
            background: #4f46e5;
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        button:hover {
            background: #4338ca;
        }
        .result {
            text-align: center;
        }
        .result-box {
            background: #1e3a8a;
            border: 1px solid #090329ff;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
        }
        .result-box h2 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 1rem;
        }
        .result-details {
            text-align: left;
            color: #ffffff;
        }
        .result-details p {
            margin: 0.5rem 0;
        }
        .result-details span {
            font-weight: 500;
        }
        .hidden {
            display: none;
        }
        .reset-btn {
            background: #4f46e5;
            padding: 0.5rem 1.5rem;
            width: auto;
            display: inline-block;
        }
        .breakfast-nav {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
        .breakfast-btn {
            display: inline-block;
            padding: 15px 40px;
            font-size: 1.2rem;
            font-weight: bold;
            color: #1e3a8a;
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .breakfast-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);
            background: linear-gradient(135deg, #ffed4e 0%, #ffd700 100%);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New York Trip Planner</h1>
        
        <div id="quizForm">
            <div class="form-group">
                <label for="month">Which month are you traveling?</label>
                <select id="month">
                    <option value="">Select a month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

            <div class="form-group">
                <label for="startDate">Start Date</label>
                <input type="number" id="startDate" min="1" max="31" placeholder="e.g., 15">
            </div>

            <div class="form-group">
                <label for="endDate">End Date</label>
                <input type="number" id="endDate" min="1" max="31" placeholder="e.g., 20">
            </div>

            <button onclick="submitTrip()">Submit Trip Details</button>
        </div>

        <div id="result" class="result hidden">
            <div class="result-box">
                <h2>Trip Details Submitted!</h2>
                <div class="result-details">
                    <p><span>Month:</span> <span id="resultMonth"></span></p>
                    <p><span>Start Date:</span> <span id="resultStart"></span></p>
                    <p><span>End Date:</span> <span id="resultEnd"></span></p>
                </div>
            </div>
            <button class="reset-btn" onclick="resetForm()">Plan Another Trip</button>
            <div class="breakfast-nav">
                <a href="{{ site.baseurl }}/new-york/breakfast/" class="breakfast-btn">
                    🍳 Hungry? It's time to pick your breakfast spot!
                </a>
            </div>
        </div>
    </div>

    <script>
        function submitTrip() {
            const month = document.getElementById('month').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            if (month && startDate && endDate) {
                document.getElementById('resultMonth').textContent = month;
                document.getElementById('resultStart').textContent = month + ' ' + startDate;
                document.getElementById('resultEnd').textContent = month + ' ' + endDate;

                document.getElementById('quizForm').classList.add('hidden');
                document.getElementById('result').classList.remove('hidden');
            }
        }

        function resetForm() {
            document.getElementById('month').value = '';
            document.getElementById('startDate').value = '';
            document.getElementById('endDate').value = '';

            document.getElementById('quizForm').classList.remove('hidden');
            document.getElementById('result').classList.add('hidden');
        }
    </script>
</body>
</html>