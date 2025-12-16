---
title: Fetch of Flask Backend Lyrics
layout: post
description: An introductory example of Frontend talking to Backend Python Flask application serving lyrics.  
permalink: /api/lyricpage
breadcrumb: true
show_reading_time: false
---

<!-- HTML table fragment for page -->
<table>
  <thead>
    <tr>
      <th>Lyric</th>
      <th>❤️ Love</th>
      <th>👎 Dislike</th>
    </tr>
  </thead>
  <tbody id="result">
    <!-- JavaScript-generated rows -->
  </tbody>
</table>

<script type="module">
  import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

  // prepare HTML defined "result" container for new output
  const resultContainer = document.getElementById("result");

  // reaction keys
  const LOVE = "love";
  const DISLIKE = "dislike";

  // prepare fetch urls
  const url = `${pythonURI}/api/lyrics`;
  const getURL = url + "/";
  const loveURL = url + "/love/";
  const dislikeURL = url + "/dislike/";

  // prepare PUT options
  const reactOptions = {
    ...fetchOptions,
    method: "PUT",
  };

  // fetch all lyrics
  fetch(getURL, fetchOptions)
    .then(response => {
      if (response.status !== 200) {
        error("GET API response failure: " + response.status);
        return;
      }
      response.json().then(data => {
        for (const row of data) {
          const tr = document.createElement("tr");

          // lyric text
          const lyric = document.createElement("td");
          lyric.innerHTML = `${row.id}. ${row.lyric}`;

          // love button
          const love = document.createElement("td");
          const loveBtn = document.createElement("button");
          loveBtn.id = LOVE + row.id;
          loveBtn.innerHTML = row.love;
          loveBtn.onclick = () => {
            reaction(LOVE, loveURL + row.id, loveBtn.id);
          };
          love.appendChild(loveBtn);

          // dislike button
          const dislike = document.createElement("td");
          const dislikeBtn = document.createElement("button");
          dislikeBtn.id = DISLIKE + row.id;
          dislikeBtn.innerHTML = row.dislike;
          dislikeBtn.onclick = () => {
            reaction(DISLIKE, dislikeURL + row.id, dislikeBtn.id);
          };
          dislike.appendChild(dislikeBtn);

          tr.appendChild(lyric);
          tr.appendChild(love);
          tr.appendChild(dislike);
          resultContainer.appendChild(tr);
        }
      });
    })
    .catch(err => {
      error(err + ": " + getURL);
    });

  // refresh reaction counts every 5 seconds
  function refreshReactions() {
    fetch(getURL, fetchOptions)
      .then(response => response.json())
      .then(data => {
        for (const row of data) {
          const loveBtn = document.getElementById(LOVE + row.id);
          if (loveBtn) loveBtn.innerHTML = row.love;

          const dislikeBtn = document.getElementById(DISLIKE + row.id);
          if (dislikeBtn) dislikeBtn.innerHTML = row.dislike;
        }
      })
      .catch(err => console.error("Refresh error:", err));
  }

  setInterval(refreshReactions, 5000);

  // handle love/dislike reactions
  function reaction(type, postURL, elemID) {
    fetch(postURL, reactOptions)
      .then(response => {
        if (response.status !== 200) {
          error("PUT API response failure: " + response.status);
          return;
        }
        response.json().then(data => {
          if (type === LOVE)
            document.getElementById(elemID).innerHTML = data.love;
          else if (type === DISLIKE)
            document.getElementById(elemID).innerHTML = data.dislike;
          else
            error("Unknown reaction type: " + type);
        });
      })
      .catch(err => {
        error(err + " " + postURL);
      });
  }

  // error handler
  function error(err) {
    console.error(err);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 3;
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }
</script>
