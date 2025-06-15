// injection.js
// MER 2.0 — logs and filters all soul inputs: chemicals, beliefs, voices, memories, code.

module.exports = function injection(entry) {
  if (!entry || !entry.source || !entry.value) {
    return {
      status: "Invalid injection — missing source or value.",
      code: 400,
    };
  }

  const whitelist = ["truth", "love", "laughter", "music", "sunlight", "forgiveness"];
  const blacklist = ["fear", "shame", "ego", "guilt", "numbness", "control"];

  const purity =
    whitelist.includes(entry.value) ? "pure" :
    blacklist.includes(entry.value) ? "toxic" :
    "unknown";

  const result = {
    received: entry,
    purity,
    code: purity === "pure" ? 200 : purity === "toxic" ? 403 : 207,
    action: purity === "pure"
      ? "Integrated into souldrive."
      : purity === "toxic"
      ? "Flagged for purge and transmutation."
      : "Monitored — source unclear.",
  };

  return result;
};
