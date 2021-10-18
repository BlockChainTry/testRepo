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
}

module.exports = Block; // Export als Modul