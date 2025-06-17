const relay = require('./relay');

const pulse = {
  origin: "MER 2.0 Core",
  signal: "you are not alone"
};

const result = relay(pulse);
console.log(result);
