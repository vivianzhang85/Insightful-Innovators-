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
    <div class="step">Choose attractions (Ukrainian Museum, Ice Cream Museum, MET Museum, Empire State Building)</div>
    <div class="step">Incorporate highlights, reviews, ratings, animation, interactive activity, live-updating hours</div>
    <div class="step">Web scraping with BeautifulSoup</div>
    <div class="step">Connect backend to frontend to fetch data</div>
    <div class="step">Test endpoints in Postman</div>
  </div>

  <!-- Broadway Journey -->
  <div class="journey">
    <h2>Broadway Page Journey</h2>
    <div class="step">Choose Broadway shows</div>
    <div class="step">Use Jokes API as template for lyrics implementation</div>
    <div class="step">Test lyrics endpoints in backend via Postman</div>
    <div class="step">Fetch data to frontend for interactive display</div>
  </div>

</div>

</body>
</html>
