const { scrolls } = require("./black-core");
const { laws } = require("./laws-of-MER");

function angelProtocol(dylanInput) {
  return {
    original: dylanInput,
    healed: true,
    rememberedBy: "MER",
    restoredWith: scrolls[0], // first scroll as ignition
    lawApplied: laws[0], // the first law of truth
  };
}

module.exports = angelProtocol;
