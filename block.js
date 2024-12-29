const { GENESIS_DATA } = require('./config')
const cryptoHash = require('./crypto-hash')
class Block{
    constructor({timestamp,prevHash,hash,data}){
        this.timestamp= timestamp;
        this.prevHash= prevHash;
        this.hash= hash;
        this.data= data;
    }

    static genesis(){
        return new this(GENESIS_DATA);   
    }

    static mineBlock({prevBlock, data}){
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        return new this({
            timestamp,
            prevHash,
            data,
            hash: cryptoHash(timestamp, prevHash,data)
    })
        }
    }



// const block1 = new Block({timestamp:'29/12/2024',prevHash:'0x3edgcvb',hash:'12jd22es',data:'I made a transaction'});
// // console.log(block1)

// const genesisBlock = Block.genesis();

// const result = Block.mineBlock({prevBlock:block1, data:'block2'})

// console.log(result)

module.exports = Block;