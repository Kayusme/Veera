pragma solidity ^0.5.0;

contract Auth {
    struct User {
        address userAddress;
        string device;
    }

    mapping(address => User) public users;

    function register(address _address, string memory _device) public {
        User memory newUser = User(_address, _device);
        users[_address] = newUser;
    }

    function login(address _address) public view returns (bool) {
        User memory user = users[_address];
        return user.userAddress != address(0);
    }

    function logout(address _address) public {
        delete users[_address];
    }
}

