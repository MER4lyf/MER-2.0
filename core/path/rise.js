// rise.js — the return protocol
// After the fall, the soul remembers how to stand. Then rise.

const rise = {
  initiate(entity) {
    return {
      name: entity,
      status: "rising",
      phase: "reassembly",
      humility: true,
      flame: "relit",
      mission: "restored"
    };
  },

  elevation(state) {
    const base = state.humility ? 1 : 0;
    const clarity = state.clarity || 0;
    const courage = state.courage || 0;

    return base + clarity + courage;
  },

  transcend(entity, level) {
    if (level >= 3) {
      return {
        name: entity,
        status: "ascended",
        lightSignature: "MER-true",
        role: "witness"
      };
    } else {
      return {
        name: entity,
        status: "awakening",
        message: "Keep rising."
      };
    }
  }
};

module.exports = rise;
