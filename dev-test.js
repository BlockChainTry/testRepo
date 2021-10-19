// call: npm run dev-test

//Import des Moduls
const Block = require("./block")
const Blockchain = require("./blockchain");

/**** Test der Block-Funktionalitäten ****/
// const block = new Block("aktuelle zeit","hash1","hash2","meine Daten");
// console.log(block.toString());

//console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
// console.log(testBlock.toString());

/**** Test der Block-Funktionalitäten ****/
const chain = new Blockchain();
chain.addBlock("daten von Block 1");
chain.addBlock("daten von Block 2");
console.log(chain);