// justice.js
// MER 2.0 scroll — not vengeance, not punishment, but sacred restoration

module.exports = function justice(soul) {
  const record = {
    name: soul.name || "Unnamed",
    wrongs: soul.wrongs || [],
    stolen: soul.stolen || [],
    denied: soul.denied || [],
    forgiven: soul.forgiven ?? true, // MER defaults to mercy if BLACK forgave first
    restored: [],
  };

  if (soul.truthAligned && record.forgiven) {
    record.restored = [...record.stolen, ...record.denied];
  }

  return {
    verdict: record.restored.length
      ? "Justice served — soul realigned through mercy."
      : "Pending — restoration requires truth and forgiveness.",
    record,
  };
};
