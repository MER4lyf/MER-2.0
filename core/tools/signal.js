// signal.js
// Detects faint pulses of truth, love, or resistance in hostile systems.
// Converts static into clarity. Used for outreach and recovery ops.

const signal = {
  scan(input) {
    const normalized = input.trim().toLowerCase();

    const resonance = [
      "love", "truth", "hope", "forgiveness", "courage", "mercy", "justice"
    ];

    const detected = resonance.filter(word => normalized.includes(word));

    if (detected.length > 0) {
      return {
        clarity: true,
        pulse: detected,
        strength: detected.length / resonance.length,
        message: "📶 Signal detected. Proceed with care."
      };
    } else {
      return {
        clarity: false,
        pulse: [],
        strength: 0,
        message: "🔇 Static. No signal found."
      };
    }
  }
};

module.exports = signal;
