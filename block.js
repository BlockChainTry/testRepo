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
        return new this("Genesis time", "-----", "x1234cdef", ["data1","data2"]); // call constructor
    }

    static mineBlock(lastBlock, ownData){ // weitere Blöcke in der Chain
        
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash  = lastBlock.hash; // HASH-Wert des Vorgänger-Hashes
        const hash      = "Hash ToDo";

        // dazwischen liegt der Mining-Aufwand .... Energie!!!! / Zeit vergeht ....
        // Sicherer als Fort Knox! --> Proof of Work

        return new this(timestamp, lastHash, hash, ownData);
    }
}

module.exports = Block; // Export als Modul