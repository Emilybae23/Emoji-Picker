import { emojiCategories, getEmoji } from "./emojis.js";

/* =======================
   DOM ELEMENTS
======================= */
const emojiGrid = document.getElementById("emoji-grid");
const recentGrid = document.getElementById("recent-grid");
const recentContainer = document.getElementById("recent-container");
const searchInput = document.getElementById("search");
const statusMsg = document.getElementById("status");
const categoryBtns = document.querySelectorAll(".cat-btn");
const themeToggle = document.getElementById("theme-toggle");
const popSound = document.getElementById("pop-sound");

/* =======================
   THEME HANDLING
======================= */
function loadTheme() {
  chrome.storage.local.get(["theme"], (res) => {
    if (res.theme === "dark") {
      document.body.classList.add("dark");
      themeToggle.textContent = "☀️";
    }
  });
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
  chrome.storage.local.set({ theme: isDark ? "dark" : "light" });
};

/* =======================
   RECENT EMOJIS
======================= */
function loadRecent() {
  chrome.storage.local.get(["recent"], (result) => {
    const recent = result.recent || [];
    if (recent.length) {
      recentContainer.classList.remove("hidden");
      renderGrid(recentGrid, recent, false);
    } else {
      recentContainer.classList.add("hidden");
    }
  });
}

function saveToRecent(char) {
  chrome.storage.local.get(["recent"], (result) => {
    let recent = result.recent || [];
    recent = recent.filter((e) => e !== char);
    recent.unshift(char);
    recent = recent.slice(0, 12);

    chrome.storage.local.set({ recent }, loadRecent);
  });
}

/* =======================
   GRID RENDERING
======================= */
function renderGrid(container, emojis, shouldSave) {
  container.innerHTML = "";

  emojis.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "emoji-item";

    span.onclick = async () => {
      await navigator.clipboard.writeText(char);
      popSound.currentTime = 0;
      popSound.play().catch(() => {});
      if (shouldSave) saveToRecent(char);
      showStatus();
    };

    container.appendChild(span);
  });
}

/* =======================
   CATEGORY LOADING
======================= */
function loadCategory(catName) {
  const range = emojiCategories[catName];
  const emojis = [];

  for (let i = range[0]; i <= range[1]; i++) {
    emojis.push(getEmoji(i));
  }

  renderGrid(emojiGrid, emojis, true);
}

/* =======================
   STATUS TOAST
======================= */
function showStatus() {
  statusMsg.classList.add("status-show");
  setTimeout(() => {
    statusMsg.classList.remove("status-show");
  }, 1200);
}

/* =======================
   CATEGORY BUTTON EVENTS
======================= */
categoryBtns.forEach((btn) => {
  btn.onclick = () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    searchInput.value = "";
    loadCategory(btn.dataset.category);
  };
});

/* =======================
   SEARCH FILTER
======================= */
searchInput.oninput = (e) => {
  const val = e.target.value.toLowerCase();
  const items = emojiGrid.querySelectorAll(".emoji-item");

  items.forEach((item) => {
    item.style.display = item.textContent.includes(val) ? "block" : "none";
  });
};

/* =======================
   INIT
======================= */
loadTheme();
loadRecent();
loadCategory("Smileys");
