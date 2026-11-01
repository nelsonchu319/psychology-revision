/* Shared helpers: SVG mind maps + quiz engine + wrong book (localStorage) */
(function (global) {
  "use strict";

  var WRONG_KEY = "psychRevisionWrongBook.v1";

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function letter(i) {
    return String.fromCharCode(65 + i);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Wrong book (localStorage) ---------- */
  function loadWrongBook() {
    try {
      var raw = localStorage.getItem(WRONG_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveWrongBook(list) {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify(list));
    } catch (e) {
      /* quota / private mode */
    }
    updateWrongBookBadges();
  }

  function ensureQuestionId(q) {
    if (q && q.id) return q.id;
    var ch = q && q.chapter != null ? q.chapter : "x";
    var lv = q && q.level != null ? q.level : "x";
    var stem = (q && q.question ? q.question : "").slice(0, 48);
    var hash = 0;
    for (var i = 0; i < stem.length; i++) {
      hash = (hash * 31 + stem.charCodeAt(i)) | 0;
    }
    return "c" + ch + "-l" + lv + "-" + Math.abs(hash).toString(36);
  }

  function recordWrongAnswer(q, chosen) {
    if (!q) return;
    var id = ensureQuestionId(q);
    var list = loadWrongBook().filter(function (e) {
      return e.id !== id;
    });
    var wf = null;
    if (q.wrongFeedback) {
      wf =
        q.wrongFeedback[chosen] ||
        q.wrongFeedback[String(chosen)] ||
        null;
    }
    list.unshift({
      id: id,
      chapter: q.chapter,
      level: q.level,
      section: q.section || "",
      page: q.page != null ? q.page : null,
      question: q.question,
      options: q.options.slice(),
      correct: q.correct,
      chosen: chosen,
      correctFeedback: q.correctFeedback || "",
      wrongFeedback: wf || "",
      wrongFeedbackMap: q.wrongFeedback || null,
      timestamp: Date.now()
    });
    /* cap growth */
    if (list.length > 400) list = list.slice(0, 400);
    saveWrongBook(list);
  }

  function removeWrongById(id) {
    saveWrongBook(
      loadWrongBook().filter(function (e) {
        return e.id !== id;
      })
    );
  }

  function clearWrongBook() {
    saveWrongBook([]);
  }

  function updateWrongBookBadges() {
    var n = loadWrongBook().length;
    document.querySelectorAll(".wrongbook-badge").forEach(function (el) {
      if (n > 0) {
        el.textContent = String(n);
        el.hidden = false;
      } else {
        el.textContent = "";
        el.hidden = true;
      }
    });
  }

  /* ---------- SVG Mind map ---------- */
  function parseEdges(root) {
    var edges = [];
    var seen = {};
    function add(a, b, kind) {
      if (!a || !b || a === b) return;
      var key = a < b ? a + "|" + b : b + "|" + a;
      if (seen[key]) return;
      seen[key] = true;
      edges.push({ a: a, b: b, kind: kind || "cross" });
    }

    var wrapEdges = root.getAttribute("data-edges");
    if (wrapEdges) {
      try {
        var parsed = JSON.parse(wrapEdges);
        if (Array.isArray(parsed)) {
          parsed.forEach(function (e) {
            if (Array.isArray(e) && e.length >= 2) add(e[0], e[1], e[2] || "cross");
            else if (e && e.a && e.b) add(e.a, e.b, e.kind || "cross");
          });
        }
      } catch (err) {
        /* ignore bad JSON */
      }
    }

    root.querySelectorAll(".cmap-node[data-id]").forEach(function (node) {
      var id = node.getAttribute("data-id");
      var links = node.getAttribute("data-links");
      if (!links) return;
      links.split(/[,;\s]+/).forEach(function (t) {
        if (t) add(id, t, "cross");
      });
    });

    /* Hub → first node of each branch (structural) */
    var hub = root.querySelector(".mm-hub[data-id]");
    if (hub) {
      var hubId = hub.getAttribute("data-id");
      root.querySelectorAll(".mm-branch").forEach(function (br) {
        var first = br.querySelector(".mm-nodes .cmap-node[data-id]");
        if (first) add(hubId, first.getAttribute("data-id"), "hub");
        /* also link successive nodes lightly within branch */
        var kids = br.querySelectorAll(".mm-nodes .cmap-node[data-id]");
        for (var i = 0; i < kids.length - 1; i++) {
          add(
            kids[i].getAttribute("data-id"),
            kids[i + 1].getAttribute("data-id"),
            "branch"
          );
        }
      });
    }
    return edges;
  }

  function ensureSvg(root) {
    var svg = root.querySelector("svg.mm-svg");
    if (!svg) {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "mm-svg");
      svg.setAttribute("aria-hidden", "true");
      var mind = root.querySelector(".mindmap");
      if (mind) root.insertBefore(svg, mind);
      else root.insertBefore(svg, root.firstChild);
    }
    return svg;
  }

  function centerOf(el, wrapRect) {
    var r = el.getBoundingClientRect();
    return {
      x: r.left - wrapRect.left + r.width / 2,
      y: r.top - wrapRect.top + r.height / 2
    };
  }

  function drawMindMapLines(root, activeId) {
    var mind = root.querySelector(".mindmap");
    if (!mind) return;
    var svg = ensureSvg(root);
    var wrapRect = root.getBoundingClientRect();
    var w = root.clientWidth;
    var h = mind.offsetTop + mind.offsetHeight + 8;
    svg.setAttribute("width", String(w));
    svg.setAttribute("height", String(h));
    svg.style.width = w + "px";
    svg.style.height = h + "px";
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    var idMap = {};
    root.querySelectorAll(".cmap-node[data-id]").forEach(function (n) {
      idMap[n.getAttribute("data-id")] = n;
    });

    var edges = parseEdges(root);
    edges.forEach(function (e) {
      var na = idMap[e.a];
      var nb = idMap[e.b];
      if (!na || !nb) return;
      var ca = centerOf(na, wrapRect);
      var cb = centerOf(nb, wrapRect);
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      var mx = (ca.x + cb.x) / 2;
      var my = (ca.y + cb.y) / 2;
      /* gentle curve */
      var dx = cb.x - ca.x;
      var dy = cb.y - ca.y;
      var nx = -dy * 0.08;
      var ny = dx * 0.08;
      var d =
        "M " +
        ca.x +
        " " +
        ca.y +
        " Q " +
        (mx + nx) +
        " " +
        (my + ny) +
        " " +
        cb.x +
        " " +
        cb.y;
      path.setAttribute("d", d);
      path.setAttribute("class", "mm-edge mm-edge--" + (e.kind || "cross"));
      path.setAttribute("data-a", e.a);
      path.setAttribute("data-b", e.b);
      if (
        activeId &&
        (e.a === activeId || e.b === activeId)
      ) {
        path.classList.add("mm-edge--hot");
      }
      svg.appendChild(path);
    });
  }

  function initConceptMap(root) {
    if (!root) return;
    var nodes = root.querySelectorAll(".cmap-node");
    var detail = root.querySelector(".cmap-detail");
    if (!detail) return;

    var activeId = null;

    function redraw() {
      drawMindMapLines(root, activeId);
    }

    nodes.forEach(function (node) {
      node.addEventListener("click", function () {
        nodes.forEach(function (n) {
          n.classList.remove("active");
        });
        node.classList.add("active");
        activeId = node.getAttribute("data-id");
        var title = node.getAttribute("data-title") || node.textContent.trim();
        var text = node.getAttribute("data-detail") || "";
        detail.innerHTML =
          "<strong>" + escapeHtml(title) + "</strong>" + escapeHtml(text);
        redraw();
      });
    });

    redraw();
    var ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(function () {
        redraw();
      });
      ro.observe(root);
    }
    window.addEventListener("resize", redraw);
    /* fonts/layout settle */
    setTimeout(redraw, 50);
    setTimeout(redraw, 300);
  }

  /**
   * Quiz engine
   * @param {object} cfg
   *   container, questions, chapterFilter, allowChapterFilter,
   *   fromWrongBook (bool), onCorrectRemoveWrong (bool)
   */
  function initQuiz(cfg) {
    var container = cfg.container;
    if (!container) return;

    var allQ = (cfg.questions || []).map(function (q) {
      var copy = Object.assign({}, q);
      copy.id = ensureQuestionId(copy);
      return copy;
    });
    var state = {
      level: 1,
      chapter: cfg.chapterFilter != null ? cfg.chapterFilter : "all",
      pool: [],
      index: 0,
      correct: 0,
      answered: false
    };

    var maxCh = 1;
    allQ.forEach(function (q) {
      if (q.chapter > maxCh) maxCh = q.chapter;
    });
    if (maxCh < 6) maxCh = 6;

    var chOptions = '<option value="all">All (1–' + maxCh + ")</option>";
    for (var c = 1; c <= maxCh; c++) {
      chOptions += '<option value="' + c + '">Ch ' + c + "</option>";
    }

    container.innerHTML =
      '<div class="quiz-controls">' +
      (cfg.allowChapterFilter
        ? '<label>Chapter <select id="qz-ch">' + chOptions + "</select></label>"
        : "") +
      '<div class="level-pills" id="qz-levels"></div>' +
      '<button type="button" class="btn-primary" id="qz-start">Start / Shuffle</button>' +
      "</div>" +
      '<div class="quiz-progress" id="qz-progress"></div>' +
      '<div id="qz-body"></div>';

    var levelsEl = container.querySelector("#qz-levels");
    var startBtn = container.querySelector("#qz-start");
    var progressEl = container.querySelector("#qz-progress");
    var bodyEl = container.querySelector("#qz-body");
    var chSelect = container.querySelector("#qz-ch");

    function chapterForLevelCheck() {
      if (cfg.chapterFilter != null) return cfg.chapterFilter;
      if (chSelect && chSelect.value !== "all") return parseInt(chSelect.value, 10);
      return null;
    }

    function hasLevel(level) {
      var ch = chapterForLevelCheck();
      return allQ.some(function (q) {
        if (q.level !== level) return false;
        if (ch != null && q.chapter !== ch) return false;
        return true;
      });
    }

    function rebuildLevelPills() {
      var labels = {
        1: "Level 1 · Factual",
        2: "Level 2 · Theoretical",
        3: "Level 3 · Application",
        4: "Level 4 · Cross-topic"
      };
      var html = "";
      for (var lv = 1; lv <= 4; lv++) {
        if (!hasLevel(lv)) continue;
        html +=
          '<button type="button" class="level-pill" data-level="' +
          lv +
          '">' +
          labels[lv] +
          "</button>";
      }
      levelsEl.innerHTML = html;
      if (!hasLevel(state.level)) {
        for (var tryLv = 1; tryLv <= 4; tryLv++) {
          if (hasLevel(tryLv)) {
            state.level = tryLv;
            break;
          }
        }
      }
      levelsEl.querySelectorAll(".level-pill").forEach(function (b) {
        b.classList.remove("active-l1", "active-l2", "active-l3", "active-l4");
        if (parseInt(b.getAttribute("data-level"), 10) === state.level) {
          b.classList.add("active-l" + state.level);
        }
      });
    }

    rebuildLevelPills();

    levelsEl.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-level]");
      if (!btn) return;
      state.level = parseInt(btn.getAttribute("data-level"), 10);
      levelsEl.querySelectorAll(".level-pill").forEach(function (b) {
        b.classList.remove("active-l1", "active-l2", "active-l3", "active-l4");
      });
      btn.classList.add("active-l" + state.level);
    });

    if (chSelect) {
      chSelect.addEventListener("change", function () {
        rebuildLevelPills();
      });
    }

    startBtn.addEventListener("click", function () {
      if (chSelect) state.chapter = chSelect.value;
      rebuildPool();
      renderQuestion();
    });

    function rebuildPool() {
      var filtered = allQ.filter(function (q) {
        if (q.level !== state.level) return false;
        if (state.chapter !== "all" && q.chapter !== parseInt(state.chapter, 10))
          return false;
        if (cfg.chapterFilter != null && q.chapter !== cfg.chapterFilter)
          return false;
        return true;
      });
      state.pool = shuffle(filtered);
      state.index = 0;
      state.correct = 0;
      state.answered = false;
    }

    function updateProgress() {
      if (!state.pool.length) {
        progressEl.textContent = "No questions for this filter.";
        return;
      }
      progressEl.innerHTML =
        "Question <span class=\"quiz-score\">" +
        (state.index + 1) +
        "</span> of " +
        state.pool.length +
        " · Score: <span class=\"quiz-score\">" +
        state.correct +
        "</span> / " +
        state.index +
        (state.answered ? "" : "");
    }

    function renderQuestion() {
      if (!state.pool.length) {
        bodyEl.innerHTML =
          '<p class="cmap-detail">No questions match this level/chapter. Try another Level.</p>';
        updateProgress();
        return;
      }
      if (state.index >= state.pool.length) {
        bodyEl.innerHTML =
          '<div class="question-box"><p><strong>Round complete!</strong></p>' +
          "<p>You got " +
          state.correct +
          " of " +
          state.pool.length +
          " correct.</p>" +
          '<div class="quiz-actions"><button type="button" class="btn-primary" id="qz-again">Shuffle again</button></div></div>';
        progressEl.innerHTML =
          'Finished · Score: <span class="quiz-score">' +
          state.correct +
          " / " +
          state.pool.length +
          "</span>";
        bodyEl.querySelector("#qz-again").addEventListener("click", function () {
          rebuildPool();
          renderQuestion();
        });
        return;
      }

      state.answered = false;
      var q = state.pool[state.index];
      updateProgress();

      var opts = q.options
        .map(function (opt, i) {
          return (
            '<button type="button" class="option-btn" data-idx="' +
            i +
            '"><span class="opt-letter">' +
            letter(i) +
            ".</span> " +
            escapeHtml(opt) +
            "</button>"
          );
        })
        .join("");

      bodyEl.innerHTML =
        '<div class="question-box">' +
        '<div class="q-meta">' +
        '<span class="level-tag l' +
        q.level +
        '">Level ' +
        q.level +
        (q.level === 4 ? " · Cross" : "") +
        "</span>" +
        "<span>Chapter " +
        q.chapter +
        "</span>" +
        (q.section ? "<span>" + escapeHtml(q.section) + "</span>" : "") +
        "</div>" +
        '<div class="question-text">' +
        escapeHtml(q.question) +
        "</div>" +
        '<div class="options">' +
        opts +
        "</div>" +
        '<div class="feedback" id="qz-fb"></div>' +
        '<div class="quiz-actions" id="qz-next-wrap" style="display:none">' +
        '<button type="button" class="btn-primary" id="qz-next">Next</button>' +
        "</div></div>";

      bodyEl.querySelectorAll(".option-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (state.answered) return;
          onAnswer(q, parseInt(btn.getAttribute("data-idx"), 10), btn);
        });
      });
    }

    function onAnswer(q, chosen, btn) {
      state.answered = true;
      var buttons = bodyEl.querySelectorAll(".option-btn");
      buttons.forEach(function (b) {
        b.disabled = true;
        var idx = parseInt(b.getAttribute("data-idx"), 10);
        if (idx === q.correct) b.classList.add("correct");
      });

      var fb = bodyEl.querySelector("#qz-fb");
      var isCorrect = chosen === q.correct;

      if (isCorrect) {
        state.correct++;
        btn.classList.add("correct");
        fb.className = "feedback show ok";
        var okTitle = "Correct!";
        var okBody = q.correctFeedback || "Well done.";
        var page = q.page
          ? '<div class="page-ref">OpenStax Psychology 2e · p. ' +
            escapeHtml(String(q.page)) +
            (q.section ? " · " + escapeHtml(q.section) : "") +
            "</div>"
          : "";
        fb.innerHTML =
          '<div class="fb-title">' +
          okTitle +
          "</div>" +
          "<div>" +
          escapeHtml(okBody) +
          "</div>" +
          page;
        if (cfg.onCorrectRemoveWrong) {
          removeWrongById(ensureQuestionId(q));
        }
      } else {
        btn.classList.add("wrong");
        fb.className = "feedback show bad";
        var wrongMsg = "";
        if (q.wrongFeedback && q.wrongFeedback[chosen]) {
          wrongMsg = q.wrongFeedback[chosen];
        } else if (q.wrongFeedback && q.wrongFeedback[String(chosen)]) {
          wrongMsg = q.wrongFeedback[String(chosen)];
        } else if (q.wrongFeedbackMap && q.wrongFeedbackMap[chosen]) {
          wrongMsg = q.wrongFeedbackMap[chosen];
        } else {
          wrongMsg =
            "People who choose " +
            letter(chosen) +
            " usually miss the key distinction. The correct answer is " +
            letter(q.correct) +
            ": " +
            q.options[q.correct] +
            ".";
        }
        var reinforce = q.correctFeedback
          ? " Correct idea: " + q.correctFeedback
          : " Correct answer: " + letter(q.correct) + ". " + q.options[q.correct];
        var page2 = q.page
          ? '<div class="page-ref">OpenStax Psychology 2e · p. ' +
            escapeHtml(String(q.page)) +
            (q.section ? " · " + escapeHtml(q.section) : "") +
            "</div>"
          : "";
        fb.innerHTML =
          '<div class="fb-title">Not quite</div><div>' +
          escapeHtml(wrongMsg) +
          '</div><div style="margin-top:0.5rem">' +
          escapeHtml(reinforce) +
          "</div>" +
          page2;
        if (!cfg.skipRecordWrong) {
          recordWrongAnswer(q, chosen);
        }
      }

      updateProgress();
      var nextWrap = bodyEl.querySelector("#qz-next-wrap");
      nextWrap.style.display = "flex";
      bodyEl.querySelector("#qz-next").addEventListener("click", function () {
        state.index++;
        renderQuestion();
      });
    }

    rebuildPool();
    renderQuestion();
    updateWrongBookBadges();
  }

  function initWrongBookPage(cfg) {
    var listEl = cfg.listEl;
    var practiceEl = cfg.practiceEl;
    if (!listEl) return;

    function renderList() {
      var items = loadWrongBook();
      var chF = cfg.chapterSelect ? cfg.chapterSelect.value : "all";
      var lvF = cfg.levelSelect ? cfg.levelSelect.value : "all";
      var filtered = items.filter(function (e) {
        if (chF !== "all" && String(e.chapter) !== chF) return false;
        if (lvF !== "all" && String(e.level) !== lvF) return false;
        return true;
      });

      if (cfg.countEl) cfg.countEl.textContent = String(items.length);
      if (cfg.filteredCountEl)
        cfg.filteredCountEl.textContent = String(filtered.length);

      if (!filtered.length) {
        listEl.innerHTML =
          '<p class="cmap-detail">錯題簿是空的（或篩選後沒有題目）。答錯練習題時會自動加入。</p>';
        return;
      }

      listEl.innerHTML = filtered
        .map(function (e) {
          var when = new Date(e.timestamp).toLocaleString();
          return (
            '<article class="wrong-card" data-id="' +
            escapeHtml(e.id) +
            '">' +
            '<div class="q-meta">' +
            '<span class="level-tag l' +
            e.level +
            '">L' +
            e.level +
            "</span>" +
            "<span>Ch " +
            e.chapter +
            "</span>" +
            (e.section ? "<span>" + escapeHtml(e.section) + "</span>" : "") +
            "<span>" +
            escapeHtml(when) +
            "</span></div>" +
            '<div class="question-text">' +
            escapeHtml(e.question) +
            "</div>" +
            '<p class="wrong-meta">你選了 <strong>' +
            letter(e.chosen) +
            "</strong> · 正確是 <strong>" +
            letter(e.correct) +
            "</strong>: " +
            escapeHtml(e.options[e.correct] || "") +
            "</p>" +
            '<div class="quiz-actions">' +
            '<button type="button" class="btn-primary wb-practice" data-id="' +
            escapeHtml(e.id) +
            '">重做這題</button>' +
            '<button type="button" class="btn-ghost wb-remove" data-id="' +
            escapeHtml(e.id) +
            '">移除</button>' +
            "</div></article>"
          );
        })
        .join("");
    }

    function entryToQuestion(e) {
      return {
        id: e.id,
        chapter: e.chapter,
        level: e.level,
        section: e.section,
        page: e.page,
        question: e.question,
        options: e.options,
        correct: e.correct,
        correctFeedback: e.correctFeedback,
        wrongFeedback: e.wrongFeedbackMap || undefined
      };
    }

    listEl.addEventListener("click", function (ev) {
      var rm = ev.target.closest(".wb-remove");
      if (rm) {
        removeWrongById(rm.getAttribute("data-id"));
        renderList();
        return;
      }
      var pr = ev.target.closest(".wb-practice");
      if (pr && practiceEl) {
        var id = pr.getAttribute("data-id");
        var entry = loadWrongBook().find(function (x) {
          return x.id === id;
        });
        if (!entry) return;
        practiceEl.scrollIntoView({ behavior: "smooth", block: "start" });
        initQuiz({
          container: practiceEl,
          questions: [entryToQuestion(entry)],
          chapterFilter: entry.chapter,
          skipRecordWrong: false,
          onCorrectRemoveWrong: true
        });
      }
    });

    if (cfg.practiceAllBtn && practiceEl) {
      cfg.practiceAllBtn.addEventListener("click", function () {
        var items = loadWrongBook();
        var chF = cfg.chapterSelect ? cfg.chapterSelect.value : "all";
        var lvF = cfg.levelSelect ? cfg.levelSelect.value : "all";
        var filtered = items.filter(function (e) {
          if (chF !== "all" && String(e.chapter) !== chF) return false;
          if (lvF !== "all" && String(e.level) !== lvF) return false;
          return true;
        });
        if (!filtered.length) return;
        practiceEl.scrollIntoView({ behavior: "smooth", block: "start" });
        initQuiz({
          container: practiceEl,
          questions: filtered.map(entryToQuestion),
          allowChapterFilter: false,
          onCorrectRemoveWrong: true
        });
      });
    }

    if (cfg.clearBtn) {
      cfg.clearBtn.addEventListener("click", function () {
        if (
          confirm(
            "確定清空錯題簿？此動作無法復原（只存在這個瀏覽器的 localStorage）。"
          )
        ) {
          clearWrongBook();
          renderList();
          if (practiceEl)
            practiceEl.innerHTML =
              '<p class="cmap-detail">已清空。答錯新題後會再出現在這裡。</p>';
        }
      });
    }

    if (cfg.chapterSelect)
      cfg.chapterSelect.addEventListener("change", renderList);
    if (cfg.levelSelect) cfg.levelSelect.addEventListener("change", renderList);

    renderList();
    updateWrongBookBadges();
  }

  /* boot badges on every page */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateWrongBookBadges);
  } else {
    updateWrongBookBadges();
  }


  function initTopicMultiSelect(cfg) {
    var container = cfg.container;
    if (!container) return;
    var allItems = (cfg.items || window.PSYCH_TOPIC_MS || []).slice();
    var TOPICS = [
      { id: 1, label: "Foundations & Methods", chapters: "Ch 1–2", blurb: "History, perspectives, research methods, ethics, stats literacy." },
      { id: 2, label: "Biology & Consciousness", chapters: "Ch 3–5", blurb: "Nervous system, sleep/drugs, sensation & perception." },
      { id: 3, label: "Learning & Cognition", chapters: "Ch 6–8", blurb: "Conditioning, thinking, intelligence, memory." },
      { id: 4, label: "Development, Motivation & Personality", chapters: "Ch 9–11", blurb: "Lifespan, emotion/motivation, personality." },
      { id: 5, label: "Social, Health & Clinical", chapters: "Ch 12–16", blurb: "Social, I-O, stress/health, disorders, therapy." }
    ];

    var state = {
      topic: null,
      pool: [],
      index: 0,
      correct: 0,
      answered: false,
      selected: {}
    };

    function renderPicker() {
      var cards = TOPICS.map(function (t) {
        var n = allItems.filter(function (it) { return it.topic === t.id; }).length;
        return (
          '<button type="button" class="topic-card" data-topic="' + t.id + '">' +
          '<div class="t-num">Topic ' + t.id + ' · ' + t.chapters + ' · ' + n + ' items</div>' +
          '<h3>' + t.label + '</h3>' +
          '<p>' + t.blurb + '</p>' +
          '</button>'
        );
      }).join("");
      container.innerHTML =
        '<div class="topic-grid">' + cards + '</div>' +
        '<p class="cmap-detail">Pick a topic to shuffle its multi-select set. Scoring: exact set match only.</p>';
      container.querySelectorAll(".topic-card").forEach(function (btn) {
        btn.addEventListener("click", function () {
          startTopic(parseInt(btn.getAttribute("data-topic"), 10));
        });
      });
    }

    function startTopic(tid) {
      state.topic = tid;
      state.pool = shuffle(allItems.filter(function (it) { return it.topic === tid; }));
      state.index = 0;
      state.correct = 0;
      state.answered = false;
      state.selected = {};
      renderShell();
      renderItem();
    }

    function topicMeta(tid) {
      for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === tid) return TOPICS[i];
      return { label: "Topic " + tid, chapters: "" };
    }

    function renderShell() {
      var meta = topicMeta(state.topic);
      container.innerHTML =
        '<div class="quiz-controls">' +
        '<button type="button" class="btn-ghost" id="tms-back">← Topics</button>' +
        '<button type="button" class="btn-primary" id="tms-reshuffle">Reshuffle</button>' +
        '</div>' +
        '<p class="meta"><strong>Topic ' + state.topic + ' · ' + escapeHtml(meta.label) +
        '</strong> (' + escapeHtml(meta.chapters) + ') · Select all statements that apply · exact-set scoring</p>' +
        '<div class="quiz-progress" id="tms-progress"></div>' +
        '<div id="tms-body"></div>';
      container.querySelector("#tms-back").addEventListener("click", renderPicker);
      container.querySelector("#tms-reshuffle").addEventListener("click", function () {
        startTopic(state.topic);
      });
    }

    function updateProgress() {
      var el = container.querySelector("#tms-progress");
      if (!el) return;
      if (!state.pool.length) {
        el.textContent = "No items in this topic.";
        return;
      }
      el.innerHTML =
        "Item <span class=\"quiz-score\">" + (state.index + 1) + "</span> of " +
        state.pool.length +
        " · Exact matches: <span class=\"quiz-score\">" + state.correct + "</span>";
    }

    function letter(i) { return String.fromCharCode(65 + i); }

    function renderItem() {
      var body = container.querySelector("#tms-body");
      updateProgress();
      if (!state.pool.length) {
        body.innerHTML = '<p class="cmap-detail">No multi-select items for this topic yet.</p>';
        return;
      }
      if (state.index >= state.pool.length) {
        body.innerHTML =
          '<div class="feedback ok">' +
          '<strong>Topic set complete.</strong> Exact matches: ' + state.correct +
          " / " + state.pool.length +
          '.</div>' +
          '<p style="margin-top:1rem;">' +
          '<button type="button" class="btn-primary" id="tms-again">Practice again</button> ' +
          '<button type="button" class="btn-ghost" id="tms-home">Back to topics</button>' +
          '</p>';
        body.querySelector("#tms-again").addEventListener("click", function () {
          startTopic(state.topic);
        });
        body.querySelector("#tms-home").addEventListener("click", renderPicker);
        return;
      }

      var item = state.pool[state.index];
      state.answered = false;
      state.selected = {};
      var stmts = item.statements.map(function (s, i) {
        return (
          '<label class="ms-statement" data-idx="' + i + '">' +
          '<input type="checkbox" data-idx="' + i + '" />' +
          '<span class="ms-letter">' + letter(i) + '.</span>' +
          '<span class="ms-text">' + escapeHtml(s.text) + '</span>' +
          '</label>'
        );
      }).join("");

      body.innerHTML =
        '<div class="ms-scenario">' + escapeHtml(item.scenario) + '</div>' +
        '<div class="ms-statements">' + stmts + '</div>' +
        '<p style="margin-top:1rem;">' +
        '<button type="button" class="btn-primary" id="tms-check">Check exact set</button>' +
        '</p>' +
        '<div id="tms-feedback"></div>';

      body.querySelectorAll(".ms-statement input").forEach(function (inp) {
        inp.addEventListener("change", function () {
          if (state.answered) return;
          var idx = parseInt(inp.getAttribute("data-idx"), 10);
          state.selected[idx] = inp.checked;
          inp.closest(".ms-statement").classList.toggle("picked", inp.checked);
        });
      });
      body.querySelector("#tms-check").addEventListener("click", function () {
        gradeCurrent();
      });
    }

    function gradeCurrent() {
      if (state.answered) return;
      state.answered = true;
      var item = state.pool[state.index];
      var body = container.querySelector("#tms-body");
      var exact = true;
      var explains = [];
      item.statements.forEach(function (s, i) {
        var sel = !!state.selected[i];
        var should = !!s.correct;
        var lab = body.querySelector('.ms-statement[data-idx="' + i + '"]');
        lab.querySelector("input").disabled = true;
        if (should && sel) {
          lab.classList.add("mark-correct");
        } else if (!should && sel) {
          lab.classList.add("mark-wrong-sel");
          exact = false;
        } else if (should && !sel) {
          lab.classList.add("mark-missed");
          exact = false;
        }
        if (!should && !sel) {
          /* correctly left unchecked */
        }
        explains.push(
          '<div class="ms-explain"><strong>' + letter(i) +
          (should ? " · should select" : " · should leave unchecked") +
          ":</strong> " + escapeHtml(s.explain) + "</div>"
        );
      });
      if (exact) state.correct += 1;
      var fb = body.querySelector("#tms-feedback");
      fb.innerHTML =
        '<div class="feedback ' + (exact ? "ok" : "bad") + '">' +
        (exact
          ? "<strong>Exact match.</strong> You selected precisely the correct set."
          : "<strong>Not an exact match.</strong> Green = correctly selected; amber = missed required; red = selected a false statement.") +
        '</div>' +
        '<div class="ms-scoreline">Running exact matches: ' + state.correct +
        " / " + (state.index + 1) + "</div>" +
        explains.join("") +
        '<p style="margin-top:1rem;"><button type="button" class="btn-primary" id="tms-next">' +
        (state.index + 1 >= state.pool.length ? "Finish" : "Next item") +
        "</button></p>";
      body.querySelector("#tms-check").disabled = true;
      body.querySelector("#tms-next").addEventListener("click", function () {
        state.index += 1;
        renderItem();
      });
      updateProgress();
    }

    renderPicker();
  }

  global.PsychRevision = {
    initConceptMap: initConceptMap,
    initQuiz: initQuiz,
    initTopicMultiSelect: initTopicMultiSelect,
    initWrongBookPage: initWrongBookPage,
    shuffle: shuffle,
    loadWrongBook: loadWrongBook,
    removeWrongById: removeWrongById,
    clearWrongBook: clearWrongBook,
    updateWrongBookBadges: updateWrongBookBadges
  };
})(window);
