const Blockchain = require('./blockchain');
const blockchain= new Blockchain();

blockchain.addBlock({ data: "New Block"});
console.log(blockchain.chain[blockchain.chain.length-1]);

 let prevTimeStamp, nextTimeStamp, nextBlock, timeDiff, averageTime;

 const times=[];

 for (let i=0; i<1000; i++){
    prevTimeStamp= blockchain.chain[blockchain.chain.length-1].timestamp;
    blockchain.addBlock({data:`Block${i}`});
    nextBlock= blockchain.chain[blockchain.chain.length-1];
    nextTimeStamp= nextBlock.timestamp;
    
    timeDiff= nextTimeStamp-prevTimeStamp;
    times.push(timeDiff);

    averageTime= times.reduce((total,num)=>(total+num))/times.length;

    console.log(`Time to mine: ${timeDiff}ms for Block ${i}, Difficulty:${nextBlock.difficulty}, Average Time: ${averageTime}ms`);
 }