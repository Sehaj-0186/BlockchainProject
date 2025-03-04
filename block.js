const { GENESIS_DATA, MINE_RATE } = require("./config");
const cryptoHash = require("./crypto-hash");
const hexToBinary = require("hex-to-binary")
class Block {
  constructor({ timestamp, prevHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ prevBlock, data }) {
    let hash, timestamp;
    const prevHash = prevBlock.hash;
    let {difficulty} = prevBlock;

    let nonce = 0;
    do {
      nonce++;
      timestamp = Date.now();
      difficulty=Block.adjustDifficulty({originalBlock:prevBlock,timestamp})
      hash = cryptoHash(timestamp, prevHash, difficulty, nonce, data);
    } while (hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty));

    return new this({
      timestamp,
      prevHash,
      data,
      difficulty,
      nonce,
      hash
    });
  }
   
   static adjustDifficulty({originalBlock, timestamp}){
    const {difficulty}= originalBlock;

    const difference = timestamp-originalBlock.timestamp;
    if(difficulty<1) return 1;
    if(difference>MINE_RATE){
        return difficulty-1;
    }else{
      return difficulty+1;
    }

   }


}

module.exports = Block;
