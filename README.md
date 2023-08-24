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
5. Migrate and deploy the contracts using Truffle: `truffle migrate --network development` for local development or `truffle migrate --network bnb` for Binance Smart Chain.

## Running the Project
1. Start the local blockchain: `ganache-cli`
2. In a new terminal, navigate to the project directory: `cd Veera`
3. Run the project: `npm start`

## Using the BNB Faucet for Testing
1. Set up the BNB Faucet: `npm run setup-faucet`
2. Use the Faucet to get BNB for testing: `npm run get-bnb`

## Running Tests
1. Start the local blockchain: `ganache-cli`
2. In a new terminal, navigate to the project directory: `cd Veera`
3. Run the tests: `truffle test`

## Running the Application in the src Folder
1. Start your local Ethereum blockchain. You can do this by running `ganache-cli` in a new terminal.
2. Deploy the smart contract to your local blockchain. Navigate to the project directory and run `truffle migrate --network development`.
3. Open the `index.html` file in your web browser. You can do this by navigating to the src folder and opening the file in your browser. For example, if you are using Chrome, you can do this by running `google-chrome index.html` in the terminal.
4. You should now see the application running in your browser. You can register, login, and logout users using the provided form.
