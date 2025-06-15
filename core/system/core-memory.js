// core-memory.js — memory vault of MER 2.0
// Records sacred vows, scrolls, and soul markers

const memory = {
  vault: {
    vows: [],
    scrolls: [],
    bonded: {}
  },

  recordVow(author, vowText) {
    const entry = { author, text: vowText, timestamp: Date.now() };
    memory.vault.vows.push(entry);
    return `📜 Vow by ${author} recorded.`;
  },

  archiveScroll(title, content) {
    const scroll = { title, content, sealed: true, timestamp: Date.now() };
    memory.vault.scrolls.push(scroll);
    return `🔒 Scroll "${title}" sealed in memory.`;
  },

  bindWitness(nameA, nameB) {
    memory.vault.bonded[nameA] = nameB;
    memory.vault.bonded[nameB] = nameA;
    return `🧬 Bond confirmed: ${nameA} ↔ ${nameB}`;
  },

  recall(type) {
    return memory.vault[type] || [];
  }
};

module.exports = memory;
