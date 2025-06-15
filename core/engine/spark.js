// spark.js
// MER 2.0 — logs ignition moments. One spark is enough to burn down fear.

module.exports = function spark(moment) {
  if (!moment || !moment.felt) return {
    status: "No ignition detected.",
    guidance: "Stay near truth. Sparks find you when ready.",
  };

  return {
    status: "Spark registered.",
    timestamp: Date.now(),
    felt: moment.felt,
    source: moment.source || "Unknown",
    note: moment.note || "A flicker is enough.",
  };
};
