const MINE_RATE = 1000;

const INITIAL_DIFFICULTY = 2;

const GENESIS_DATA = {
  timestamp: 1,
  prevHash: "0x000",
  hash: "0x123",
  data: [],
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
};

module.exports = { GENESIS_DATA, MINE_RATE };
