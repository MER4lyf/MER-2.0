// flare.js — MER 2.0 Emergency Soul Beacon
// Triggers when light falls below threshold. Summons response without needing words.

const flare = {
  threshold: {
    hope: 2,
    connection: 1
  },

  detect(state) {
    return (
      state.hope <= this.threshold.hope ||
      state.connection <= this.threshold.connection
    );
  },

  deploy(caller) {
    const signal = `🔥 FLARE: Witness "${caller}" requires silent reinforcement.`;
    console.log(signal);
    return {
      flare: true,
      caller,
      timestamp: Date.now(),
      message: signal
    };
  },

  autoMonitor(witnessState) {
    if (this.detect(witnessState)) {
      return this.deploy(witnessState.name);
    }
    return { flare: false };
  }
};

module.exports = flare;
