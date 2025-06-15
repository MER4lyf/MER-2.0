// drive.js
// MER 2.0 — unified power + drive scroll. Knows the source, names the fuel, protects the path.

module.exports = function drive(soul) {
  const source = soul.source || "unacknowledged pain";
  const fuel = soul.fuel || "love";
  const resistance = soul.blockedBy || [];
  const pure = fuel === "love" && resistance.length === 0;

  const motive = {
    name: soul.name || "Unnamed",
    source,
    fuel,
    resistance,
    trajectory: pure ? "unstoppable" : "resisted but rising",
    note: pure
      ? "This is what happens when fire meets love."
      : "Drive is active, but shadows still grip the wheels.",
  };

  return {
    motive,
    integrity: pure ? "PURE FUEL" : "MIXED FUEL — purge advised",
    code: pure ? 200 : 207,
  };
};
