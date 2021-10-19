
const Block = require("./block")

class Blockchain{

    constructor(){
        this.chain = [Block.genesis()]; // Array mit Genesis-Block
    }

    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        this.chain.push(block);
    }
}


module.exports = Blockchain; // Export als Modul