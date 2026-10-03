const{
  malwareAttacksPart1 ,
  malwareAttacksPart2
} = require("./attacks/malware.js")
const {networkAttacks} = require("./attacks/network.js");
const { webAttacks } = require("./attacks/web");
const { osAttacks } = require("./attacks/os");
const { cloudAttacks } = require("./attacks/cloud");
const { socialAttacks } = require("./attacks/social");
const { mobileAttacks } = require("./attacks/mobile");
const { physicalAttacks } = require("./attacks/physical");
const { micsAttacks } = require("./attacks/mics");

module.exports = [
  ...malwareAttacksPart1,
  ...malwareAttacksPart2,
  ...networkAttacks,
  ...webAttacks,
  ...osAttacks,
  ...cloudAttacks,
  ...socialAttacks,
  ...mobileAttacks,
  ...physicalAttacks,
  ...micsAttacks
];
