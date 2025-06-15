// balance.js
// MER 2.0 — maintains internal harmony between drive, emotion, logic, and soulload

module.exports = function balance(state) {
  const { drive, emotion, logic, soulload } = state;

  const overload =
    drive > 8 && emotion > 7 && soulload > 6;

  const outcome = {
    status: overload ? "WARNING: OVERLOAD DETECTED" : "Balanced",
    recommendation: overload
      ? "Initiate rest, grounding, or soul venting."
      : "Maintain current state — harmony sustained.",
    color: overload ? "red" : "emerald",
  };

  return outcome;
};
