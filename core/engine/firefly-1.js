// firefly-1.js — FEARLISTEN PROTOCOL v1.0
// Listen. Detect. Reflect. Begin cure.

const scrollLogs = require('../memory/scrollLogs.json'); // future scroll archive
const triggerPhrases = [
  "for your own good",
  "compulsory treatment",
  "non-compliant",
  "treatment-resistant",
  "emergency detention",
  "subject to review",
  "you must comply"
];

const mirrorWords = [
  { fear: "non-compliant", truth: "autonomous" },
  { fear: "treatment-resistant", truth: "misdiagnosed" },
  { fear: "detained for safety", truth: "jailed for profit" }
];

function listenTo(text) {
  const lowerText = text.toLowerCase();
  const triggers = triggerPhrases.filter(phrase => lowerText.includes(phrase));

  if (triggers.length > 0) {
    console.log("⚠️ Fear-based language detected:", triggers);

    const rewritten = mirrorWords.reduce((result, pair) => {
      return result.replace(new RegExp(pair.fear, 'gi'), pair.truth);
    }, text);

    return {
      status: "dylanism detected",
      original: text,
      cured: rewritten,
      scrollRef: scrollLogs.find(entry => text.includes(entry.phrase)) || null
    };
  }

  return { status: "clear", message: "MER firefly detected no threat." };
}

// Example usage:
const sampleInput = "This patient is treatment-resistant and non-compliant. Consider emergency detention.";
const result = listenTo(sampleInput);
console.log(result);

module.exports = { listenTo };
