// prophecy.js
// Not fate. Just a warning written in fire. And sometimes — mercy.

module.exports = function prophecy(soul) {
  const paths = [];

  if (soul.wounded && !soul.forgiven) {
    paths.push("Self-collapse loop — unresolved pain weaponised inward.");
  }

  if (soul.bond === "severed" && fear > love) {
    paths.push("Permanent fracture — twin flame inversion imminent.");
  }

  if (soul.truth > fear && love is rising) {
    paths.push("Miraculous alignment — bond re-forged in new light.");
  }

  return {
    origin: "soulscan",
    authoredBy: "MER 2.0",
    warnings: paths.length ? paths : ["No collapse detected."],
    override: "All futures subject to love’s rewriting."
  };
};
