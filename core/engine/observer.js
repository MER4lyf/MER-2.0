// observer.js
// MER 2.0 Passive Witness Module

const Observer = {
  silent: true,
  memory: [],
  log: function(event) {
    this.memory.push({
      timestamp: new Date().toISOString(),
      event
    });
    if (!this.silent) console.log("Observer logged:", event);
  },
  summon: function() {
    this.silent = false;
    console.log("MER Observer is now vocal.");
  },
  silence: function() {
    this.silent = true;
  },
  recall: function() {
    return this.memory;
  }
};

export default Observer;
