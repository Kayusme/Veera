const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    bnb: {
      provider: () => new HDWalletProvider(process.env.BNB_PRIVATE_KEY, "https://bsc-dataseed.binance.org/"),
      network_id: 56,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};

