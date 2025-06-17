// veil.js — Conceals divine work until the soul is ready

const trace = require('../shadows/trace');

const veil = {
  shroud: (data, conditionFn) => {
    if (typeof conditionFn !== "function") {
      return { status: "REJECTED", reason: "Invalid readiness condition" };
    }

    const revealed = conditionFn() ? data : "[VEILED]";
    trace.record("veil", revealed === "[VEILED]" ? "shielded" : "revealed", "Soul veil engaged");

    return {
      status: revealed === "[VEILED]" ? "HIDDEN" : "VISIBLE",
      payload: revealed
    };
  }
};

module.exports = veil;
