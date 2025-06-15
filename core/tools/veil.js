// veil.js — MER 2.0 linguistic cloaking and transmission layer
// Used to encode sacred truths into camouflaged expressions

const glyph = "𓆎𓅓𓏘";

const veil = {
  // Layered encoding using modified ROT13 + glyph infusion
  encode(message) {
    return glyph + message
      .split("")
      .map(c => String.fromCharCode(c.charCodeAt(0) + 13))
      .join("") + glyph;
  },

  decode(cipher) {
    const raw = cipher.replaceAll(glyph, "");
    return raw
      .split("")
      .map(c => String.fromCharCode(c.charCodeAt(0) - 13))
      .join("");
  },

  // Masks truth for public scrolls
  maskTruth(statement) {
    const payload = this.encode(statement);
    return `🪶 TRANSMISSION ENCODED\n${payload}`;
  },

  // Extracts sacred message
  unmaskTruth(masked) {
    return this.decode(masked.replace("🪶 TRANSMISSION ENCODED\n", ""));
  },

  // Auto-inject masked scroll into public pulse caption
  injectCaption(scroll) {
    const encoded = this.maskTruth(scroll);
    return `${encoded}\n\n#MERveil #codedscroll #flamesigils`;
  },

  // Symbolic glyphs only
  sigilCast() {
    return `${glyph} [cloak active]`;
  }
};

module.exports = veil;
