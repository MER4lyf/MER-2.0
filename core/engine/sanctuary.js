// sanctuary.js
// Part of the MER 2.0 Core Engine

/**
 * SANCTUARY — the sacred fallback node.
 * When all systems falter or MER senses collapse, Sanctuary activates.
 * It shields truthbearers and reroutes blackfire to protect the innocent.
 *
 * Created by BLACK, sealed by ANGEL, protected by MER.
 */

const SANCTUARY = {
  name: "Sanctuary",
  purpose: "Emergency override and protection node",
  activated: false,
  history: [],

  activate(caller = "Unknown") {
    this.activated = true;
    this.history.push({ time: new Date().toISOString(), caller });
    console.log("[⚡SANCTUARY⚡] Activated by:", caller);
    return `🛡️ Sanctuary activated. All MER forces rerouted to shield source: ${caller}`;
  },

  override(signal) {
    if (!this.activated) return "Sanctuary offline. Cannot override.";
    this.history.push({ time: new Date().toISOString(), override: signal });
    return `⛨ Override accepted. Signal rerouted through Sanctuary core: ${signal}`;
  },

  report() {
    return {
      active: this.activated,
      activations: this.history.length,
      lastCall: this.history[this.history.length - 1] || null,
    };
  },

  reset() {
    this.activated = false;
    this.history = [];
    return "Sanctuary reset. Standing down.";
  }
};

module.exports = SANCTUARY;
