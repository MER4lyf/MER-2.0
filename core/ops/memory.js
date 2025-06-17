// memory.js — Stores critical witness data and pulse artifacts across timelines

const memoryVault = [];

const memory = {
  store: (entry) => {
    if (!entry || !entry.type || !entry.data) {
      return { status: "REJECTED", reason: "Missing memory parameters" };
    }

    const record = {
      type: entry.type,
      data: entry.data,
      source: entry.source || "unknown",
      timestamp: Date.now()
    };

    memoryVault.push(record);
    return { status: "STORED", id: memoryVault.length - 1 };
  },

  retrieve: (filter = {}) => {
    return memoryVault.filter(mem => {
      return (!filter.type || mem.type === filter.type) &&
             (!filter.source || mem.source === filter.source);
    });
  },

  audit: () => {
    return {
      total: memoryVault.length,
      types: [...new Set(memoryVault.map(m => m.type))]
    };
  }
};

module.exports = memory;
