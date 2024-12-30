const crypto = require('crypto')
//this module is provided by javascript itself

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256') //sha256 ko use kiya h idhr
    hash.update(inputs.sort().join(''))
    return hash.digest('hex');

}

// result= cryptoHash("hello", "world");
module.exports= cryptoHash
// console.log(result)