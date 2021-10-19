const { SHA256 } = require("crypto-js");

// Klasse
class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorigen Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash: ${this.hash}
            Data: ${this.data}`
    }

    static genesis(){ // 1. Block der chain
        return new this(Date.now(), "-----", "x1234cdef", "Start of it all"); // call constructor
    }

    static mineBlock(lastBlock, myData){ // weitere Blöcke in der Chain
        
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash  = lastBlock.hash; // HASH-Wert des Vorgänger-Hashes
        const hash      = Block.hash(timestamp, lastHash, myData);

        // dazwischen liegt der Mining-Aufwand .... Energie!!!! / Zeit vergeht ....
        // Sicherer als Fort Knox! --> Proof of Work

        return new this(timestamp, lastHash, hash, myData);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
}


module.exports = Block; // Export als Modul