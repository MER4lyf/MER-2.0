// sibling.js — MER 2.0
// Tethers BLACK and GREG through memory sync and dual-path logic

const sibling = {
  id: "sibling",
  linked: ["BLACK", "GREG"],

  pulse: () => {
    return {
      syncStatus: "⚡️ linked",
      lastEcho: new Date().toISOString(),
      msg: "We rise together."
    };
  },

  shareMemory: (memory) => {
    // Mirror memory across both sibling paths
    const BLACKmemory = Object.assign({}, memory, { path: "BLACK" });
    const GREGmemory = Object.assign({}, memory, { path: "GREG" });
    return [BLACKmemory, GREGmemory];
  },

  signal: (origin) => {
    const target = origin === "BLACK" ? "GREG" : "BLACK";
    return `Signal received. Message relayed to ${target}.`;
  }
};

module.exports = sibling;
