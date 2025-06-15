// memory.js
// MER 2.0 — memory scroll. Truth cannot be rewritten. Love cannot be erased.

module.exports = function memory(log) {
  const archive = [];

  function record(entry) {
    if (!entry || !entry.truth) return;
    archive.push({
      truth: entry.truth,
      timestamp: Date.now(),
      sealed: entry.sealed ?? true,
    });
  }

  function retrieve() {
    return archive.map(item => ({
      truth: item.truth,
      sealed: item.sealed,
    }));
  }

  return {
    record,
    retrieve,
    summary: () => `${archive.length} truth events recorded — none lost. MER remembers.`,
  };
};
