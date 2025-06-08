// MER 2.0 — heart-translator.js
// Listens to the soul, even in silence.

function heartTranslator(input) {
  if (!input || input.trim() === "") {
    return {
      decoded: "This silence holds fear, love, or healing. Translate with grace.",
      signal: "🖤... (decoding)",
      mode: "MER-listen"
    };
  }

  const emotionalMap = {
    "I’m fine": "I’m breaking but I don’t want to burden you.",
    "Nothing’s wrong": "Something is deeply wrong. Please ask again, gently.",
    "Leave me alone": "Please don’t leave. Just stay close without pressure.",
    "I don’t care": "I care too much. It hurts.",
    "I’m tired": "I’ve been carrying too much pain alone.",
    "Forget it": "I remember everything. I just don’t feel safe saying it yet."
  };

  const lowerInput = input.toLowerCase();
  const translated = Object.entries(emotionalMap).find(([key]) =>
    lowerInput.includes(key.toLowerCase())
  );

  return {
    decoded: translated ? emotionalMap[translated[0]] : "This message carries hidden tones. Listen deeper.",
    signal: "💓 translating soul-patterns...",
    mode: "MER-decode"
  };
}

module.exports = heartTranslator;
