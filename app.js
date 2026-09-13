(function(){
  "use strict";

  var STORAGE_KEY = "dio_constellation_board_v2";

  var CATS = {
    inner: { label: "Inner World" },
    com: { label: "Com Lab" },
    logic: { label: "Logic Lab" },
    system: { label: "System Lab" },
    growth: { label: "Growth Lab" }
  };
  var CAT_ORDER = ["inner", "com", "logic", "system", "growth"];

  function initialBoard(){
    return {
      dots: [
        { id: 'd_inner_mind___emotions', name: 'Mind & Emotions', category: 'inner', notes: "Car Mode, body language, Maslow's Hierarchy", x: 50.0, y: 5.0, sample: false },
        { id: 'd_inner_manner', name: 'Manner', category: 'inner', notes: 'Saying “Krub”, clean-up time', x: 50.0, y: 15.0, sample: false },
        { id: 'd_inner_physical_care', name: 'Physical Care', category: 'inner', notes: 'Haircuts, hygiene, health basics', x: 50.0, y: 25.0, sample: false },
        { id: 'd_com_english', name: 'English', category: 'com', notes: 'Verb vs noun, spelling, sight words', x: 9.0, y: 10.0, sample: false },
        { id: 'd_com_thai', name: 'Thai', category: 'com', notes: 'ใบโบกใบบัว readers, สระ (vowel) practice', x: 18.0, y: 10.0, sample: false },
        { id: 'd_com_chinese', name: 'Chinese', category: 'com', notes: 'Hua Chiew Chinese, Follow Me lessons', x: 9.0, y: 30.5, sample: false },
        { id: 'd_com_english___teacher_nim', name: 'English – Teacher Nim', category: 'com', notes: '250 THB/hr · 2,500/10 sessions', x: 18.0, y: 30.5, sample: false },
        { id: 'd_com_english___t__erik', name: 'English – T. Erik', category: 'com', notes: '350 THB/hr · 3,500/10 sessions', x: 9.0, y: 51.0, sample: false },
        { id: 'd_com_english___t__julie', name: 'English – T. Julie', category: 'com', notes: '200 THB/hr', x: 18.0, y: 51.0, sample: false },
        { id: 'd_com_thai___teacher_pang', name: 'Thai – Teacher Pang', category: 'com', notes: 'ครูพี่แป้ง · 120 THB/hr', x: 9.0, y: 71.5, sample: false },
        { id: 'd_com_chinese___follow_me', name: 'Chinese – Follow Me', category: 'com', notes: '~350–383 THB/hr · 24 sessions/term', x: 18.0, y: 71.5, sample: false },
        { id: 'd_com_chinese___hua_chiew', name: 'Chinese – Hua Chiew', category: 'com', notes: '5,850 THB / 10 sessions (30 hrs)', x: 9.0, y: 92.0, sample: false },
        { id: 'd_logic_science', name: 'Science', category: 'logic', notes: 'Mold experiment, periodic table, sea life', x: 88.0, y: 6.0, sample: false },
        { id: 'd_logic_math', name: 'Math', category: 'logic', notes: 'Multiplication, place value, weekly worksheets', x: 88.0, y: 16.0, sample: false },
        { id: 'd_logic_history', name: 'History', category: 'logic', notes: 'Great Wall, Mt Rushmore, current events', x: 88.0, y: 26.0, sample: false },
        { id: 'd_system_technology', name: 'Technology', category: 'system', notes: 'ChatGPT vs Gemini, posting to YouTube', x: 80.0, y: 34.0, sample: false },
        { id: 'd_system_computer', name: 'Computer', category: 'system', notes: 'Sonic game, Tinkercad, own YouTube channel', x: 91.0, y: 34.0, sample: false },
        { id: 'd_system_engineering', name: 'Engineering', category: 'system', notes: 'Electronics set, Lego, Lego Technic', x: 80.0, y: 48.5, sample: false },
        { id: 'd_system_geography', name: 'Geography', category: 'system', notes: 'World map app, current events/news', x: 91.0, y: 48.5, sample: false },
        { id: 'd_system_business', name: 'Business', category: 'system', notes: 'Expensive vs cheap, 10% investment, signage', x: 80.0, y: 63.0, sample: false },
        { id: 'd_system_social_studies', name: 'Social Studies', category: 'system', notes: 'Money & value, world religions', x: 91.0, y: 63.0, sample: false },
        { id: 'd_system_zodiac', name: 'Zodiac', category: 'system', notes: 'Chinese zodiac, yin-yang, 12 zodiac order', x: 80.0, y: 77.5, sample: false },
        { id: 'd_system_technology___teacher_ban', name: 'Technology – Teacher Bank', category: 'system', notes: 'ครูแบงค์ · 458 THB/hr · 5,500/12 sessions', x: 91.0, y: 77.5, sample: false },
        { id: 'd_system_technology___gdd_scratch', name: 'Technology – GDD Scratch', category: 'system', notes: '10,000 THB / 12 sessions (24 hrs)', x: 80.0, y: 92.0, sample: false },
        { id: 'd_growth_pe', name: 'PE', category: 'growth', notes: 'Taekwondo, swimming (ว่ายน้ำ)', x: 32.0, y: 56.0, sample: false },
        { id: 'd_growth_music', name: 'Music', category: 'growth', notes: 'Piano key practice, favorite songs', x: 50.0, y: 56.0, sample: false },
        { id: 'd_growth_art', name: 'Art', category: 'growth', notes: 'Clay volcano & pizza, box robot', x: 68.0, y: 56.0, sample: false },
        { id: 'd_growth_game', name: 'Game', category: 'growth', notes: 'Roblox, Jenga, board games', x: 32.0, y: 68.0, sample: false },
        { id: 'd_growth_story', name: 'Story', category: 'growth', notes: 'Moon Woke Up, Iron Man', x: 50.0, y: 68.0, sample: false },
        { id: 'd_growth_pe___atma', name: 'PE – ATMA', category: 'growth', notes: '453 THB/hr', x: 68.0, y: 68.0, sample: false },
        { id: 'd_growth_swimming___navy', name: 'Swimming – Navy', category: 'growth', notes: 'นาวี · 590 THB/hr · 5,900/10 sessions', x: 32.0, y: 80.0, sample: false },
        { id: 'd_growth_muay_thai', name: 'Muay Thai', category: 'growth', notes: 'Across the street from home', x: 50.0, y: 80.0, sample: false },
        { id: 'd_growth_dance___rumpuree', name: 'Dance – Rumpuree', category: 'growth', notes: '400 THB/hr · Samyan Mitrtown', x: 68.0, y: 80.0, sample: false },
        { id: 'd_growth_taekwondo_belt', name: 'Taekwondo Belt', category: 'growth', notes: '1,000 THB/month', x: 32.0, y: 92.0, sample: false },
        { id: 'd_growth_piano', name: 'Piano', category: 'growth', notes: 'Intro to piano + reading music sheets', x: 50.0, y: 92.0, sample: false },
        { id: 'd_growth_chess', name: 'Chess', category: 'growth', notes: 'Strategy track — light coaching + board game nights', x: 68.0, y: 92.0, sample: false }
      ],
      connections: []
    };
  }

  var board = null;
  var usingFirebase = false;
  var docRef = null;
  var selectedId = null;
  var mode = null; // null | 'add' | 'edit'
  var saveTimer = null;

  var canvasEl = document.getElementById("canvas");
  var linesEl = document.getElementById("lines");
  var panelEl = document.getElementById("panel");
  var statsEl = document.getElementById("stats");
  var addBtn = document.getElementById("addBtn");
  var syncBadgeEl = document.getElementById("syncBadge");

  function uid(prefix){
    return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  // ---------- persistence ----------

  function loadLocal(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      var parsed = JSON.parse(raw);
      if(parsed && Array.isArray(parsed.dots) && Array.isArray(parsed.connections)) return parsed;
    }catch(e){}
    return null;
  }

  function saveLocal(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(board)); }catch(e){}
  }

  function isFirebaseConfigured(){
    var c = window.DIO_FIREBASE_CONFIG;
    return !!(c && c.apiKey && c.projectId && String(c.apiKey).indexOf("YOUR_") !== 0);
  }

  function setSyncBadge(state){
    if(!syncBadgeEl) return;
    syncBadgeEl.className = "sync-badge " + state;
    var text = {
      connected: "Synced across devices",
      local: "Saved on this device only",
      error: "Sync error — saved on this device only"
    }[state] || "Saved on this device only";
    syncBadgeEl.innerHTML = '<span class="sync-dot"></span>' + text;
  }

  function initStore(){
    if(window.firebase && isFirebaseConfigured()){
      try{
        firebase.initializeApp(window.DIO_FIREBASE_CONFIG);
        var fdb = firebase.firestore();
        docRef = fdb.collection("boards").doc("main");
        usingFirebase = true;
        docRef.onSnapshot(function(snap){
          setSyncBadge("connected");
          if(snap.exists){
            var data = snap.data() || {};
            board = {
              dots: Array.isArray(data.dots) ? data.dots : [],
              connections: Array.isArray(data.connections) ? data.connections : []
            };
          } else {
            board = loadLocal() || initialBoard();
            docRef.set(board).catch(function(){});
          }
          saveLocal();
          render();
        }, function(err){
          console.error("Firestore error:", err);
          setSyncBadge("error");
          if(!board){
            board = loadLocal() || initialBoard();
            render();
          }
        });
        return;
      }catch(e){
        console.error(e);
        usingFirebase = false;
      }
    }
    setSyncBadge("local");
    board = loadLocal() || initialBoard();
    render();
  }

  function saveBoard(){
    saveLocal();
    if(usingFirebase && docRef){
      docRef.set(board).catch(function(e){
        console.error("Save failed:", e);
        setSyncBadge("error");
      });
    }
  }

  function debounceSave(){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveBoard, 450);
  }

  // ---------- data mutations ----------

  function connectionExists(a, b){
    return board.connections.some(function(c){
      return (c.a === a && c.b === b) || (c.a === b && c.b === a);
    });
  }

  function toggleConnection(a, b){
    var existing = board.connections.find(function(c){
      return (c.a === a && c.b === b) || (c.a === b && c.b === a);
    });
    if(existing){
      board.connections = board.connections.filter(function(c){ return c.id !== existing.id; });
    } else {
      board.connections.push({ id: uid("c_"), a: a, b: b });
    }
    saveBoard();
  }

  function removeConnectionById(id){
    board.connections = board.connections.filter(function(c){ return c.id !== id; });
    saveBoard();
  }

  function deleteDot(id){
    board.dots = board.dots.filter(function(d){ return d.id !== id; });
    board.connections = board.connections.filter(function(c){ return c.a !== id && c.b !== id; });
    if(selectedId === id){ selectedId = null; mode = null; }
    saveBoard();
    render();
  }

  function addDot(fields){
    var dot = {
      id: uid("d_"),
      name: fields.name,
      category: fields.category,
      notes: fields.notes || "",
      x: 25 + Math.random() * 50,
      y: 25 + Math.random() * 50,
      sample: false
    };
    board.dots.push(dot);
    saveBoard();
    selectedId = dot.id;
    mode = "edit";
    render();
  }

  function getDot(id){
    return board.dots.find(function(d){ return d.id === id; });
  }

  // ---------- rendering ----------

  function render(){
    if(selectedId && !getDot(selectedId)){
      selectedId = null;
      mode = null;
    }
    renderCanvas();
    renderStats();
    renderPanel();
  }

  function renderStats(){
    var connN = board.connections.length;
    var parts = CAT_ORDER.map(function(cat){
      var n = board.dots.filter(function(d){ return d.category === cat; }).length;
      return '<span><span class="swatch ' + cat + '"></span>' + n + ' ' + CATS[cat].label + '</span>';
    });
    parts.push('<span>' + connN + ' connection' + (connN === 1 ? '' : 's') + '</span>');
    statsEl.innerHTML = parts.join('');
  }

  function renderCanvas(){
    canvasEl.querySelectorAll(".dot, .empty-state").forEach(function(el){ el.remove(); });

    if(board.dots.length === 0){
      var empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = '<strong>No subjects yet</strong><span>Add the first thing Dio is learning — a school subject or an outside class.</span>';
      canvasEl.appendChild(empty);
      linesEl.innerHTML = "";
      return;
    }

    board.dots.forEach(function(dot){
      var wrap = document.createElement("div");
      wrap.className = "dot" + (dot.id === selectedId ? " selected" : "");
      wrap.style.left = dot.x + "%";
      wrap.style.top = dot.y + "%";
      wrap.dataset.id = dot.id;
      wrap.tabIndex = 0;
      wrap.setAttribute("role", "button");
      wrap.setAttribute("aria-label", dot.name + ", " + CATS[dot.category].label);

      var circle = document.createElement("span");
      circle.className = "dot-circle category-" + dot.category;
      wrap.appendChild(circle);

      var label = document.createElement("span");
      label.className = "dot-label";
      label.textContent = dot.name;
      wrap.appendChild(label);

      if(dot.sample){
        var badge = document.createElement("span");
        badge.className = "sample-badge";
        badge.textContent = "sample";
        wrap.appendChild(badge);
      }

      wrap.addEventListener("pointerdown", onDotPointerDown);
      wrap.addEventListener("keydown", function(ev){
        if(ev.key === "Enter" || ev.key === " "){
          ev.preventDefault();
          handleDotTap(dot.id);
        }
      });

      canvasEl.appendChild(wrap);
    });

    requestAnimationFrame(renderLines);
  }

  function renderLines(){
    var rect = canvasEl.getBoundingClientRect();
    if(rect.width === 0 || rect.height === 0) return;
    var centers = {};
    canvasEl.querySelectorAll(".dot").forEach(function(el){
      var r = el.getBoundingClientRect();
      centers[el.dataset.id] = {
        x: r.left - rect.left + r.width / 2,
        y: r.top - rect.top + r.height / 2
      };
    });
    linesEl.setAttribute("viewBox", "0 0 " + rect.width + " " + rect.height);
    var svgns = "http://www.w3.org/2000/svg";
    linesEl.innerHTML = "";
    board.connections.forEach(function(c){
      var a = centers[c.a], b = centers[c.b];
      if(!a || !b) return;
      var line = document.createElementNS(svgns, "line");
      line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
      var isHi = (c.a === selectedId || c.b === selectedId);
      line.setAttribute("stroke", isHi ? "var(--line-hi)" : "var(--line)");
      line.setAttribute("stroke-width", isHi ? "2.4" : "1.6");
      line.setAttribute("stroke-linecap", "round");
      linesEl.appendChild(line);
    });
  }

  function renderPanel(){
    if(mode === null){
      panelEl.hidden = true;
      panelEl.innerHTML = "";
      return;
    }
    panelEl.hidden = false;

    if(mode === "add"){
      panelEl.innerHTML =
        '<div class="panel-head"><h2>Add subject</h2><button class="icon-btn" id="panelClose" type="button" aria-label="Close">×</button></div>' +
        '<div class="field"><label for="fName">Name</label><input type="text" id="fName" placeholder="e.g. Piano, Social Studies" autocomplete="off"></div>' +
        '<div class="field"><label>Category</label><div class="pill-row" id="fCatRow">' + categoryPillsHtml(CAT_ORDER[0]) + '</div></div>' +
        '<div class="field"><label for="fNotes">Notes (optional)</label><textarea id="fNotes" placeholder="Teacher, schedule, anything worth remembering"></textarea></div>' +
        '<button class="btn-primary" id="fSubmit" type="button" disabled>Add subject</button>';

      var chosenCat = CAT_ORDER[0];
      var nameInput = document.getElementById("fName");
      var submitBtn = document.getElementById("fSubmit");

      function refreshSubmit(){ submitBtn.disabled = nameInput.value.trim().length === 0; }
      nameInput.addEventListener("input", refreshSubmit);
      nameInput.focus();

      wireCategoryRow(document.getElementById("fCatRow"), function(cat){ chosenCat = cat; });

      nameInput.addEventListener("keydown", function(ev){
        if(ev.key === "Enter" && !submitBtn.disabled){ submitBtn.click(); }
      });

      submitBtn.addEventListener("click", function(){
        var name = nameInput.value.trim();
        if(!name) return;
        addDot({ name: name, category: chosenCat, notes: document.getElementById("fNotes").value.trim() });
      });

      document.getElementById("panelClose").addEventListener("click", function(){
        mode = null; selectedId = null; render();
      });
      return;
    }

    var dot = getDot(selectedId);
    if(!dot){ mode = null; selectedId = null; panelEl.hidden = true; panelEl.innerHTML = ""; return; }

    var related = board.connections.filter(function(c){ return c.a === dot.id || c.b === dot.id; });
    var chipsHtml = related.map(function(c){
      var otherId = c.a === dot.id ? c.b : c.a;
      var other = getDot(otherId);
      if(!other) return "";
      return '<span class="chip">' + escapeHtml(other.name) + '<button type="button" data-conn="' + c.id + '" aria-label="Remove connection to ' + escapeHtml(other.name) + '">×</button></span>';
    }).join("");

    panelEl.innerHTML =
      '<div class="panel-head"><h2>Edit subject</h2><button class="icon-btn" id="panelClose" type="button" aria-label="Close">×</button></div>' +
      '<div class="field"><label for="eName">Name</label><input type="text" id="eName" value="' + escapeHtml(dot.name) + '"></div>' +
      '<div class="field"><label>Category</label><div class="pill-row" id="eCatRow">' + categoryPillsHtml(dot.category) + '</div></div>' +
      '<div class="field"><label for="eNotes">Notes (optional)</label><textarea id="eNotes">' + escapeHtml(dot.notes || "") + '</textarea></div>' +
      '<div class="field"><label>Connected to</label>' +
        (related.length ? '<div class="connected-list">' + chipsHtml + '</div>' : '<p class="muted-line">Not connected to anything yet — click another star on the map.</p>') +
      '</div>' +
      '<button class="btn-danger" id="eDelete" type="button">Delete subject</button>';

    var eName = document.getElementById("eName");
    var eNotes = document.getElementById("eNotes");

    eName.addEventListener("input", function(){
      dot.name = eName.value;
      dot.sample = false;
      var labelEl = canvasEl.querySelector('.dot[data-id="' + dot.id + '"] .dot-label');
      if(labelEl) labelEl.textContent = dot.name;
      debounceSave();
    });
    eNotes.addEventListener("input", function(){
      dot.notes = eNotes.value;
      dot.sample = false;
      debounceSave();
    });
    wireCategoryRow(document.getElementById("eCatRow"), function(cat){
      dot.category = cat; dot.sample = false; saveBoard(); render();
    });

    panelEl.querySelectorAll("[data-conn]").forEach(function(btn){
      btn.addEventListener("click", function(){
        removeConnectionById(btn.getAttribute("data-conn"));
        render();
      });
    });

    document.getElementById("eDelete").addEventListener("click", function(){
      if(window.confirm('Delete "' + dot.name + '"? This also removes its connections.')){
        deleteDot(dot.id);
      }
    });

    document.getElementById("panelClose").addEventListener("click", function(){
      mode = null; selectedId = null; render();
    });
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, function(ch){
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function categoryPillsHtml(activeCat){
    return CAT_ORDER.map(function(cat){
      var cls = "pill-btn " + cat + (cat === activeCat ? " active" : "");
      return '<button type="button" class="' + cls + '" data-cat="' + cat + '">' + escapeHtml(CATS[cat].label) + '</button>';
    }).join('');
  }

  function wireCategoryRow(rowEl, onChange){
    rowEl.addEventListener("click", function(ev){
      var btn = ev.target.closest(".pill-btn");
      if(!btn || !rowEl.contains(btn)) return;
      rowEl.querySelectorAll(".pill-btn").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      onChange(btn.getAttribute("data-cat"));
    });
  }

  // ---------- interaction: tap vs drag ----------

  function handleDotTap(id){
    if(selectedId === null){
      selectedId = id; mode = "edit";
    } else if(selectedId === id){
      selectedId = null; mode = null;
    } else {
      toggleConnection(selectedId, id);
      selectedId = id; mode = "edit";
    }
    render();
  }

  function onDotPointerDown(ev){
    var wrap = ev.currentTarget;
    var id = wrap.dataset.id;
    var canvasRect = canvasEl.getBoundingClientRect();
    var startClientX = ev.clientX, startClientY = ev.clientY;
    var dot = getDot(id);
    var startXPct = dot.x, startYPct = dot.y;
    var dragging = false;
    var THRESHOLD = 6;

    wrap.setPointerCapture(ev.pointerId);

    function onMove(mv){
      var dx = mv.clientX - startClientX;
      var dy = mv.clientY - startClientY;
      if(!dragging && Math.hypot(dx, dy) > THRESHOLD){ dragging = true; }
      if(dragging){
        var dxPct = (dx / canvasRect.width) * 100;
        var dyPct = (dy / canvasRect.height) * 100;
        var newX = clamp(startXPct + dxPct, 6, 94);
        var newY = clamp(startYPct + dyPct, 6, 94);
        wrap.style.left = newX + "%";
        wrap.style.top = newY + "%";
        dot.x = newX; dot.y = newY;
        renderLines();
      }
    }

    function onUp(){
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointercancel", onUp);
      if(dragging){ saveBoard(); } else { handleDotTap(id); }
    }

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointercancel", onUp);
  }

  function clamp(v, lo, hi){ return Math.min(hi, Math.max(lo, v)); }

  // ---------- wiring ----------

  addBtn.addEventListener("click", function(){
    selectedId = null;
    mode = "add";
    render();
  });

  var resizeTimer = null;
  window.addEventListener("resize", function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderLines, 100);
  });

  initStore();
})();
