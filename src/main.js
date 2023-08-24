//import AuthABI from "./contracts/Auth.json";

fetch('./contracts/Auth.json')
  .then(response => response.json())
  .then(async AuthABI => {
    try {
      let web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"));
      let authContract = new web3.eth.Contract(AuthABI.abi, '0xefa5c820bCb6139Eb93c22111C7866FaF784B0c8');
      console.log(AuthABI.abi);
      console.log("auth file: ", AuthABI);
      const networkId = await web3.eth.net.getId();
      console.log("network id: ", networkId);
      const deployedNetwork = AuthABI.networks[networkId];
      
      if (!deployedNetwork) {
        throw new Error('Contract not deployed on the current network');
      }

      console.log("deployedNetwork id: ", deployedNetwork);
      

      async function register() {
        let userAddress = document.getElementById('userAddress').value;
        let device = document.getElementById('device').value;
        let ip = document.getElementById('ip').value;
        await authContract.methods.register(userAddress, device, ip).send({ from: userAddress });
      }

      async function login() {
        let userAddress = document.getElementById('userAddress').value;
        let ip = document.getElementById('ip').value;
        await authContract.methods.login(userAddress, ip).call({from: userAddress});
      }

      async function logout() {
        let userAddress = document.getElementById('userAddress').value;
        await authContract.methods.logout(userAddress).send({from: userAddress});
      }

      async function displayLogs() {
        let userAddress = document.getElementById('userAddress').value;
        let logs = await authContract.methods.loginAttempts(userAddress).call({from: userAddress});
        console.log(logs);
      }

      document.getElementById('registerButton').addEventListener('click', register);
      document.getElementById('loginButton').addEventListener('click', login);
      document.getElementById('logoutButton').addEventListener('click', logout);
      document.getElementById('displayLogsButton').addEventListener('click', displayLogs);

    } catch (error) {
      console.error('Error initializing contract:', error);
    }
  })
  .catch(error => console.error('Error loading Auth.json:', error));
