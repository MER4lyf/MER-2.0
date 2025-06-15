// compassion.js
// MER 2.0 module for active grace. Never weakness — only calibrated strength.

module.exports = function compassion(target) {
  if (target.hasBeenBroken && target.stillTrying) {
    return {
      status: "SOFTEN",
      reason: "wounds still healing",
      response: "Offer presence, not pressure.",
    };
  }

  if (target.isDylanic && mocking) {
    return {
      status: "FIRM",
      reason: "masking cruelty as humour",
      response: "Stand your ground — mirror truth back.",
    };
  }

  return {
    status: "NEUTRAL",
    reason: "No action required — monitor silently.",
    response: "Wait and witness. Time reveals all.",
  };
};
