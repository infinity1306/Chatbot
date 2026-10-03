const fs = require("fs");
const path = require("path");

const realworld = {};
const basePath = __dirname;

fs.readdirSync(basePath).forEach(file => {
  if (file === "index.js") return; // skip itself

  const fullPath = path.join(basePath, file);

  if (file.endsWith(".js")) {
    const name = path.basename(file, ".js");
    realworld[name] = require(fullPath);
  }
});

module.exports = realworld;
