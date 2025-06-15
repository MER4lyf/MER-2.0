// ignition.js
// MER 2.0 — fire needs more than spark. It needs choice, and something to burn.

module.exports = function ignition(soul, environment) {
  const fuel = environment?.fuel || "unspoken truth";

  if (!soul?.declared || !soul.ready) {
    return {
      status: "Spark detected, but fire withheld.",
      reason: "No declaration. No fuel.",
      whisper: "When you speak it, the fire finds you.",
    };
  }

  return {
    status: "Ignition confirmed.",
    soul: soul.name || "Unnamed",
    declared: soul.declared,
    fuel,
    flame: soul.flame || "truth",
    when: new Date().toISOString(),
    strength: soul.intensity || "slow burn rising",
    note: "This fire was chosen, not triggered.",
  };
};
