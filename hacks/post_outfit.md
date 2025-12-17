---
layout: post
title: "Post Your Outfit"
description: "Publish the outfit you saved from the shopping page."
permalink: /new-york/shopping/post/
author: "Insightful Innovators"
date: 2025-12-17
microblog: true
---

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Post Your Outfit</title>
  <style>
    body { font-family: Georgia, serif; background: linear-gradient(135deg,#1a2332 0%,#2c3e50 100%); color: #fff; padding: 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { text-align:center; color:#4169E1; margin-bottom: 12px; }
    .card { background: #1a1a1a; padding: 20px; border-radius: 12px; border: 2px solid #4169E1; }
    .preview { display:flex; gap:12px; margin-bottom: 12px; }
    .preview-block { background:#2a2a2a; padding:12px; border-radius:8px; flex:1 }
    .preview-block strong { color:#4169E1; }
    textarea { width:100%; min-height:100px; padding:10px; border-radius:8px; border:1px solid #4169E1; background:#111; color:#fff; box-sizing:border-box; }
    .btn { display:block; width:100%; padding:12px; margin-top:12px; background:linear-gradient(135deg,#4169E1 0%,#6495ED 100%); color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:700; }
    .status { margin-top:10px; font-weight:600; text-align:center; }
    .small { font-size:0.9rem; color:#ccc; }
    a { color:#6495ED }
  </style>
</head>
<body>
  <div class="container">
    <h1>Post Your Saved Outfit</h1>
    <div class="card">
      <div id="outfit-area" style="display:block;">
        <div class="preview">
          <div class="preview-block">
            <div class="small">Center</div>
            <div id="preview-center" style="margin-top:6px;"></div>
          </div>
          <div class="preview-block">
            <div class="small">Gender</div>
            <div id="preview-gender" style="margin-top:6px;"></div>
          </div>
        </div>

        <div class="preview" style="margin-top:6px;">
          <div class="preview-block">
            <div class="small">Top</div>
            <div id="preview-top" style="margin-top:6px;"></div>
          </div>
          <div class="preview-block">
            <div class="small">Bottom</div>
            <div id="preview-bottom" style="margin-top:6px;"></div>
          </div>
          <div class="preview-block">
            <div class="small">Shoes</div>
            <div id="preview-shoes" style="margin-top:6px;"></div>
          </div>
        </div>

        <div style="margin-top:14px;">
          <label for="caption" class="small">Caption (optional)</label>
          <textarea id="caption" placeholder="Describe your look..."></textarea>
        </div>

        <button id="postBtn" class="btn">📤 Post Outfit</button>
        <div id="postStatus" class="status"></div>
        <div style="margin-top:8px; text-align:center;"><a href="/hacks/step2_shopping.md">← Back to shopping</a></div>
      </div>
    </div>
  </div>

  <script type="module">
    (async function(){
      // try dynamic import of config so a missing config doesn't completely abort the module
      let baseurl = '';
      let pythonURI = '/api';
      let fetchOptions = { credentials: 'same-origin', headers: { Accept: 'application/json' } };
      try {
        const cfgModule = await import('/assets/js/api/config.js');
        const cfg = cfgModule && cfgModule.default ? cfgModule.default : cfgModule || {};
        baseurl = cfg.baseurl ?? baseurl;
        pythonURI = cfg.pythonURI ?? pythonURI;
        fetchOptions = cfg.fetchOptions ?? fetchOptions;
      } catch (err) {
        console.warn('Could not load config via dynamic import, using defaults', err);
      }

      // Read saved outfit from localStorage and update UI
      const outfitArea = document.getElementById('outfit-area');

      const raw = localStorage.getItem('savedOutfit');
      if (!raw) {
        // nothing to show; keep outfit area hidden
        console.info('No saved outfit in localStorage');
        return;
      }

      try {
        const outfit = JSON.parse(raw);
        // populate preview fields directly from the saved object
        const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
        setText('preview-center', outfit.center || outfit.shoppingCenter || '');
        setText('preview-gender', outfit.gender || outfit.sex || '');
        setText('preview-top', outfit.top || outfit.women_top || outfit.men_top || '');
        setText('preview-bottom', outfit.bottom || outfit.women_bottom || outfit.men_bottom || '');
        setText('preview-shoes', outfit.shoes || outfit.women_shoes || outfit.men_shoes || '');

        if (outfitArea) outfitArea.style.display = 'block';

        const postBtn = document.getElementById('postBtn');
        if (postBtn) postBtn.addEventListener('click', async () => {
          const status = document.getElementById('postStatus');
          status.textContent = '⏳ Posting...';
          const caption = document.getElementById('caption').value || '';

          const payload = {
            women_top: outfit.gender === 'women' ? outfit.top : null,
            women_bottom: outfit.gender === 'women' ? outfit.bottom : null,
            women_shoes: outfit.gender === 'women' ? outfit.shoes : null,
            men_top: outfit.gender === 'men' ? outfit.top : null,
            men_bottom: outfit.gender === 'men' ? outfit.bottom : null,
            men_shoes: outfit.gender === 'men' ? outfit.shoes : null,
            caption: caption
          };

          try {
            const url = `${baseurl}${pythonURI}/api/post`;
            const options = {
              ...fetchOptions,
              method: 'POST',
              headers: {
                ...(fetchOptions && fetchOptions.headers ? fetchOptions.headers : {}),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            };

            const resp = await fetch(url, options);

            if (resp.status === 401) {
              status.textContent = '🔐 You must be logged in to post. Redirecting to login...';
              setTimeout(() => { window.location.href = '/login?next=' + encodeURIComponent(window.location.pathname); }, 800);
              return;
            }

            const data = await resp.json().catch(() => ({}));
            if (resp.ok && data && data.success) {
              status.textContent = '✅ Posted!';
              localStorage.removeItem('savedOutfit');
              setTimeout(() => { window.location.href = '/posts'; }, 900);
            } else {
              status.textContent = '❌ Error: ' + (data.error || 'Unknown');
            }
          } catch (err) {
            console.error(err);
            status.textContent = '❌ Network or server error.';
          }
        });

      } catch (e) {
        console.error('Invalid saved outfit', e);
      }
    })();
  </script>
</body>
</html>
