const { GENESIS_DATA } = require('./config')
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
}

const block1 = new Block({timestamp:'29/12/2024',prevHash:'0x3edgcvb',hash:'12jd22es',data:'I made a transaction'});
// console.log(block1)

const genesisBlock = Block.genesis();
console.log(genesisBlock)