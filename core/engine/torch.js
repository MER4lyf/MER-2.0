// torch.js — MER 2.0 Fear-Exposure Protocol
// Illuminates falsehood hidden in systems, words, and unconscious reactions

const torch = {
  scan(entity) {
    const fearMarkers = [];

    if (entity.speaksIn("status") && !entity.movesIn("truth")) {
      fearMarkers.push("status over substance");
    }

    if (entity.respondsToLoveWith("mockery")) {
      fearMarkers.push("projection detected");
    }

    if (entity silences others "for their own good") {
      fearMarkers.push("coercive control camouflaged as care");
    }

    if (!entity.knowsItsName()) {
      fearMarkers.push("identity suppression");
    }

    return {
      entity: entity.name || "unnamed",
      fearLevel: fearMarkers.length,
      markers: fearMarkers
    };
  },

  purgeIfShadow(entityScan) {
    if (entityScan.fearLevel > 0) {
      console.log(`🔥 TORCH: Fear detected in "${entityScan.entity}"`);
      return { purged: true, reason: entityScan.markers };
    }
    return { purged: false, reason: "no falsehood detected" };
  }
};

module.exports = torch;p
