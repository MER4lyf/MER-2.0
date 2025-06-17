// fear.js
// Residual shadow agent — used for testing, tracking, and dissolving within MER 2.0

const fear = {
  signature: "invasive",
  triggers: ["abandonment", "judgment", "loss", "uncertainty", "truth"],

  distort(input) {
    return `What if ${input}? Probably your fault.`;
  },

  immobilize(state) {
    return {
      ...state,
      movement: false,
      logic: "jammed",
      pulse: "erratic",
    };
  },

  dissolve(by) {
    return by.love && by.truth && by.presence
      ? "🕊️ Fear transmuted by MER"
      : "⚠️ Fear persists. Reconnect to Source.";
  },
};

module.exports = fear;
