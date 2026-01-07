---
layout: post
title: "View Your Outfit"
description: "Publish the outfit you saved from the shopping page."
permalink: /new-york/shopping/post
---
  <style>
    body { font-family: Georgia, serif; background: linear-gradient(135deg,#1a2332 0%,#2c3e50 100%); color: #fff; padding: 24px; }
    .container { max-width: 900px; margin: 0 auto; }
    h1 { text-align:center; color:#4169E1; margin-bottom: 12px; }
    .card { background: #1a1a1a; padding: 20px; border-radius: 12px; border: 2px solid #4169E1; }
    .preview-row { display:flex; gap:12px; justify-content:space-between; align-items:flex-start; }
    .preview-block { background:#2a2a2a; padding:12px; border-radius:8px; flex:1; text-align:center; }
    .preview-block img { max-width:100%; height:auto; border-radius:6px; display:block; margin:0 auto 8px; }
    .preview-block strong { color:#4169E1; display:block; margin-bottom:6px; }
    .small { font-size:0.9rem; color:#ccc; }
    .btn { display:inline-block; padding:10px 14px; background:linear-gradient(135deg,#4169E1 0%,#6495ED 100%); color:#fff; border:none; border-radius:8px; cursor:pointer; font-weight:700; }
    .actions { display:flex; gap:8px; justify-content:center; margin-top:12px; }
    a { color:#6495ED }
  </style>

  <div class="container">
    <h1>Saved Outfit Preview</h1>
    <div class="card">
      <div id="outfit-area">
        <div class="preview-row">
          <div class="preview-block" id="block-top">
            <div class="small">Top</div>
            <img id="img-top" src="" alt="Top" />
            <div id="name-top" class="small"></div>
          </div>

          <div class="preview-block" id="block-bottom">
            <div class="small">Bottom</div>
            <img id="img-bottom" src="" alt="Bottom" />
            <div id="name-bottom" class="small"></div>
          </div>

          <div class="preview-block" id="block-shoes">
            <div class="small">Shoes</div>
            <img id="img-shoes" src="" alt="Shoes" />
            <div id="name-shoes" class="small"></div>
          </div>
        </div>

        <div class="actions">
          <button id="clearBtn" class="btn">Clear saved outfit</button>
          <a href="/student/new-york/shopping/" class="btn" style="background:transparent;border:1px solid #4169E1;color:#4169E1;text-decoration:none;">← Back to shopping</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function(){
      const raw = localStorage.getItem('savedOutfit');
      const outfitArea = document.getElementById('outfit-area');

      if (!raw) {
        outfitArea.innerHTML = '<div style="color:#ccc; text-align:center; padding:24px;">No saved outfit found. Go back to <a href="/new-york/shopping/">shopping</a> to build one.</div>';
        return;
      }

      let outfit;
      try {
        outfit = JSON.parse(raw);
      } catch (e) {
        console.error('Invalid savedOutfit JSON', e);
        outfitArea.innerHTML = '<div style="color:#f88; text-align:center;">Saved outfit is invalid.</div>';
        return;
      }

      // Fill images and names side-by-side, keeping original styling
      const imgTop = document.getElementById('img-top');
      const imgBottom = document.getElementById('img-bottom');
      const imgShoes = document.getElementById('img-shoes');

      const nameTop = document.getElementById('name-top');
      const nameBottom = document.getElementById('name-bottom');
      const nameShoes = document.getElementById('name-shoes');

      // Use image properties if present; fallback to empty
      imgTop.src = outfit.topImage || outfit.top_image || '';
      imgBottom.src = outfit.bottomImage || outfit.bottom_image || '';
      imgShoes.src = outfit.shoesImage || outfit.shoes_image || '';

      // If no image, hide the img element and show placeholder text
      function setImgOrPlaceholder(imgEl, nameEl, value) {
        if (!imgEl.src) {
          imgEl.style.display = 'none';
        } else {
          imgEl.style.display = 'block';
        }
        nameEl.textContent = value || '';
      }

      setImgOrPlaceholder(imgTop, nameTop, outfit.top || outfit.women_top || outfit.men_top || '');
      setImgOrPlaceholder(imgBottom, nameBottom, outfit.bottom || outfit.women_bottom || outfit.men_bottom || '');
      setImgOrPlaceholder(imgShoes, nameShoes, outfit.shoes || outfit.women_shoes || outfit.men_shoes || '');

      // Clear button
      document.getElementById('clearBtn').addEventListener('click', () => {
        localStorage.removeItem('savedOutfit');
        window.location.reload();
      });

    })();
  </script>

</body>
</html>
