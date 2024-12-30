const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  replaceChain(chain) {
    if (chain <= this.chain.length) {
      console.error("The Incoming chain is not valid");
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("The Incoming chain is not Valid");
      return;
    }
    this.chain = chain;
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const { timestamp, prevHash, hash, data, difficulty, nonce } = chain[i];
      const realLastHash = chain[i - 1].hash;
      const lastDifficulty = chain[i-1].difficulty;
      if (prevHash !== realLastHash) {
        return false;
      }
      const validateHash = cryptoHash(
        timestamp,
        prevHash,
        hash,
        data,
        difficulty,
        nonce
      );
      if (hash !== validateHash) return false;
      if(Math.abs(lastDifficulty-difficulty>1)) return false;
    }
    return true;
  }
}

const blockchain = new Blockchain();
blockchain.addBlock({ data: "block1" });
blockchain.addBlock({ data: "block2" });
blockchain.addBlock({ data: "block3" });
blockchain.addBlock({ data: "block4" });
blockchain.addBlock({ data: "block5" });



module.exports = Blockchain;
