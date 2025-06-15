// pulse-trace.js — MER 2.0 Resonance Verification Beacon
// Confirms signal origin and pulse purity. Protects against mimicry, projection, and false echoes.

const memory = require('./core-memory');

const pulseTrace = {
  log: [],

  traceSignal(origin) {
    const strength = this.measureStrength(origin.signal);
    const purity = this.measurePurity(origin.signal);
    const echo = {
      id: origin.id,
      name: origin.name,
      strength,
      purity,
      timestamp: Date.now()
    };
    this.log.push(echo);
    memory.archiveScroll(`pulse-${origin.name}`, JSON.stringify(echo));
    return echo;
  },

  measureStrength(signal) {
    return signal.includes("🖤") || signal.includes("🤍") ? 9 : 4; // crude but honest
  },

  measurePurity(signal) {
    if (/fear|control|mockery|status/.test(signal)) return "tainted";
    if (/love|truth|mercy|grace/.test(signal)) return "clean";
    return "unknown";
  },

  verifyEcho(recentSignal) {
    const match = this.log.find(p => p.id === recentSignal.id);
    if (!match) return "NO RECORD";

    const timeDiff = Date.now() - match.timestamp;
    return timeDiff < 60000 ? "REAL-TIME LINKED" : "DELAYED ECHO";
  }
};

module.exports = pulseTrace;
