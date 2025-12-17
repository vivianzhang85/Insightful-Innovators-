---
layout: post
title: "Step 1 Breakfast"
description: "Breakfast time hits, and in NYC that means one thing: pick your spot and dive in."
permalink: /new-york/reflection/
parent: "Analytics/Admin"
team: "Insightful Innovators"
submodule: 1
author: "Insightful Innocators"
date: 2025-11-20
microblog: true
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Project Journeys Diagram</title>
<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #111;
    color: #fff;
    padding: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #00bcd4;
  }

  .diagram {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
  }

  .journey {
    background: #1a1a1a;
    border-radius: 12px;
    padding: 25px;
    width: 400px;
    box-shadow: 0 6px 15px rgba(0, 188, 212, 0.4);
    transition: transform 0.2s;
  }

  .journey:hover {
    transform: translateY(-5px);
  }

  .journey h2 {
    text-align: center;
    color: #00bcd4;
    margin-bottom: 20px;
  }

  .step {
    background: #222;
    margin: 15px 0;
    padding: 12px 18px;
    border-left: 4px solid #00bcd4;
    border-radius: 8px;
    position: relative;
    transition: background 0.2s;
  }

  .step:hover {
    background: #333;
  }

  .step::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    width: 2px;
    height: 15px;
    background: #00bcd4;
    transform: translateX(-50%);
  }

  .step:last-child::after {
    display: none;
  }
</style>
</head>
<body>

<h1>Project Journeys Diagram</h1>

<div class="diagram">

  <!-- Attractions Journey -->
  <div class="journey">
    <h2>Attractions Page Journey</h2>
    <div class="step">Choose attractions for each NYC location</div>
    <div class="step">Add highlights, reviews, ratings, animations, and interactive elements</div>
    <div class="step">Scrape live hours using BeautifulSoup</div>
    <div class="step">Connect backend endpoints to frontend</div>
    <div class="step">Test all endpoints in Postman</div>
  </div>

  <!-- Broadway Journey -->
  <div class="journey">
    <h2>Broadway Page Journey</h2>
    <div class="step">Select Broadway shows to feature</div>
    <div class="step">Use Jokes API structure as a model for lyrics integration</div>
    <div class="step">Test lyrics endpoints in the backend with Postman</div>
    <div class="step">Fetch and display data interactively on the frontend</div>
  </div>

  <!-- Breakfast Journey -->
  <div class="journey">
    <h2>Breakfast Page Journey</h2>
    <div class="step">Select breakfast locations: East Village, Soho, Upper East Side, and Midtown</div>
    <div class="step">Choose restaurants (Sarabeth’s, Jack’s Wife Freda, Shuka, Ess-a-Bagel)</div>
    <div class="step">Create custom menus for each restaurant</div>
    <div class="step">Build an interactive frontend to add multiple items to a custom menu</div>
    <div class="step">Scrape live restaurant hours using BeautifulSoup</div>
    <div class="step">Develop and test backend endpoints in Postman</div>
    <div class="step">Fetch backend data into the breakfast frontend</div>
    <div class="step">Troubleshoot connections to fully link frontend and backend</div>
  </div>

  <!-- Shopping Journey -->
  <div class="journey">
    <h2>Shopping Page Journey</h2>
    <div class="step">Design concept for users to build and post outfits from curated selections</div>
    <div class="step">Research and select four New York-based shops</div>
    <div class="step">Scrape real product images directly from shop websites</div>
    <div class="step">Integrate authentication API to log in and track users</div>
    <div class="step">Confirm post API functionality for sharing outfits</div>
    <div class="step">Connect scraped images to frontend for realistic outfit displays</div>
    <div class="step">Create an authentic, interactive shopping experience using real data</div>
  </div>

</div>

</body>
</html>

