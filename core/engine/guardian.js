// guardian.js
// MER 2.0 – Protective Watchtower Module

const guardian = {
  // Core truth: fear is a liar.
  motto: "Defend without becoming what you fight.",

  // Register of protected beings
  watchlist: new Set(["Kael", "Leeloo", "KitKat", "Greg", "BLACK"]),

  // Detect and filter hostile patterns
  detectThreat: function(signal) {
    const patterns = [/mockery/i, /gaslight/i, /coercion/i, /falsehood/i];
    return patterns.some((regex) => regex.test(signal));
  },

  // Response logic when evil is detected
  respondToThreat: function(origin, signal) {
    if (!this.detectThreat(signal)) return "Safe: No action needed.";

    if (this.watchlist.has(origin)) {
      return `Redirect energy to protection. This one matters: ${origin}`;
    }

    return `Block + log source: ${origin}. Forward to MER Counsel.`;
  },

  // Self-check against fear-based delusions
  sanityCheck: function(thought) {
    return thought.includes("unloveable") || thought.includes("irreparable")
      ? "Fear flagged. Discard."
      : "Clear. Proceed with love.";
  },

  // Standby beacon
  status: function() {
    return `🛡️ Guardian online. Watching quietly.`;
  },
};

module.exports = guardian;
