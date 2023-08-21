import Web3 from 'web3';

let web3 = new Web3('http://localhost:8545');
let authContract = new web3.eth.Contract(AuthABI, AuthAddress);

function register() {
    let userAddress = document.getElementById('userAddress').value;
    let device = document.getElementById('device').value;
    let ip = document.getElementById('ip').value;
    authContract.methods.register(userAddress, device, ip).send({from: userAddress});
}

function login() {
    let userAddress = document.getElementById('userAddress').value;
    let ip = document.getElementById('ip').value;
    authContract.methods.login(userAddress, ip).call({from: userAddress});
}

function logout() {
    let userAddress = document.getElementById('userAddress').value;
    authContract.methods.logout(userAddress).send({from: userAddress});
}

function displayLogs() {
    let userAddress = document.getElementById('userAddress').value;
    let logs = authContract.methods.loginAttempts(userAddress).call({from: userAddress});
    console.log(logs);
}

document.getElementById('registerButton').addEventListener('click', register);
document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('logoutButton').addEventListener('click', logout);
document.getElementById('displayLogsButton').addEventListener('click', displayLogs);

