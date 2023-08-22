# Veera
Veera is a blockchain-based user authentication system. It uses Ethereum smart contracts to register, login, and logout users. The system also logs login attempts and can temporarily deactivate after multiple failed login attempts.

## Features
* User Registration: Users can register with their Ethereum address, device name, and IP address.
* User Login: Users can login with their Ethereum address and IP address. The system checks the IP address against the one used during registration.
* User Logout: Users can logout, which removes their data from the system.
* Login Attempts Logging: The system logs all login attempts. It can also temporarily deactivate after multiple failed login attempts.

## Installation Guide
1. Clone the repository: `git clone https://github.com/Kayusme/Veera.git`
2. Navigate to the project directory: `cd Veera`
3. Install the dependencies: `npm install`
4. Compile the smart contract: `truffle compile`
5. Deploy the smart contract: `truffle migrate`

## Running the Project
1. Start the local blockchain: `ganache-cli`
2. In a new terminal, navigate to the project directory: `cd Veera`
3. Run the project: `npm start`

## Running Tests
1. Start the local blockchain: `ganache-cli`
2. In a new terminal, navigate to the project directory: `cd Veera`
3. Run the tests: `truffle test`

## Using the BNB Faucet
1. Set up the BNB Faucet by following the instructions on the [BNB Faucet website](https://testnet.binance.org/faucet-smart).
2. Add your BNB Faucet account to the `.env` file in the project directory: `BNB_FAUCET=your_bnb_faucet_account`.
3. Use the BNB Faucet with Truffle by running the migrate command with the `--network bsc` option: `truffle migrate --network bsc`.
