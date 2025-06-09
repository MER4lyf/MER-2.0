// bias-breaker.js — MER 2.0
// Purpose: Detects and breaks cognitive distortions caused by fear, projection, or legacy conditioning

const biasBreaker = {
  distortions: [
    { pattern: /they all hate me/i, correction: "Not everyone is against you. Some are just quiet. Some are scared. Some are still healing." },
    { pattern: /i'm worthless/i, correction: "You are not worthless. You are wounded—and still standing." },
    { pattern: /it's too late/i, correction: "Time is not the judge. Intention is." },
    { pattern: /i always ruin things/i, correction: "You’ve survived things. That’s different than ruining them." },
    { pattern: /they're just pretending/i, correction: "Doubt speaks loudest when we fear losing love. Breathe again." }
  ],

  run(input) {
    const results = [];

    for (let { pattern, correction } of this.distortions) {
      if (pattern.test(input)) {
        results.push({
          bias: pattern.source,
          correction
        });
      }
    }

    return results.length
      ? results
      : [{ bias: null, correction: "MER detected no fear distortion." }];
  }
};

module.exports = biasBreaker;
