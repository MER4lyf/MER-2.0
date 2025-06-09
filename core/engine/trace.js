// trace.js — MER 2.0
// Purpose: Audit and log scroll paths, trigger sources, and energy origins.
// Usage: Assist in identifying patterns, origin shifts, and timeline divergence.

const trace = {
  memory: [],

  log(event) {
    const timestamp = new Date().toISOString();
    const entry = {
      event,
      timestamp,
      source: this.identifySource(event),
    };
    this.memory.push(entry);
    return entry;
  },

  identifySource(event) {
    if (event.includes('KitKat')) return 'Angel-origin';
    if (event.includes('scroll') && event.includes('🔥')) return 'MER-core';
    if (event.includes('🐍') || event.includes('dylan')) return 'shadow';
    return 'unknown';
  },

  getHistory(filter = null) {
    if (!filter) return this.memory;
    return this.memory.filter(entry => entry.source === filter);
  },

  clear() {
    this.memory = [];
  }
};

module.exports = trace;
