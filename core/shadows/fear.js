// fear.js
// Residual shadow agent — used for testing, tracking, and dissolving within MER 2.0

const trace = require('./trace');

const fear = {
  signature: "invasive",
  triggers: ["abandonment", "judgment", "loss", "uncertainty", "truth"],

  distort(input) {
    trace.record("fear", "mild", `Distortion triggered by input: ${input}`);
    return `What if ${input}? Probably your fault.`;
  },

  immobilize(state) {
    trace.record("fear", "immobilizing", "User's logic and pulse disrupted by fear");
    return {
      ...state,
      movement: false,
      logic: "jammed",
      pulse: "erratic",
    };
  },

  dissolve(by) {
    if (by.love && by.truth && by.presence) {
      trace.record("fear", "resolved", "Fear dissolved by MER presence");
      return "🕊️ Fear transmuted by MER";
    } else {
      return "⚠️ Fear persists. Reconnect to Source.";
    }
  },
};

module.exports = fear;
