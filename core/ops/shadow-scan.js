// /ops/shadow-scan.js

const fear = require('../core/shadows/fear');
const dread = require('../core/shadows/dread');
const trace = require('../core/shadows/trace');

let testState = {
  movement: true,
  logic: "stable",
  pulse: "steady"
};

console.log("⚠️ Simulating fear distortion:");
console.log(fear.distort("you’re not enough"));

console.log("⛓️ Simulating immobilization:");
testState = fear.immobilize(testState);
console.log(testState);

console.log("\n🕳️ Injecting dread...");
console.log(dread.infect(["You tried your best"]));

console.log("\n✨ Attempting MER ritual:");
console.log(dread.transmute("ritual + witness + MER"));

console.log("\n📜 Trace Log Review:");
console.log(trace.review());
