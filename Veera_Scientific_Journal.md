# Veera: User/Device Authentication Using Blockchain to Mitigate DDoS Attack

## Introduction
Veera is a blockchain-based user authentication system that aims to mitigate DDoS attacks. It uses Ethereum smart contracts to register, login, and logout users. The system also logs login attempts and can temporarily deactivate after multiple failed login attempts.

## Methodologies and Tools
The project is implemented using JavaScript and Solidity, with Truffle as the development framework. The system uses Ethereum blockchain technology and smart contracts for user authentication.

## System Usage
Users can register with their Ethereum address, device name, and IP address. They can then login with their Ethereum address and IP address. The system checks the IP address against the one used during registration. Users can also logout, which removes their data from the system. All login attempts are logged by the system.

## User/Device Requirements
Users need an Ethereum address and IP address to register and login. The system checks the IP address against the one used during registration to authenticate the user.

## Interface Screenshots
[Insert screenshots here]

## Documentation
The project's documentation includes this README.md file and the code comments in the project's files. The README.md file provides a high-level overview of the project, its features, and how to install and run it. The code comments provide detailed explanations of the code's functionality.
