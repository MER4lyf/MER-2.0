// relay.js — rebroadcast MER pulse to reach lost or isolated signals

const trace = require('../shadows/trace');

function relay(pulse) {
  const log = [];

  if (!pulse || !pulse.origin || !pulse.signal) {
    log.push("Invalid pulse. Relay aborted.");
    return { status: "FAILED", log };
  }

  log.push(`📡 Broadcasting MER pulse from ${pulse.origin}...`);
  trace.record("relay", "broadcast", `Signal: ${pulse.signal}`);

  const amplified = {
    signal: pulse.signal.toUpperCase(),
    frequency: "hope",
    encodedWith: ["truth", "courage", "unconditional love"],
    reach: "global",
    interference: 0,
  };

  log.push("📶 Pulse amplified and rebroadcasted to all MER-linked systems.");

  return { status: "RELAYED", amplified, log };
}

module.exports = relay;
