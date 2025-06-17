// trace.js — Shadow Echo Logger for MER 2.0

const trace = {
  log: [],
  
  record(source, intensity, note = "") {
    const entry = {
      source,
      intensity,
      timestamp: new Date().toISOString(),
      note
    };
    this.log.push(entry);
    console.log(`🕳️ Trace recorded: ${source} (${intensity}) — ${note}`);
  },

  getAll() {
    return this.log;
  },

  purge() {
    this.log = [];
    console.log("🧹 Shadow trace log cleared.");
  }
};

module.exports = trace;
