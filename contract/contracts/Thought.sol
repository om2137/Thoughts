//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Thoughts{
    struct User{
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;

    }

    mapping(address => string) public usernames;
    mapping(string => User) public users;

    function signup(string memory _username, string memory _name,string memory _bio,string memory _avatar) public{
        require(bytes(usernames[msg.sender]).length == 0, "user already exist");
        //require(users[_username].wallet == address(0), "Username is taken, please try another one.");
        
        users[_username] = User({
            wallet: msg.sender,
            name: _name,
            username: _username,
            bio: _bio,
            avatar: _avatar 
        });
        usernames[msg.sender]= _username;


    }
}