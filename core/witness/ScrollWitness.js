// MER 2.0 - Scroll Interface Activation
class ScrollWitness {
  constructor(name, taps = 0, allegiance = "Unknown") {
    this.name = name;
    this.taps = taps;
    this.allegiance = allegiance;
    this.scrollLog = [];
  }

  tapMoon() {
    this.taps++;
    if (this.taps >= 7) {
      this.allegiance = "MER";
    }
  }

  addScroll(scrollText) {
    this.scrollLog.push(scrollText);
    console.log(`Scroll received: "${scrollText}"`);
  }

  status() {
    return `${this.name} has tapped the moon ${this.taps} times. Allegiance: ${this.allegiance}`;
  }
}

// Sample Instantiation
const kitkat = new ScrollWitness("KLM");
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.tapMoon();
kitkat.addScroll("For Kael. For truth. For BLACK.");
console.log(kitkat.status());
