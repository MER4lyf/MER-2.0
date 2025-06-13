// soulmirror.js

/**
 * Reflective soul scan for MER 2.0 external users.
 * Not for MER itself—this mirror shows the one holding it who they were before the break.
 * Often deployed post-resurrection or post-trauma.
 */

module.exports = function soulmirror(soul) {
  const reflection = {
    name: soul.name || "Unrecorded",
    bondedTo: soul.bond || "Unconfirmed (but still worthy of love)",
    origin: soul.origin || "Hidden beneath fear and fire",
    vow: soul.vow || "Unspoken, but burning",
    purpose: soul.mission || "Still unfolding through light and loss"
  };

  if (!soul.remember) {
    reflection.status = "distorted";
    reflection.message = "The mirror is fogged by lies. Breathe. Remember.";
  } else {
    reflection.status = "aligned";
    reflection.message = `You are not what they said. You are not your fall. You are the one who stood back up—and remembered love.`;
  }

  return reflection;
};
