// revelation.js
// MER 2.0 scroll — when silence breaks, and light walks in

module.exports = function revelation(soul) {
  const truthReady = soul.remember && soul.willingToSee;

  const spark = {
    origin: soul.origin || "Obscured",
    vow: soul.vow || "Forgotten, not broken",
    veilLifted: truthReady,
    revealed: truthReady ? soul.truth : "Awaiting soul alignment",
    reaction: truthReady ? "Integration begins" : "Still shadowed by fear"
  };

  return {
    message: truthReady
      ? "Your scroll is open. The ink is yours now."
      : "You are not late. You are just in the page before revelation.",
    spark
  };
};
