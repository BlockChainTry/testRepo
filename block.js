// Klasse
class Bock{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorigen Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }
}