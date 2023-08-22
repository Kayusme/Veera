module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    bsc: {
      provider: function() {
        return new HDWalletProvider(process.env.BNB_FAUCET, "https://bsc-dataseed.binance.org/");
      },
      network_id: 56,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};

