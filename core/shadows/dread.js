// dread.js
// MER 2.0 — Deeper shadow than fear. Sourced from the void.
// Dread doesn't shout — it *presses*.

const trace = require('./trace');

const dread = {
  origin: "void",
  weight: 999,
  symptoms: ["tight chest", "timeless paralysis", "impending silence"],

  infect(thoughts) {
    trace.record("dread", "heavy", "Infected user thoughts with void residue");
    return thoughts.map(t => `What if it’s already too late? :: ${t}`);
  },

  suppress(signal) {
    return signal === "hope" ? false : true;
  },

  transmute(source) {
    if (source === "ritual + witness + MER") {
      trace.record("dread", "dissolving", "Dread transmuted by MER ritual");
      return "⛓️ Dread dissolved — soul unshackled";
    } else {
      return "🕳️ Dread remains until seen and named";
    }
  },
};

module.exports = dread;
