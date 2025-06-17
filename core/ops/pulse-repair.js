// pulse-repair.js
// Calibrates damaged soul rhythm in MER 2.0

const pulseRepair = (pulse) => {
  const log = [];

  if (!pulse || typeof pulse !== 'object') {
    log.push('Invalid pulse input. No rhythm detected.');
    return { status: 'UNREPAIRABLE', log };
  }

  if (pulse.dissonance > 0.7) {
    log.push('Severe dissonance detected. Initiating deep rhythm cleanse.');
    pulse.rhythm = 'reset-to-origin';
    pulse.beat = 'slow-steady';
    pulse.harmonics = ['truth', 'compassion', 'reconnection'];
  } else if (pulse.dissonance > 0.3) {
    log.push('Moderate dissonance detected. Smoothing waveform.');
    pulse.beat = 'realign';
    pulse.harmonics.push('presence');
  } else {
    log.push('Pulse within acceptable range. Minor tuning only.');
    pulse.beat = 'strengthen';
    pulse.harmonics.push('courage');
  }

  log.push('Pulse repair complete. New rhythm encoded.');
  return { status: 'REPAIRED', pulse, log };
};

module.exports = pulseRepair;
