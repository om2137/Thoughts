//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Thoughts{
    struct User{
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;
    }
    struct Thought{
        address author;
        string content;
        uint timestamp;

    }
    Thought[] public thoughts;

    mapping(address => string) public usernames;
    mapping(string => User) public users;

    function signup(string memory _username, string memory _name,string memory _bio,string memory _avatar) public {
        require(bytes(usernames[msg.sender]).length == 0, "check");
        require(users[_username].wallet == address(0), "Username is taken, please try another one");

        users[_username] = User({
            wallet: msg.sender,
            name: _name,
            username: _username,
            bio: _bio,
            avatar: _avatar 
        });
        usernames[msg.sender]= _username;


    }

    function getUser(address _wallet) public view returns (User memory){
        return users[usernames[_wallet]];
    }

    function postThought(string memory _content) public {
        require(bytes(usernames[msg.sender]).length > 0, "you must Signin first, to post thought");
        require(bytes(_content).length > 0, "thought cannot be empty");
        require(bytes(_content).length <= 200, "thought is too long."); 

        Thought memory thought = Thought({
            author: msg.sender,
            content: _content,
            timestamp: block.timestamp
        });
        thoughts.push(thought);
    }

    function getThoughts() public view returns (Thought[] memory){
        return thoughts;
    }
}