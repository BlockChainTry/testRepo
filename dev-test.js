// call: npm run dev-test

//Import des Moduls
const Block = require("./block")

const block = new Block("time", "hash1", "hash2", "daten");
console.log(block.toString());