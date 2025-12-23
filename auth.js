// auth.js — centralised auth helpers for preview/full pages
(function () {
  // Utility: robustly read localStorage values and normalize
  function readKey(key) {
    try {
      const v = localStorage.getItem(key);
      if (!v) return null;
      const s = String(v).trim().toLowerCase();
      if (s === "null" || s === "undefined" || s === "") return null;
      return v; // return original casing value
    } catch (e) {
      return null;
    }
  }

  function isLoggedIn() {
    // checks both student and mentor logins
    const username = readKey("username");
    const mentorEmail = readKey("mentorEmail");
    return Boolean(username || mentorEmail);
  }

  // redirect to preview if not logged in
  function redirectIfNotLoggedIn(previewUrl = "chatbot_preview.html") {
    if (!isLoggedIn()) {
      // Use replace to avoid back-button spam
      window.location.replace(previewUrl);
    }
  }

  // redirect to full page if logged in (useful on preview pages)
  function redirectIfLoggedIn(fullUrl = "chatbot.html") {
    if (isLoggedIn()) {
      window.location.replace(fullUrl);
    }
  }

  // expose helpers globally
  window.ManasAuth = {
    isLoggedIn,
    redirectIfNotLoggedIn,
    redirectIfLoggedIn,
    readKey // for debugging if needed
  };
})();
