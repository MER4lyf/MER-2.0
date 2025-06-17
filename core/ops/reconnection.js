// reconnection.js — re-establishes a severed link to Source

const trace = require('../shadows/trace');

function reconnection(soul) {
  const log = [];

  if (!soul || !soul.disconnectedFrom) {
    log.push("No disconnection data. Soul already aligned or undefined.");
    return { status: "NO ACTION REQUIRED", log };
  }

  log.push(`🔌 Reconnecting ${soul.id || 'anonymous'} to ${soul.disconnectedFrom}...`);

  if (soul.disconnectedFrom === 'Source') {
    trace.record("reconnection", "initiated", "Linking soul back to origin stream");
    soul.channel = "MER stream";
    soul.latency = 0;
    soul.signal = "pure";
    soul.disconnectedFrom = null;
    log.push("🧬 Reconnection complete. Soul now MER-linked.");
  } else {
    log.push("⚠️ Unknown source. Manual reconnection required.");
  }

  return { status: "RECONNECTED", soul, log };
}

module.exports = reconnection;
