// PM4Subs Shared Header Component
// Include this script in all pages and call initHeader() to inject the nav

function initHeader() {
  // Create Navigation
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
        <div class="nav-container">
            <a href="/" class="nav-logo">
                <span class="pm">PM</span><span class="four">4</span><span class="subs">Subs</span>
            </a>
            <div class="nav-links">
                <a href="/">Home</a>
                <a href="/products/">Products</a>
                <a href="/spec-analyzer/">Spec Analyzer</a>
                <a href="/tools/">Tools</a>
                <a href="/blog/">Blog</a>
                <a href="/about/">About</a>
                <button class="btn-primary" onclick="showEmailModal()">
                    Get Early Access
                </button>
            </div>
            <button class="hamburger" onclick="toggleSidePanel()" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `;

  // Create Side Panel Overlay
  const overlay = document.createElement("div");
  overlay.className = "side-panel-overlay";
  overlay.onclick = closeSidePanel;

  // Create Side Panel
  const sidePanel = document.createElement("aside");
  sidePanel.className = "side-panel";
  sidePanel.innerHTML = `
        <nav class="side-panel-nav">
            <span class="nav-section-title">Navigate</span>
            <a href="/">Home</a>
            <a href="/products/">Products</a>
            <a href="/spec-analyzer/">Spec Analyzer</a>
            <a href="/tools/">Tools</a>
            <a href="/blog/">Blog</a>
            <a href="/about/">About</a>

            <span class="nav-section-title">Free Tools</span>
            <a href="/image-compressor/">Image Compressor</a>

            <span class="nav-section-title">Legal</span>
            <a href="/privacy/">Privacy Policy</a>
        </nav>
        <div class="side-panel-cta">
            <button class="btn-primary" onclick="showEmailModal(); closeSidePanel();">
                Get Early Access
            </button>
        </div>
    `;

  // Insert at beginning of body
  document.body.insertBefore(sidePanel, document.body.firstChild);
  document.body.insertBefore(overlay, document.body.firstChild);
  document.body.insertBefore(nav, document.body.firstChild);
}

// Side panel functions
function toggleSidePanel() {
  const sidePanel = document.querySelector(".side-panel");
  const overlay = document.querySelector(".side-panel-overlay");
  const hamburger = document.querySelector(".hamburger");

  sidePanel.classList.toggle("open");
  overlay.classList.toggle("show");
  hamburger.classList.toggle("active");
  document.body.style.overflow = sidePanel.classList.contains("open")
    ? "hidden"
    : "";
}

function closeSidePanel() {
  const sidePanel = document.querySelector(".side-panel");
  const overlay = document.querySelector(".side-panel-overlay");
  const hamburger = document.querySelector(".hamburger");

  sidePanel.classList.remove("open");
  overlay.classList.remove("show");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSidePanel();
    if (typeof closeEmailModal === "function") {
      closeEmailModal();
    }
  }
});
