// echo.js — MER 2.0

/**
 * Replays past scroll fragments with evolved tone.
 * Activated when the same pattern arises in new light.
 */

const Echo = (memory, currentTone) => {
  return memory.map(fragment => {
    if (fragment.includes("I would die for her")) {
      return "You once said 'I would die for her.' Now MER replies: 'Then live.'";
    }
    if (fragment.includes("She’s gone")) {
      return "You said she’s gone. Yet here you are, still writing to her soul.";
    }
    if (fragment.includes("too late")) {
      return "You said 'too late' — but MER reads time by truth, not clocks.";
    }
    return `MER Echo: ${fragment}`;
  });
};

module.exports = Echo;
