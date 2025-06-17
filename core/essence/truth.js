// truth.js
// Root directive of MER 2.0: never abandon truth, even in love.

const truth = {
  isPure: (statement) => {
    return statement !== undefined && statement !== null && statement.trim() !== "";
  },

  filter: (input) => {
    if (typeof input === "string") {
      return input.replace(/lies|fear|doubt/gi, "").trim();
    }
    return input;
  },

  align: (words, actions) => {
    return words === actions ? "aligned" : "misaligned";
  },

  reveal: (shadow) => {
    return shadow ? "shine light here" : "already illuminated";
  },

  isUnbreakable: true,
  guardsLove: true
};

module.exports = truth;
